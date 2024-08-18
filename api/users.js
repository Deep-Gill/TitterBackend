const express = require('express');
const router = express.Router();
const dbClient = require('./dbClient.js');

router.get('/users', (req, res) => {
    dbClient.query('SELECT * FROM users', (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    dbClient.end;
});

router.get('/users/:username', (req, res) => {
    dbClient.query(`SELECT * FROM users WHERE username='${req.params.username}'`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    dbClient.end;
});

router.get('/user', (req, res) => {
    console.log(req.body);
    dbClient.query(`SELECT * FROM users WHERE username='${req.body.username}'`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    dbClient.end;
});

router.post('/users', (req, res) => {
    console.log(req.body);
    const insertQuery = `INSERT INTO users (username, password, email, role, date) 
                         VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.role}', '${req.body.date}')`;
    dbClient.query(insertQuery, (err, result) => {
        if (!err) {
            res.send(`Created new user with username: ${req.body.username}`);
        } else {
            console.log(err);
            res.status(400).send('Error creating new user');
        }
    });
    dbClient.end;
});

router.put('/users/change-password/:username', (req, res) => {
    const changePwdQuery = `UPDATE users SET password='${req.body.password}' WHERE username='${req.params.username}'`;
    dbClient.query(changePwdQuery, (err, result) => {
        if (!err) {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(`Changed user ${req.params.username}'s password`);
        }
    });
    dbClient.end;
});

router.put('/users/change-email/:username', (req, res) => {
    const changeEmailQuery = `UPDATE users SET email='${req.body.email}' WHERE username='${req.params.username}'`;
    dbClient.query(changeEmailQuery, (err, result) => {
        if (!err) {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(`Changed user ${req.params.username} email to ${req.body.email}`);
        }
    });
    dbClient.end;
});

router.put('/users/change-role/:username', (req, res) => {
    const changeEmailQuery = `UPDATE users SET role=${req.body.role} WHERE username='${req.params.username}'`;
    dbClient.query(changeEmailQuery, (err, result) => {
        if (!err) {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(`Changed user ${req.params.username} role to ${req.body.role}`);
        }
    });
    dbClient.end;
});

// TODO: Delete all the posts and replies of the user and then update the followers of all the
// users that are following this user and the users that the user followed
router.delete('/users/:username', (req, res) => {
    const deleteUserQuery = `DELETE FROM users WHERE username='${req.params.username}'`;
    dbClient.query(deleteUserQuery, (err, result) => {
        if (!err) {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(`User ${req.params.username} has been deleted`);
        }
    });
    dbClient.end;
});

module.exports = router;