const express = require('express');
const cors = require('cors')
const app = express();
const mariadb = require('mariadb');

const search = require('./functions/search.js')

app.get('/search', function(req, res) {
    if (typeof req.query.text !== 'undefined') {
        search(req.query.text, function(data_items) {
            res.send({
                response : {
                    items : data_items
                }
            })
        })
    } else {
        res.send({error : '[100] Not search params text in query.'})
    }
})





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
  res.send("Nothings here!");
});

// Get Products
app.get('/products', (req, res) => {
    pool.getConnection()
    .then(conn => {
            conn.query("SELECT * FROM tbl_Product")
            .then(rows => {
                return res.status(200).json({
                    data: rows
                });
            }).catch(err => {
                conn.end();
                return res.status(400).json({
                    message: "Invalid Products Retrieval"
                });
            })
        }).catch(err => {
            // not connected
            return res.status(500).json({
                message: "Internal Servel Error"
            });
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
// Get Stores List
app.get('/stores', (req, res) => {
    // query = "SELECT StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, "+
    // "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, SunOpenTime, SunCloseTime " +
    // "FROM tbl_Store ";
    
    // pagination
    var numRows;
    var numPages;
    const numPerPage = 5;
    const page = parseInt(req.query.page,10) || 0;
    const offset = page * numPerPage;

    const row_count = numPerPage;
    const limit = offset + ', ' + row_count;
    const page_query = " LIMIT " + limit;
    
    
    
    // DB SQL query
    query = "Select DISTINCT S.StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, " +
    "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, " +
    "SunOpenTime, SunCloseTime " +
    "from tbl_Store S " +
    "join tbl_Store_Product SP on S.StoreID = SP.StoreID " +
    "join tbl_Product P on P.ProductID = SP.ProductID ";

    // Exist query
    if (Object.keys(req.query).length > 3)
        query += "WHERE ";
    // Theme Filter 
    if (typeof req.query.theme != 'undefined')
        query += "Theme = \"" + req.query.theme + "\" ";

    // Neighborhood Filter
    if (typeof req.query.neighborhood!= 'undefined')
        query += "Neighborhood = \"" + req.query.neighborhood + "\" ";

    // For Whom Filter
    if (typeof req.query.for_whom != 'undefined')
        query += "ForWhom = \""+ req.query.for_whom + "\" ";
    
    // Product Type Filter
    if (typeof req.query.product_type != 'undefined')
        query += "ProductType = \"" + req.query.product_type +"\"";

    // Order
    if (typeof req.query.order_param != 'undefined' ) {
        if (typeof req.query.order != 'undefined')
            query += "Order BY " + req.query.order_param + " " +req.query.order + " ";
        else
            query += "Order BY " + req.query.order_param + " ";
    }
    
    pool.getConnection()
    .then(conn => {
            conn.query("SELECT count(*) as numRows FROM tbl_Store")
            .then(function(results) {
                numRows = results[0].numRows;
                numPages = Math.ceil(numRows / numPerPage);
            })
            .then(
            conn.query(query+page_query)
            .then(rows => {
                var responsePayload = {
                    data: rows
                };
                if (page < numPages) {
                    responsePayload.pagination = {
                      current: page,
                      perPage: numPerPage,
                      previous: page > 0 ? page - 1 : undefined,
                      next: page < numPages - 1 ? page + 1 : undefined
                    }
                  }
                else responsePayload.pagination = {
                    err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
                }
                res.json(responsePayload);
            }).catch(err => {
                conn.end();
                return res.status(400).json({
                    message: "Invalid Stores Retrieval"
                });
            }))
        }).catch(err => {
            // not connected
            return res.status(500).json({
                message: "Internal Servel Error"
            });
        });
});

// stores detail
app.get('/stores/:storeId', (req, res) => {
    query = "SELECT * FROM tbl_Store WHERE StoreID = \'" + req.params.storeId + "\'";
    pool.getConnection()
    .then(conn => {
            conn.query(query)
            .then(rows => {
                return res.status(200).json({
                    data: rows
                });
            }).catch(err => {
                conn.end();
                return res.status(400).json({
                    message: "Invalid Stores Retrieval"
                });
            })
        }).catch(err => {
            // not connected
            return res.status(500).json({
                message: "Internal Servel Error"
            });
        });
});

// app.get()

app.listen(4000, () => {
  console.log("Product server listening on port 4000");
});

