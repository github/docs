{% if currentVersion == "free-pro-team@latest" %}1. 在 {% data variables.product.product_name %} 的右上角，单击您的个人资料照片，然后单击 **Your enterprises（您的企业）**。
  ![{% data variables.product.product_name %} 上个人资料照片下拉菜单中的"Your enterprises（您的企业）"](/assets/images/help/enterprises/your-enterprises.png)

1. 在企业列表中，单击您想要查看的企业。 ![企业列表中的企业名称](/assets/images/help/enterprises/your-enterprises-list.png)

{% elsif currentVersion ver_lt "enterprise-server@2.22" %}1. 访问 {% raw %}<code>https://<em>HOSTNAME</em>/enterprises/<em>ENTERPRISE-NAME</em></code>{% endraw %}，将 `HOSTNAME` 替换为您的实例的主机名，将 `ENTERPRISE-NAME` 替换为您的企业帐户的名称，找到您的企业帐户。

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}1. 在 {% data variables.product.product_name %} 的右上角，单击您的个人资料照片，然后单击 **Enterprise settings（Enterprise 设置）**。
    ![{% data variables.product.product_name %} 上个人资料照片下拉菜单中的"Enterprise settings（企业设置）"](/assets/images/enterprise/settings/enterprise-settings.png)

{% endif %}
