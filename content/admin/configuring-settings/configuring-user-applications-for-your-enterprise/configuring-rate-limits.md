---
title: Configuring rate limits
intro: You can set rate limits for {% data variables.product.prodname_ghe_server %} using the {% data variables.enterprise.management_console %}.
permissions: Site administrators can configure rate limits for a {% data variables.product.prodname_ghe_server %} instance.
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-your-enterprise/configuring-rate-limits
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-rate-limits
versions:
  ghes: '*'
contentType: how-tos
category:
  - Enable GitHub features for your enterprise
---

## About rate limits for {% data variables.product.prodname_ghe_server %}

Rate limits help prevent excessive resource use on {% data variables.location.product_location %} that could affect availability or performance for all users. You can configure rate limits for the {% data variables.product.prodname_enterprise_api %} and {% data variables.product.prodname_actions %}.

Implement rate limits carefully and communicate with your users as you tune them. Start with permissive rate limits and gradually adjust them to suit your environment.

You can also configure rate limits for authentication attempts to the {% data variables.enterprise.management_console %}. For more information, see [AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/managing-access-to-the-management-console#configuring-rate-limits-for-authentication-to-the-management-console).

## Enabling rate limits for the {% data variables.product.prodname_enterprise_api %}

Too many requests to the {% data variables.product.prodname_enterprise_api %} can slow down your instance or make it unavailable. For more information about how API rate limits affect your users, see [AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api).

You can exempt specific users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-config).

> [!NOTE]
> The {% data variables.enterprise.management_console %} lists the time period (per minute or per hour) for each rate limit.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "Rate Limiting", select **Enable HTTP API Rate Limiting**.
1. Enter limits for authenticated and unauthenticated requests for each API, or accept the prefilled default limits.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling secondary rate limits

Secondary rate limits help keep {% data variables.location.product_location %} stable for all users.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "Rate Limiting", select **Enable Secondary Rate Limiting**.
1. Enter limits for Total Requests, CPU Limit, and CPU Limit for Searching, or accept the prefilled default limits.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling rate limits for Git

If a member of {% data variables.product.company_short %}'s staff has recommended it, you can apply Git rate limits per repository network or per user ID. Git rate limits are measured in concurrent operations per minute and adapt to the current CPU load.

> [!WARNING]
> Leave this setting disabled unless directly recommended by {% data variables.product.company_short %}'s staff. Git operations are rarely the leading driver of CPU and RAM usage. Enabling this feature can make Git operations more likely to fail under high load but doesn't address the underlying cause.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Under "Rate Limiting", select **Enable Git Rate Limiting**.
1. Under "Repository Network Limit", type a limit for each repository network.
1. Under "User ID Limit", type a limit for each user ID.
{% data reusables.enterprise_management_console.save-settings %}

## Configuring rate limits for {% data variables.product.prodname_actions %}

You can apply a rate limit to {% data variables.product.prodname_actions %} workflow runs. For more information about {% data variables.product.prodname_actions %}, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

### About rate limits for {% data variables.product.prodname_actions %}

Your {% data variables.product.prodname_ghe_server %} instance assigns each {% data variables.product.prodname_actions %} workflow job to a runner. If your instance can't immediately assign a job to an available runner, the job waits in a queue. If {% data variables.product.prodname_actions %} experiences sustained high load, the queue can back up and the performance of {% data variables.location.product_location %} may degrade.

To avoid this, you can configure a rate limit for {% data variables.product.prodname_actions %}. This rate limit is measured in job runs per minute. {% data variables.product.prodname_ghe_server %} applies the rate limit across all job runs on the instance. If runs exceed the rate limit, additional runs fail instead of entering the queue. The following error appears in the run's annotations.

> You've exceeded the rate limit for workflow run requests. Please wait before retrying the run.

A good rate limit protects {% data variables.location.product_location %} from unusual spikes in {% data variables.product.prodname_actions %} usage without interfering with day-to-day operations. The right threshold depends on your instance's available resources and typical workload. For more information about hardware requirements for {% data variables.product.prodname_actions %}, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements).

By default, the rate limit for {% data variables.product.prodname_actions %} is disabled. {% data variables.product.prodname_ghe_server %} can handle temporary usage spikes without problems, so this rate limit protects against sustained high load. Leave it disabled unless you experience performance problems. In some cases, {% data variables.contact.github_support %} may recommend enabling a rate limit for {% data variables.product.prodname_actions %}.

### Enabling or disabling rate limits for {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable and configure the rate limit, run the following two commands, replacing **RUNS-PER-MINUTE** with the value of your choice.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```

1. To disable the rate limit, run the following command.

   ```shell
   ghe-config actions-rate-limiting.enabled false
   ```

1. To apply the configuration, run the following command.

   ```shell
   ghe-config-apply
   ```

1. Wait for the configuration run to complete.

## Controlling the rate for the live update service

If the number of AJAX requests to your {% data variables.product.prodname_ghe_server %} instance causes problems, you may need to adjust the rate limit for the WebSockets controller used by these live updates. For details on how to view Alive requests, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).

With primary rate limits enabled, the default limit is 100 requests per minute per IP address. Use the [ghe-config](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config) utility in the administrative shell to set `app.github.web-sockets-rate-limit` to the number of requests allowed per minute per IP address, or to disable this rate limit. Setting the limit to any non-positive-integer value (for example, `0`, `-1`, `disabled`) disables rate limiting on the WebSockets controller.

{% data reusables.github-connect.rate-limit-live-dotcom-requests %}

After you change these settings, run [ghe-config-apply](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config-apply) to apply them.
