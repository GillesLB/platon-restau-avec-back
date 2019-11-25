const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const conn = require('../connection');
const app = express();

const getRestaurants = `SELECT * 
                        FROM restaurants
                        INNER JOIN notes
                        ON restaurants.id = notes.id_notes
                        INNER JOIN commentaires
                        ON restaurants.id = commentaires.id_commentaires
                        `;

// const getRestaurant = `SELECT *
//                         FROM restaurants
//                         INNER JOIN notes
//                         ON restaurants.id = notes.id_notes
//                         INNER JOIN commentaires
//                         ON restaurants.id = commentaires.id_commentaires
//                         WHERE restaurants.id = ${req.params.id}
//                         `;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    conn.query(getRestaurants, (err, rows, fields) => {
        if (err) {
            console.log('Erreur de récupération : ', err);
        } else {
            res.send(rows);
        }
    })
});

router.get('/:id', (req, res) => {
    conn.query(`SELECT *
                                FROM restaurants
                                INNER JOIN notes
                                ON restaurants.id = notes.id_notes
                                INNER JOIN commentaires
                                ON restaurants.id = commentaires.id_commentaires
                                WHERE restaurants.id = ${req.params.id}`
        , (err, rows, fields) => {
        if (err) {
            console.log('Erreur de récupération : ', err);
        } else {
            res.send(rows);
        }
    })
});

router.post('/:id/ajouter-note', (req, res) => {
    conn.query(`UPDATE notes SET notes_5 = (?) WHERE id_notes = ${req.params.id}`, [req.body.note], (err, rows, fields) => {
        if (err) {
            console.log('Erreur de mise en base : ', err);
        } else {
            res.sendStatus(200);
        }
    })
});

// router.put('/', (req, res) => {
//     conn.query(`UPDATE mangas SET titre = ?, volumes = ? WHERE Id = ${req.body.Id}`, [req.body.titre, req.body.volumes], (err, rows, fields) => {
//         if (err) {
//             console.log('Erreur de mise à jour : ', err);
//         } else {
//             res.redirect(200, '/');
//         }
//     })
// });
//
// router.delete('/:id', (req, res) => {
//     conn.query(`DELETE FROM mangas WHERE Id = ${req.params.id}`, (err, rows, fields) => {
//         if (err) {
//             console.log('Impossible de supprimer cet élément : ', err);
//         } else {
//             res.sendStatus(204);
//         }
//     })
// });

module.exports = router;
