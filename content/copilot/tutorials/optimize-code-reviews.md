---
title: Build an optimized review process with {% data variables.product.prodname_copilot_short %}
allowTitleToDifferFromFilename: true
shortTitle: Optimize code reviews
intro: Automate reviews with {% data variables.product.prodname_copilot_short %} to optimize and improve your review process.
product: '{% data variables.copilot.copilot_code-review_short %} is available for {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus %}, {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}. See [Copilot plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text).'
versions:
  feature: copilot
topics:
  - Copilot
contentType: tutorials
category:
  - Accelerate PR velocity
  - Author and optimize with Copilot
redirect_from:
  - /copilot/tutorials/optimize-reviews-with-copilot
---

## Introduction

Code reviews are more efficient when you spend less time on minor implementation details, such as naming and style conventions, and instead focus your effort on higher level design, problem solving, and functionality that meets user needs. 

In this article, we'll show how automatic reviews from {% data variables.product.prodname_copilot_short %} can help optimize your review process so you spend less time on minor changes and more time on nuanced problem solving and deeper understanding for implementation that's not simply adequate, but skillfully meets user needs.

## 1. Improve review quality from {% data variables.product.prodname_copilot_short %}

{% data variables.copilot.copilot_code-review_short %} can provide automated reviews for all pull requests in your repository and make reviewing more efficient by catching changes you don't want in your code. When paired with custom instructions, {% data variables.copilot.copilot_code-review_short %} is more effective because it can provide responses that are tailored to the way your team works, the tools you use, or the specifics of your project. 

Best practices for writing custom instructions include: 
* Distinct headings
* Bullet points
* Short, direct instructions

Let's look at an example. If you're building an order processing system using Python, your custom instructions may include Python-specific formatting, performance, and secure coding practices, as well as guidance directly relevant to your project. The following example shows what a few of the lines of your custom instructions might look like.

```markdown
## Repository context
- This repository implements an order processing system (order intake, payment, fulfillment) where correctness, security, and auditability are critical. 

## Style and conventions
- Follow the PEP 8 and PEP 257 style guide for Python.
- Use clear, domain-relevant names (orders, payments, inventory, customers, shipments).
- Prefer small, focused functions and methods with clearly defined responsibilities.

## Secure coding 
- Verify proper input validation and sanitization.
- Review authentication and authorization logic.

## Error handling guidelines
- Handle timeouts and network errors gracefully.
- Ensure failures are logged with enough detail for debugging.

## Order processing context
- Ensure order creation, payment handling, and updates are idempotent to avoid duplicate orders or duplicate charges.
- Validate and normalize all order, payment, and customer data before persisting or acting on it.
- Do not log or persist sensitive data (passwords, raw payment details, full identifiers) without hashing, encryption, or redaction.
- Call out obvious performance issues in core order workflows (e.g., N+1 queries, per-order synchronous network calls) and suggest simpler, more efficient alternatives.

## Review style
- Be concise, specific and actionable.
- Explain the "why" behind recommendations using bullet points.
```

In the next section, we'll walk through how our example custom instructions can positively impact the review comments {% data variables.product.prodname_copilot_short %} provides for a pull request. 

## 2. Automate reviews to address style conventions and performance

When automatic {% data variables.copilot.copilot_code-review_short %} is enabled, {% data variables.product.prodname_copilot_short %} will automatically review a pull request once it's out of draft mode.

Imagine you submit a pull request that includes the following function to update inventory in your order processing system. 

```python
def notify_inventory(product_id, quantity):
    requests.post("http://inventory-service/update", json={"product_id": product_id, "quantity": quantity})
```

While this is functional, it lacks clarity and robustness. The intent of types are implicit, there are no docstrings, and it does not include error handling or logging, which makes it unclear whether the notification actually worked.

{% data variables.product.prodname_copilot_short %} would review the code and may make the following comment and code suggestion.

{% data reusables.copilot.example-prompts.response-is-an-example %}

```copilot
Missing error handling for network calls

The notify_inventory function makes a synchronous network call without any error handling for timeouts, connection failures, or non-200 responses.

Why this matters:

- Network failures will cause unhandled exceptions and crash the order processing flow
- Orders could be marked as CONFIRMED but inventory never gets updated
- This violates the requirement to "handle timeouts and network errors gracefully"
- Failures won't be logged with enough detail for debugging

Recommendation: Add proper error handling with timeout and logging:
```

```python
def notify_inventory(product_id: str, quantity: int) -> bool:
    """Notify the inventory service of order placement.

    Args:
        product_id: The product identifier.
        quantity: The quantity ordered.

    Returns:
        True if the notification succeeded; False otherwise.
    """
    try:
        response = requests.post(
            "http://inventory-service/update",
            json={"product_id": product_id, "quantity": quantity},
            timeout=5,
        )
        response.raise_for_status()
        logger.info(
            "Inventory notified for product %s, quantity %d (status %d)",
            product_id,
            quantity,
            response.status_code,
        )
        return True
    except requests.exceptions.Timeout:
        logger.error(
            "Timeout notifying inventory for product %s, quantity %d",
            product_id,
            quantity,
            exc_info=True,
        )
    except requests.exceptions.RequestException:
        logger.error(
            "Failed to notify inventory for product %s, quantity %d",
            product_id,
            quantity,
            exc_info=True,
        )
    return False
```

The response from {% data variables.product.prodname_copilot_short %} follows guidance from your custom instructions in its recommendation. In this example, it follows the PEP 8 and 257 style guidance for Python and suggests an improvement to better handle timeouts and error logging, while concisely explaining the reasoning behind the suggestions. 

> [!NOTE] Always carefully review {% data variables.product.prodname_copilot_short %}'s suggestions before accepting and committing. 

Automatic review comments like these support you in building your own understanding when you're coding or can help you focus and narrow feedback given to others when reviewing.


## 3. Flag security vulnerabilities and fix them

Next, imagine you've been tasked to improve how passwords are stored in your order processing system. You submit a pull request with code you thought sufficiently hashed user passwords to protect them. 

```python
def get_password_hash(password: str, salt: str) -> str:
    """Hash a password with the given salt using SHA-256.

    Returns the hexadecimal representation of the hashed password.
    """
    return hashlib.sha256((password + salt).encode()).hexdigest()


class User:
    """Represents a user in the order processing system."""

    def __init__(self, username: str, password: str, salt: str):
        """Initialize a User with username, password, and salt.

        The password is hashed and stored for authentication.
        """
        self.username = username
        self.salt = salt
        self.password_hash = get_password_hash(password, self.salt)

    def verify_password(self, password: str) -> bool:
        """Verify a plain-text password against the stored hash."""
        return get_password_hash(password, self.salt) == self.password_hash
```

However, in this example, using SHA-256 is not acceptable as it's not computationally expensive enough to protect user passwords.

While {% data variables.copilot.copilot_code-review_short %} can make security best practice suggestions, {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} takes it a step further. Leveraging the capabilities of {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} analysis to analyze the code in a {% data variables.product.github %} repository and find security vulnerabilities and coding errors, {% data variables.copilot.copilot_autofix_short %} can then suggest fixes for alerts, enabling you to prevent and reduce vulnerabilities more efficiently.

For example, {% data variables.copilot.copilot_autofix_short %} may make the following comment on the code.

```copilot
Using SHA-256 for password hashing is insecure for authentication systems. SHA-256 is designed to be fast, making it vulnerable to brute-force attacks. 

To fix the problem, use a password-specific hashing algorithm like bcrypt, scrypt, or argon2 (e.g., `argon2-cffi` from the PyPI package) which are designed to be slow and include built-in salting mechanisms.
```

{% data variables.copilot.copilot_autofix_short %} will also make code suggestions for a potential fix to the vulnerability for you to review. In this case, it may make code suggestions, like those below, to import a package and update the code related to hashing the password. 

```python
from argon2 import PasswordHasher
```

```python
def get_initial_hash(password: str):
    ph = PasswordHasher()
    return ph.hash(password)

def check_password(password: str, known_hash):
    ph = PasswordHasher()
    return ph.verify(known_hash, password)
```

> [!NOTE] 
> * Always verify and validate any changes {% data variables.product.prodname_copilot_short %} suggests before accepting them. 
> * In this example, {% data variables.copilot.copilot_code-review_short %} may also highlight the need to generate unique salts. 

As you can see, identifying vulnerabilities automatically, along with suggestions for fixing them, helps you make security a priority. {% data variables.copilot.copilot_autofix_short %} enables you to focus on understanding secure coding and on fixes that work best for your code base and project. 

## Optimized reviews with {% data variables.product.prodname_copilot_short %}

Automatic review comments help you optimize your reviews and secure your code more efficiently regardless of your level of experience.  

* Custom instructions helped refine the responses from {% data variables.copilot.copilot_code-review_short %} so they were specific to our project and user needs and we also saw how we can tailor how much explanation {% data variables.product.prodname_copilot_short %} provides in feedback.
* {% data variables.copilot.copilot_code-review_short %}  helped us quickly improve our error logging and understand why it mattered. 
* {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} helped us prevent using an insufficient password hashing approach and protect user data.   

## Next steps

To make your reviews more efficient and effective using {% data variables.product.prodname_copilot_short %}'s review capabilities, get started by following these steps.

1. Create custom instructions specific to your project and repository. Write your own, or take inspiration from our library of examples. See [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).
1. To enable automatic {% data variables.copilot.copilot_code-review_short %} for your repository, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review).
1. To configure {% data variables.copilot.copilot_autofix_short %} for your repo you'll need to enable {% data variables.product.prodname_code_scanning %}. Once {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} analysis is enabled, {% data variables.copilot.copilot_autofix_short %} is enabled by default. For the easiest setup, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning). 

## Further reading

To go deeper with reviewing AI generated code, see [AUTOTITLE](/copilot/tutorials/review-ai-generated-code).
