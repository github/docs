---
title: GitHub Pages サイトのカスタムドメインを管理する
intro: '特定の DNS レコードとリポジトリ設定を設定または更新し、{% data variables.product.prodname_pages %} サイトのデフォルトドメインをカスタムドメインに指定することができます。'
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
ms.openlocfilehash: d8c11f50369d27a1bf99b10ba843e1525b3d4014
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181258'
---
リポジトリの管理者権限があるユーザは、{% data variables.product.prodname_pages %} サイトのカスタムドメインを設定できます。

## カスタムドメインの設定について

DNS プロバイダでカスタムドメインを設定する前に、必ず {% data variables.product.prodname_pages %} サイトをカスタムドメインに追加してください。 カスタムドメインを {% data variables.product.product_name %} に追加せずに DNS プロバイダに設定すると、別のユーザがあなたのサブドメインにサイトをホストできることになります。

{% windows %}

DNS レコードの構成が正しいかどうかを確認するために利用できる `dig` コマンドは、Windows には含まれていません。 DNS レコードが正しく構成されていることを確認する前に、[BIND](https://www.isc.org/bind/) をインストールする必要があります。

{% endwindows %}

{% note %}

**注:** DNS の変更内容が反映されるまで最大で 24 時間かかることがあります。

{% endnote %}

## サブドメインを設定する

`www` またはカスタム サブドメイン (`www.example.com` や `blog.example.com` など) を設定するには、リポジトリ設定にドメインを追加する必要があります。 その後、DNS プロバイダで CNAME レコードを設定します。

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. [カスタム ドメイン] で、カスタム ドメイン名を入力してから、 **[保存]** をクリックします。 ブランチからサイトを公開している場合は、ソース ブランチのルートに `CNAME` ファイルを追加するコミットが作成されます。 カスタムの {% data variables.product.prodname_actions %} ワークフローを使用してサイトを公開している場合、`CNAME` ファイルは作成されません。 公開元の詳細については、「[GitHub Pages サイトの公開元を設定する](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。
  ![カスタム ドメインの [保存] ボタン](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **メモ:** カスタム ドメインが国際化ドメイン名の場合、Punycode でエンコードされたバージョンを入力する必要があります。
  
  Punycodes について詳しくは、「[国際化ドメイン名](https://en.wikipedia.org/wiki/Internationalized_domain_name)」をご覧ください。
  
  {% endnote %}

5. ご利用の DNS プロバイダーに移動し、サブドメインがサイトの既定のドメインを指す `CNAME`CNAME レコードを作成します。 たとえば、ユーザー サイトのサブドメイン `www.example.com` を使用する場合は、`www.example.com` が `<user>.github.io` を指す `CNAME` レコードを作成します。 組織サイトのサブドメイン `another.example.com` を使用する場合は、`another.example.com` が `<organization>.github.io` を指す `CNAME` レコードを作成します。 `CNAME` レコードは常に、`<user>.github.io` または `<organization>.github.io` (リポジトリ名を除く) を指す必要があります。 {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS レコードが正しく構成されたことを確認するには、`dig` コマンドを使用します。_WWW.EXAMPLE.COM_ はご利用のサブドメインに置き換えてください。
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Apexドメインを設定する

`example.com` などの apex ドメインを設定するには、リポジトリ設定でカスタムドメインを構成し、ご利用の DNS プロバイダーで少なくとも 1 つの `ALIAS`、`ANAME`、または `A` レコードを構成する必要があります。

{% data reusables.pages.www-and-apex-domain-recommendation %} 詳細については、「[サブドメインの構成](#configuring-a-subdomain)」を参照してください。

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. [カスタム ドメイン] で、カスタム ドメイン名を入力してから、 **[保存]** をクリックします。 ブランチからサイトを公開している場合は、ソース ブランチのルートに `CNAME` ファイルを追加するコミットが作成されます。 カスタムの {% data variables.product.prodname_actions %} ワークフローを使用してサイトを公開している場合、`CNAME` ファイルは作成されません。 公開元の詳細については、「[GitHub Pages サイトの公開元を設定する](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。
  ![カスタム ドメインの [保存] ボタン](/assets/images/help/pages/save-custom-apex-domain.png)
5. DNS プロバイダーに移動し、`ALIAS`、`ANAME`、または `A` レコードを作成します。 IPv6 サポートのために `AAAA` レコードを作成することもできます。 {% data reusables.pages.contact-dns-provider %}
    - `ALIAS` または `ANAME` レコードを作成するには、apex ドメインがサイトの既定のドメインを指すようにします。 {% data reusables.pages.default-domain-information %}
    - `A` レコードを作成するには、apex ドメインが {% data variables.product.prodname_pages %} の IP アドレスを指すようにします。
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - `AAAA` レコードを作成するには、apex ドメインが {% data variables.product.prodname_pages %} の IP アドレスを指すようにします。
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. DNS レコードが正しく構成されていることを確認するには、`dig` コマンドを使用します。_EXAMPLE.COM_ はご利用の apex ドメインに置き換えてください。 結果が、上記の {% data variables.product.prodname_pages %} の IP アドレスに一致することを確認します。
   - `A` レコードの場合。
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - `AAAA` レコードの場合。
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## apex ドメインと `www` サブドメイン バリアントの構成

apex ドメインを使用する場合は、コンテンツを apex ドメインとそのドメインの `www` サブドメイン バリアントの両方でホストするように {% data variables.product.prodname_pages %} サイトを構成することをお勧めします。

apex ドメインと共に `www` サブドメインを設定するには、まず、DNS プロバイダーで `ALIAS`、`ANAME`、または `A` レコードを作成して、apex ドメインを構成する必要があります。 詳細については、「[Apex ドメインを設定する](#configuring-an-apex-domain)」を参照してください。

Apexドメインを設定したら、DNSプロバイダでCNAMEレコードを設定しなければなりません。

1. DNS プロバイダーに移動し、`www.example.com` がサイトの既定のドメイン (`<user>.github.io` または `<organization>.github.io`) を指す `CNAME` レコードを作成します。 リポジトリ名は含めないでください。 {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. DNS レコードが正しく構成されたことを確認するには、`dig` コマンドを使用します。_WWW.EXAMPLE.COM_ は、ご利用の `www` サブドメイン バリアントに置き換えてください。
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## カスタムドメインの削除

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. [カスタム ドメイン] で、 **[削除]** をクリックします。
  ![カスタム ドメインの [保存] ボタン](/assets/images/help/pages/remove-custom-domain.png)

## カスタムドメインの保護

{% data reusables.pages.secure-your-domain %} 詳細については、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」を参照してください。

## 参考資料

- "[カスタム ドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages)"
