
const mysql  = require( 'mysql');
const dotenv  = require( 'dotenv');

dotenv.config();


// database connection according to server
let devConn = {
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

exports.mysqldbConnection= async (res) => {


    try {
      return new Promise((resolve, reject) => {
        let con = mysql.createConnection(devConn);
        con.connect(function (err) {
          if (err)
            res.status(422).send({ status: 422, Message: "Database Is Not Connected" });
          else
            resolve(con);
        })
      })
    } catch (ex) {
      return await ex;
    }
  }







