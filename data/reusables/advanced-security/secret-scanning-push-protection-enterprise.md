1. Under "{% data variables.product.prodname_secret_scanning_caps %}", under "Push protection", click **Enable all**.
   
   ![Screenshot showing how to enable push protection for {% data variables.product.prodname_secret_scanning %} for an enterprise](/assets/images/enterprise/security/secret-scanning-enable-push-protection-enterprise.png)

2. Optionally, click "Automatically enable for repositories added to {% data variables.product.prodname_secret_scanning %}."{% ifversion secret-scanning-custom-link-on-block %}
3. Optionally, to include a custom link in the message that members will see when they attempt to push a secret, click **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.

   ![Screenshot showing checkbox and text field for enabling a custom link](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
