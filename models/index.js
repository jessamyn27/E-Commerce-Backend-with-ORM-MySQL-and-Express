// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Product belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
})

// Category hasMany Product
Category.hasMany(Product, {
    foreignKey: 'category_id',
})

// Product belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
})

// Tag belongsToMany Product (through ProductTag)
Category.belongsToMany(Product, {
    through: ProductTag,
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};