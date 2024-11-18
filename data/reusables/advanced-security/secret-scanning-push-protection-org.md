1. Under "{% data variables.product.prodname_secret_scanning_caps %}", under "Push protection", click **Enable all**.
1. Optionally, click **Automatically enable for repositories added to {% data variables.product.prodname_secret_scanning %}**.{% ifversion push-protection-custom-link-orgs %}
1. Optionally, to include a custom link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.

   ![Screenshot of the "Push protection" section of the "Code security and analysis" page. The "Add a resource link in the CLI and web UI when a commit is blocked" checkbox and the custom link text field are highlighted with a dark orange outline.](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
