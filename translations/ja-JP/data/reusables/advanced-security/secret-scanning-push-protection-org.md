1. Under "{% data variables.product.prodname_secret_scanning_caps %}", under "Push protection", click **Enable all**.
  {% ifversion ghec %}![Screenshot showing how to enable push protection for {% data variables.product.prodname_secret_scanning %} for an organization](/assets/images/help/organizations/secret-scanning-enable-push-protection-org.png){% elsif ghes > 3.4 or ghae > 3.4 %} ![Screenshot showing how to enable push protection for {% data variables.product.prodname_secret_scanning %} for an organization](/assets/images/help/organizations/secret-scanning-enable-push-protection-org-ghes.png){% endif %}
1. Optionally, click "Automatically enable for repositories added to {% data variables.product.prodname_secret_scanning %}."{% ifversion push-protection-custom-link-orgs %}
1. Optionally, to include a custom link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.

   ![Screenshot showing checkbox and text field for enabling a custom link](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
