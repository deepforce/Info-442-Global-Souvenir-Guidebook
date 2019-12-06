const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user:'root', 
    password: '',
    database: 'info442_tbl',
    connectionLimit: 5
});

// pagination

async function db_query(query, req, func) {
    var numRows;
    var numPages;
    const numPerPage = 10;
    const page = parseInt(req.query.page,10) || 0;
    const offset = page * numPerPage;

    const row_count = numPerPage;
    const limit = offset + ', ' + row_count;
    const page_query = " LIMIT " + limit;
    let conn;
    const db_table = query.substring(query.search("from"))
    try {
        conn = await pool.getConnection();
        const page_res = await conn.query("SELECT count(DISTINCT S.StoreID) as numRows " + db_table);
        // console.log(page_res); //[ {val: 1}, meta: ... ]
        numRows = page_res[0].numRows;
        numPages = Math.ceil(numRows / numPerPage);
        const res = await conn.query(query+page_query);
        // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        
        var responsePayload = {
            data: res
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
        func(responsePayload)
    } catch (err) {
        const error = {data: []}
      func(error);
    } finally {
      if (conn) return conn.end();
      
    }
}
async function db_query_detail(query, req, func) {
    let conn;
    try {
        conn = await pool.getConnection();
        // console.log(page_res); //[ {val: 1}, meta: ... ]
        const res = await conn.query(query);
        // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        product_query = "SELECT P.ProductID, P.ProductName FROM tbl_Product P JOIN tbl_Store_Product SP ON P.ProductID = SP.ProductID WHERE SP.StoreID = " + req.params.storeID;
        const productList = await conn.query(product_query);
        var responsePayload = {
            data: res,
            productList: productList
        };

        func(responsePayload);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}
module.exports.db_query = db_query;
module.exports.db_query_detail = db_query_detail;

// pool.getConnection()
// .then(conn => {
//         conn.query("SELECT count(*) as numRows FROM tbl_Store")
//         .then(function(results) {
//             numRows = results[0].numRows;
//             numPages = Math.ceil(numRows / numPerPage);
//         })
//         .then(
//         conn.query(query+page_query)
//         .then(rows => {
//             var responsePayload = {
//                 data: rows
//             };
//             if (page < numPages) {
//                 responsePayload.pagination = {
//                   current: page,
//                   perPage: numPerPage,
//                   previous: page > 0 ? page - 1 : undefined,
//                   next: page < numPages - 1 ? page + 1 : undefined
//                 }
//               }
//             else responsePayload.pagination = {
//                 err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
//             }
//             res.json(responsePayload);
//         }).catch(err => {
//             conn.end();
//             return res.status(400).json({
//                 message: "Invalid Stores Retrieval"
//             });
//         }))
//     }).catch(err => {
//         // not connected
//         return res.status(500).json({
//             message: "Internal Servel Error"
//         });
//     });
// });