---
title: 关于自定义域名和 GitHub 页面
intro: '{% data variables.product.prodname_pages %} 支持使用自定义域名，或者将网站的 URL 根目录从默认值（如 `octocat.github.io`）更改为您拥有的任何域名。'
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
shortTitle: 在 GitHub Pages 中自定义域
---

## 支持的自定义域

{% data variables.product.prodname_pages %} 可使用两种类型的域名：子域名和 apex 域名。 有关不支持的自定义域名列表，请参阅“[自定义域名和 {% data variables.product.prodname_pages %} 疑难解答](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)“。

| 支持的自定义域类型 | 示例                 |
| --------- | ------------------ |
| `www` 子域  | `www.example.com`  |
| 自定义子域     | `blog.example.com` |
| Apex 域    | `example.com`      |

您可以为您的网站设置 apex 和 `www` 子域配置。 有关 apex 域的更多信息，请参阅“[对您的 {% data variables.product.prodname_pages %} 网站使用 apex 域](#using-an-apex-domain-for-your-github-pages-site)”。

建议始终使用 `www` 子域名，即使您也同时使用 apex 域。 当您使用顶级域创建新网站时，我们会自动尝试保护 `www` ，以便在提供站点内容时使用，但您需要进行 DNS 更改才能使用 `www` 子域。 如果您配置 `www` 子域，我们会自动尝试保护相关的 apex 域。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。

在配置用户或组织网站的自定义域后，自定义域名将替换未配置自定义域的帐户所拥有的任何项目网站 URL 的 `<user>.github.io` 或 `<organization>.github.io` 部分。 例如，如果您的用户网站的自定义域名为 `www.octocat.com`，并且您拥有一个未自定义域名的项目网站，该网站从名为 `octo-project` 的仓库发布，则该仓库的 {% data variables.product.prodname_pages %} 网站将在 `www.octocat.com/octo-project` 上提供。

## 对您的 {% data variables.product.prodname_pages %} 网站使用子域名

子域名是根域前 URL 的一部分。 您可以将子域名配置为 `www` 或网站的独特部分，如 `blog.example.com`。

子域名配置通过 DNS 提供商使用 `CNAME` 记录配置。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)。

### `www` 子域

`www` 子域名是最常用的一种子域名。 例如，`www.example.com` 包含 `www` 子域名。

`www` 子域名是最稳定的一种自定义域，因为 `www` 子域名不受 {% data variables.product.product_name %} 服务器 IP 地址变动的影响。

### 自定义子域

自定义子域是一种不使用标准 `www` 变体的子域。 自定义子域主要在您需要将网站分为两个不同的部分时使用。 例如，您可以创建一个名为 `blog.example.com` 并自定义该部分与 `www.example.com` 分开。

## 对您的 {% data variables.product.prodname_pages %} 网站使用 apex 域

Apex 域是一个不包含子域的自定义域，如 `example.com`。 Apex 域也称为基础域、裸域、根 apex 域或区域 apex 域。

Apex 域配置通过 DNS 提供商使用 `A`, `ALAS` 或 `ANAME` 记录配置。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)。

{% data reusables.pages.www-and-apex-domain-recommendation %}更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 站点的自定义域](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)”。

## 保护 {% data variables.product.prodname_pages %} 网站的自定义域

{% data reusables.pages.secure-your-domain %} 更多信息请参阅“[验证 {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)的自定义域”和“[管理 {% data variables.product.prodname_pages %} 站点的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。

有许多原因会导致您的网站被自动禁用。

- 如果您从 {% data variables.product.prodname_pro %} 降级到 {% data variables.product.prodname_free_user %}，则目前发布自您的帐户中私有仓库的任何 {% data variables.product.prodname_pages %} 站点都会取消发布。 更多信息请参阅“[Downgrading your {% data variables.product.prodname_dotcom %} 结算方案](/articles/downgrading-your-github-billing-plan)”。
- 如果将私人仓库转让给使用 {% data variables.product.prodname_free_user %} 的个人帐户，仓库将失去对 {% data variables.product.prodname_pages %} 功能的访问，当前发布的 {% data variables.product.prodname_pages %} 站点将取消发布。 更多信息请参阅“[转让仓库](/articles/transferring-a-repository)”。

## 延伸阅读

- "[自定义域名和 {% data variables.product.prodname_pages %} 疑难解答](/articles/troubleshooting-custom-domains-and-github-pages)"
