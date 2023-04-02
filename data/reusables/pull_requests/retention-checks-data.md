{% ifversion fpt or ghec %}

{% data variables.location.product_location %} retains check data for 400 days. After 400 days, the data is archived.

{% elsif ghes %}

Site administrators can control the retention policy for checks data on {% data variables.location.product_location %}. For more information, see "[Configuring applications](/admin/configuration/configuring-your-enterprise/configuring-applications#enabling-retention-policy-for-checks)."

{% endif %}

For archived check data, a rollup commit status appears that represents the state of all of the checks for the commit. To merge a pull request with checks that are both required and archived, you must rerun the checks.