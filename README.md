# Awesome Idempotence

This repository contains examples that demonstrate the value of [idempotence][wiki]. These are _not_
production-ready implementations of idempotence.

[wiki]:https://en.wikipedia.org/wiki/Idempotence

## Usage

See the example-specific documentation. How to build an idempotent:

- [API](./src/README.md)

## References

- [The Amazon Builder's Library: Making retries safe with idempotent APIs][builders]

  This article discusses idempotence from the perspective of AWS as a service provider.

- [HTTP Semantics: Idempotent methods][RFC9110]

  A definition of what it means to be idempotent in the context of the HyperText Transfer Protocol.

- [The Idempotency-Key HTTP Header Field][proposal]

  A proposal on how to make to make non-idempotent HTTP methods such as POST or PATCH
  fault-tolerant. Here's a TLDR [YouTube video](youtube) on the
  same topic. This proposal also contains a list describing how service providers such as Stripe,
  PayPal, and Google implement idempotency.

- [Handling Lambda functions idempotency with AWS Lambda Powertools][lambda]

  Idempotency is critically important in event-driven architectures. As the Design Principles for
  AWS Lambda states:

  > Since the same event may be received more than once, functions should be designed to be
  > idempotent. This means that receiving the same event multiple times does not change the result
  > beyond the first time the event was received.

- [Creating Idempotent DDL Scripts for Database Migrations][database]

  The article opens with this statement:

  > Database code that creates or alters tables and routines ought to be ‘idempotent’, so that it
  > won’t cause problems if it is applied more than once to the same database. This is sometimes
  > trickier than it might sound.

[builders]: https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/
[RFC9110]: https://httpwg.org/specs/rfc9110.html#idempotent.methods
[proposal]: https://ietf-wg-httpapi.github.io/idempotency/draft-ietf-httpapi-idempotency-key-header.html
[youtube]: https://www.youtube.com/watch?v=8vsyMPKzh1M
[lambda]: https://aws.amazon.com/blogs/compute/handling-lambda-functions-idempotency-with-aws-lambda-powertools/
[database]: https://www.red-gate.com/hub/product-learning/flyway/creating-idempotent-ddl-scripts-for-database-migrations
