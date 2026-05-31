---
title: Diagnosing CI test failures
shortTitle: Diagnose CI test failures
intro: Use {% data variables.copilot.copilot_cli_short %} to pull CI logs, correlate failures to local code, and fix issues without leaving the terminal.
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/debug-errors/diagnose-test-failures
  - /copilot/tutorials/copilot-chat-cookbook/debug-errors/diagnose-ci-test-failures
versions:
  feature: copilot
category:
  - Debugging code
  - Author and optimize with Copilot
  - Improve quality and maintainability
surface:
  - CLI
octicon: bug
contentType: tutorials
---

{% data variables.copilot.copilot_cli_short %} ships with the GitHub MCP server, which gives it direct access to your GitHub Actions workflow runs, job logs, and check statuses. Combined with access to your local files, it can fetch CI failure details, correlate them to your code, and propose fixes from your terminal.

## Example scenario 1: Tests pass locally but fail in CI

You have a test that passes on your local machine but fails in CI. You can ask {% data variables.copilot.copilot_cli_short %} to investigate this test failure directly. 

In this example, the code being tested defines a simple order service (`order.py`), and there is a corresponding test that checks if an order was created today (`test_order_service.py`).

### Example prompt

```copilot copy
My CI is failing on this branch. Can you pull the latest workflow run 
logs, figure out what is failing, and help me fix it? The relevant files 
are @order.py and @test_order_service.py
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_cli_short %} uses the GitHub MCP server to fetch your latest workflow runs on the current branch, identifies the failed job, and retrieves its logs. It finds the following failure:

```text
___ TestOrderService.test_order_created_today ___
>       assert order["created_date"] == date.today()
E       AssertionError: assert datetime.date(2024, 1, 15) == datetime.date(2024, 1, 16)

test_order_service.py:45: AssertionError
```

After reading both local files, {% data variables.copilot.copilot_cli_short %} notices that the dates are exactly one day apart and identifies this as a **timezone boundary issue**. The CI runner uses UTC while your local machine uses a different timezone. When the test runs near midnight, `date.today()` returns different dates in each environment.

{% data variables.copilot.copilot_cli_short %} suggests standardizing how `today` is computed by injecting a clock dependency or pinning the timezone:

```python
from datetime import timezone, datetime

def get_today():
    return datetime.now(timezone.utc).date()
```

It applies the fix to both `order.py` and `test_order_service.py`, updating all references to use the new `get_today()` helper.

After the fix, you can verify the changes and run the tests locally:

1. Run `/diff` to review exactly what {% data variables.copilot.copilot_cli_short %} changed.
1. Run `!pytest test_order_service.py` to confirm tests pass locally.
1. Push the fix and let CI re-run.

## Example scenario 2: Intermittent test failures with race conditions

A test sometimes passes and sometimes fails on the same machine. You want {% data variables.copilot.copilot_cli_short %} to compare logs from passing and failing runs to identify the cause.

In this example, the code under test uses a background job in `order_service.py` to update an order's status asynchronously, and a test in `test_order_service.py` asserts that the final status is `"processed"`.

### Example prompt for race conditions

```copilot copy
This test passes sometimes and fails sometimes. Can you pull the logs 
from the last passing and failing CI runs for test_order_processed 
on this branch, compare them, and figure out what is going wrong? 
Relevant files: @order_service.py @test_order_service.py
```

### Example response for race conditions

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_cli_short %} uses the GitHub MCP server to list recent workflow runs on the current branch, identifies one passing and one failing run, and retrieves the logs for both. It compares them:

**Passing run:**

```text
[DEBUG] Created order #1234
[DEBUG] Background job started for order #1234
[DEBUG] Background job completed (52ms)
[DEBUG] Checking order status
[DEBUG] Order #1234 status: processed
```

**Failing run:**

```text
[DEBUG] Created order #1234
[DEBUG] Background job started for order #1234
[DEBUG] Checking order status
[DEBUG] Order #1234 status: pending
```

{% data variables.copilot.copilot_cli_short %} spots that in the passing run, the background job completed before the status check, while in the failing run, the status was checked while the job was still running. It identifies this as a **race condition** because the test does not wait for the background job to finish.

{% data variables.copilot.copilot_cli_short %} suggests adding an explicit wait mechanism before asserting and proposes a fix using a polling helper:

```python
import time

def wait_for_status(order_id, expected, timeout=5):
    start = time.time()
    while time.time() - start < timeout:
        order = get_order(order_id)
        if order.status == expected:
            return order
        time.sleep(0.1)
    raise TimeoutError(
        f"Order {order_id} did not reach '{expected}' within {timeout}s"
    )
```


## Further reading

* - [AUTOTITLE](/copilot/how-tos/copilot-cli)
