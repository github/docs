  {% warning %}

  **警告**：{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}如果您的站点管理员启用了公共页面，{% endif %}{% data variables.product.prodname_pages %} 站点将在互联网上公开，即使其仓库是私有的{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}或内部的{% endif %}。 如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 For more information, see{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" and{% endif %} "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

  {% endwarning %}
