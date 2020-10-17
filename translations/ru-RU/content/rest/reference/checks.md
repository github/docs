---
title: Checks
redirect_from:
  - /v3/checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

The Checks API enables you to build GitHub Apps that run powerful checks against code changes in a repository. You can create apps that perform continuous integration, code linting, or code scanning services and provide detailed feedback on commits. For more information, see "[Getting started with the checks API](/rest/guides/getting-started-with-the-checks-api)" and "[Creating CI tests with the Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Check Runs

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Проверить пакеты

{% note %}

  **Note:** A GitHub App only receives one [`check_suite`](/webhooks/event-payloads/#check_suite) event per commit SHA, even if you push the commit SHA to more than one branch. To find out when a commit SHA is pushed to a branch, you can subscribe to branch [`create`](/webhooks/event-payloads/#create) events.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
