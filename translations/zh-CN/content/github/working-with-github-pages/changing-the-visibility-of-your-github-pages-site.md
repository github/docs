---
title: 更改 GitHub Pages 站点的可见性
intro: '您可以通过公开或私下发布站点来管理项目站点的访问控制。'
product: '{% data reusables.gated-features.private-pages %}'
versions:
  free-pro-team: '*'
permissions: 拥有仓库管理员权限的人可以更改 {% data variables.product.prodname_pages %} 站点的可见性。
---

### 关于 {% data variables.product.prodname_pages %} 站点的访问控制

如果您的项目站点是从使用 {% data variables.product.prodname_ghe_cloud %} 的组织拥有的私有或内部仓库发布的，您可以管理站点的访问控制。 通过访问控制，您可以选择将站点公开发布给互联网上的任何人，也可以选择私下发布给对仓库拥有读取权限的人。 私下发布的站点可用于与企业成员分享您的内部文档或知识库。 您无法管理组织站点的访问控制。 有关 {% data variables.product.prodname_pages %} 站点类型的更多信息，请参阅“[关于 GitHub Pages](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

私下发布的站点与公开发布的站点位于不同的子域中。 您可以在仓库设置中查看站点的 URL。 如果您使用配置为以仓库名称为路径来构建站点的静态站点生成器，则在将站点更改为私有站点时可能需要更新静态站点生成器的设置。 更多信息请参阅“[在 {% data variables.product.prodname_pages %} 站点中配置 Jekyll](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”或静态站点生成器的文档。

### 更改 {% data variables.product.prodname_pages %} 站点的可见性

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "{% data variables.product.prodname_pages %}" 下，选择 **{% data variables.product.prodname_pages %} visibility（可见性）**下拉菜单，然后单击可见性。 ![选择站点可见性的下拉菜单](/assets/images/help/pages/public-or-private-visibility.png)
4. 要查看您已发布的站点，请在“{% data variables.product.prodname_pages %}”下点击您的站点 URL。 ![私下发布站点的 URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
