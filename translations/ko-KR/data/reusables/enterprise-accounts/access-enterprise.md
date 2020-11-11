{% if currentVersion == "free-pro-team@latest" %}1. In the top-right corner of {% data variables.product.product_name %}, click your profile photo, then click **Your enterprises**.
  !["Your enterprises" in drop-down menu for profile photo on {% data variables.product.product_name %}](/assets/images/help/enterprises/your-enterprises.png)

1. In the list of enterprises, click the enterprise you want to view. ![Name of an enterprise in list of your enterprises](/assets/images/help/enterprises/your-enterprises-list.png)

{% elsif currentVersion ver_lt "enterprise-server@2.22" %}1. Navigate to your enterprise account by visiting {% raw %}<code>https://<em>HOSTNAME</em>/enterprises/<em>ENTERPRISE-NAME</em></code>{% endraw %}, replacing `HOSTNAME` with your instance's hostname and  `ENTERPRISE-NAME` with your enterprise account's name.

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}1. In the top-right corner of {% data variables.product.product_name %}, click your profile photo, then click **Enterprise settings**.
    !["Enterprise settings" in drop-down menu for profile photo on {% data variables.product.product_name %}](/assets/images/enterprise/settings/enterprise-settings.png)

{% endif %}
