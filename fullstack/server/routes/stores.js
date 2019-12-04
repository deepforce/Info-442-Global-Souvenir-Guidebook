var express = require('express');
var router = express.Router();
const dbquery = require('../utils/dbquery.js');
/* GET stores listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with stores list');
    // DB SQL query
    var query = "Select DISTINCT S.StoreID, StoreName, StoreImage, Address, WeekOpenTime, WeekCloseTime, WeekOpenDay, " +
    "PhoneNum, Website, Budget, Theme, Neighborhood, SatOpenTime, SatCloseTime, " +
    "SunOpenTime, SunCloseTime " +
    "from tbl_Store S " +
    "join tbl_Store_Product SP on S.StoreID = SP.StoreID " +
    "join tbl_Product P on P.ProductID = SP.ProductID ";

    // Exist query
    if (Object.keys(req.query).length >= 2) {
        query += "WHERE ";
        // Theme Filter 
        if (typeof req.query.theme != 'undefined')
            query += "Theme = \"" + req.query.theme + "\" " + "AND ";

        // Neighborhood Filter
        if (typeof req.query.neighborhood!= 'undefined')
            query += "Neighborhood = \"" + req.query.neighborhood + "\" " + "AND ";

        // For Whom Filter
        if (typeof req.query.for_whom != 'undefined')
            query += "ForWhom = \""+ req.query.for_whom + "\" " + "AND ";

        // Product Type Filter
        if (typeof req.query.product_type != 'undefined')
            query += "ProductType = \"" + req.query.product_type +"\"" + "AND ";
            
        
        if (typeof req.query.search_text != 'undefined')
            query += "( MATCH(StoreName, Address, Theme, Neighborhood) AGAINST (\'" +
            req.query.search_text + "\') " +
            "OR MATCH(ProductName, ProductType, ForWhom) AGAINST (\'" +
            req.query.search_text + "\'))"
       
        if (query.substr(query.length-4) === "AND ")
            query = query.substr(0, query.length-4)
        // Order
        if (typeof req.query.order_param != 'undefined' ) {
            if (typeof req.query.order != 'undefined')
                query += "Order BY " + req.query.order_param + " " +req.query.order + " ";
            else
                query += "Order BY " + req.query.order_param + " ";
        }
    }
    dbquery.db_query(query, req, function(data_items) {
        res.json(data_items);
    });
});

router.get('/:storeID', function(req, res, next) {
    // res.send('respond with stores detail');
    var query = "SELECT * FROM tbl_Store WHERE StoreID = \'" + req.params.storeID + "\'";
    dbquery.db_query_detail(query, req, function(data_items) {
        res.json(data_items);
    });

   
});

module.exports = router;
