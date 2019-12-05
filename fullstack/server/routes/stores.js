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
    if (Object.keys(req.query).length > 2) {
        query += "WHERE (";
        // Theme Filter 
        if (typeof req.query.theme != 'undefined') {
            product_type_list = req.query.theme.split(",")
            for (var i = 0; i < product_type_list.length; i++) {
                if (i==0)
                    query += "Theme = \"" + product_type_list[i] +"\"";
                else
                    query += " OR " + "Theme = \"" + product_type_list[i] +"\"";
            }

            query += ") AND ("
        }

        // Neighborhood Filter
        if (typeof req.query.neighborhood!= 'undefined') {
            product_type_list = req.query.neighborhood.split(",")
            for (var i = 0; i < product_type_list.length; i++) {
                if (i==0)
                    query += "Neighborhood = \"" + product_type_list[i] +"\"";
                else
                    query += " OR " + "Neighborhood = \"" + product_type_list[i] +"\"";
            }

            query += ") AND ("
        }

        // For Whom Filter
        if (typeof req.query.for_whom != 'undefined') {
            product_type_list = req.query.for_whom.split(",")
            for (var i = 0; i < product_type_list.length; i++) {
                if (i==0)
                    query += "ForWhom = \"" + product_type_list[i] +"\"";
                else
                    query += " OR " + "ForWhom = \"" + product_type_list[i] +"\"";
            }

            query += ") AND ("
        }

        // Product Type Filter
        if (typeof req.query.product_type != 'undefined') {
          product_type_list = req.query.product_type.split(",")
            for (var i = 0; i < product_type_list.length; i++) {
                if (i==0)
                    query += "ProductType = \"" + product_type_list[i] +"\"";
                else
                    query += " OR " + "ProductType = \"" + product_type_list[i] +"\"";
            }

            query += ") AND ("
        }
        
        
        
        if (typeof req.query.search_text != 'undefined')
            query += " MATCH(StoreName, Address, Theme, Neighborhood) AGAINST (\'" +
            req.query.search_text + "\') " +
            "OR MATCH(ProductName, ProductType, ForWhom) AGAINST (\'" +
            req.query.search_text + "\'))"
       
        if (query.substr(query.length-5) === "AND (")
            query = query.substr(0, query.length-5)

        
    }
    query += "Order BY "
    var default_order = "S.StoreName"
    // Order
    if (typeof req.query.order_param != 'undefined' ) {
        if (req.query.order_param == 1) {
            default_order = "S.Budget"
            query += default_order;
        }
        else if (req.query.order_param == 0)
            query += default_order;
        else if (req.query.order_param == -1) {
            default_order = "S.Budget"
            query += default_order + " DESC ";
        }
    }
    else
        query += default_order;
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
