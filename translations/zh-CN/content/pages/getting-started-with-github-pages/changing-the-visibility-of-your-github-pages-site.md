---
title: 更改 GitHub Pages 站点的可见性
intro: 您可以通过公开或私下发布站点来管理项目站点的访问控制。
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282855'
---
## 关于 {% data variables.product.prodname_pages %} 站点的访问控制

如果对 {% data variables.product.prodname_pages %} 具有访问控制权限，便可以通过私密发布站点来限制访问项目站点。 只有对发布站点的仓库具有读取权限的人才可访问私密发布的站点。 您可以使用私密发布的站点与企业成员分享您的内部文档或知识库。 

{% data reusables.pages.privately-publish-ghec-only %}

如果企业使用 {% data variables.product.prodname_emus %}，则访问控制不可用，且所有 {% data variables.product.prodname_pages %} 站点都只可供其他企业成员访问。 有关 {% data variables.product.prodname_emus %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”。

如果组织使用 {% data variables.product.prodname_ghe_cloud %} 而没有 {% data variables.product.prodname_emus %}，可以选择在 Internet 上私下或公开地向任何人发布项目站点。

从组织拥有的私人或内部仓库发布的项目站点可使用访问控制。 您无法管理组织站点的访问控制。 有关 {% data variables.product.prodname_pages %} 类型的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

## 关于以私密方式发布的站点的子域

私下发布的站点与公开发布的站点位于不同的子域中。 这可确保您的 {% data variables.product.prodname_pages %} 站点从发布之日起是安全的：

- 我们使用 TLS 证书自动保护 `*.pages.github.io` 的每个子域，并强制执行 HSTS 以确保浏览器始终通过 HTTPS 提供页面。
- 我们对以私密方式发布的站点使用独特的子域，从而确保组织中其他存储库不能在与该站点相同的来源发布内容。 这样可以保护这些站点免受“[cookie 抛掷](https://github.blog/2013-04-09-yummy-cookies-across-domains/)”攻击。 这也是为什么我们不在 `github.com` 域上托管 {% data variables.product.prodname_pages %} 网站的原因。

可在存储库设置的“页面”选项卡中看到站点独特的子域。 如果您使用配置为以仓库名称为路径来构建站点的静态站点生成器，则在将站点更改为私有站点时可能需要更新静态站点生成器的设置。 有关详细信息，请参阅“[在 {% data variables.product.prodname_pages %} 网站中配置 Jekyll](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”或静态网站生成器的文档。

若要为以私密方式发布的站点使用较短且更令人难忘的域，可配置自定义域。 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 网站配置自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site)”。

## 更改 {% data variables.product.prodname_pages %} 站点的可见性

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. 在 {% data variables.product.prodname_pages %} 下，选择“{% data variables.product.prodname_pages %} 可见性”下拉菜单，然后单击可见性。
   ![用于选择站点可见性的下拉列表](/assets/images/help/pages/public-or-private-visibility.png)
4. 要查看您已发布的站点，请在“{% data variables.product.prodname_pages %}”下点击您的站点 URL。
![私下发布的网站的 URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
