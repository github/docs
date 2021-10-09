---
title: GitHub Pages サイトの可視性を変更する
intro: プロジェクトサイトをパブリックまたはプライベートで公開することにより、プロジェクトサイトのアクセス制御を管理できます。
product: '{% data reusables.gated-features.private-pages %}'
versions:
  fpt: '*'
permissions: 'People with admin permissions for a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: サイトの可視性の変更
---

## {% data variables.product.prodname_pages %} サイトのアクセス制御について

With access control for {% data variables.product.prodname_pages %}, you can restrict access to your {% data variables.product.prodname_pages %} site by publishing the site privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.

If your enterprise uses {% data variables.product.prodname_emus %}, all {% data variables.product.prodname_pages %} sites are privately published. For more information about {% data variables.product.prodname_emus %}, see "[About  {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

If your organization uses {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, you can choose to publish your sites privately or publicly to anyone on the internet. Access control is available for project sites that are published from a private or internal repository that are owned by the organization. Organization サイトのアクセス制御を管理することはできません。 {% data variables.product.prodname_pages %}サイトの種類に関する詳しい情報については「[{% data variables.product.prodname_pages %}について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

プライベートのサイトは、パブリックのサイトとは異なるサブドメインで利用できます。 これにより、{% data variables.product.prodname_pages %} サイトが公開された瞬間から安全になります。

- `*.pages.github.io` のすべてのサブドメインを TLS 証明書で自動的に保護し、HSTS を適用して、ブラウザーが常に HTTPS 経由でページを提供するようにします。
- プライベートページには一意のサブドメインを使用して、Organization 内の他のリポジトリがプライベートページと同じオリジンでコンテンツを公開できないようにします。 これにより、プライベートページが「[Cookie のトス](https://github.blog/2013-04-09-yummy-cookies-across-domains/)」から保護されます。 これが、`github.com` ドメインで {% data variables.product.prodname_pages %} サイトをホストしない理由でもあります。

リポジトリ設定のページタブで、サイトの一意のサブドメインを確認できます。 リポジトリ名をパスとしてサイトをビルドするように設定された静的サイトジェネレータを使用している場合、サイトをプライベートに変更するときに静的サイトジェネレータの設定を更新する必要がある場合があります。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイトで Jekyll を設定する](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)」または静的サイトジェネレータのドキュメントを参照してください。

カスタムドメインを設定して、プライベートの {% data variables.product.prodname_pages %} サイトに短くて記憶に残るドメインを使用できます。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインの設定](/pages/configuring-a-custom-domain-for-your-github-pages-site)」を参照してください。

## {% data variables.product.prodname_pages %} サイトの可視性を変更する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. [{% data variables.product.prodname_pages %}] の下で、[**{% data variables.product.prodname_pages %} visibility**] ドロップダウンメニューを選択してから、可視性をクリックします。 ![サイトの可視性を選択するドロップダウンメニュー](/assets/images/help/pages/public-or-private-visibility.png)
4. 公開されたサイトを見るには、"{% data variables.product.prodname_pages %}"の下で、サイトのURLをクリックしてください。 ![プライベートで公開されたサイトの URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
