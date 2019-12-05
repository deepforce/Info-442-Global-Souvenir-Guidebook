const pool = require('./db.js');

function search(search_string, func) {
     pool.query(
        "Select DISTINCT S.StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, " +
        "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, " +
        "SunOpenTime, SunCloseTime " +
        "from tbl_Store S " +
        "join tbl_Store_Product SP on S.StoreID = SP.StoreID " +
        "join tbl_Product P on P.ProductID = SP.ProductID " +
        "WHERE MATCH(StoreName, Address, Theme, Neighborhood) AGAINST (\'" +
        search_string + "\') " +
        "OR MATCH(ProductName, ProductType, ForWhom) AGAINST (\'" +
        search_string + "\')"
        ,
        function(err, result) {  
            if(err.length) {
                func([])
            } else {
                func(result)
            }
        }
    );
}

module.exports = search