var db = require("../core/db");
var util = require("util");
var express = require('express');
var router = express.Router();
var SQL=require('mssql');
var app=express();
/* GET List of employee. */
router.get('/', function(req, res) {
  var sqlParams = [];
    db.excecuteSql("sp_emp",sqlParams ,function (data, err) {
    if(err)
    return res.status(500).send(err);
    else
    res.send(data);
  });
});
/*update */
//router.put('/api/employees/:id',(req,res)=>{
  router.put('/',(req,res)=>{ 
  if (!req.body) throw new Error("Input not valid");
  if (!req.body.empid) throw new Error("empid not provided.");
    var sqlParams = [];
    var forenameParam = {
      name: 'empid',
      type: SQL.Int,
      value:parseInt(req.body.empid)
      }
      sqlParams.push(forenameParam);
      var forenameParam = {
        name: 'empname',
        type: SQL.VarChar(20),
        value:req.body.empname
        }
        sqlParams.push(forenameParam);
      db.excecuteSql("usp_emp",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
//insert
router.post('/',(req,res)=>{
  if (!req.body) throw new Error("Input not valid");
    var sqlParams = [];
      var forenameParam = {
        name: 'empname',
        type: SQL.VarChar(20),
        value:req.body.empname
        }
        sqlParams.push(forenameParam);
      db.excecuteSql("INS_emp",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
//delete
router.delete('/',(req,res)=>{
  if (!req.body) throw new Error("Input not valid");
  if (!req.body.empid) throw new Error("empid not provided.");
    var sqlParams = [];
      var forenameParam = {
        name: 'empid',
        type: SQL.Int,
        value:parseInt(req.body.empid)
        }
        sqlParams.push(forenameParam);
      db.excecuteSql("del_emp",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
module.exports = router;
