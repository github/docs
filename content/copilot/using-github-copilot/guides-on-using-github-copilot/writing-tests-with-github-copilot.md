---
title: Writing tests with GitHub Copilot
intro: 'Use {% data variables.product.prodname_copilot_short %} to generate unit and integration tests, and help improve code quality.' 
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/example-use-cases/writing-tests-with-github-copilot
shortTitle: Write tests
---

## Introduction

{% data variables.product.prodname_copilot %} can assist you in developing tests quickly and improving productivity. In this article, we’ll demonstrate how you can use {% data variables.product.prodname_copilot_short %} to write both unit and integration tests. While {% data variables.product.prodname_copilot_short %} performs well when generating tests for basic functions, complex scenarios require more detailed prompts and strategies. This article will walk through practical examples of using {% data variables.product.prodname_copilot_short %} to break down tasks and verify code correctness.

## Prerequisites

Before getting started you must have the following:
* A [{% data variables.product.prodname_copilot %} subscription plan](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode %}, or any JetBrains IDE.
* The [{% data variables.product.prodname_copilot %} extension](/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment) installed in your IDE.

## Writing unit tests with {% data variables.product.prodname_copilot_chat_short %}

In this section, we’ll explore how to use {% data variables.product.prodname_copilot_chat %} to generate unit tests for a Python class. This example demonstrates how you can use {% data variables.product.prodname_copilot_short %} to create unit tests for a class like `BankAccount`. We will show you how to prompt {% data variables.product.prodname_copilot_short %} to generate tests, execute them, and verify the results.

### Example class: `BankAccount`

Let’s start with a class `BankAccount` that contains methods for depositing, withdrawing, and getting the balance of an account. Create a new file `bank_account.py` in a {% data variables.product.github %} repository and add the following `BankAccount` class in Python.

```python
class BankAccount:
    def __init__(self, initial_balance=0):
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.balance = initial_balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise ValueError("Cannot withdraw more than the current balance.")
        self.balance -= amount

    def get_balance(self):
        return self.balance
```

### Generating unit tests with {% data variables.product.prodname_copilot_chat_short %}

You can prompt Copilot with a request to write tests that cover a range of scenarios. Be specific with your test requirements to get the best results. The following is an example prompt you can use to generate unit tests for the `BankAccount` class.

**Prompt:** _Develop a comprehensive suite of unit tests for the BankAccount() function in Python. Write multiple test methods that cover a wide range of scenarios, including edge cases, exception handling, and data validation._

This prompt does a few important things:
* **Scope:** It explicitly asks for a comprehensive suite of unit tests, so that {% data variables.product.prodname_copilot_short %} generates more than just basic tests, covering a variety of potential use cases.
* **Scenarios:** The prompt specifies that the tests should include:
  * **Edge cases:** Tests for boundary conditions (e.g., negative values for deposits or withdrawals, withdrawing more than the available balance).
  * **Exception handling:** Tests for errors that should be raised when certain invalid actions occur (e.g., withdrawing more than the available balance, depositing negative amounts).
  * **Data validation:** Ensures that inputs are correctly validated and handled by the methods.

{% data variables.product.prodname_copilot_short %} will give you a response like the following.

```python
import unittest
from bank_account import BankAccount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount()

    def test_initial_balance(self):
        self.assertEqual(self.account.get_balance(), 0)

    def test_deposit_positive_amount(self):
        self.account.deposit(100)
        self.assertEqual(self.account.get_balance(), 100)

    def test_withdraw_within_balance(self):
        self.account.deposit(100)
        self.account.withdraw(50)
        self.assertEqual(self.account.get_balance(), 50)

    def test_deposit_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            self.account.deposit(-100)

    def test_withdraw_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            self.account.withdraw(-50)

    def test_withdraw_more_than_balance_raises_error(self):
        self.account.deposit(100)
        with self.assertRaises(ValueError):
            self.account.withdraw(200)

    def test_initial_balance_negative_raises_error(self):
        with self.assertRaises(ValueError):
            BankAccount(-100)

if __name__ == '__main__':
    unittest.main()
```

### Running the tests cases

The test suite generated by {% data variables.product.prodname_copilot_short %} includes a test case for each scenario specified in the prompt. Each function in the `BankAccount` class is tested for a range of conditions, including valid operations like deposits and withdrawals, as well as edge cases such as negative amounts and attempts to withdraw more than the available balance.

Once {% data variables.product.prodname_copilot_short %} has generated the test suite to your satisfaction, add the code to a new file `test_bank_account.py`. You can ask it how to run the tests.

**Prompt:** _"How do I run these unit tests in Python using the unittest framework?"_

{% data variables.product.prodname_copilot_short %} will give you the following bash command.

```bash
python -m unittest test_bank_account.py
```

After running the tests, you will see the output in your terminal or IDE. If all tests pass, you can be confident that your `BankAccount` class is working as expected.

#### Slash command

Additionally, you can prompt {% data variables.product.prodname_copilot_short %} to write a full suite of unit tests with the `/tests` slash command. Ensure that you have the file open on the current tab of your IDE and {% data variables.product.prodname_copilot_short %} will generate unit tests for that file. The tests that {% data variables.product.prodname_copilot_short %} generates may not cover all scenarios, so you should always review the generated code and add any additional tests that may be necessary.

> [!TIP] If you ask {% data variables.product.prodname_copilot_short %} to write tests for a code file that is not already covered by unit tests, you can provide {% data variables.product.prodname_copilot_short %} with useful context by opening one or more existing test files in adjacent tabs in your editor. {% data variables.product.prodname_copilot_short %} will be able to see the testing framework you use and will be more likely to write a test that is consistent with your existing tests.

{% data variables.product.prodname_copilot_short %} will generate a unit test suite such as the following.

```python
import unittest
from bank_account import BankAccount

class TestBankAccount(unittest.TestCase):
    def setUp(self):
        self.account = BankAccount()

    def test_initial_balance(self):
        self.assertEqual(self.account.get_balance(), 0)
```

## Writing integration tests with {% data variables.product.prodname_copilot_short %}

Integration tests are essential for ensuring that the various components of your system work correctly when combined. In this section, we’ll extend our `BankAccount` class to include interactions with an external service `NotificationSystem` and use mocks to test the system’s behavior without needing real connections. The goal of the integration tests is to verify the interaction between the `BankAccount` class and the `NotificationSystem` services, ensuring that they work together correctly.

### Example class: `BankAccount` with notification services

Let's update the `BankAccount` class to include interactions with an external service such as a `NotificationSystem` that sends notifications to users. `NotificationSystem` represents the integration that would need to be tested.

Update the `BankAccount` class in the `bank_account.py` file with the following code snippet.

```python
class BankAccount:
    def __init__(self, initial_balance=0, notification_system=None):
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.balance = initial_balance
        self.notification_system = notification_system

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.balance += amount
        if self.notification_system:
            self.notification_system.notify(f"Deposited {amount}, new balance: {self.balance}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise ValueError("Cannot withdraw more than the current balance.")
        self.balance -= amount
        
        if self.notification_system:
            self.notification_system.notify(f"Withdrew {amount}, new balance: {self.balance}")
        
    def get_balance(self):
        return self.balance
```

Here we'll break down our request for {% data variables.product.prodname_copilot_short %} to write integration tests for the `BankAccount` class into smaller, more manageable pieces. This will help {% data variables.product.prodname_copilot_short %} generate more accurate and relevant tests.

**Prompt:** _"Write integration tests for the `deposit` function in the `BankAccount` class. Use mocks to simulate the `NotificationSystem` and verify that it is called correctly after a deposit."_

This prompt does a few important things:
* **Scope:** It specifies integration tests, focusing on the interaction between the `deposit` function and the `NotificationSystem`, rather than just unit tests.
* **Mocks:** It explicitly asks for the use of mocks to simulate the `NotificationSystem`, ensuring that the interaction with external systems is tested without relying on their actual implementation.
* **Verification:** The prompt emphasizes verifying that the `NotificationSystem` is called correctly after a deposit, ensuring that the integration between the components works as expected.
* **Specificity:** The prompt clearly states the method (`deposit`) and the class (`BankAccount`) to be tested.

> [!TIP] If {% data variables.product.prodname_copilot_short %} is producing invalid tests, provide examples of inputs and outputs for the function you want to test. This will help {% data variables.product.prodname_copilot_short %} evaluate the expected behavior of the function.

{% data variables.product.prodname_copilot_short %} will generate a test suite like the following.

```python
import unittest
from unittest.mock import Mock
from bank_account import BankAccount

class TestBankAccountIntegration(unittest.TestCase):
    def setUp(self):
        self.notification_system = Mock()

    def test_deposit_with_notification(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        account.deposit(50)
        self.assertEqual(account.get_balance(), 150)
        self.notification_system.notify.assert_called_once_with("Deposited 50, new balance: 150")
        
if __name__ == '__main__':
    unittest.main()
```

Add the generated code to a new file `test_bank_account_integration.py`.

### Improving on the test cases

The prompt above generated a single test case that verifies the `NotificationSystem` is called when a valid deposit is made. However, it doesn't cover cases where an error is raised during the deposit. In those scenarios, the `NotificationSystem` should not be called. We need to add a test case that handles invalid deposits and ensure the notification system is not triggered.

**Prompt:** _"Add a test case for invalid deposit amounts to verify the function raises the correct exceptions and that the `NotificationService` is not called."_

{% data variables.product.prodname_copilot_short %} will generate a test case such as the following.

```python
    def test_deposit_negative_amount_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.deposit(0)
        self.notification_system.notify.assert_not_called()
```

### Asking about areas of improvement

Now that we've written test cases to validate the integration functionality for deposits, this is a great opportunity to search for improvements within the test suite. While the current tests are functional, we can prompt {% data variables.product.prodname_copilot_short %} to evalulate code coverage and suggest areas of improvement.

**Prompt:** _"What additional tests should be included to ensure full coverage for the integration between the `BankAccount` class and the `NotificationSystem`?"_

Prompting Copilot with this question can help you identify missing test cases that may have been overlooked.
In this situation, while we tested valid and invalid deposits, we haven't yet covered the withdrawal functionality.

{% data variables.product.prodname_copilot_short %} will generate an updated test suite such as the following.

<details>
  <summary>Click to expand the full generated code example</summary>

```python
import unittest
from unittest.mock import Mock
from bank_account import BankAccount

class TestBankAccountIntegration(unittest.TestCase):
    def setUp(self):
        self.notification_system = Mock()

    def test_deposit_with_notification(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        account.deposit(50)
        self.assertEqual(account.get_balance(), 150)
        self.notification_system.notify.assert_called_once_with("Deposited 50, new balance: 150")

    def test_deposit_negative_amount_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.deposit(-50)
        self.notification_system.notify.assert_not_called()

    def test_deposit_zero_amount_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.deposit(0)
        self.notification_system.notify.assert_not_called()

    def test_withdraw_with_notification(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        account.withdraw(30)
        self.assertEqual(account.get_balance(), 70)
        self.notification_system.notify.assert_called_once_with("Withdrew 30, new balance: 70")

    def test_withdraw_exceeding_balance_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.withdraw(150)
        self.notification_system.notify.assert_not_called()

    def test_withdraw_negative_amount_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.withdraw(-30)
        self.notification_system.notify.assert_not_called()

    def test_withdraw_zero_amount_raises_error(self):
        account = BankAccount(initial_balance=100, notification_system=self.notification_system)
        with self.assertRaises(ValueError):
            account.withdraw(0)
        self.notification_system.notify.assert_not_called()

    def test_initial_negative_balance_raises_error(self):
        with self.assertRaises(ValueError):
            BankAccount(initial_balance=-100, notification_system=self.notification_system)

if __name__ == '__main__':
    unittest.main()
```

</details>

Once Copilot has generated the test suite to your satisfaction, run the tests with command below to verify the results.

```bash
python -m unittest test_bank_account_integration.py
```
