---
title: Implementing a feature from a GitHub Issue
shortTitle: Implement a feature
intro: Give a {% data variables.product.github %} issue to {% data variables.copilot.copilot_cli %}, then steer the conversation to implement the feature.
versions:
  feature: copilot
category:
  - Author and optimize with Copilot
surface:
  - CLI
octicon: rocket
contentType: tutorials
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/generate-code/implement-a-feature
---

{% data variables.copilot.copilot_cli %} can read a {% data variables.product.github %} issue, propose an implementation plan, and draft code changes that satisfy the requirements. Because the workflow is conversational, you can correct assumptions, point to relevant files, and refine the approach as {% data variables.copilot.copilot_cli %} works.

## Example scenario

Imagine you work on a platform team that maintains an internal Node.js billing API that powers customer subscriptions. A product manager opens an issue requesting a new `GET /subscriptions/{id}/plan` endpoint that returns the plan attached to a given subscription, along with unit tests and an update to the OpenAPI specification. The issue includes the desired response shape, error cases for missing or cancelled subscriptions, and a link to the existing `/subscriptions/{id}` endpoint to follow as a pattern. You can hand the issue to {% data variables.copilot.copilot_cli %} and have it scaffold the route, controller, and tests, then open a pull request.

## Example workflow

{% data variables.copilot.copilot_cli %} can read the issue directly from {% data variables.product.github %}, plan the work, write the code, run your tests, and open a pull request.

### Pull the issue into context

Start in the root of the repository and reference the issue by URL or `owner/repo#number`. {% data variables.copilot.copilot_cli %} uses the {% data variables.product.github %} MCP server to fetch the issue body, comments, and linked items, then keeps that context available for the rest of the session.

```text copy
Read octo-org/billing-api#482 and any issues or PRs it links to. 
Summarize what needs to be implemented before we plan the work.
```

### Draft an implementation plan with `/plan`

Switch to plan mode so {% data variables.copilot.copilot_cli %} thinks through the change before touching any files.

```text copy
/plan Implement the subscription lookup endpoint described in the issue. 
Follow the same conventions as the existing GET /subscriptions/{id} endpoint.
```

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_cli %} returns a plan similar to:

```text
1. Add a `getPlanForSubscription` method in `src/services/subscriptionService.ts` that reuses the existing billing client, throws `NotFoundError` when the subscription or plan does not exist, and throws `CancelledSubscriptionError` when the subscription has been cancelled.
1. Add a `GET /subscriptions/:id/plan` route in `src/routes/subscriptions.ts`, mirroring the error handling in the sibling `GET /subscriptions/:id` route and mapping `CancelledSubscriptionError` to a `410` response.
1. Update `openapi/subscriptions.yaml` with the new path, response schema, and `404` and `410` responses.
1. Add unit tests in `test/services/subscriptionService.test.ts` and `test/routes/subscriptions.test.ts` covering the success case, missing subscription, cancelled subscription, and missing plan.
1. Run the test suite and update the changelog entry.
```

Review the plan, push back on anything that looks off, and ask {% data variables.copilot.copilot_cli %} to revise it before you approve. For example, you might reply with `Use the existing error classes in src/errors—NotFoundError for missing subscriptions or plans and CancelledSubscriptionError for cancelled subscriptions rather than introducing new ones` and have it update the affected steps.

### Kick off the implementation and steer as needed

Approve the plan to start coding. {% data variables.copilot.copilot_cli %} works through the steps one at a time, showing each edit before applying it. If it heads in the wrong direction, interrupt and redirect.

For example, suppose {% data variables.copilot.copilot_cli %} adds a new database query in your `getPlanForSubscription` method instead of reusing the billing client your team standardized on. You can stop and steer it:

```text copy
Don't add a new query here. The billing client in 
src/clients/billingClient.ts already exposes a getPlan method. 
Use that and update the service to handle its NotFound response.
```

{% data variables.copilot.copilot_cli %} revises the code and continues with the remaining plan steps.

### Generate and run unit tests

When {% data variables.copilot.copilot_cli %} reaches the testing step, it scaffolds tests that match the patterns in your existing test files. For the plan endpoint, it might add cases like:

* Returns the plan record for an active subscription.
* Returns `404` when the subscription does not exist.
* Returns `410` when the subscription has been cancelled.
* Returns `404` when the subscription has no plan attached.

After writing the tests, {% data variables.copilot.copilot_cli %} runs them in the terminal so you can see the results immediately.

```text copy
Run the test suite for the new endpoint and fix any failures.
```

If a test fails, {% data variables.copilot.copilot_cli %} reads the failure output, updates the implementation, and re-runs until the test suite is green. Review each fix to make sure it's addressing the root cause rather than masking it.

### Review the changes with `/diff`

Use `/diff` to see a consolidated view of changes made across the session.

```text copy
/diff
```

If something looks wrong, ask {% data variables.copilot.copilot_cli %} to revise it before you commit. For example, you might reply with `Revert the formatting changes in src/routes/subscriptions.ts to only keep the new route handler` to scope the diff back to the intended changes.

### Open a pull request

Once the feature is implemented, tested, and reviewed, ask {% data variables.copilot.copilot_cli %} to open a pull request. It uses the {% data variables.product.github %} MCP server to push the branch and create the pull request

```text copy
Commit the changes on a new branch, push it, and open a pull request 
against main. Link it to octo-org/billing-api#482 and summarize the 
implementation, the tests added, and any follow-up work.
```

{% data variables.copilot.copilot_cli %} reports back with the pull request's URL so you can move it forward from there.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
