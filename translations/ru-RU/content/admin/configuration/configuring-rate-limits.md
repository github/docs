---
title: Configuring rate limits
intro: 'You can set rate limits for {% data variables.product.prodname_ghe_server %} using the {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
versions:
  enterprise-server: '*'
topics:
  - корпоративный
---

### Enabling rate limits for {% data variables.product.prodname_enterprise_api %}

Enabling rate limits on {% data variables.product.prodname_enterprise_api %} can prevent overuse of resources by individual or unauthenticated users. For more information, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}
You can exempt a list of users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-config)."
{% endif %}

{% note %}

**Note:** The {% data variables.enterprise.management_console %} lists the time period (per minute or per hour) for each rate limit.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Under "Rate Limiting", select **Enable API Rate Limiting**. ![Checkbox for enabling API rate limiting](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Type limits for authenticated and unauthenticated requests for each API, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

### Enabling abuse rate limits

Setting abuse rate limits protects the overall level of service on {% data variables.product.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Under "Rate Limiting", select **Enable Abuse Rate Limiting**. ![Checkbox for enabling abuse rate limiting](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png)
3. Type limits for Total Requests, CPU Limit, and CPU Limit for Searching, or accept the pre-filled default limits.
{% data reusables.enterprise_management_console.save-settings %}

### Enabling Git rate limits

You can apply Git rate limits per repository network or per user ID. Git rate limits are expressed in concurrent operations per minute, and are adaptive based on the current CPU load.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Under "Rate Limiting", select **Enable Git Rate Limiting**. ![Checkbox for enabling Git rate limiting](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Type limits for each repository network or user ID. ![Fields for repository network and user ID limits](/assets/images/enterprise/management-console/example-git-rate-limits.png)
{% data reusables.enterprise_management_console.save-settings %}
