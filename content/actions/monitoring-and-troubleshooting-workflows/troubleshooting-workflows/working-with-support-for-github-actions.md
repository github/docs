---
title: Working with Support for GitHub Actions
intro: 'Learn how {% data variables.contact.github_support %} can assist with {% data variables.product.prodname_actions %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Actions
  - Support
shortTitle: 'Working with {% data variables.contact.github_support %}'
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/working-with-support-for-github-actions
---

You can [contact {% data variables.contact.github_support %}](/support/contacting-github-support) for assistance with {% data variables.product.prodname_actions %}.

## Providing diagnostic and troubleshooting information

The contents of private and internal repositories are not visible to {% data variables.contact.github_support %}, so {% data variables.contact.github_support %} may request additional information to understand the complete context of your inquiry and reproduce any unexpected behavior. You can accelerate the resolution of your inquiry by providing this information when you initially raise a ticket with {% data variables.contact.github_support %}.

Some information that {% data variables.contact.github_support %} will request can include, but is not limited to, the following:

* The URL of the workflow run.

  {% ifversion ghes %}
  For example: `https://DOMAIN/ORG/REPO/actions/runs/0123456789`
  {% else %}
  For example: `https://github.com/ORG/REPO/actions/runs/0123456789`
  {% endif %}
  
* The workflow `.yml` file(s) attached to the ticket as `.txt` files. For more information about workflows, see "[AUTOTITLE](/actions/using-workflows/about-workflows#about-workflows)."
* A copy of your workflow run logs for an example workflow run failure. For more information about workflow run logs, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#downloading-logs)."
* {% ifversion ghes %}A copy of your runner logs, {% else %}If you are running this workflow on a self-hosted runner, self-hosted runner logs{% endif %} which can be found under the `_diag` folder within the runner. For more information about self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#reviewing-the-self-hosted-runner-application-log-files)."

  Self-hosted runner log file names are be formatted: `Runner_YYYY####-xxxxxx-utc.log` and `Worker_YYYY####-xxxxxx-utc.log`.

{% note %}

**Note:** Attach files to your support ticket by changing the file's extension to `.txt` or `.zip`. If you include textual data such as log or workflow file snippets inline in your ticket, ensure they are formatted correctly as Markdown code blocks. For more information about proper Markdown formatting, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code)."

If the information you provide is unreadable due to the loss of formatting by improper Markdown syntax, {% data variables.contact.github_support %} may request that resubmit the information either as an attachment or with the correct Markdown formatting.

{% endnote %}

{% warning %}

**Warning:** Ensure all files and text provided to {% data variables.contact.github_support %} have been properly redacted to remove sensitive information such as tokens and other secrets.

{% endwarning %}

{% ifversion ghes %}
Depending on the nature of your inquiry, {% data variables.contact.github_support %} may also request that you generate and upload a support bundle for further review and analysis. For more information about providing data to {% data variables.contact.github_support %} and support bundles, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support)."
{% endif %}

### Ephemeral Runner Application Log Files

{% data variables.contact.github_support %} may request the runner application log files from ephemeral runners. {% data variables.product.prodname_dotcom %} expects and recommends that you have implemented a mechanism to forward and preserve the runner application log files from self-hosted ephemeral runners. For more information about runner application log files and troubleshooting self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#reviewing-the-self-hosted-runner-application-log-files)."

### {% data variables.product.prodname_actions_runner_controller %}

If you are using {% data variables.product.prodname_actions_runner_controller %} (ARC), {% data variables.contact.github_support %} may ask you to submit the complete logs for the controller, listeners, and runner pods. For more information about collecting {% data variables.product.prodname_actions_runner_controller %}'s logs, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/troubleshooting-actions-runner-controller-errors#checking-the-logs-of-the-controller-and-runner-set-listener)."

For more information about the scope of support for {% data variables.product.prodname_actions_runner_controller %}, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-support-for-actions-runner-controller)."

### {% data variables.product.prodname_codeql %} and {% data variables.product.prodname_actions %}

If you are requesting assistance with a {% data variables.code-scanning.codeql_workflow %}, {% data variables.contact.github_support %} may request a copy of the {% data variables.product.prodname_codeql %} debugging artifacts. For more information about debugging artifacts for a {% data variables.code-scanning.codeql_workflow %}, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/logs-not-detailed-enough#creating-codeql-debugging-artifacts)."

To provide the debugging artifacts to {% data variables.contact.github_support %}, please download the {% data variables.product.prodname_codeql %} debugging artifacts from a sample workflow run and attach it to your ticket as a `.zip` file. For more information on downloading workflow artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

If the {% data variables.product.prodname_codeql %} debugging artifacts `.zip` file is too large to upload to the ticket, please advise {% data variables.contact.github_support %}, and we will work with you to determine the next steps.

## Scope of support

{% data reusables.support.scope-of-support %}
