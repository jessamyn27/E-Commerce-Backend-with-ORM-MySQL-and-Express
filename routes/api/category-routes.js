const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // findAll categories
    // be sure to include model Product
    Category.findAll({
        include: { model: Product }
    }).then((data) => {
        res.json(data)
    })
});

router.get('/:id', (req, res) => {
    // findOne category by its `id` value
    // be sure to include model Product
    Category.findOne({
        where: {
            id: req.params.id
        },
        include: { model: Product }
    }).then((data) => {
        res.json(data)
    })
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;