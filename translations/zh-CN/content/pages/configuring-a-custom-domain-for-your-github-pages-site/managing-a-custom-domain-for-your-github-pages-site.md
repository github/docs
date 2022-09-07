---
title: 管理 GitHub Pages 站点的自定义域
intro: '您可以设置或更新某些 DNS 记录和仓库设置，以将 {% data variables.product.prodname_pages %} 站点的默认域指向自定义域。'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain
  - /articles/setting-up-a-www-subdomain
  - /articles/setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain-and-www-subdomain
  - /articles/adding-a-cname-file-to-your-repository
  - /articles/setting-up-your-pages-site-repository
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Manage a custom domain
ms.openlocfilehash: ad96d0be88614e8294e29de74fd7112cfed1bc46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710321'
---
拥有仓库管理员权限的人可为 {% data variables.product.prodname_pages %} 站点配置自定义域。

## 关于自定义域配置

使用 DNS 提供程序配置自定义域之前，请确保将自定义域添加到您的 {% data variables.product.prodname_pages %} 站点。 使用 DNS 提供程序配置自定义域而不将其添加到 {% data variables.product.product_name %}，可能导致其他人能够在您的某个子域上托管站点。

{% windows %}

`dig` 命令可用于验证 DNS 记录的配置是否正确，它未包含在 Windows 中。 必须安装 [BIND](https://www.isc.org/bind/) 才能验证 DNS 记录是否配置正确。

{% endwindows %}

{% note %}

注意：传播 DNS 更改可能需要长达 24 小时的时间。

{% endnote %}

## 配置子域

要设置 `www` 或自定义子域（例如 `www.example.com` 或 `blog.example.com`），必须在存储库设置中添加你的域。 然后，通过 DNS 提供商配置 CNAME 记录。

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. 在“自定义域”下，键入自定义域，然后单击“保存”。 如果从分支发布站点，将会创建一个提交，将 `CNAME` 文件添加到源分支的根目录。 如果使用自定义 {% data variables.product.prodname_actions %} 工作流发布站点，则不会创建 `CNAME` 文件。 有关发布源的详细信息，请参阅“[为 GitHub Pages 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”。
  ![“保存自定义域”按钮](/assets/images/help/pages/save-custom-subdomain.png)
5. 导航到 DNS 提供程序并创建 `CNAME` 记录，使子域指向站点的默认域。 例如，如果要使用子域 `www.example.com` 作为你的用户站点，请创建将 `www.example.com` 指向 `<user>.github.io` 的 `CNAME` 记录。 如果要使用子域 `another.example.com` 作为你的组织站点，请创建将 `another.example.com` 指向 `<organization>.github.io` 的 `CNAME` 记录。 `CNAME` 记录应始终指向 `<user>.github.io` 或 `<organization>.github.io`，排除存储库名称。 {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. 要确认 DNS 记录配置正确，请使用 `dig` 命令，将 WWW.EXAMPLE.COM 替换为子域。
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## 配置 apex 域

要设置顶点域（例如 `example.com`），必须在存储库设置中配置自定义域，并使用 DNS 提供程序配置至少一个 `ALIAS`、`ANAME` 或 `A` 记录。

{% data reusables.pages.www-and-apex-domain-recommendation %} 有关详细信息，请参阅“[配置子域](#configuring-a-subdomain)”。

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. 在“自定义域”下，键入自定义域，然后单击“保存”。 如果从分支发布站点，将会创建一个提交，将 `CNAME` 文件添加到源分支的根目录。 如果使用自定义 {% data variables.product.prodname_actions %} 工作流发布站点，则不会创建 `CNAME` 文件。 有关发布源的详细信息，请参阅“[为 GitHub Pages 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”。
  ![“保存自定义域”按钮](/assets/images/help/pages/save-custom-apex-domain.png)
5. 导航到 DNS 提供程序并创建一条 `ALIAS`、`ANAME` 或 `A` 记录。 还可以为 IPv6 支持创建 `AAAA` 记录。 {% data reusables.pages.contact-dns-provider %}
    - 要创建 `ALIAS` 或 `ANAME` 记录，请将顶点域指向站点的默认域。 {% data reusables.pages.default-domain-information %}
    - 要创建 `A` 记录，请将顶点域指向 {% data variables.product.prodname_pages %} 的 IP 地址。
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - 要创建 `AAAA` 记录，请将顶点域指向 {% data variables.product.prodname_pages %} 的 IP 地址。
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. 要确认 DNS 记录配置正确，请使用 `dig` 命令，将 EXAMPLE.COM 替换为顶点域。 确认结果与上面 {% data variables.product.prodname_pages %} 的 IP 地址相匹配。
   - 适用于 `A` 记录。
    ```shell
    $ dig <em>EXAMPLE.COM</em> +noall +answer -t A
    > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
    > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
    > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
    > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
    ```
   - 适用于 `AAAA` 记录。
    ```shell
    $ dig <em>EXAMPLE.COM</em> +noall +answer -t AAAA
    > <em>EXAMPLE.COM</em>     3600    IN AAAA     2606:50c0:8000::153
    > <em>EXAMPLE.COM</em>     3600    IN AAAA     2606:50c0:8001::153
    > <em>EXAMPLE.COM</em>     3600    IN AAAA     2606:50c0:8002::153
    > <em>EXAMPLE.COM</em>     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## 配置顶点域和 `www` 子域变体

使用顶点域时，建议配置 {% data variables.product.prodname_pages %} 站点，以便在顶点域和该域的 `www` 子域变体中托管内容。

要与顶点域一起设置 `www` 子域，必须先使用 DNS 提供程序创建 `ALIAS`、`ANAME` 或 `A` 记录来配置顶点域。 有关详细信息，请参阅[配置顶点域](#configuring-an-apex-domain)。

配置 apex 域后，您必须通过 DNS 提供商配置 CNAME 记录。

1. 导航到 DNS 提供程序并创建 `CNAME` 记录，使其将 `www.example.com` 指向站点 `<user>.github.io` 或 `<organization>.github.io` 的默认域。 不要包括仓库名称。 {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. 要确认 DNS 记录配置正确，请使用 `dig` 命令，将 `www` 替换为子域变体。
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
## 删除自定义域

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. 在“自定义域”下，单击“删除”。
  ![“保存自定义域”按钮](/assets/images/help/pages/remove-custom-domain.png)

## 保护自定义域

{% data reusables.pages.secure-your-domain %} 有关详细信息，请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”。

## 延伸阅读

- [自定义域和 {% data variables.product.prodname_pages %} 故障排除](/articles/troubleshooting-custom-domains-and-github-pages)
