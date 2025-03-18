---
title: 'Syncing documentation with code changes'
shortTitle: Sync documentation
intro: '{% data variables.product.prodname_copilot_chat_short %} can help with keeping code documentation up-to-date.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/documenting-code/syncing-documentation-with-code-changes
versions:
  feature: copilot
category:
  - 'Documenting code'
complexity:
  - Intermediate
octicon: book
topics:
  - Copilot
---

It can be difficult to keep documentation up to date with changes to code. However, good documentation is essential for maintaining codebases and ensuring that developers can work effectively with the code. {% data variables.product.prodname_copilot_chat_short %} can assist in updating existing code documentation.

## Example scenario

 Imagine a scenario where you have a TypeScript function that retrieves products by category name, but the documentation is out of date.

```typescript
/**
 * Retrieves all products belonging to a specific category.
 *
 * @param categoryId - The unique identifier of the product category
 * @returns Promise that resolves to an array of Product objects
 *
 * @example
 * const products = await getByCategoryName(5);
 * // Returns: [{id: 1, name: "Product 1", categoryId: 5}, ...]
 *
 * @throws {PrismaClientKnownRequestError} If database query fails
 * @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 */
async getByCategoryName(categoryId: number, page = 1, pageSize = 10): Promise<Products[]> {
  return await prisma.products.findMany({
    where: { categoryId },
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      reviews: {
        orderBy: { date: 'desc' },
        take: 5,
      },
    },
  });
}
```

## Example prompt

You can ask {% data variables.product.prodname_copilot_chat_short %} to update the documentation according to the current code.

`Update the existing documentation for the getByCategoryName function to reflect the current implementation.`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} explains it will create the updated documentation for the `getByCategoryName` function. It then provides the updated documentation, which now includes the `page` and `pageSize` parameters, as well as the `PrismaClientKnownRequestError` error that can be thrown.

For example:

```typescript
/**
 * Retrieves all products belonging to a specific category with pagination and recent reviews.
 *
 * @param categoryId - The unique identifier of the product category
 * @param page - The page number for pagination (default: 1)
 * @param pageSize - Number of products per page (default: 10)
 * @returns Promise that resolves to an array of Product objects with their 5 most recent reviews
 *
 * @example
 * const products = await getByCategoryName(5, 2, 20);
 * // Returns: [{id: 1, name: "Product 1", categoryId: 5, reviews: [...5 recent reviews]}, ...]
 *
 * @throws {PrismaClientKnownRequestError} If database query fails
 * @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 */
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
