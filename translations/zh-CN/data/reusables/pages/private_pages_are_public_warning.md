{% warning %}

{% ifversion fpt %}
**警告**：
{% data variables.product.prodname_pages %} 站点在互联网上公开可用，即使该站点的存储库是私有的。 如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% elsif ghec %}
**警告**：除非您的企业使用
{% data variables.product.prodname_emus %}，否则 {% data variables.product.prodname_pages %} 站点在默认情况下在互联网上公开可用，即使站点的存储库是私有的或内部的。 您可以通过管理网站的访问控制来私下发布网站。 否则，如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 更多信息请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”和“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% elsif ghae %}
**警告**：
{% data variables.product.prodname_pages %} 站点对所有企业成员可见，即使站点的存储库是私有的也是如此。 如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% elsif ghes %}
**警告**：如果您的站点管理员启用了公共页面，
则 {% data variables.product.prodname_pages %} 站点在互联网上公开可用，即使站点的存储库是私有的或内部的。 如果站点的仓库中有敏感数据，您可能想要在发布前删除它。 更多信息请参阅“[为企业配置 {% data variables.product.prodname_pages %}](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)”和“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% endif %}

{% endwarning %}
