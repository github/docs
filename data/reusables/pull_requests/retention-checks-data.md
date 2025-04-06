{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} retains checks data for 400 days. After 400 days, the data is archived. 10 days after archival, the data is permanently deleted.

{% elsif ghes %}

Site administrators can control the retention policy for checks data on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-applications#enabling-retention-policy-for-checks)."

{% endif %}

To merge a pull request with checks that are both required and archived, you must rerun the checks.
