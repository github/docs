---
title: 'Create end-to-end tests for a webpage'
shortTitle: Create end-to-end tests
intro: '{% data variables.product.prodname_copilot_chat_short %} can help with generating end-to-end tests.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/testing-code/create-end-to-end-tests-for-a-webpage
versions:
  feature: copilot
category:
  - 'Testing code'
complexity:
  - Advanced
octicon: beaker
topics:
  - Copilot
---

Creating end-to-end tests for a webpage can be time-consuming and complex as the HTML will be generated dynamically. {% data variables.product.prodname_copilot_chat_short %} can help you create end-to-end tests for a webpage by suggesting the necessary code to interact with the webpage and validate the expected results.

## Example scenario

Imagine a React application that displays product details on a webpage. You need to create end-to-end tests to ensure the product details are displayed correctly. You can ask {% data variables.product.prodname_copilot_chat_short %} to generate these tests for you.

```javascript
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ productId = '1' }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
    return;
  }, [productId]); // Add productId to dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.string
};

export default ProductDetails;
```

## Example prompt

> [!NOTE] This example uses Playwright for end-to-end testing, but you can use other frameworks like Selenium or Cypress.

`Using Playwright, generate an e2e test to ensure the product displays correctly.`

If you have an existing test you wish {% data variables.product.prodname_copilot_short %} to use as a model, you can use `#file: path/to/test-file.js` to provide the path to the file, and include this information in the prompt.

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} will respond with an end-to-end test that you can use for your application.

```typescript
import { test, expect } from '@playwright/test';

test.describe('ProductDetails Component', () => {
  test.beforeEach(async ({ page }) => {
    // Set up API mocking
    await page.route('/api/product/1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          name: 'Test Product',
          description: 'This is a test product',
          price: 99.99
        })
      });
    });

    // Mock error response for product ID 999
    await page.route('/api/product/999', async (route) => {
      await route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Product not found' })
      });
    });
  });

  test('displays loading state initially', async ({ page }) => {
    await page.goto('/product/1');
    const loadingElement = page.locator('text=Loading...');
    await expect(loadingElement).toBeVisible();
  });

  test('displays product details correctly', async ({ page }) => {
    await page.goto('/product/1');

    // Wait for loading to disappear
    await expect(page.getByText('Loading...')).toBeHidden();

    // Check all product details
    await expect(page.locator('h2')).toHaveText('Test Product');
    await expect(page.locator('text=This is a test product')).toBeVisible();
    await expect(page.locator('text=Price: $99.99')).toBeVisible();
  });

  test('displays error message when product not found', async ({ page }) => {
    await page.goto('/product/999');

    // Wait for loading to disappear
    await expect(page.getByText('Loading...')).toBeHidden();

    // Check error message
    await expect(page.locator('text=Error: Product not found')).toBeVisible();
  });
});
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
