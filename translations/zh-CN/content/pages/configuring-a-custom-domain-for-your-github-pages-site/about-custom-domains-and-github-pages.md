---
title: 关于自定义域名和 GitHub 页面
intro: '{% data variables.product.prodname_pages %} 支持使用自定义域名，或者将网站的 URL 根目录从默认值（如 `octocat.github.io`）更改为你拥有的任何域名。'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130285'
---
## 支持的自定义域

{% data variables.product.prodname_pages %} 可使用两种类型的域名：子域名和 apex 域名。 有关不支持的自定义域列表，请参阅“[自定义域和 {% data variables.product.prodname_pages %} 故障排除](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)”。

| 支持的自定义域类型 | 示例 |
|---|---|
| `www` 子域 | `www.example.com` |
| 自定义子域 | `blog.example.com` |
| Apex 域        | `example.com` |

可以为站点设置顶点和/或 `www` 子域配置。 有关 apex 域的详细信息，请参阅“[对 {% data variables.product.prodname_pages %} 站点使用顶点域](#using-an-apex-domain-for-your-github-pages-site)”。

建议始终使用 `www` 子域，即使同时使用顶点域也是如此。 当你使用顶点域创建新网站时，我们会自动尝试保护 `www` 子域，以便在提供你的站点内容时使用，但你需要进行 DNS 更改才能使用 `www` 子域。 如果你配置 `www` 子域，我们会自动尝试保护相关的顶点域。 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。

在配置用户或组织站点的自定义域后，自定义域将替换未配置自定义域的帐户所拥有的任何项目站点 URL 的 `<user>.github.io` 或 `<organization>.github.io` 部分。 例如，如果你的用户站点的自定义域为 `www.octocat.com`，并且你拥有一个未配置自定义域且从名为 `octo-project` 的存储库发布的项目站点，则该存储库的 {% data variables.product.prodname_pages %} 站点将在 `www.octocat.com/octo-project` 上提供。

## 对您的 {% data variables.product.prodname_pages %} 网站使用子域名

子域名是根域前 URL 的一部分。 你可以将子域配置为 `www` 或站点的独特部分，如 `blog.example.com`。

DNS 提供商为子域配置 `CNAME` 记录。 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”。

### `www` 子域

`www` 子域是最常用的子域类型。 例如，`www.example.com` 包括 `www` 子域。

`www` 子域是最稳定的自定义域类型，因为 `www` 子域不受 {% data variables.product.product_name %} 服务器的 IP 地址变动的影响。

### 自定义子域

自定义子域是一种不使用标准 `www` 变体的子域。 自定义子域主要在您需要将网站分为两个不同的部分时使用。 例如，可以创建一个名为 `blog.example.com` 的站点并独立于 `www.example.com` 自定义该部分。

## 对您的 {% data variables.product.prodname_pages %} 网站使用 apex 域

顶点域是不包含子域的自定义域，如 `example.com`。 Apex 域也称为基础域、裸域、根 apex 域或区域 apex 域。

DNS 提供商为顶点域配置 `A`、`ALIAS` 或 `ANAME` 记录。 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)”。

{% data reusables.pages.www-and-apex-domain-recommendation %} 有关详细信息，请参阅“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)”。

## 保护 {% data variables.product.prodname_pages %} 网站的自定义域

{% data reusables.pages.secure-your-domain %} 有关详细信息，请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”和“[为你的 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。

有许多原因会导致您的网站被自动禁用。

- 如果您从 {% data variables.product.prodname_pro %} 降级到 {% data variables.product.prodname_free_user %}，则目前发布自您的帐户中私有仓库的任何 {% data variables.product.prodname_pages %} 站点都会取消发布。 有关详细信息，请参阅“[将 {% data variables.product.prodname_dotcom %} 计费计划降级](/articles/downgrading-your-github-billing-plan)”。
- 如果将私人仓库转让给使用 {% data variables.product.prodname_free_user %} 的个人帐户，仓库将失去对 {% data variables.product.prodname_pages %} 功能的访问，当前发布的 {% data variables.product.prodname_pages %} 站点将取消发布。 有关详细信息，请参阅“[转让存储库](/articles/transferring-a-repository)”。

## 延伸阅读

- [自定义域和 {% data variables.product.prodname_pages %} 故障排除](/articles/troubleshooting-custom-domains-and-github-pages)
