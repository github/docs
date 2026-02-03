---
title: Diagnosing test failures
shortTitle: Diagnose test failures
intro: '{% data variables.copilot.copilot_chat_short %} can help you understand why a test is failing and suggest how to fix it.'
versions:
  feature: copilot
category:
  - Debugging code
  - Author and optimize with Copilot
complexity:
  - Intermediate
octicon: bug
topics:
  - Copilot
contentType: tutorials
---

{% data variables.copilot.copilot_chat_short %} can analyze test failures and help identify potential causes.

## Example scenario: Tests passing locally but failing in CI

Consider a scenario where you have a test that passes on your local machine but sometimes fails in CI. {% data variables.copilot.copilot_chat_short %} can help identify the reason for the failure.

In this example, the code being tested defines a simple order service (`order.py`), and there's a corresponding test that checks if an order was created today (`test_order_service.py`).

## Example prompt

The prompt below provides {% data variables.product.prodname_copilot_short %} with the relevant code and test files (using `#file:`) and includes a copy/paste of the relevant excerpt from the CI failure.

```copilot copy
Please take a look at this CI failure message. The test passes locally, but intermittently fails in CI. Can you help me figure out if this looks like a code bug, environment issue, or a flaky test?

Failure:

___ TestOrderService.test_order_created_today ___
>       assert order["created_date"] == date.today()
E       AssertionError: assert datetime.date(2024, 1, 15) == datetime.date(2024, 1, 16)

test_order_service.py:45: AssertionError

#file:order.py
#file:test_order_service.py

```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_chat_short %} notices that the dates are exactly one day apart and identifies that this could be a **timezone** or **time-boundary** issue.

The local machine and CI runner may be using different timezone settings or deriving `today` from different clocks (UTC vs. local time), so when the test runs near midnight, `date.today()` can return different dates in each environment.

{% data variables.copilot.copilot_chat_short %} suggests treating the failure as test flakiness caused by environment/time assumptions (and not a logic bug), and fixing it by standardizing how `today` is computed across environments.

## Example scenario 2: Intermittent test failures

Consider a scenario where a test sometimes passes and sometimes fails on the same machine. {% data variables.copilot.copilot_chat_short %} can compare logs from passing and failing runs to help identify the cause.

In this example, the code under test uses a background job in `order_service.py` to update an order's status asynchronously, and a test in `test_order_service.py` asserts that the final status is `"processed"`.

## Example prompt

The prompt below provides {% data variables.product.prodname_copilot_short %} with the failure message, the log excerpts from both a passing and failing run, and the relevant code files (using `#file:`).

```copilot copy
This test passes sometimes and fails sometimes. Can you compare the logs and help me figure out why?

Failure message:

>       assert order.status == "processed"
E       AssertionError: assert "pending" == "processed"

test_order_service.py:62: AssertionError

Logs from a passing run:
[DEBUG] Created order #1234
[DEBUG] Background job started for order #1234
[DEBUG] Background job completed (52ms)
[DEBUG] Checking order status
[DEBUG] Order #1234 status: processed

Logs from the failing run:
[DEBUG] Created order #1234
[DEBUG] Background job started for order #1234
[DEBUG] Checking order status
[DEBUG] Order #1234 status: pending

#file:order_service.py
#file:test_order_service.py
```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_chat_short %} compares the two logs and notices that in the passing run, the background job completed *before* the status check, while in the failing run, the status was checked while the job was still running. {% data variables.copilot.copilot_chat_short %} notes that this is a **race condition**, as the test doesn't wait for the background job to finish.

{% data variables.copilot.copilot_chat_short %} suggests adding a mechanism to ensure the job completes before asserting, such as running the job synchronously, awaiting completion (for example, via a callback), or polling.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
