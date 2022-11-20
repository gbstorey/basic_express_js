const express = require('express');
const path = require("path");
const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product method = GET
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product method = POST
router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;