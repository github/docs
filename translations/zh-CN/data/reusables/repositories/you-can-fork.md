{% if currentVersion == "github-ae@latest" %}如果企业的策略允许复刻内部和私有仓库{% else %}您{% endif %}可以将仓库复刻到您的用户帐户或具有仓库创建权限的任何组织。 更多信息请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

如果您可以访问私有仓库且所有者允许复刻，则您可以将该仓库复刻到您的用户帐户或者 {% if currentVersion == "free-pro-team@latest"%}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} 上您具有仓库创建权限的任何组织。 {% if currentVersion == "free proteam@latest" %}您不能将私有仓库复刻到使用 {% data variables.product.prodname_free_team %} 的组织。 更多信息请参阅“[GitHub 的产品](/articles/githubs-products)”。{% endif %}

{% endif %}