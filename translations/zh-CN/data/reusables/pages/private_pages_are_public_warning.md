  {% warning %}

  **Warning**: {% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. 如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 更多信息请参阅{% if currentVersion != "free-pro-team@latest" %} “[在设备上配置 {% data variables.product.prodname_pages %}](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)”和{% endif %}“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)”。

  {% endwarning %}
