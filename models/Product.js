const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

//Product
Product.init({
    // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // product_name
    // String.
    // Doesn't allow null values.
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // price
    // Decimal.
    // Doesn't allow null values.
    // Validates that the value is a decimal.
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    // stock
    // Integer.
    // Doesn't allow null values.
    // Set a default value of 10.
    // Validates that the value is numeric.
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true
        }
    },
    // category_id
    // Integer.
    // References the Category model's id.
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;