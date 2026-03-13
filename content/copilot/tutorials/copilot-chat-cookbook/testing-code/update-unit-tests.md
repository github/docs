---
title: Updating unit tests to match code changes
shortTitle: Update unit tests
intro: '{% data variables.copilot.copilot_chat_short %} can help with updating your tests.'
versions:
  feature: copilot
category:
  - Testing code
  - Author and optimize with Copilot
complexity:
  - Intermediate
octicon: beaker
topics:
  - Copilot
contentType: tutorials
---

When you make changes to your code, it's important to update any tests to verify the new behavior and catch any bugs that the new code has introduced. {% data variables.copilot.copilot_chat_short %} can help you quickly update tests to match your code changes, ensuring your test suite stays in sync with your implementation.

## Example scenario

Imagine you have a Python function, `calculate_discount`, that determines the discount for a given purchase amount. In the original code, you get a 10% discount for amounts over $100. You're making changes to the logic of the function, so that only prices over $150 get a 10% discount, and there's now a 20% discount for amounts over $200.

### Original code

In the original code, purchase prices above $100 get a 10% discount.

```python
def calculate_discount(amount: float) -> float:
    if amount > 100:
        return amount * 0.1  # 10% discount
    return 0.0
```

### Updated code

In the changed code, only amounts above $150 get 10% discount, and amounts above $200 now get a 20% discount.

```python id=calculate_discount
def calculate_discount(amount: float) -> float:
    if amount > 200:
        return amount * 0.2  
    elif amount > 150:
        return amount * 0.1
    return 0.0
```

### Existing tests

This example shows the existing tests that were written for the original code.

```python
import unittest
from discount import calculate_discount

class TestCalculateDiscount(unittest.TestCase):
    def test_discount_above_100(self):
        # $140 should get a $14 discount (10%)
        self.assertAlmostEqual(calculate_discount(140), 14.0)
    
    def test_discount_below_100(self):
        # $80 should get no discount
        self.assertEqual(calculate_discount(80), 0.0)

    def test_discount_exactly_100(self):
        # $100 is not above 100, so no discount
        self.assertEqual(calculate_discount(100), 0.0)

if __name__ == '__main__':
    unittest.main()
```

## Example prompt

You can ask {% data variables.copilot.copilot_chat_short %} to identify and update any tests affected by your logic change.

```copilot
Given the update to the `calculate_discount` function, update the unit tests that may fail or become outdated as a result.
```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_chat_short %} analyzes your code and existing tests, and identifies which tests will fail or are now misleading following your code change.

For example, {% data variables.copilot.copilot_chat_short %} explains that:
* `test_discount_above_100` will now **fail**
* `test_discount_below_100` and `test_discount_exactly_100` will pass, but they are now **misleading**, since the threshold for the 10% discount is now $150, and not $100.

In addition, {% data variables.copilot.copilot_chat_short %} identifies any **missing test coverage**, such as the new 20% discount tier for amounts over $200.

{% data variables.copilot.copilot_chat_short %} proposes an updated set of tests.

### Updated tests

```python
import unittest
from discount import calculate_discount

class TestCalculateDiscount(unittest.TestCase):
    def test_discount_above_200(self):
        # $250 should get a $50 discount (20%)
        self.assertAlmostEqual(calculate_discount(250), 50.0)

    def test_discount_above_150(self):
        # $175 should get a $17.50 discount (10%)
        self.assertAlmostEqual(calculate_discount(175), 17.5)

    def test_discount_at_or_below_150(self):
        # $150 is not above 150, so no discount
        self.assertEqual(calculate_discount(150), 0.0)
        # $80 should get no discount
        self.assertEqual(calculate_discount(80), 0.0)

if __name__ == '__main__':
    unittest.main()
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}