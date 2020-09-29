---
title: Getting started with the Checks API
intro: 'The Check Runs API enables you to build GitHub Apps that run powerful checks against code changes in a repository. You can create apps that perform continuous integration, code linting, or code scanning services and provide detailed feedback on commits.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Обзор

Rather than binary pass/fail build statuses, GitHub Apps can report rich statuses, annotate lines of code with detailed information, and re-run tests. The Checks API functionality is available exclusively to your GitHub Apps.

For an example of how to use the Checks API with a {% data variables.product.prodname_github_app %}, see "[Creating CI tests with the Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)."

### About check suites

When someone pushes code to a repository, GitHub creates a check suite for the last commit. A check suite is a collection of the [check runs](/rest/reference/checks#check-runs) created by a single GitHub App for a specific commit. Check suites summarize the status and conclusion of the check runs that a suite includes.

![Check suites workflow](/assets/images/check_suites.png)

The check suite reports the highest priority check run `conclusion` in the check suite's `conclusion`. For example, if three check runs have conclusions of `timed_out`, `success`, and `neutral` the check suite conclusion will be `timed_out`.

By default, GitHub creates a check suite automatically when code is pushed to the repository. This default flow sends the `check_suite` event (with `requested` action) to all GitHub App's that have the `checks:write` permission. When your GitHub App receives the `check_suite` event, it can create new check runs for the latest commit. GitHub automatically adds new check runs to the correct [check suite](/rest/reference/checks#check-suites) based on the check run's repository and SHA.

If you don't want to use the default automatic flow, you can control when you create check suites. To change the default settings for the creation of check suites, use the [Update repository preferences for check suites](/rest/reference/checks#update-repository-preferences-for-check-suites) endpoint. All changes to the automatic flow settings are recorded in the audit log for the repository. If you have disabled the automatic flow, you can create a check suite using the [Create a check suite](/rest/reference/checks#create-a-check-suite) endpoint. You should continue to use the [Create a check run](/rest/reference/checks#create-a-check-run) endpoint to provide feedback on a commit.

{% data reusables.apps.checks-availability %}

To use the check suites API, the GitHub App must have the `checks:write` permission and can also subscribe to the [check_suite](/webhooks/event-payloads/#check_suite) webhook.

{% data reusables.shortdesc.authenticating_github_app %}

### About check runs

A check run is an individual test that is part of a check suite. Each run includes a status and conclusion.

![Check runs workflow](/assets/images/check_runs.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
If a check run is in a incomplete state for more than 14 days, then the check run's `conclusion` becomes `stale` and appears on {% data variables.product.prodname_dotcom %} as stale with
{% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Only {% data variables.product.prodname_dotcom %} can mark check runs as `stale`. For more information about possible conclusions of a check run, see the [`conclusion` parameter](/rest/reference/checks#create-a-check-run--parameters).
{% endif %}

As soon as you receive the [`check_suite`](/webhooks/event-payloads/#check_suite) webhook, you can create the check run, even if the check is not complete. You can update the `status` of the check run as it completes with the values `queued`, `in_progress`, or `completed`, and you can update the `output` as more details become available. A check run can contain timestamps, a link to more details on your external site, detailed annotations for specific lines of code, and information about the analysis performed.

![Check run annotation](/assets/images/check_run_annotations.png)

A check can also be manually re-run in the GitHub UI. See "[About status checks](/articles/about-status-checks#checks)" for more details. When this occurs, the GitHub App that created the check run will receive the [`check_run`](/webhooks/event-payloads/#check_run) webhook requesting a new check run. If you create a check run without creating a check suite, GitHub creates the check suite for you automatically.

{% data reusables.apps.checks-availability %}

To use the Check Runs API, the GitHub App must have the `checks:write` permission and can also subscribe to the [check_run](/webhooks/event-payloads#check_run) webhook.

### Check runs and requested actions

When you set up a check run with requested actions (not to be confused with {% data variables.product.prodname_actions %}), you can display a button in the pull request view on {% data variables.product.prodname_dotcom %} that allows people to request your {% data variables.product.prodname_github_app %} to perform additional tasks.

For example, a code linting app could use requested actions to display a button in a pull request to automatically fix detected syntax errors.

To create a button that can request additional actions from your app, use the [`actions` object](/rest/reference/checks#create-a-check-run--parameters) when you [Create a check run](/rest/reference/checks/#create-a-check-run). For example, the `actions` object below displays a button in a pull request with the label "Fix this." The button appears after the check run completes.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Check run requested action button](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

When a user clicks the button, {% data variables.product.prodname_dotcom %} sends the [`check_run.requested_action` webhook](/webhooks/event-payloads/#check_run) to your app. When your app receives a `check_run.requested_action` webhook event, it can look for the `requested_action.identifier` key in the webhook payload to determine which button was clicked and perform the requested task.

For a detailed example of how to set up requested actions with the Checks API, see "[Creating CI tests with the Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)."
