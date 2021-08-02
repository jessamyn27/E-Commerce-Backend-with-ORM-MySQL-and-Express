const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // findAll categories
    // be sure to include model Product
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
        }).then((categoryData) => {
            res.json(categoryData)
        })
        .catch((err) =>
            res.status(400).json(err))
});

router.post('/', (req, res) => {
    // create a new category
    Category.create({
            category_name: req.body.category_name
        })
        .then((newCategory) => {
            res.json(newCategory);
        })
        .catch((err) =>
            res.status(400).json(err))
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update({
            category_name: req.body.category_name
        }, {
            where: {
                id: req.body.id
            }
        })
        .then((updateCategory) => {
            res.json(updateCategory);
        })
        .catch((err) =>
            res.status(400).json(err))
});


router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
            where: { id: req.params.id }
        })
        .then((deleteCategory) => res.json(deleteCategory))
        .catch((err) => {
            res.status(400).json(err)
        });
});

module.exports = router;