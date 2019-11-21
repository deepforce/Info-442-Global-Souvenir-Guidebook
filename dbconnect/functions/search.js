const pool = require('../db.js');

function search(search_string, func) {
     pool.query(
        "SELECT * FROM tbl_Store WHERE MATCH(StoreName, Address, Budget, Theme, Neighborhood) AGAINST", 
        [search_string],
        function(err, result) {  
            if(err) {
                func([])
            } else {
                func(result)
            }
        }
    );
}

module.exports = search