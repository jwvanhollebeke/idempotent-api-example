const { isUuid, uuid } = require("uuidv4");

// these two variables represent our database
let orders = new Map();
let balance = 100;

// this counter represents failure, it can happen at any time!
let counter = 0;

/**
 * Create or update an order
 *
 * POST /bad/orders
 */
exports.create = function (req, res) {
  // do we have enough money?
  if (balance < req.body.amount)
    return res.status(400).json({ message: "💸 💸 💸" });

  const idempotencyKey = req.header("Idempotency-Key");
  if (!isUuid(idempotencyKey))
    return res
      .status(400)
      .json({ message: `Invalid Idempotency-Key "${idempotencyKey}"` });

  // If there is an attempt to reuse an idempotency key with a different
  // request payload, the resource server SHOULD reply with a HTTP 422
  if (orders.has(idempotencyKey))
    return res.status(200).json(orders.get(idempotencyKey));

  // place an order
  const order = {
    id: uuid(),
    item: req.body.item,
    amount: req.body.amount,
  };
  orders.set(idempotencyKey, order);

  balance = balance - req.body.amount;

  // simulate that something went wrong on every other request
  counter++;
  if (counter % 2 !== 0) return res.status(500).json({ message: "💥💥💥" });

  return res.status(201).send(order);
};

/**
 * Check orders recorded and current balance
 *
 * GET /good/orders
 */
exports.get = function (req, res) {
  return res.status(200).send({
    balance: balance,
    orders: Array.from(orders.values()),
  });
};
