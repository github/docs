---
title: 管理 GitHub Pages 站点的自定义域
intro: '您可以设置或更新某些 DNS 记录和仓库设置，以将 {% data variables.product.prodname_pages %} 站点的默认域指向自定义域。'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain/
  - /articles/setting-up-a-www-subdomain/
  - /articles/setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain-and-www-subdomain/
  - /articles/adding-a-cname-file-to-your-repository/
  - /articles/setting-up-your-pages-site-repository/
  - /articles/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - 页面
---

拥有仓库管理员权限的人可为 {% data variables.product.prodname_pages %} 站点配置自定义域。

### 关于自定义域配置

使用 DNS 提供程序配置自定义域之前，请确保将自定义域添加到您的 {% data variables.product.prodname_pages %} 站点。 使用 DNS 提供程序配置自定义域而不将其添加到 {% data variables.product.product_name %}，可能导致其他人能够在您的某个子域上托管站点。

{% windows %}

`dig` 命令可用于验证 DNS 记录的配置是否正确，它未包含在 Windows 中。 在验证 DNS 记录的配置是否正确之前，必须安装 [BIND](https://www.isc.org/bind/)。

{% endwindows %}

{% note %}

**注：**DNS 更改可能需要最多 24 小时才能传播。

{% endnote %}

### 配置子域

要设置 `www` 或自定义子域，例如 `www.example.com` 或 `blog.example.com`，您必须将域添加到仓库设置，这将在站点的仓库中创建 CNAME 文件。 然后，通过 DNS 提供商配置 CNAME 记录。

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. 在 "Custom domain（自定义域）"下，输入自定义域，然后单击 **Save（保存）**。 这将创建一个在发布源根目录中添加 _CNAME _ 文件的提交。 ![保存自定义域按钮](/assets/images/help/pages/save-custom-subdomain.png)
5. 导航到您的 DNS 提供程序并创建 `CNAME` 记录，使子域指向您站点的默认域。 例如，如果要对您的用户站点使用子域 `www.example.com`，您可以创建 `CNAME` 记录，使 `www.example.com` 指向 `<user>.github.io`。 如果要对您的组织站点使用子域 `www.anotherexample.com`，您可以创建 `CNAME` 记录，使 `www.anotherexample.com` 指向 `<organization>.github.io`。 `CNAME` 记录应该始终指向 `<user>.github.io` 或 `<organization>.github.io`，不包括仓库名称。 {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. 要确认您的 DNS 记录配置正确，请使用 `dig` 命令，将 _WWW.EXAM.COM_ 替换为您的子域。
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### 配置 apex 域

要设置 apex 域，例如 `example.com`，您必须使用 DNS 提供程序配置 {% data variables.product.prodname_pages %} 仓库中的 _CNAME_ 文件和 `ALIAS`、`ANAME` 或 `A` 记录。

{% data reusables.pages.www-and-apex-domain-recommendation %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. 在 "Custom domain（自定义域）"下，输入自定义域，然后单击 **Save（保存）**。 这将创建一个在发布源根目录中添加 _CNAME _ 文件的提交。 ![保存自定义域按钮](/assets/images/help/pages/save-custom-apex-domain.png)
5. 导航到 DNS 提供程序并创建一个 `ALIAS`、`ANAME` 或 `A` 记录。 {% data reusables.pages.contact-dns-provider %}
    - 要创建 `ALIAS` 或 `ANAME` 记录，请将 apex 域指向站点的默认域。 {% data reusables.pages.default-domain-information %}
    - 要创建 `A` 记录，请将 apex 域指向 {% data variables.product.prodname_pages %} 的 IP 地址。
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. 要确认您的 DNS 记录配置正确，请使用 `dig` 命令，将 _EXAM.COM_ 替换为您的 apex 域。 确认结果与上面 {% data variables.product.prodname_pages %} 的 IP 地址相匹配。
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### 延伸阅读

- "[自定义域名和 {% data variables.product.prodname_pages %} 疑难解答](/articles/troubleshooting-custom-domains-and-github-pages)"
