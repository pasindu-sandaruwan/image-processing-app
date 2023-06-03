/*
* Use this route file to populate with routes 
*/

const express = require('express');
const router = express.Router();

const catController = require("../controllers/cat.controller");

router.get( "/",catController.getAndSaveMergedCatImages );

module.exports = router;