{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
{% data reusables.security-configurations.custom-security-configurations-org %}
1. When defining the custom security configuration, under "{% data variables.product.prodname_secret_scanning_caps %}," ensure that {% ifversion ghas-products %}"Push protection" is set to **Enabled**{% else %}the dropdown menus for "Alerts" and "Push protection" are set to **Enabled**{% endif %}.
1. Under "Push protection," to the right of "Bypass privileges," select the dropdown menu, then click **Specific actors**.
1. Select the {% octicon "plus" aria-hidden="true" aria-label="plus" %} **Select actors** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then choose the actors you want to add to the bypass list.
