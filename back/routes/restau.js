const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const conn = require('../connection');
const app = express();

const getRestaurants = `SELECT id, nom, adresse, date_visite, AVG(note) AS note_moyenne, latitude, longitude, nb_visite
                         FROM restaurants
                         INNER JOIN notes
                         ON restaurants.id = notes.id_restau
                         GROUP BY restaurants.id
                        `;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    conn.query(getRestaurants, (err, rows, fields) => {
        if (err) {
            console.log('Erreur de récupération : ', err);
        } else {
            res.send(rows);
        }
    });
});

router.get('/all', (req, res) => {
    conn.query(`SELECT * FROM restaurants`, (err, rows, fields) => {
        if (err) {
            console.log('Erreur de récupération : ', err);
        } else {
            res.send(rows);
        }
    });
});

router.get('/:id', (req, res) => {
    conn.query(`SELECT commentaire
                                FROM commentaires
                                WHERE commentaires.id_restau = ${req.params.id}`
        , (err, rows, fields) => {
            if (err) {
                console.log('Erreur de récupération : ', err);
            } else {
                res.send(rows);
            }
        })
});

router.get('/:id/data-restaurant', (req, res) => {
    conn.query(`SELECT nom, adresse, date_visite, AVG(note) AS note_moyenne, latitude, longitude, nb_visite
                                FROM restaurants
                                INNER JOIN notes
                                ON restaurants.id = notes.id_restau
                                WHERE restaurants.id = ${req.params.id}`
        , (err, rows, fields) => {
            if (err) {
                console.log('Erreur de récupération : ', err);
            } else {
                res.send(rows);
            }
        })
});

router.put('/:id/update-restaurant', (req, res) => {
    conn.query(`UPDATE restaurants
                               SET nom = ?, adresse = ?, date_visite = ?, latitude = ?, longitude = ?, nb_visite = ?
                               WHERE id = ${req.params.id}`,
                                [req.body.nom, req.body.adresse, req.body.dateDerniereVisite, req.body.latitude, req.body.longitude, req.body.nb_visite],
                                (err, rows, fields) => {
        if (err) {
            console.log('Erreur de mise en base : ', err);
        } else {
            res.sendStatus(200);
        }
    })
});

router.post('/:id/ajouter-note', (req, res) => {
    conn.query(`INSERT INTO notes (id_restau, note) VALUES (?, ?)`, [req.params.id, req.body.note], (err, rows, fields) => {
        if (err) {
            console.log('Erreur de mise en base : ', err);
        } else {
            res.sendStatus(200);
        }
    })
});

router.post('/ajouter-restaurant', (req, res) => {
    conn.query(`INSERT INTO restaurants (nom, adresse, latitude, longitude, nb_visite, date_visite) VALUES (?, ?, ?, ?, ?, ?)`, [req.body.nom, req.body.adresse, req.body.latitude, req.body.longitude, req.body.nb_visite, req.body.date_visite], (err, rows, fields) => {
        if (err) {
            console.log('Erreur de mise en base : ', err);
        } else {
            res.sendStatus(200);
        }
    })
});

router.post('/ajouter-note', (req, res) => {
    conn.query(`INSERT INTO notes (id_restau, note) VALUES (?, ?)`, [req.body.id_restau, req.body.note], (err, rows, fields) => {
        if (err) {
            console.log('Erreur de mise en base : ', err);
        } else {
            res.sendStatus(200);
        }
    })
});

router.delete('/:id', (req, res) => {
    conn.query(`DELETE restaurants, notes, commentaires
                                FROM restaurants 
                                LEFT JOIN notes
                                ON restaurants.id = notes.id_restau
                                LEFT JOIN commentaires
                                ON restaurants.id = commentaires.id_restau
                                WHERE restaurants.id = ${req.params.id}`, (err, rows, fields) => {
        if (err) {
            console.log('Impossible de supprimer cet élément : ', err);
        } else {
            res.sendStatus(204);
        }
    })
});

module.exports = router;
