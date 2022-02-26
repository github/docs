If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that are installed in your enterprise. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

For more information about how to create an allow list for a {% data variables.product.prodname_github_app %} you have created, see "[Managing allowed IP addresses for a GitHub App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)."

To enable automatic addition of IP addresses for {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**.
  ![Checkbox to allow GitHub App IP addresses](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Click **Save**.
