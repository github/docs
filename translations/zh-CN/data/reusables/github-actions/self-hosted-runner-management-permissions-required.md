A self-hosted runner can be located in either your repository, organization, or {% if currentVersion == "free-pro-team@latest" %}enterprise account settings on {% data variables.product.prodname_dotcom %}{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %} enterprise settings on {% data variables.product.product_location %}{% endif %}. 要管理自托管运行器，您必须拥有以下权限，具体取决于添加自托管运行器的位置：
- **用户仓库**：您必须是仓库所有者。
- **组织**：您必须是组织所有者。
- **组织仓库**：您必须是组织所有者或者拥有该仓库的管理员权限。
{% if currentVersion == "free-pro-team@latest" %}
- **企业账户**：您必须是企业所有者。
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
- **企业**：您必须是 {% data variables.product.prodname_enterprise %} 站点管理员。
{% endif %}
