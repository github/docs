{% warning %}

{% ifversion fpt %}
**警告**：
{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private. If you have sensitive data in your site's repository, you may want to remove the data before publishing. 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% elsif ghec %}
**Warning**: Unless your enterprise uses
{% data variables.product.prodname_emus %}, {% data variables.product.prodname_pages %} sites are publicly available on the internet by default, even if the repository for the site is private or internal. You can publish a site privately by managing access control for the site. Otherwise, if you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" and "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% elsif ghae %}
**警告**：
{% data variables.product.prodname_pages %} sites are visible to all enterprise members, even if the repository for the site is private. If you have sensitive data in your site's repository, you may want to remove the data before publishing. 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% elsif ghes %}
**Warning**: If your site administrator has enabled Public Pages,
{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private or internal. If you have sensitive data in your site's repository, you may want to remove the data before publishing. For more information, see "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" and "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
{% endif %}

{% endwarning %}
