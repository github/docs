---
title: Configuring rate limits
intro: 'You can set rate limits for {% data variables.product.prodname_ghe_server %} using the {% data variables.enterprise.management_console %}.'
permissions: 'Site administrators can configure rate limits for a {% data variables.product.prodname_ghe_server %}  instance.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-your-enterprise/configuring-rate-limits
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
---

## About rate limits for  {% data variables.product.product_name %}

To prevent excessive use of resources on {% data variables.location.product_location %} that could affect the instance's availability or performance for all users, you can configure rate limits. Rate limits are configurable for the {% data variables.product.prodname_enterprise_api %} and {% data variables.product.prodname_actions %}.

Implement rate limits carefully and communicate frequently with your users as you tune the limits. To avoid interrupting your users' work, {% data variables.product.company_short %} recommends that you start with permissive rate limits, and gradually tune the limits to suit your environment.

You can also configure rate limits for authentication attempts to the {% data variables.enterprise.management_console %}. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console#configuring-rate-limits-for-authentication-to-the-management-console)."

## Enabling rate limits for the {% data variables.product.prodname_enterprise_api %}

Excessive numbers of requests to the {% data variables.product.prodname_enterprise_api %} can affect the availability and performance of your instance. For more information about how rate limits for the API affect your users, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

{% ifversion ghes %}
You can exempt a list of users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-config)."
{% endif %}

{% note %}

**Note:** The {% data variables.enterprise.management_console %} lists the time period (per minute or per hour) for each rate limit.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "Rate Limiting", select **Enable HTTP API Rate Limiting**.
1. Type limits for authenticated and unauthenticated requests for each API, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling secondary rate limits

Setting secondary rate limits protects the overall level of service on {% data variables.location.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{%- ifversion ghes %}
1. Under "Rate Limiting", select **Enable Secondary Rate Limiting**.
{%- else %}
1. Under "Rate Limiting", select **Enable Abuse Rate Limiting**.
{%- endif %}
1. Type limits for Total Requests, CPU Limit, and CPU Limit for Searching, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling rate limits for Git

If a member of {% data variables.product.company_short %}'s staff has recommended it, you can apply Git rate limits per repository network or per user ID. Git rate limits are expressed in concurrent operations per minute, and are adaptive based on the current CPU load.

{% warning %}

**Warning:** We encourage you to leave this setting disabled unless directly recommended by a member of {% data variables.product.company_short %}'s staff. Git operations are rarely the leading driver of CPU and RAM usage. Enabling this feature can make Git operations more likely to fail under high load conditions but does not address the underlying cause of those conditions.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "Rate Limiting", select **Enable Git Rate Limiting**.
1. Under "Repository Network Limit", type a limit for each repository network.
1. Under "User ID Limit", type a limit for each user ID.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}

## Configuring rate limits for {% data variables.product.prodname_actions %}

You can apply a rate limit to {% data variables.product.prodname_actions %} workflow runs. For more information about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

### About rate limits for {% data variables.product.prodname_actions %}

Your {% data variables.product.product_name %} instance assigns each {% data variables.product.prodname_actions %} workflow job to a runner. If your instance cannot immediately assign a job to an available runner, the job will wait in a queue until a runner is available. If {% data variables.product.prodname_actions %} experiences sustained high load, the queue can back up, and the performance of {% data variables.location.product_location %} may degrade.

To avoid this performance degradation, you can configure a rate limit for {% data variables.product.prodname_actions %}. This rate limit is expressed in job runs per minute. {% data variables.product.product_name %} calculates and applies the rate limit for the sum total of all job runs on the instance. If runs exceed the rate limit, additional runs will fail instead of entering the queue. The following error will appear in the run's annotations.

> You've exceeded the rate limit for workflow run requests. Please wait before retrying the run.

An appropriate rate limit protects {% data variables.location.product_location %} from abnormal usage of {% data variables.product.prodname_actions %} without interfering with day-to-day operations. The exact threshold depends on your instance's available resources and overall load profile. For more information about the hardware requirements for {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)."

By default, the rate limit for {% data variables.product.prodname_actions %} is disabled. Because {% data variables.product.product_name %} can handle temporary spikes in usage without performance degradation, this rate limit is intended to protect against sustained high load. We recommend leaving the rate limit disabled unless you are experiencing performance problems. In some cases, {% data variables.contact.github_support %} may recommend that you enable a rate limit for {% data variables.product.prodname_actions %}.

### Enabling or disabling rate limits for {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable and configure the rate limit, run the following two commands, replacing **RUNS-PER-MINUTE** with the value of your choice.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```

1. To disable the rate limit after it's been enabled, run the following command.

   ```shell
   ghe-config actions-rate-limiting.enabled false
   ```

1. To apply the configuration, run the following command.

   ```shell
   ghe-config-apply
   ```

1. Wait for the configuration run to complete.

{% endif %}
