const connection=require('./db.js');

module.exports = {
    get: function (con, callback) {
        connection.query('SELECT * FROM DB.users', function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    },

    create : function(con, data, callback){
        connection.query('INSERT INTO DB.users SET ?', data, function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        }
        );
    },

    getUser: function (con, id, callback) {
        connection.query('SELECT * FROM DB.users WHERE id = ?', [id], function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    },

    updateUser: function (con,data, id, callback) {
        connection.query('UPDATE DB.users SET ? WHERE id = ?', [data,id], function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    },

    deleteUser: function (con, id, callback) {
        connection.query('DELETE FROM DB.users WHERE id = ?', [id], function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    },

    passwordchange: function (con, data, callback) {
        connection.query('UPDATE DB.users SET ? WHERE id = ?', [data,id], function (err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        }
        );
    }

}
