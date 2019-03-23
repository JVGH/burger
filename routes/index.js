const router = require('express').Router(),
	burger = require('../controllers').burger;

/* GET home page. */
router.get('/', burger.get_Burgers);

/* Create new Burger */
router.post('/create', burger.create_Burger);

/* Devour Burger */
router.put('/devour/:id', burger.devour_Burger);

module.exports = router;
