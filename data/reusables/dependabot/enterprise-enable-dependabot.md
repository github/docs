{% ifversion ghes %}

{% note %}

**Note:** Your site administrator must set up {% data variables.product.prodname_dependabot_updates %} for {% data variables.location.product_location %} before you can use this feature. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% ifversion security-feature-enablement-policies-dependabot %} You may not be able to enable or disable {% data variables.product.prodname_dependabot_updates %} if an enterprise owner has set a policy at the enterprise level. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."{% endif %}

{% endnote %}

{% endif %}
