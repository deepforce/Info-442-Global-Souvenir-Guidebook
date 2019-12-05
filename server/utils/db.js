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
    try {   
//   console.log('query:', text);
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
