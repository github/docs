{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
{% data reusables.security-configurations.view-configurations-page %}
{% data reusables.security-configurations.custom-security-configurations-enterprise %}
1. Under **Secret scanning**, ensure **Push protection** is enabled.
1. Under "Push protection," to the right of "Bypass privileges," select the dropdown menu, then click **Specific actors**.

   > [!NOTE]
   > You can't add secret teams to the bypass list.

1. Select the {% octicon "plus" aria-hidden="true" aria-label="plus" %} **Select actors** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then choose the actors you want to add to the bypass list.
