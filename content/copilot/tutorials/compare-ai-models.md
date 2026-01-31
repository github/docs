---
title: Comparing AI models using different tasks
shortTitle: Compare AI models
intro: 'Explore real-world examples of common developer tasks along with sample prompts, responses, and guidance to help you choose the right AI model for your workflow.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/examples-for-ai-model-comparison
  - /copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks
  - /copilot/tutorials/comparing-ai-models-using-different-tasks
contentType: tutorials
category:
  - Rapid prototyping
  - Author and optimize with Copilot
---

## Overview

Each AI model supported in {% data variables.copilot.copilot_chat_short %} has different strengths. To help you decide which model to use, this article provides real-world examples of common developer tasks along with sample prompts, responses, and guidance on why a particular model is a good fit.

These examples show how models vary in their reasoning style, response depth, and ability to handle visual input. Use them to compare output quality and choose the right model for your specific workflow.

For a full list of supported models and side-by-side feature comparisons, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

## {% data variables.copilot.copilot_gpt_41 %}

{% data reusables.copilot.model-use-cases.gpt-41 %}

### Example scenario

Consider a scenario where you are writing helper functions for access control in a Python service. You want to add docstrings to clarify the purpose of the function.

Below is the helper function that grants editor access to a document:

```python id=grant-editor-access
def grant_editor_access(user_id, doc_id):
    access = AccessManager()
    access.assign_role(
        resource_type="document",
        resource_id=doc_id,
        role="editor",
        user_id=user_id
    )
```

### Example prompt

```copilot prompt copy ref=grant-editor-access
Add a docstring to the function that explains what it does.
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

```python
def grant_editor_access(user_id, doc_id):
    """
    Grants editor access to a specific document for a given user.

    This function uses the AccessManager to assign the "editor" role
    to the specified user for the provided document ID.

    Args:
        user_id (str): The ID of the user to grant access to.
        doc_id (str): The ID of the document to which access is being granted.
    """
    access = AccessManager()
    access.assign_role(
        resource_type="document",
        resource_id=doc_id,
        role="editor",
        user_id=user_id
    )
```

### Why {% data variables.copilot.copilot_gpt_41 %} is a good fit

* The function is short and self-contained, making it ideal for quick docstring generation.
* {% data variables.copilot.copilot_gpt_41 %} can recognize the pattern and provide a clear, concise explanation.
* The task doesn't require deep reasoning or complex logic.

## {% data variables.copilot.copilot_gpt_5_mini %}

OpenAI {% data variables.copilot.copilot_gpt_5_mini %} is a fast, cost-efficient model designed for simple or repetitive coding tasks. It delivers reliable, concise answers with very low latency, making it ideal for real-time suggestions and lightweight development workflows. {% data variables.copilot.copilot_gpt_5_mini %} is optimized for speed and responsiveness, so you can quickly iterate on small code changes or get instant feedback on straightforward prompts.

### Example scenario

Suppose you are building a utility script and need to filter a list of user records to include only active users, sorted by their signup date. The task is simple and doesn’t require deep reasoning or multi-step logic.

Here’s a sample list of users:

```python id=user-list
users = [
    {"name": "Alice", "active": True, "signup_date": "2023-12-10"},
    {"name": "Bob", "active": False, "signup_date": "2023-11-05"},
    {"name": "Charlie", "active": True, "signup_date": "2024-01-15"}
]
```

### Example prompt

```copilot prompt copy ref=user-list
Filter the list of users to only include active users, and sort them by signup_date.
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

```python
# Filter to only include active users
active_users = [user for user in users if user["active"]]

# Sort active users by signup_date
active_users_sorted = sorted(active_users, key=lambda user: user["signup_date"])

print(active_users_sorted)
```

### Why {% data variables.copilot.copilot_gpt_5_mini %} is a good fit

* The task is straightforward and benefits from fast, low-latency responses.
* {% data variables.copilot.copilot_gpt_5_mini %} is optimized for cost and speed, making it ideal for quick edits, prototyping, and utility code.
* Use this model when you want reliable answers for simple coding questions without waiting for unnecessary depth.

## {% data variables.copilot.copilot_gpt_52 %}

{% data reusables.copilot.model-use-cases.gpt-52 %}

### Example scenario

You’re designing a shopping cart system and have a UML class diagram that outlines the relationships between `Cart`, `Product`, `User`, and `Order`. Instead of writing out the system from scratch, you want to upload the image of the diagram and ask {% data variables.product.prodname_copilot_short %} to generate the  classes.

![Screenshot of a shopping cart UML diagram, showing the class details for Cart, Product, User, and Order.](/assets/images/help/copilot/shopping-cart-uml.png)

### Example prompt

```copilot copy
Use this UML diagram to generate the classes for a shopping cart system.
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} will generate a class for each of the classes in the diagram, including the relationships between them. Here’s the example code generated for the `Cart` class:

```python
from cart_item import CartItem
from order import Order

class Cart:
    def __init__(self, cart_id, user_id):
        self.cart_id = cart_id
        self.user_id = user_id
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    def remove_item(self, item):
        self.items = [i for i in self.items if i != item]

    def calculate_total(self):
        return sum(item.quantity * item.product.price for item in self.items)

    def place_order(self):
        # Implementation for placing an order
        return Order("", None, 0)
```

### Why {% data variables.copilot.copilot_gpt_52 %} is a good fit

* It can interpret visual assets, such as UML diagrams, wireframes, or flowcharts, to generate code scaffolding or suggest architecture.
* It can be useful for reviewing screenshots of UI layouts or form designs and generating.

## {% data variables.copilot.copilot_claude_haiku_45 %}

{% data reusables.copilot.model-use-cases.claude-haiku-45 %}

### Example scenario

Consider a scenario where you are implementing both unit tests and integration tests for an application. You want to ensure that the tests are comprehensive and cover any edge cases that you may and may not have thought of.

For a complete walkthrough of the scenario, see [AUTOTITLE](/copilot/tutorials/writing-tests-with-github-copilot).

### Why {% data variables.copilot.copilot_claude_haiku_45 %} is a good fit

* It performs well on everyday coding tasks like test generation, boilerplate scaffolding, and validation logic.
* The task leans into multi-step reasoning, but still stays within the confidence zone of a less advanced model because the logic isn’t too deep.

## {% data variables.copilot.copilot_claude_sonnet_45 %}

{% data reusables.copilot.model-use-cases.claude-sonnet-45 %}

### Example scenario

Consider a scenario where you're modernizing a legacy COBOL application by rewriting it in Node.js. The project involves understanding unfamiliar source code, converting logic across languages, iteratively building the replacement, and verifying correctness through a test suite.

For a complete walkthrough of the scenario, see [AUTOTITLE](/copilot/tutorials/modernizing-legacy-code-with-github-copilot).

### Why {% data variables.copilot.copilot_claude_sonnet_45 %} is a good fit

* {% data variables.copilot.copilot_claude_sonnet_45 %} handles complex context well, making it suited for workflows that span multiple files or languages.
* Its hybrid reasoning architecture allows it to switch between quick answers and deeper, step-by-step problem-solving.

## Further reading

* [AUTOTITLE](/copilot/reference/ai-models/model-comparison)
* [AUTOTITLE](/copilot/copilot-chat-cookbook)
