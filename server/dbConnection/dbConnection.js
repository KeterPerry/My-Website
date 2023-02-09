import mySql from "mysql2";
import "dotenv/config.js";
export const dbConnection = mySql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "projects_db",
});

dbConnection.getConnection((err) => {
  if (!err) {
    console.log("connected");
  } else console.log(err);
});
