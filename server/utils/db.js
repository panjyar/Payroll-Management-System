import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  database: "employee",
  user: "root",
  password: "Azad@1234",
});

// Establish the connection explicitly
con.connect(function (err) {
  if (err) {
    console.log("Connection error:", err);
  } else {
    console.log("Database connected");
  }
});

export default con;
