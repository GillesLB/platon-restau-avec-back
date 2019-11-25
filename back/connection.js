const mysql = require('mysql');

const conn = mysql.createConnection({
    database: 'platonrestau',
    host: "localhost",
    user: "root",
    password: "blubbulb1234",
    multipleStatement: true
});

conn.connect((err) => {
    if (err) {
        console.log('Erreur de connexion');
    } else {
        console.log('Connecté !!');
    }
});

module.exports = conn;
