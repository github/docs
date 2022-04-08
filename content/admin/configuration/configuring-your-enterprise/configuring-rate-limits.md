---
title: Configuring rate limits
intro: 'You can set rate limits for {% data variables.product.prodname_ghe_server %} using the {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
---
## Enabling rate limits for {% data variables.product.prodname_enterprise_api %}

Enabling rate limits on {% data variables.product.prodname_enterprise_api %} can prevent overuse of resources by individual or unauthenticated users. For more information, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)."

{% ifversion ghes %}
You can exempt a list of users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-config)."
{% endif %}

{% note %}

**Note:** The {% data variables.enterprise.management_console %} lists the time period (per minute or per hour) for each rate limit.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Under "Rate Limiting", select **Enable HTTP API Rate Limiting**.
![Checkbox for enabling API rate limiting](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Type limits for authenticated and unauthenticated requests for each API, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling secondary rate limits

Setting secondary rate limits protects the overall level of service on {% data variables.product.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% ifversion ghes > 3.1 %}
2. Under "Rate Limiting", select **Enable Secondary Rate Limiting**.
   ![Checkbox for enabling secondary rate limiting](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png)
{% else %}
2. Under "Rate Limiting", select **Enable Abuse Rate Limiting**.
    ![Checkbox for enabling abuse rate limiting](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png)
{% endif %}
3. Type limits for Total Requests, CPU Limit, and CPU Limit for Searching, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Enabling Git rate limits

You can apply Git rate limits per repository network or per user ID. Git rate limits are expressed in concurrent operations per minute, and are adaptive based on the current CPU load.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Under "Rate Limiting", select **Enable Git Rate Limiting**.
![Checkbox for enabling Git rate limiting](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Type limits for each repository network or user ID.
  ![Fields for repository network and user ID limits](/assets/images/enterprise/management-console/example-git-rate-limits.png)
{% data reusables.enterprise_management_console.save-settings %}

## Enabling Actions rate limits

You can apply a rate limit to GitHub Actions workflow runs. The Actions rate limit is expressed in runs per minute. It is for the sum total of all Actions runs across the entire GHES instance.

By default, the rate limit is disabled. When workflow jobs cannot immediately be assigned to an available runner, they will wait in a queue until a runner is available. However, if Actions experiences a sustained high load, the queue can back up faster than it can drain and the performance of the GHES instance may degrade.

To avoid this, an administrator can configure a rate limit. From the [administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/), run the following commands:

```
actions-rate-limiting.enabled true
actions-rate-limiting.queue-runs-per-minute 200
ghe-config-apply
```

 When the rate limit is exceeded, additional workflow runs will fail immediately rather than being put in the queue:

![screenshot of a rate-limited run](/assets/images/enterprise/actions/actions-rate-limited.png)

### Determining an appropriate rate limit

An appropriate rate limit protects your instance from abnormal Actions usage without interfering with day-to-day operations. The exact threshold depends on your GHES instance's available resources and overall load profile.

Because even temporary spikes in usage can be handled without degrading your instance if they subside quickly, the rate limit is intended to protect against sustained high load. Therefore, we recommend leaving the rate limit disabled unless you are experiencing performance problems or you are instructed to do so by customer support.

{% endif %}