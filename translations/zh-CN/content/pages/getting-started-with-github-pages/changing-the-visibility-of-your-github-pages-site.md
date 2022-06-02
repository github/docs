---
title: 更改 GitHub Pages 站点的可见性
intro: 您可以通过公开或私下发布站点来管理项目站点的访问控制。
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: 更改站点可见性
---

## 关于 {% data variables.product.prodname_pages %} 站点的访问控制

如果对 {% data variables.product.prodname_pages %} 具有访问控制权限，您便可以通过私密发布站点来限制访问您的项目站点。 只有对发布站点的仓库具有读取权限的人才可访问私密发布的站点。 您可以使用私密发布的站点与企业成员分享您的内部文档或知识库。

{% data reusables.pages.privately-publish-ghec-only %}

如果您的企业使用 {% data variables.product.prodname_emus %}，则访问控制不可用，并且所有 {% data variables.product.prodname_pages %} 站点仅供其他企业成员访问。 有关 {% data variables.product.prodname_emus %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”。

如果您的组织使用 {% data variables.product.prodname_ghe_cloud %} 而没有 {% data variables.product.prodname_emus %}，您可以选择在互联网上私下或公开地向任何人发布您的项目站点。

从组织拥有的私人或内部仓库发布的项目站点可使用访问控制。 您无法管理组织站点的访问控制。 有关 {% data variables.product.prodname_pages %} 站点类型的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

## 关于私下发布的网站的子域

私下发布的站点与公开发布的站点位于不同的子域中。 这可确保您的 {% data variables.product.prodname_pages %} 站点从发布之日起是安全的：

- 我们使用 TLS 证书自动保护 `*.pages.github.io` 的每个子域，并强制执行 HSTS 以确保浏览器始终通过 HTTPS 提供页面。
- 我们为私下发布的网站使用唯一的子域，以确保组织中的其他存储库不能在与网站相同的来源发布内容。 这可保护您的网站免受“[cookie 抛掷](https://github.blog/2013-04-09-yummy-cookies-across-domains/)”。 这也是为什么我们不在 `github.com` 域上托管 {% data variables.product.prodname_pages %} 站点的原因。

您可以在仓库设置的“Pages（页面）”选项卡中看到站点唯一的子域。 如果您使用配置为以仓库名称为路径来构建站点的静态站点生成器，则在将站点更改为私有站点时可能需要更新静态站点生成器的设置。 更多信息请参阅“[在 {% data variables.product.prodname_pages %} 站点中配置 Jekyll](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”或静态站点生成器的文档。

要为您私下发布的站点使用更短、更令人难忘的域名，您可以配置自定义域名。 更多信息请参阅“[为 {% data variables.product.prodname_pages %} 站点配置自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site)”。

## 更改 {% data variables.product.prodname_pages %} 站点的可见性

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. 在 "{% data variables.product.prodname_pages %}" 下，选择 **{% data variables.product.prodname_pages %} visibility（可见性）**下拉菜单，然后单击可见性。 ![选择站点可见性的下拉菜单](/assets/images/help/pages/public-or-private-visibility.png)
4. 要查看您已发布的站点，请在“{% data variables.product.prodname_pages %}”下点击您的站点 URL。 ![私下发布站点的 URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
