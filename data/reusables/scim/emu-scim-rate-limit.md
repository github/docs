{% note %}

**Note:** To avoid exceeding the rate limit on {% data variables.product.product_name %}, do not assign more than 1,000 users per hour to the IdP application. If you use groups to assign users to the IdP application, do not add more than 1,000 users to each group per hour. If you exceed these thresholds, attempts to provision users may fail with a "rate limit" error. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise#scim-provisioning-errors)."

{% endnote %}
