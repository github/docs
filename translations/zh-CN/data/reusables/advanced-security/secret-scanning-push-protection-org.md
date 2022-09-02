1. 在“{% data variables.product.prodname_secret_scanning_caps %}”下的“Push protection（推送保护）”下，单击 **Enable all（启用所有）**。 ![显示如何为组织启用 {% data variables.product.prodname_secret_scanning %} 推送保护的屏幕截图](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. Optionally, click "Automatically enable for private repositories added to {% data variables.product.prodname_secret_scanning %}."{% ifversion push-protection-custom-link-orgs %}
1. Optionally, to include a custom link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![Screenshot showing checkbox and text field for enabling a custom link](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}