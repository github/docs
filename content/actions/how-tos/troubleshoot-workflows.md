---
title: Troubleshooting workflows
shortTitle: Troubleshoot workflows
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to debug your workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/about-troubleshooting-workflows
  - /actions/how-tos/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/using-copilot-to-troubleshoot-workflows
  - /actions/how-tos/monitoring-and-troubleshooting-workflows/troubleshooting-workflows
  - /actions/how-tos/troubleshooting-workflows
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/using-copilot-to-troubleshoot-workflows
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Initial troubleshooting suggestions

There are several ways you can troubleshoot failed workflow runs.

{% ifversion copilot %}

>[!NOTE] If you are on a {% data variables.copilot.copilot_free %} subscription, this will count towards your monthly chat message limit.

### Using {% data variables.product.prodname_copilot %}

To open a chat with {% data variables.product.prodname_copilot %} about a failed workflow run, you can either:

* Next to the failed check in the merge box, click **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}**, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error**.
* In the merge box, click on the failed check. At the top of the workflow run summary page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error**.

This opens a chat window with {% data variables.product.prodname_copilot %}, where it will provide instructions to resolve the issue.

{% endif %}

### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).

If your workflow uses specific tools or actions, enabling their debug or verbose logging options can help generate more detailed output for troubleshooting.
For example, you can use `npm install --verbose` for npm or `GIT_TRACE=1 GIT_CURL_VERBOSE=1 git ...` for git.

{% ifversion fpt or ghec %}

## Reviewing billing errors

Actions usage includes runner minutes and storage for [workflow artifacts](/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow). For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions).

### Setting a budget

Setting an Actions budget may help immediately unblock workflows failing due to billing or storage errors. It will allow further minutes and storage usage to be billed up to the set budget amount. To learn more, see [AUTOTITLE](/billing/managing-your-billing/preventing-overspending).

{% endif %}

{% ifversion actions-metrics %}

## Reviewing {% data variables.product.prodname_actions %} activity with metrics

To analyze the efficiency and reliability of your workflows using metrics, see [AUTOTITLE](/actions/administering-github-actions/viewing-github-actions-metrics).
{% endif %}

## Troubleshooting workflow triggers

You can review your workflow's `on:` field to understand what is expected to trigger the workflow. For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow).

For a full list of available events, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows).

### Triggering event conditions

Some triggering events only run from the default branch (i.e. `issues`, `schedule`). Workflow file versions that exist outside of the default branch will not trigger on these events.

Workflows will not run on `pull_request` activity if the pull request has a merge conflict.

Workflows that would otherwise be triggered on `push` or `pull_request` activity will be skipped if the commit message contains a skip annotation. For more information, see [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/skipping-workflow-runs).

### Scheduled workflows running at unexpected times

Scheduled events can be delayed during periods of high loads of {% data variables.product.prodname_actions %} workflow runs.

High load times include the start of every hour. If the load is sufficiently high enough, some queued jobs may be dropped. To decrease the chance of delay, schedule your workflow to run at a different time of the hour. For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule).

### Filtering and diff limits

Specific events allow for filtering by branch, tag, and/or paths you can customize. Workflow run creation will be skipped if the filter conditions apply to filter out the workflow.

You can use special characters with filters. For more information, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

For path filtering, evaluating diffs is limited to the first 300 files. If there are files changed that are not matched in the first 300 files returned by the filter, the workflow will not be run. For more information, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#git-diff-comparisons).

## Troubleshoot workflow execution

Workflow execution involves any issues seen after the workflow was triggered and a workflow run has been created.

{% ifversion fpt or ghec %}

### Debugging job conditions

If a job was skipped unexpectedly, or ran when you expected it to be skipped, you can view the expression evaluation to understand why:

1. Click on the job in the workflow run.
1. Download the log archive from the job's menu.
1. Open the `JOB-NAME/system.txt` file.
1. Look for the `Evaluating`, `Expanded`, and `Result` lines.

The `Expanded` line shows the actual runtime values that were substituted into your `if` condition, making it clear why the expression evaluated to `true` or `false`.

For more information, see [AUTOTITLE](/actions/how-tos/monitor-workflows/view-job-condition-logs).

{% endif %}

### Canceling Workflows

If standard cancellation through the [UI](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow) or [API](/rest/actions/workflow-runs?apiVersion=2022-11-28#cancel-a-workflow-run) does not process as expected, there may be a conditional statement configured for your running workflow job(s) that causes it to not cancel.

In these cases, you can leverage the API to force cancel the run. For more information, see [AUTOTITLE](/rest/actions/workflow-runs?apiVersion=2022-11-28#force-cancel-a-workflow-run).

A common cause can be using the `always()` [status check function](/actions/writing-workflows/choosing-what-your-workflow-does/evaluate-expressions-in-workflows-and-actions#status-check-functions) which returns `true`, even on cancellation. An alternative is to use the inverse of the `cancelled()` function, `{% raw %}${{ !cancelled() }}{% endraw %}`.

For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution) and [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow#steps-github-takes-to-cancel-a-workflow-run).

## Troubleshooting runners

### Defining runner labels

{% data variables.product.github %}-hosted runners leverage [preset labels](/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories) maintained through the [`actions/runner-images`](https://github.com/actions/runner-images?tab=readme-ov-file#available-images) repository.

We recommend using unique label names for larger and self-hosted runners. If a label matches to any of the existing preset labels, there can be runner assignment issues where there is no guarantee on which matching runner option the job will run on.

### Self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).

## Networking troubleshooting suggestions

Our support is limited for network issues that involve:

* Your networks
* External networks
* Third-party systems
* General internet connectivity

To view {% data variables.product.github %}'s realtime platform status, check [{% data variables.product.github %} Status](https://githubstatus.com/).

For other network-related issues, review your organization's network settings and verify the status of any third-party services you're accessing. If problems persist, consider reaching out to your network administrators for further assistance.

If you're unsure about the issue, contact {% data variables.contact.github_support %}. For details on how to contact support, see [AUTOTITLE](/support/contacting-github-support).

### DNS

Issues may occur from Domain Name System (DNS) configuration, resolution, or resolver problems. We recommend you review available logs, vendor documentation, or consult with your administrators for additional assistance.

### Firewalls

Activities may become blocked by firewalls. If this occurs, you may want to review available logs, vendor documentation, or consult with your administrators for additional assistance.

### Proxies

Activities could fail when using a proxy for communications. It's good practice to review available logs, vendor documentation, or consult with your administrators for additional assistance.

Refer to [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/use-proxy-servers) for information about configuring the runner application to utilize a proxy.

### Subnets

It is possible to encounter issues with subnets in use or overlaps with an existing network, such as within virtual cloud provider or Docker networks. In such cases, we recommend you review your network topology and subnets in use.

### Certificates

Issues may occur from self-signed or custom certificate chains and certificate stores. You can check that a certificate in use has not expired and is currently trusted. Certificates may be inspected with `curl` or similar tools. You can also review available logs, vendor documentation, or consult with your administrators for additional assistance.

### IP lists

IP allow or deny lists may disrupt expected communications. If there is a problem, you should review available logs, vendor documentation, or consult with your administrators for additional assistance.

{% ifversion ghec %}
If your {% data variables.product.github %} account is configured with an IP allowlist, workflows will fail if a runner uses an IP address that isn’t included in the allowlist. To resolve this, verify that the runner's IP addresses are added to your organization's or enterprise's allowlist. For more details, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and/or [AUTOTITLE](/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).
{% endif %}

{% ifversion fpt or ghec %}
For information on {% data variables.product.github %}'s IP addresses, such as those used by {% data variables.product.github %}-hosted runners, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

Static IP addresses are available for use with {% data variables.product.github %}-hosted larger runners. See [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners) for more information.
{% endif %}

### Operating systems and software applications

In addition to firewalls or proxies, customizations performed to {% data variables.product.github %}-hosted runners, such as installing additional software packages, may result in communication disruptions. For information about available customization options, see [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/customize-runners).

* For self-hosted runners, learn more about necessary endpoints in [AUTOTITLE](/actions/reference/runners/self-hosted-runners).

* For help configuring WireGuard, see [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/connect-to-a-private-network/connect-with-wireguard).

* For details about configuring OpenID Connect (OIDC), see [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/connect-to-a-private-network/connect-with-oidc).
{% ifversion fpt or ghec %}

### Azure private networking for {% data variables.product.github %}-hosted runners

Issues may arise from the use of {% data variables.product.github %}-hosted runners within your configured Azure Virtual Networks (VNETs) settings.

For troubleshooting advice, see [AUTOTITLE](/organizations/managing-organization-settings/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-organization) or {% ifversion ghec %}[AUTOTITLE](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-enterprise){% else %}[AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-enterprise) in the {% data variables.product.prodname_ghe_cloud %} docs{% endif %}.

{% endif %}
