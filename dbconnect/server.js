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
app.use(cors());
app.get('/', (req, res) => {
  res.send("Go to Products!");
});

// Get Products
app.get('/products', (req, res) => {
    pool.getConnection()
    .then(conn => {
            conn.query("SELECT ProductID FROM tbl_Product")
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

// Get Stores List
// app.get('/stores', (req, res) => {
//     pool.getConnection()
//     .then(conn => {
//             conn.query("SELECT StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, "+
//             "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, SunOpenTime, SunCloseTime " +
//             "FROM tbl_Store")

//             .then(rows => {
//                 return res.json({
//                     data: rows
//                 });
//             }).catch(err => {
//                 conn.end();
//             })
//         }).catch(err => {
//             // not connected
//         });
// });

app.get('/stores', (req, res) => {
    query = "SELECT StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, "+
    "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, SunOpenTime, SunCloseTime " +
    "FROM tbl_Store ";

    // Exist query
    if (!req.query.length)
        query += "WHERE ";
    // Theme Filter 
    if (typeof req.query.theme != 'undefined')
        query += "Theme = \"" + req.query.theme + "\" ";

    // Neighborhood Filter
    if (typeof req.query.neighborhood!= 'undefined')
        query += "Neighborhood = \"" + req.query.neighborhood + "\" ";

    
    pool.getConnection()
    .then(conn => {
            conn.query(query)
            .then(rows => {
                return res.json({
                    data: rows
                });
            }).catch(err => {
                conn.end();
                return res.send(err);
            })
        }).catch(err => {
            // not connected
        });
});

app.listen(4000, () => {
  console.log("Product server listening on port 4000");
});
