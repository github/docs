---
title: 更改 GitHub Pages 站点的可见性
intro: 您可以通过公开或私下发布站点来管理项目站点的访问控制。
product: '{% data reusables.gated-features.private-pages %}'
versions:
  fpt: '*'
permissions: 'People with admin permissions for a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: 更改站点可见性
---

## 关于 {% data variables.product.prodname_pages %} 站点的访问控制

With access control for {% data variables.product.prodname_pages %}, you can restrict access to your {% data variables.product.prodname_pages %} site by publishing the site privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.

If your enterprise uses {% data variables.product.prodname_emus %}, all {% data variables.product.prodname_pages %} sites are privately published. For more information about {% data variables.product.prodname_emus %}, see "[About  {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

If your organization uses {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, you can choose to publish your sites privately or publicly to anyone on the internet. Access control is available for project sites that are published from a private or internal repository that are owned by the organization. 您无法管理组织站点的访问控制。 有关 {% data variables.product.prodname_pages %} 站点类型的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

私下发布的站点与公开发布的站点位于不同的子域中。 这可确保您的 {% data variables.product.prodname_pages %} 站点从发布之日起是安全的：

- 我们使用 TLS 证书自动保护 `*.pages.github.io` 的每个子域，并强制执行 HSTS 以确保浏览器始终通过 HTTPS 提供页面。
- 我们对私有页面使用独特的子域，以确保您组织中的其他仓库不能在与私有页面相同的来源发布内容。 这可保护您的私有页面免受“[cookie 抛掷](https://github.blog/2013-04-09-yummy-cookies-across-domains/)”。 这也是为什么我们不在 `github.com` 域上托管 {% data variables.product.prodname_pages %} 站点的原因。

您可以在仓库设置的页面选项卡中看到站点独特的子域。 如果您使用配置为以仓库名称为路径来构建站点的静态站点生成器，则在将站点更改为私有站点时可能需要更新静态站点生成器的设置。 更多信息请参阅“[在 {% data variables.product.prodname_pages %} 站点中配置 Jekyll](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”或静态站点生成器的文档。

要为您的私有 {% data variables.product.prodname_pages %} 站点使用更短、更令人难忘的域名，您可以配置自定义域名。 更多信息请参阅“[为 {% data variables.product.prodname_pages %} 站点配置自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site)”。

## 更改 {% data variables.product.prodname_pages %} 站点的可见性

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. 在 "{% data variables.product.prodname_pages %}" 下，选择 **{% data variables.product.prodname_pages %} visibility（可见性）**下拉菜单，然后单击可见性。 ![选择站点可见性的下拉菜单](/assets/images/help/pages/public-or-private-visibility.png)
4. 要查看您已发布的站点，请在“{% data variables.product.prodname_pages %}”下点击您的站点 URL。 ![私下发布站点的 URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
