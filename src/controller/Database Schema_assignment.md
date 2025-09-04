Database Schema

```
Product
- id
- name
- handle
- categoryId → Category
- brandId → Brand
- reviewID → Review
- variants: [ProductVariant]

ProductVariant
- id
- name
- price
- options: [ProductVariantOption]

ProductVariantOption
- id
- name
- value

Category
- id
- name

Brand
- id
- name

Review
- id
- rating
- comment
```

Design and implement a search API that supports:

1. search by handle name, category and brand name,
2. search by rating min and max,
3. filter by min Price and Max Price (product variant price),
4. filter product by product_variant_option value including and, or query

Endpoint

```
GET /api/products/search
```

Apply all filters and return only matching products.

Support pagination: page, limit params.

Tech Stack Requirements

-   Node.js with Express.js
-   PostgreSQL or MySQL
-   ORM (Sequelize / Prisma / TypeORM / Knex.js)
-   Use ES modules or CommonJS (your preference)
-   Provide Postman collection or curl samples for testing

Clear database schema definitions (migrations or models).

Sample seed data to test search/filter functionality.

Clean, modular code with error handling.
