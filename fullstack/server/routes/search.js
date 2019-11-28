var express = require('express');
var router = express.Router();
const search = require('../utils/search.js')
/* GET search listing. */
router.get('/', function(req, res, next) {
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
});

module.exports = router;
