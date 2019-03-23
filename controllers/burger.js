const Burger = require('../models').Burger,
	Op = require('sequelize').Op;

module.exports = {
	get_Burgers(req, res, next) {
		return Burger.findAll()
			.then((burgers) => {
				res.status(200).render('index', { title: 'Index', burgers });
			})
			.catch(next);
	},

	create_Burger(req, res, next) {
		return Burger.create({ name: req.body.name })
			.then((burger) => {
				res.status(200).redirect('/');
			})
			.catch(next);
	},

	devour_Burger(req, res, next) {
		return Burger.update(
			{ isDevoured: req.body.isDevoured },
			{
				where: {
					id: req.params.id,
				},
			},
		)
			.then((burger) => {
				res.status(200).redirect(303, '/');
			})
			.catch(next);
	},
};
