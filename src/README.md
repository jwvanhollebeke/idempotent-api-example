# Idempotent API

## Description

Demonstrate the difference between an API that is idempotent and one that is not.

## Getting started

1. Install Node 16
1. Run `npm start`

## Usage

### Bad example

The bad example is not idempotent.

1. Go to `src/01-api`
1. Run `node app.js`
1. Send a request to the bad endpoint to create an order. Example:
   
   ```sh
   curl --location --request POST 'http://localhost:3000/bad/orders' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "item": "📎 Clippy",
       "amount": 50
   }'
   ```

1. Notice the first request fails.
1. Send another request to the bad endpoint. Success 🎉
1. Send a request to check your current orders and balance.

   ```sh
   curl --location --request GET 'http://localhost:3000/bad/orders'
   ```

1. Notice that two orders were made and that you are out of money!


### Good example

The bad example is not idempotent.

1. If necessary, restart the node app.
1. Send a request to the good endpoint to create an order. Example:
   
   ```sh
   curl --location --request PUT 'http://localhost:3000/good/orders' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "id": "d4414ed2-3843-4860-8f73-85d2c9bb0e3a",
       "item": "🐧 Tux",
       "amount": 50
   }'
   ```

1. Notice the first request fails.
1. Send another request to the good endpoint. Success 🎉
1. Send a request to check your current orders and balance.

   ```sh
   curl --location --request GET 'http://localhost:3000/good/orders'
   ```

1. Notice that only one order was made and you still have money!