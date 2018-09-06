var db = require("../core/db");
var util = require("util");
var express = require('express');
var router = express.Router();
var SQL=require('mssql');
var app=express();
/* User Login */
router.get('/', function(req, res) {
  var sqlParams = [];
    db.excecuteSql("USP_UserLogin",sqlParams ,function (data, err) {
    if(err)
    return res.status(500).send(err);
    else
    res.send(data);
  });
});
module.exports = router;
