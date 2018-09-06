var sqlDb = require("mssql");
var settings = require("../settings");

exports.excecuteSql = function (spName,params ,callback) {
    var conn = new sqlDb.ConnectionPool(settings.dbConfig);
    conn.connect()
        .then(function () {
            var req = new sqlDb.Request(conn);
            params.forEach(function(item){
                req.input(item.name, item.type, item.value);
            });
           req.execute(spName)
                .then(function (recordset) {
                    callback(recordset);
                })
            .catch(function (err) {
                console.log(err);
                callback(null, err);
            });
})
        .catch (function (err) {
            console.log(err);
    callback(null, err);
});
};