---
title: 关于 GitHub Pages
intro: '您可以使用 {% data variables.product.prodname_pages %} 直接从 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的仓库托管关于自己、您的组织或您的项目的站点。'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507987'
---
## 关于 {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} 是一项静态站点托管服务，它直接从 {% data variables.product.product_name %} 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。 可以在 [{% data variables.product.prodname_pages %} 示例集合](https://github.com/collections/github-pages-examples)中看到 {% data variables.product.prodname_pages %} 站点的示例。

{% ifversion fpt or ghec %} 你可以在 {% data variables.product.prodname_dotcom %} 的 `github.io` 域或自己的自定义域上托管站点。 有关详细信息，请参阅“[将自定义域与 {% data variables.product.prodname_pages %} 配合使用](/articles/using-a-custom-domain-with-github-pages)”。
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[更改 {% data variables.product.prodname_pages %} 站点的可见性]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %}”。{% else %}."{% endif %} {% endif %}

若要开始，请参阅“[创建 {% data variables.product.prodname_pages %} 站点](/articles/creating-a-github-pages-site)”。

{% ifversion fpt or ghes or ghec %} 组织所有者可禁止从组织的存储库发布 {% data variables.product.prodname_pages %} 站点。 有关详细信息，请参阅“[为组织管理 {% data variables.product.prodname_pages %} 站点的发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。
{% endif %}

## {% data variables.product.prodname_pages %} 站点的类型

有三种类型的 {% data variables.product.prodname_pages %} 站点：项目、用户和组织。 项目站点连接到 {% data variables.product.product_name %} 上托管的特定项目，例如 JavaScript 库或配方集合。 用户和组织站点连接到 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的特定帐户。

若要发布用户站点，必须创建名为 {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %} 的个人帐户拥有的存储库。 若要发布组织站点，必须创建名为 {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %} 的组织帐户拥有的存储库。 {% ifversion fpt or ghec %}除非使用的是自定义域，否则用户和组织站点在 `http(s)://<username>.github.io` 或 `http(s)://<organization>.github.io` 中可用。{% elsif ghae %}用户和组织站点在 `http(s)://pages.<hostname>/<username>` 或 `http(s)://pages.<hostname>/<organization>` 上可用。{% endif %}

项目站点的源文件与其项目存储在同一个仓库中。 {% ifversion fpt or ghec %}除非使用的是自定义域，否则项目站点在 `http(s)://<username>.github.io/<repository>` 或 `http(s)://<organization>.github.io/<repository>` 中可用。{% elsif ghae %}项目站点在 `http(s)://pages.<hostname>/<username>/<repository>/` 或 `http(s)://pages.<hostname>/<organization>/<repository>/` 上可用。{% endif %}

{% ifversion ghec %} 如果私下发布站点，则站点的 URL 将有所不同。 有关详细信息，请参阅“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% endif %}

{% ifversion fpt or ghec %} 有关自定义域如何影响站点的 URL 的详细信息，请参阅“[关于自定义域和 {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)”。
{% endif %}

您只能为 {% data variables.product.product_name %} 上的每个帐户创建一个用户或组织站点。 项目站点（无论是组织还是个人帐户拥有）没有限制。

{% ifversion ghes %} 你的站点可用的 URL 取决于是否为 {% data variables.product.product_location %} 启用了子域隔离。

| 站点类型 | 子域隔离已启用 | 子域隔离已禁用 |
| ------------ | --------------------------- | ---------------------------- |
用户 | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
组织 | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
个人帐户拥有的项目站点 | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
组织帐户拥有的项目站点 | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

有关详细信息，请参阅“[启用子域隔离](/enterprise/admin/installation/enabling-subdomain-isolation)”或者与站点管理员联系。
{% endif %}

## {% data variables.product.prodname_pages %} 站点的发布来源

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

有关详细信息，请参阅“[为 GitHub Pages 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”。

{% ifversion ghec %}
## {% data variables.product.prodname_emus %} 的限制
如果你是 {% data variables.product.prodname_managed_user %}，则 {% data variables.product.prodname_pages %} 的使用是受限的。

  - {% data variables.product.prodname_pages %} 站点只能从组织拥有的存储库发布。
  - {% data variables.product.prodname_pages %} 站点仅对企业的其他成员可见。

有关 {% data variables.product.prodname_emus %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。
{% endif %}

## 静态站点生成器

{% data variables.product.prodname_pages %} 会发布您推送到仓库的任何静态文件。 您可以创建自己的静态文件或使用静态站点生成器为您构建站点。 您还可以在本地或其他服务器上自定义自己的构建过程。

{% ifversion pages-custom-workflow %}

如果使用自定义生成过程或 Jekyll 以外的静态站点生成器，可以编写 {% data variables.product.prodname_actions %} 来生成和发布站点。 {% data variables.product.product_name %} 为多个静态站点生成器提供入门工作流。 有关详细信息，请参阅“[为 GitHub Pages 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”。

如果从源分支发布站点，{% data variables.product.prodname_pages %} 将默认使用 Jekyll 生成站点。 如果想使用 Jekyll 以外的静态站点生成器，则建议编写 {% data variables.product.prodname_actions %} 来生成和发布站点。 否则，通过在发布源的根目录中创建一个名为 `.nojekyll` 的空文件来禁用 Jekyll 生成过程，然后按照静态站点生成器的说明在本地生成站点。

{% else %}

我们建议使用 Jekyll，它是一个静态站点生成器，内置 {% data variables.product.prodname_pages %} 支持和简化的构建流程。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

默认情况下，{% data variables.product.prodname_pages %} 将使用 Jekyll 来构建您的站点。 如果你想使用除 Jekyll 以外的静态站点生成器，通过在发布来源的根目录中创建一个名为 `.nojekyll` 的空文件来禁用 Jekyll 构建过程，然后按照静态站点生成器的说明在本地构建站点。

{% endif %}

{% data variables.product.prodname_pages %} 不支持服务器端语言，例如 PHP、Ruby 或 Python。

## {% data variables.product.prodname_pages %} 使用限制

{% ifversion fpt or ghec %} 2016 年 6 月 15 日后创建并使用 `github.io` 域的 {% data variables.product.prodname_pages %} 站点通过 HTTPS 提供服务。 如果您在 2016 年 6 月 15 日之前创建站点，您可以为站点的流量启用 HTTPS 支持。 有关详细信息，请参阅“[使用 HTTPS 保护 {% data variables.product.prodname_pages %}](/articles/securing-your-github-pages-site-with-https)”。

### 禁止使用
{% endif %} {% data variables.product.prodname_pages %} 并非旨在用于或允许用作免费的 Web 托管服务来运行你的在线业务、电子商务站点或主要针对促进商业交易或提供商业软件即服务 (SaaS) 的任何其他网站。 {% data reusables.pages.no_sensitive_data_pages %}

此外，你对 {% data variables.product.prodname_pages %} 的使用受 [GitHub 服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service/)的约束，包括对快速致富计划、淫秽内容以及暴力或威胁性内容或活动的限制。

### 使用限制
{% data variables.product.prodname_pages %} 站点受到以下使用限制的约束：

  - {% data variables.product.prodname_pages %} 源存储库的建议限制为 1 GB。{% ifversion fpt or ghec %}有关详细信息，请参阅“[我的磁盘配额是什么？](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)”{% endif %}
  - 发布的 {% data variables.product.prodname_pages %} 站点不得超过 1 GB。
{% ifversion fpt or ghec %}
  - {% data variables.product.prodname_pages %} 站点的软带宽限制为每月 100 GB。
  - {% data variables.product.prodname_pages %} 站点的软限制为每小时 10 次生成。{% ifversion pages-custom-workflow %} 如果使用自定义 {% data variables.product.prodname_actions %} 工作流生成和发布站点，则此限制不适用 {% endif %}
  - 为了为所有 {% data variables.product.prodname_pages %} 站点提供一致的服务质量，可能会实施速率限制。 这些速率限制无意干扰 {% data variables.product.prodname_pages %} 的合法使用。 如果你的请求触发了速率限制，你将收到相应响应，其中包含 HTTP 状态代码 `429` 以及信息性 HTML 正文。

如果您的站点超出这些使用配额，我们可能无法为您的站点提供服务；或者您可能收到来自 {% data variables.contact.contact_support %} 的礼貌电子邮件，建议降低站点对服务器影响的策略，包括将第三方内容分发网络 (CDN) 置于您的站点前，利用其他 {% data variables.product.prodname_dotcom %} 功能（如发行版）或转用可能更符合您需求的其他托管服务。

{% endif %}

## {% data variables.product.prodname_pages %} 上的 MIME 类型

MIME 类型是服务器发送到浏览器的标头，提供有关浏览器所请求文件性质和格式的信息。 {% data variables.product.prodname_pages %} 支持数千种文件扩展名中 750 多种 MIME 类型。 支持的 MIME 类型列表是从 [mime-db 项目](https://github.com/jshttp/mime-db)生成的。

虽然无法基于每个文件或每个仓库指定自定义 MIME 类型，但您可以添加或修改 MIME 类型以在 {% data variables.product.prodname_pages %} 上使用。 有关详细信息，请参阅 [mime-db 贡献指南](https://github.com/jshttp/mime-db#adding-custom-media-types)。

{% ifversion fpt %}
## 数据收集

访问 {% data variables.product.prodname_pages %} 站点时，出于安全目的，无论访问者是否已登录 {% data variables.product.prodname_dotcom %} ，都会记录并存储访问者的 IP 地址。 有关 {% data variables.product.prodname_dotcom %} 的安全做法的详细信息，请参阅 <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} 隐私声明</a>。
{% endif %}

## 延伸阅读

- {% data variables.product.prodname_learning %} 上的 [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages)
- “[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)”
