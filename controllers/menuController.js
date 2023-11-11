const MenuItem = require("../models/menuItemModel");

const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const calculatePrice = async (req, res) => {
  const order = req.body.order;

  try {
    const menuItems = await MenuItem.find();

    const totalPrice = order.reduce((total, item) => {
      const menuItem = menuItems.find((menu) => menu.name === item.menuName);

      if (!menuItem) {
        return total;
      }

      const toppingPrice = menuItem.toppings
        ? menuItem.toppings.find((topping) => topping.name === item.toppingName)
            ?.price || 0
        : 0;

      const fillingPrice = menuItem.fillings
        ? menuItem.fillings.find((filling) => filling.name === item.fillingName)
            ?.price || 0
        : 0;

      const itemPrice = menuItem.basePrice + toppingPrice + fillingPrice;

      return total + itemPrice;
    }, 0);

    res.json({ totalPrice });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMenuItems,
  calculatePrice,
};
