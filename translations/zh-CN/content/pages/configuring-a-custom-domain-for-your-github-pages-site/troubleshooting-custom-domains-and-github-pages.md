---
title: 自定义域和 GitHub Pages 疑难解答
intro: '您可以检查常见错误，以解决与 {% data variables.product.prodname_pages %} 站点的自定义域或 HTTPS 相关的问题。'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: 排除自定义域的故障
---

## _CNAME_ 错误

{% ifversion pages-custom-workflow %}If you are publishing from a custom {% data variables.product.prodname_actions %} workflow, any _CNAME_ file is ignored and is not required.{% endif %}

If you are publishing from a branch, custom domains are stored in a _CNAME_ file in the root of your publishing source. 您可以通过仓库设置或手动添加或更新此文件。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。

要让您的站点呈现在正确的域中，请确保您的 _CNAME_ 文件仍存在于仓库中。 例如，许多静态站点生成器会强制推送到您的仓库，这可能会覆盖在配置自定义域时添加到仓库中的 _CNAME_ 文件。 如果您在本地构建站点并将生成的文件推送到 {% data variables.product.product_name %}，请确保先将添加 _CNAME_ 文件的提交拉取到本地仓库，使该文件纳入到构建中。

然后，确保 _CNAME_ 文件格式正确。

- _CNAME_ 文件名必须全部大写。
- _CNAME_ 文件只能包含一个域。 要将多个域指向您的站点，必须通过 DNS 提供程序设置重定向。
- _CNAME_ 文件只能包含一个域名。 例如，`www.example.com`、`blog.example.com` 或 `example.com`。
- 域名在所有 {% data variables.product.prodname_pages %} 站点中必须是唯一的。 例如，如果另一个仓库的 _CNAME_ 文件包含 `example.com`，则不能在您仓库的 _CNAME_ 文件中使用 `example.com`。

## DNS 配置错误

如果将站点的默认域指向自定义域时遇到问题，请联系 DNS 提供商。

您还可以使用以下方法之一来测试自定义域的 DNS 记录是否正确配置：

- CLI 工具，如 `dig`。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。
- 在线 DNS 查找工具。

## 自定义域名不受支持

如果您的自定义域不受支持，则可能需要将您的域更改为受支持的域。 也可以联系您的 DNS 提供商，看他们是否提供域名转发服务。

确保您的站点没有：
- 使用多个 apex 域。 例如，同时使用 `example.com` 和 `anotherexample.com`。
- 使用多个 `www` 子域。 例如，同时使用 `www.example.com` 和 `www.anotherexample.com`。
- 同时使用 apex 域和自定义子域。 例如，同时使用 `example.com` 和 `docs.example.com`。

  一个例外是 `www` 子域。 如果配置正确， `www` 子域将自动重定向到 apex 域。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)。

{% data reusables.pages.wildcard-dns-warning %}

有关支持的自定义域列表，请参阅“[关于自定义域和 {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)”。

## HTTPS 错误

通过 `CNAME`、`ALIAS`、`ANAME` 或 `A` DNS 记录正确配置的使用自定义域的 {% data variables.product.prodname_pages %} 站点可通过 HTTPS 进行访问。 更多信息请参阅“[使用 HTTPS 保护 {% data variables.product.prodname_pages %} 站点](/articles/securing-your-github-pages-site-with-https)”。

配置自定义域后，您的站点可能需要最多一个小时才能通过 HTTPS 访问。 更新现有 DNS 设置后，您可能需要删除自定义域并将其重新添加到站点仓库，以触发启用 HTTPS 的进程。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。

如果您使用的是证书颁发机构授权 (CAA) 记录，则必须存在至少一个值为 `letsencrypt.org` 的 CAA 记录，才能通过 HTTPS 访问您的站点。 更多信息请参阅 Let's Encrypt 文档中的“[证书颁发机构授权 (CAA)](https://letsencrypt.org/docs/caa/)”。

## Linux 上的 URL 格式

如果您站点的 URL 包含以破折号开头或结尾的用户名或组织名称，或者包含连续破折号，则使用 Linux 浏览的用户在尝试访问您的站点时会收到服务器错误。 要解决此问题，请更改您的 {% data variables.product.product_name %} 用户名以删除非字母数字字符。 更多信息请参阅“[更改 {% data variables.product.prodname_dotcom %} 用户名](/articles/changing-your-github-username/)”。

## 浏览器缓存

如果您最近更改或删除了自定义域，但无法在浏览器中访问新 URL，则可能需要清除浏览器的缓存才能访问新 URL。 有关清除缓存的更多信息，请参阅浏览器的文档。
