---
title: GitHub Pages サイトの可視性を変更する
intro: プロジェクトサイトをパブリックまたはプライベートで公開することにより、プロジェクトサイトのアクセス制御を管理できます。
product: '{% data reusables.gated-features.private-pages %}'
versions:
  free-pro-team: '*'
permissions: 'People with admin permissions for a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
---

### {% data variables.product.prodname_pages %} サイトのアクセス制御について

プロジェクトサイトが {% data variables.product.prodname_ghe_cloud %} を使用する Organization が所有するプライベートもしくは内部リポジトリから公開される場合、そのサイトのアクセス制御を管理できます。 アクセス制御を使用すると、インターネット上のすべての人にサイトを公開する（パブリック）か、リポジトリへの読み取りアクセス権を持つ人限定で公開する（プライベート）かを選択できます。 プライベートで公開されたサイトでは、社内のドキュメントやナレッジベースを Enterprise のメンバーと共有できます。 Organization サイトのアクセス制御を管理することはできません。 For more information about the types of {% data variables.product.prodname_pages %} sites, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

プライベートのサイトは、パブリックのサイトとは異なるサブドメインで利用できます。 これにより、{% data variables.product.prodname_pages %} サイトが公開された瞬間から安全になります。

- `*.pages.github.io` のすべてのサブドメインを TLS 証明書で自動的に保護し、HSTS を適用して、ブラウザーが常に HTTPS 経由でページを提供するようにします。
- プライベートページには一意のサブドメインを使用して、Organization 内の他のリポジトリがプライベートページと同じオリジンでコンテンツを公開できないようにします。 これにより、プライベートページが「[Cookie のトス](https://github.blog/2013-04-09-yummy-cookies-across-domains/)」から保護されます。 これが、`github.com` ドメインで {% data variables.product.prodname_pages %} サイトをホストしない理由でもあります。

リポジトリ設定のページタブで、サイトの一意のサブドメインを確認できます。 リポジトリ名をパスとしてサイトをビルドするように設定された静的サイトジェネレータを使用している場合、サイトをプライベートに変更するときに静的サイトジェネレータの設定を更新する必要がある場合があります。 For more information, see "[Configuring Jekyll in your {% data variables.product.prodname_pages %} site](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" or the documentation for your static site generator.

カスタムドメインを設定して、プライベートの {% data variables.product.prodname_pages %} サイトに短くて記憶に残るドメインを使用できます。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインの設定](/pages/configuring-a-custom-domain-for-your-github-pages-site)」を参照してください。

### {% data variables.product.prodname_pages %} サイトの可視性を変更する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. [{% data variables.product.prodname_pages %}] の下で、[**{% data variables.product.prodname_pages %} visibility**] ドロップダウンメニューを選択してから、可視性をクリックします。 ![サイトの可視性を選択するドロップダウンメニュー](/assets/images/help/pages/public-or-private-visibility.png)
4. 公開されたサイトを見るには、"{% data variables.product.prodname_pages %}"の下で、サイトのURLをクリックしてください。 ![プライベートで公開されたサイトの URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
