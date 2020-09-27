---
title: GitHub Pages サイトのカスタムドメインを管理する
intro: '特定の DNS レコードとリポジトリ設定を設定または更新し、{{ site.data.variables.product.prodname_pages }} サイトのデフォルトドメインをカスタムドメインに指定することができます。'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain/
  - /articles/setting-up-a-www-subdomain/
  - /articles/setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain-and-www-subdomain/
  - /articles/adding-a-cname-file-to-your-repository/
  - /articles/setting-up-your-pages-site-repository/
  - /articles/managing-a-custom-domain-for-your-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
---

リポジトリの管理者権限があるユーザは、{{ site.data.variables.product.prodname_pages }} サイトのカスタムドメインを設定できます。

### カスタムドメインの設定について

DNS プロバイダでカスタムドメインを設定する前に、必ず {{ site.data.variables.product.prodname_pages }} サイトをカスタムドメインに追加してください。 カスタムドメインを {{ site.data.variables.product.product_name }} に追加せずに DNS プロバイダに設定すると、別のユーザがあなたのサブドメインにサイトをホストできることになります。

{% windows %}

DNS レコードの設定が正しいかどうかを検証するために利用できる`dig` コマンドは、Windows には含まれていません。 DNS レコードが正しく設定されているかを検証する前に、[BIND](https://www.isc.org/bind/) をインストールする必要があります。

{% endwindows %}

{% note %}

**注釈:** DNS の変更が伝播するには、最大 24 時間かかります。

{% endnote %}

### サブドメインを設定する

`www` 、または `www.example.com` や `blog.example.com` のようなカスタムサブドメインを設定するには、サイトのリポジトリに _CNAME_ ファイルを作成し、DNS プロバイダで `CNAME` レコードを設定する必要があります。

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.save-custom-domain }}
5. お使いの DNS プロバイダにアクセスし、サブドメインがサイトのデフォルトドメインを指す `CNAME` レコードを作成します。 たとえば、サイトで `www.example.com` というサブドメインを使いたい場合、`www.example.com` が `<user>.github.io` を指す`CNAME` レコードを作成します。 If you want to use the subdomain `www.anotherexample.com` for your organization site, create a `CNAME` record that points `www.anotherexample.com` to `<organization>.github.io`. The `CNAME` file should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name. {{ site.data.reusables.pages.contact-dns-provider }}{{ site.data.reusables.pages.default-domain-information }}
{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
6. DNS レコードが正しくセットアップされたことを確認するには、 `dig` コマンドを使います。_WWW.EXAMPLE.COM_ は、お使いのサブドメインに置き換えてください。
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{{ site.data.reusables.pages.build-locally-download-cname }}
{{ site.data.reusables.pages.enforce-https-custom-domain }}

### Apexドメインを設定する

Apex ドメイン、たとえば`example.com` を設定するには、{{ site.data.variables.product.prodname_pages }} リポジトリで _CNAME_ ファイルを設定し、DNS プロバイダに `ALIAS`、`ANAME`、または`A` レコードを設定する必要があります。

{{ site.data.reusables.pages.www-and-apex-domain-recommendation }}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.save-custom-domain }}
5. DNS プロバイダに移動し、`ALIAS`、`ANAME`、または `A` レコードを作成します。 {{ site.data.reusables.pages.contact-dns-provider }}
    - `ALIAS`または`ANAME`レコードを作成するには、Apexドメインをサイトのデフォルトドメインにポイントします。 {{ site.data.reusables.pages.default-domain-information }}
    - `A` レコードを作成するには、Apex ドメインを{{ site.data.variables.product.prodname_pages }} の IP アドレスにポイントします。
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
6. DNS レコードが正しく設定されたことを確認するには、 `dig` コマンドを使います。_EXAMPLE.COM_ は、お使いの Apex ドメインに置き換えてください。 結果が、上記の {{ site.data.variables.product.prodname_pages }} の IP アドレスに一致することを確認します。
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{{ site.data.reusables.pages.build-locally-download-cname }}
{{ site.data.reusables.pages.enforce-https-custom-domain }}

### 参考リンク

- [カスタムドメインと {{ site.data.variables.product.prodname_pages }} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages)
