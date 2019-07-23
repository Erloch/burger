// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL)
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
  connection = mysql.createConnection({
    host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ez60ytnmjo126a0h",
    password: "s4udm4a834zutcb0",
    database: "tj8b91cp0g12gfc3"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;