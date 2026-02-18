---
title: Viewing Dependabot job logs
intro: Access job logs to troubleshoot failed {% data variables.product.prodname_dependabot_updates %} and understand what is happening.
shortTitle: View Dependabot logs
permissions: '{% data reusables.permissions.dependabot-various-tasks %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: how-tos
topics:
  - Dependabot
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
redirect_from:
  - /code-security/dependabot/working-with-dependabot/viewing-dependabot-job-logs
  - /code-security/dependabot/troubleshooting-dependabot/viewing-dependabot-job-logs
---

When {% data variables.product.prodname_dependabot_updates %} fail or behave unexpectedly, job logs show you exactly what happened. Access job logs from the dependency graph to debug issues quickly. For background on what job logs contain and the types of jobs {% data variables.product.github %} records, see [AUTOTITLE](/code-security/concepts/supply-chain-security/dependabot-job-logs).

## Viewing {% data variables.product.prodname_dependabot %} job logs

The {% data variables.product.prodname_dependabot %} job logs list is accessible from the dependency graph tab in your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. Optionally, to see the full logs files for a particular job, click **view logs**.

   ![Screenshot of a Dependabot job log entry for the Gemfile package manager. A button, called "View logs", is highlighted in a dark orange outline.](/assets/images/help/dependabot/dependabot-job-logs.png)
