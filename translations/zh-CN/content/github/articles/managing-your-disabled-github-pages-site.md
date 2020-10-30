---
title: 管理禁用的 GitHub 页面站点
intro: '{% data variables.product.prodname_free_user %} 上的私有仓库不支持 {% data variables.product.prodname_pages %}，但少量连接到免费私有仓库的 {% data variables.product.prodname_pages %} 站点被误保留为活动。 这些站点不再更新，将在 2019 年 5 月 10 日被 {% data variables.product.prodname_dotcom %} 取消发布。'
hidden: true
redirect_from:
  - /articles/managing-your-disabled-github-pages-site
versions:
  free-pro-team: '*'
---

{% note %}

{% data variables.product.prodname_pages %} 仅可用于具有 {% data variables.product.prodname_free_user %} 的公共仓库，以及具有 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、{% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %} 的公共和私有仓库。 {% data reusables.gated-features.more-info %}

{% endnote %}

如果您在免费私有仓库中发布了 {% data variables.product.prodname_pages %} 站点，将有几个选项可用于继续发布和更新站点，或者手动取消发布站点。 如果您不执行操作，{% data variables.product.prodname_dotcom %} 将在 2019 年 5 月 10 日为您取消发布站点。

- **要继续发布和更新 {% data variables.product.prodname_pages %} 站点**，您可以将仓库设为公共，或者将帐户升级到 {% data variables.product.prodname_pro %}。 有关如何将私有仓库设为公共的更多信息，请参阅“[设置仓库可见性](/articles/setting-repository-visibility#making-a-private-repository-public)”。有关升级帐户的信息，请参阅“[升级 GitHub 订阅](/articles/upgrading-your-github-subscription)”。

- **要停止发布 {% data variables.product.prodname_pages %} 站点**，您可以[手动取消发布](#manually-unpublishing-your-github-pages-site)，或者不采取任何措施，等到 2019 年 5 月 10 日，{% data variables.product.prodname_dotcom %} 将为您取消发布站点。 如果您的 {% data variables.product.prodname_pages %} 站点设置了自定义域，您应尽快通过 DNS 提供商更新或删除 DNS 记录，以避免域接管的风险。 在 {% data variables.product.prodname_pages %} 站点禁用时通过 DNS 提供商配置自定义域，可能导致其他人在您的一个子域上托管站点。 更多信息请参阅“[对 {% data variables.product.prodname_pages %} 使用自定义域](/articles/using-a-custom-domain-with-github-pages)”。

### 手动取消发布 {% data variables.product.prodname_pages %} 站点

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在左侧边栏中，单击 **Unpublish {% data variables.product.prodname_pages %}（取消发布站点）**。 ![用于取消发布 {% data variables.product.prodname_pages %} 站点的 Repo 设置](/assets/images/help/pages/unpublish-pages-button-sidebar.png)
4. 单击 **Unpublish this site（取消发布此站点）**。 ![用于取消发布 {% data variables.product.prodname_pages %} 站点的按钮](/assets/images/help/pages/unpublish-pages-button.png)

### 延伸阅读

- "[取消发布用户页面站点](articles/unpublishing-a-user-pages-site)"
- "[取消发布项目页面站点](/articles/unpublishing-a-project-pages-site)"
- "[转让仓库](/articles/transferring-a-repository)"
- "[关于存档仓库](/articles/about-archiving-repositories)"
- "[删除仓库](/articles/deleting-a-repository)"
