
// const cors = require('cors');
// const express = require('express');

// const app = express();
// app.use(cors());

// app.listen(4000, () => {
//   console.log('Products server listening on port 4000')
// });
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     user:'info', 
     password: 'ofni',
     database: 'info442_tbl',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
  conn = await pool.getConnection();
  console.log(1);
	const rows = await conn.query("SELECT ProductID FROM tbl_Product");
	console.log(rows); //[ {val: 1}, meta: ... ]

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
asyncFunction()
