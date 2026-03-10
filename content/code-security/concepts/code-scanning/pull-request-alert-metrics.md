---
title: CodeQL pull request alert metrics
shortTitle: Pull request alert metrics
intro: Understand {% data variables.product.prodname_codeql %}'s performance in pull requests across your organizations.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
topics:
  - Security overview
  - Code Security
  - Code scanning
  - CodeQL
  - Organizations
  - Teams
contentType: concepts
versions:
  feature: security-overview-org-codeql-pr-alerts
---

## Overview

The metrics overview for {% data variables.product.prodname_codeql %} pull request alerts on security overview helps you understand how well {% data variables.product.prodname_codeql %} is preventing vulnerabilities in pull requests in your organization or across organizations in your enterprise. You can view the entire dataset or filter for specific criteria, making it easy to identify repositories where you may need to take action to find and reduce security risks.

## Available metrics

The overview shows you a summary of how many vulnerabilities prevented by {% data variables.product.prodname_codeql %} have been caught in pull requests. The metrics are only tracked for pull requests that have been merged into the default branches of repositories in your organizations.

You can also find more granular metrics, such as how many alerts were fixed{% ifversion code-scanning-autofix %} with and without {% data variables.copilot.copilot_autofix_short %} suggestions{% endif %}, how many were unresolved and merged, and how many were dismissed as false positive or risk accepted.

You can also view:

* The rules that are causing the most alerts, and how many alerts each rule is associated with.

* The number of alerts that were merged into the default branch without resolution, and the number of alerts dismissed as an acceptable risk.

{% ifversion code-scanning-autofix %}
* The number of alerts that were fixed with an accepted {% data variables.copilot.copilot_autofix_short %} suggestion, displayed as a fraction of how many total {% data variables.copilot.copilot_autofix_short %} suggestions were available.

* Remediation rates, in a graph showing the percentage of alerts that were remediated with an available {% data variables.copilot.copilot_autofix_short %} suggestion, and the percentage of alerts that were remediated without a {% data variables.copilot.copilot_autofix_short %} suggestion.

* Mean time to remediate, in a graph showing the average age of closed alerts that were remediated with an available {% data variables.copilot.copilot_autofix_short %} suggestion, and the average age of closed alerts that were remediated without a {% data variables.copilot.copilot_autofix_short %} suggestion.
{% endif %}

{% ifversion code-scanning-autofix %}
> [!NOTE] Metrics for {% data variables.copilot.copilot_autofix_short %} will be shown only for repositories where {% data variables.copilot.copilot_autofix_short %} is enabled.
{% else %}
> [!NOTE] Metrics for {% data variables.copilot.copilot_autofix_short %} are omitted because {% data variables.copilot.copilot_autofix_short %} is available only on {% data variables.product.github %} cloud platforms.
{% endif %}

## Visibility

You can see {% data variables.product.prodname_code_scanning %} metrics for a repository if you have:

* The `admin` role for the repository
* A custom repository role with the "View {% data variables.product.prodname_code_scanning %} alerts" fine-grained permissions for the repository
* Access to alerts for the repository

## Next steps

To find your pull request alert metrics, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-pull-request-alerts).
