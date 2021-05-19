---
title: GitHub Pages サイトのカスタムドメインを管理する
intro: '特定の DNS レコードとリポジトリ設定を設定または更新し、{% data variables.product.prodname_pages %} サイトのデフォルトドメインをカスタムドメインに指定することができます。'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain/
  - /articles/setting-up-a-www-subdomain/
  - /articles/setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain-and-www-subdomain/
  - /articles/adding-a-cname-file-to-your-repository/
  - /articles/setting-up-your-pages-site-repository/
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - pages
---
リポジトリの管理者権限があるユーザは、{% data variables.product.prodname_pages %} サイトのカスタムドメインを設定できます。

### カスタムドメインの設定について

DNS プロバイダでカスタムドメインを設定する前に、必ず {% data variables.product.prodname_pages %} サイトをカスタムドメインに追加してください。 カスタムドメインを {% data variables.product.product_name %} に追加せずに DNS プロバイダに設定すると、別のユーザがあなたのサブドメインにサイトをホストできることになります。

{% windows %}

DNS レコードの設定が正しいかどうかを検証するために利用できる`dig` コマンドは、Windows には含まれていません。 DNS レコードが正しく設定されているかを検証する前に、[BIND](https://www.isc.org/bind/) をインストールする必要があります。

{% endwindows %}

{% note %}

**注釈:** DNS の変更が伝播するには、最大 24 時間かかります。

{% endnote %}

### サブドメインを設定する

To set up a `www` or custom subdomain, such as `www.example.com` or `blog.example.com`, you must add your domain in the repository settings, which will create a CNAME file in your site’s repository. After that, configure a CNAME record with your DNS provider.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. "Custom domain（カスタムドメイン）" の下で、カスタムドメインを入力して**Save（保存）**をクリックします。 これで_CNAME_ファイルを公開ソースのルートに追加するコミットが作成されます。 ![カスタムドメインの保存ボタン](/assets/images/help/pages/save-custom-subdomain.png)
5. お使いの DNS プロバイダにアクセスし、サブドメインがサイトのデフォルトドメインを指す `CNAME` レコードを作成します。 たとえば、サイトで `www.example.com` というサブドメインを使いたい場合、`www.example.com` が `<user>.github.io` を指す`CNAME` レコードを作成します。 If you want to use the subdomain `www.anotherexample.com` for your organization site, create a `CNAME` record that points `www.anotherexample.com` to `<organization>.github.io`. The `CNAME` record should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS レコードが正しくセットアップされたことを確認するには、 `dig` コマンドを使います。_WWW.EXAMPLE.COM_ は、お使いのサブドメインに置き換えてください。
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Apexドメインを設定する

Apex ドメイン、たとえば`example.com` を設定するには、{% data variables.product.prodname_pages %} リポジトリで _CNAME_ ファイルを設定し、DNS プロバイダに `ALIAS`、`ANAME`、または`A` レコードを設定する必要があります。

{% data reusables.pages.www-and-apex-domain-recommendation %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. "Custom domain（カスタムドメイン）" の下で、カスタムドメインを入力して**Save（保存）**をクリックします。 これで_CNAME_ファイルを公開ソースのルートに追加するコミットが作成されます。 ![カスタムドメインの保存ボタン](/assets/images/help/pages/save-custom-apex-domain.png)
5. DNS プロバイダに移動し、`ALIAS`、`ANAME`、または `A` レコードを作成します。 {% data reusables.pages.contact-dns-provider %}
    - `ALIAS`または`ANAME`レコードを作成するには、Apexドメインをサイトのデフォルトドメインにポイントします。 {% data reusables.pages.default-domain-information %}
    - `A` レコードを作成するには、Apex ドメインを{% data variables.product.prodname_pages %} の IP アドレスにポイントします。
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS レコードが正しく設定されたことを確認するには、 `dig` コマンドを使います。_EXAMPLE.COM_ は、お使いの Apex ドメインに置き換えてください。 結果が、上記の {% data variables.product.prodname_pages %} の IP アドレスに一致することを確認します。
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### 参考リンク

- [カスタムドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages)
