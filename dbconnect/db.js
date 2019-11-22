const mariadb = require('mariadb');
var config = {
     user:'info', 
     password: 'ofni',
     database: 'info442_tbl',
     connectionLimit: 5
};

const pool = mariadb.createPool(config);


module.exports.query = async function (text, callback) {
  const conn = await pool.getConnection();
  console.log('query:', text);
  
  try {
    const res =await conn.query(text);
    callback([], res)
  } catch (err) {
    throw err;
  }
  finally {
    if (conn) return conn.end();
  }
};
module.exports.connect = function (callback) {
  return pool.getConnection(callback);
};


// async function asyncFunction() {
//   let conn;
//   try {
//   conn = await pool.getConnection();
//   console.log(1);
// 	const rows = await conn.query("SELECT ProductID FROM tbl_Product");
// 	console.log(rows); //[ {val: 1}, meta: ... ]

//   } catch (err) {
// 	throw err;
//   } finally {
// 	if (conn) return conn.end();
//   }
// }
// asyncFunction()


