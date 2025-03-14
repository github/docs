---
title: 'Generate unit tests'
shortTitle: Generate unit tests
intro: '{% data variables.product.prodname_copilot_chat_short %} can help with generating unit tests for a function.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/testing-code/generate-unit-tests
versions:
  feature: copilot
category:
  - 'Testing code'
complexity:
  - Intermediate
octicon: beaker
topics:
  - Copilot
---

A good suite of unit tests is critical to the success of any project. However, writing these tests can be time-consuming and are often neglected. {% data variables.product.prodname_copilot_chat_short %} can help generate these tests for you.

## Example scenario

Imagine you have a Python function which validates data before updating the database. You need to create unit tests to ensure the validation performs the way you expect. You can ask {% data variables.product.prodname_copilot_chat_short %} to generate these tests for you.

```python
def validate_price(price: float):
  if price <= 0:
    raise ValueError("Price must be greater than 0")
  if price > 1000:
    raise ValueError("Price must be less than or equal to 1000")
```

## Example prompt

`/tests Generate unit tests for this function. Validate both success and failure, and include edge cases.`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

If this is your first time asking {% data variables.product.prodname_copilot_chat_short %} to generate unit tests, it may ask you if you wish to configure unit tests for your project. For this example, we are assuming you decline this offer.

{% data variables.product.prodname_copilot_short %} will provide a strategy for generating the tests, and then provide the tests themselves.

```python
import unittest
from generate_unit_tests import validate_price

class TestValidateProduct(unittest.TestCase):
  def test_price_zero(self):
    with self.assertRaises(ValueError) as context:
      validate_price(0)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_negative(self):
    with self.assertRaises(ValueError) as context:
      validate_price(-10)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_above_limit(self):
    with self.assertRaises(ValueError) as context:
      validate_price(1500)
    self.assertEqual(str(context.exception), "Price must be less than or equal to 1000")

  def test_price_edge_case_zero(self):
    with self.assertRaises(ValueError) as context:
      validate_price(0)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_edge_case_max(self):
    try:
      validate_price(1000)
    except ValueError:
      self.fail("validate_price() raised ValueError unexpectedly!")

if __name__ == '__main__':
  unittest.main()
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
