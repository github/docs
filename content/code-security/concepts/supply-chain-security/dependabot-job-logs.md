---
title: Dependabot job logs
intro: '{% data variables.product.github %} logs every update job run by {% data variables.product.prodname_dependabot %}, giving you visibility into version updates, security patches, and automated rebases across your dependencies.'
shortTitle: Dependabot job logs
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: concepts
topics:
  - Dependabot
  - Troubleshooting
  - Dependencies
  - Security updates
---


> [!NOTE]
> Job logs are only available for repositories with {% data variables.product.prodname_dependabot_version_updates %} enabled.

Whenever a {% data variables.product.prodname_dependabot %} job runs, the details of the job are captured in the job logs list, which is accessible from the dependency graph.

## What job logs contain

For each manifest file in your repository, {% data variables.product.prodname_dependabot %} maintains a list of recent job runs. Every log entry includes:

* **Job type**: The kind of update {% data variables.product.prodname_dependabot %} performed (_version_ update, _security_ update, or _rebase_ update)
* **Job ID**: A unique identifier for the run
* **Timestamp**: When the job executed
* **Associated pull requests**: Links to any pull requests created or updated by the job
* **Error messages**: Brief diagnostic information when jobs fail

If you need to troubleshoot further, you can click **view logs** to access the full log files for a specific run.

## Job types

You will see the following job types recorded in the log list:

**Version update**: {% data variables.product.prodname_dependabot %} checked your manifest files for outdated dependencies and opened or updated pull requests to bring them current. These runs happen on the schedule defined in your `dependabot.yml` configuration file.

**Security update**: {% data variables.product.prodname_dependabot %} detected a security vulnerability in one of your dependencies and opened a pull request to upgrade to a patched version. These updates happen automatically when {% data variables.product.github %} identifies new security advisories.

**Rebase update**: {% data variables.product.prodname_dependabot %} automatically rebased an existing pull request to resolve a merge conflict with your target branch. This can apply to pull requests for either {% data variables.product.prodname_dependabot_version_updates %} or {% data variables.product.prodname_dependabot_security_updates %}.

## Debugging with job logs

Job logs give you two levels of detail for troubleshooting:

**Log list entries** show a quick summary of each job, including short error messages that often point directly to the problem, like authentication failures, unreachable registries, or incompatible version constraints.

**Full log files** provide complete output from the {% data variables.product.prodname_dependabot %} job, including every dependency checked, version resolution details, and the full stack trace for any errors. Access these when you need to investigate complex failures or understand exactly what {% data variables.product.prodname_dependabot %} attempted.

## Next steps

Now that you know what {% data variables.product.prodname_dependabot %} job logs are, you may want to find out how to access them. See [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/viewing-dependabot-job-logs).
