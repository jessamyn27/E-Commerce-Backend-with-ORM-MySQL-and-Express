const router = require('express').Router();
const { Category, Product } = require('../../models');
const { beforeBulkDestroy } = require('../../models/Product');

// The `/api/categories` endpoint

// findAll categories
// be sure to include model Product
router.get('/', (req, res) => {
    Category.findAll({
        include: { model: Product }
    }).then((categoryData) => {
        res.json(categoryData);
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
    Category.create({
            category_name: req.body.category_name
        })
        .then((newCategory) => {
            res.json(newCategory);
        })
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;