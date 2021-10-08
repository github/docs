{% warning %}

**警告**：{% ifversion ghes or ghae %}如果您的站点管理员启用了公共页面，{% endif %}{% data variables.product.prodname_pages %} 站点{% ifversion fpt %} 默认{% endif %}在互联网上公开，即使站点的仓库是私有或内部的。{% ifversion fpt %} {% data reusables.pages.about-private-publishing %} 否则，如果{% else %} 如果{% endif %} 您的站点仓库中有敏感数据，则您可能要在发布前删除该数据。 For more information, see{% ifversion ghes or ghae %} "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" and{% endif %} "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility){% ifversion fpt %}" and "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."{% else %}."{% endif %}

{% endwarning %}
