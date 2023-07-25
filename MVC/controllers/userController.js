const userModels = require('../models/userModel.js');



//controller for Get all users
module.exports = {
    getAllUsers: function (req, res) {
        userModels.get(req.con, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    },

    createUser: function (req, res) {
        userModels.create(req.con, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    },

    getUser: function (req, res) {
        userModels.getUser(req.con, req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    },

    updateUser:function(req,res){
        userModels.updateUser(req.con,req.body,req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    },

    deleteUser:function(req,res){
        userModels.deleteUser(req.con,req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    },

    passwordchange: function (req, res) {
        userModels.passwordchange(req.con ,req.body, function(err,rows) {
            if(err)
                res.json(err);
            else
            res.json(rows);
        });
    }

}
