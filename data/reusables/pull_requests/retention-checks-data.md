{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} retains checks data based on the retention setting configured for checks, workflow runs, statuses, artifacts, and logs. After the configured retention period has elapsed, the data is permanently deleted.

{% elsif ghes %}

Site administrators can control the retention policy for checks data on {% data variables.location.product_location %}. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-applications#enabling-retention-policy-for-checks).

To merge a pull request with checks that are both required and archived, you must rerun the checks.

{% endif %}
