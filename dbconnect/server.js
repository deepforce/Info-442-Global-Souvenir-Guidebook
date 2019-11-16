const express = require('express');
const cors = require('cors')
const app = express();
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     user:'info', 
     password: 'ofni',
     database: 'info442_tbl',
     connectionLimit: 5
});


async function asyncFunction(q) {
    let conn;
//   try {
    conn = await pool.getConnection();
    console.log(1);
	const rows = await conn.query(q);
	console.log(rows); //[ {val: 1}, meta: ... ]
    return rows;
//   } catch (err) {
// 	throw err;
//   } finally {
// 	if (conn) return conn.end();
//   }
}
const query = "SELECT ProductID FROM tbl_Product"
app.use(cors());
app.get('/', (req, res) => {
  res.send("Go to Products!");
});
app.get('/products', (req, res) => {
    pool.getConnection()
    .then(conn => {
            conn.query(query)
            .then(rows => {
                return res.json({
                    data: rows
                });
            }).catch(err => {
                conn.end();
            })
        }).catch(err => {
            // not connected
        });
});

app.listen(4000, () => {
  console.log("Product server listening on port 4000");
});
