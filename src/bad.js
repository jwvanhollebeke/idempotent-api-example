const { uuid } = require("uuidv4");

// these two variables represent our database
let orders = [];
let balance = 100;

// this counter represents failure, it can happen at any time!
let counter = 0;

/**
 * Create an order
 *
 * POST /bad/orders
 */
exports.create = function (req, res) {
  // do we have enough money?
  if (balance < req.body.amount) {
    return res.status(400).json({ message: "💸 💸 💸" });
  }

  // place an order
  const order = {
    id: uuid(),
    item: req.body.item,
    amount: req.body.amount,
  };
  orders.push(order);

  // subtract balance
  balance = balance - req.body.amount;

  // simulate that something went wrong on every other request
  counter++;
  if (counter % 2 !== 0) return res.status(500).json({ message: "💥💥💥" });

  return res.status(201).send(order);
};

/**
 * Check orders recorded and current balance
 *
 * GET /bad/orders
 */
exports.get = function (req, res) {
  return res.status(200).send({
    balance: balance,
    orders: orders,
  });
};
