'use strict';

const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    console.log(Candy);
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
