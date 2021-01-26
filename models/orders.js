module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Orders', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
      order_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     
  });

  return Order;
};
