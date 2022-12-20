---
title: GitHub Pages サイトの可視性を変更する
intro: プロジェクトサイトをパブリックまたはプライベートで公開することにより、プロジェクトサイトのアクセス制御を管理できます。
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145282858'
---
## {% data variables.product.prodname_pages %} サイトのアクセス制御について

{% data variables.product.prodname_pages %} のアクセス制御では、サイトをプライベートで公開することで、プロジェクト サイトへのアクセスを制限できます。 プライベートで公開されたサイトは、サイトの公開元のリポジトリの読み取りアクセスを持っている人だけがアクセスできます。 プライベートで公開されたサイトは、内部的なドキュメンテーションや知識ベースをEnterpriseのメンバーと共有するために利用できます。 

{% data reusables.pages.privately-publish-ghec-only %}

自社で {% data variables.product.prodname_emus %} を使っている場合、アクセス制御は使えず、すべての {% data variables.product.prodname_pages %} サイトには、他のエンタープライズ メンバーのみがアクセスできます。 {% data variables.product.prodname_emus %} の詳しい情報については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)」を参照してください。

Organization が {% data variables.product.prodname_emus %} なしで {% data variables.product.prodname_ghe_cloud %} を使っているなら、サイトをプライベートで公開するか、インターネット上であらゆるユーザーにパブリックで公開するかを選ぶことができます。

アクセス制御は、Organizationが所有するプライベートもしくはインターナルリポジトリから公開されているプロジェクトサイトで利用できます。 Organization サイトのアクセス制御を管理することはできません。 {% data variables.product.prodname_pages %} サイトの種類の詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

## プライベートに公開するサイトのサブドメインについて

プライベートのサイトは、パブリックのサイトとは異なるサブドメインで利用できます。 これにより、{% data variables.product.prodname_pages %} サイトが公開された瞬間から安全になります。

- `*.pages.github.io` のすべてのサブドメインを TLS 証明書で自動的に保護し、HSTS を適用して、ブラウザーが常に HTTPS 経由でページを提供するようにします。
- プライベートに公開するサイトには一意のサブドメインを使い、Organization 内の他のリポジトリがそのサイトと同じオリジンでコンテンツを公開できないようにします。 これにより、サイトは "[cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/)" から保護されます。 これは、`github.com` ドメイン上の {% data variables.product.prodname_pages %} サイトをホストしない理由でもあります。

サイトの一意のサブドメインは、リポジトリ設定の [ページ] タブで確認できます。 リポジトリ名をパスとしてサイトをビルドするように設定された静的サイトジェネレータを使用している場合、サイトをプライベートに変更するときに静的サイトジェネレータの設定を更新する必要がある場合があります。 詳細については、「[{% data variables.product.prodname_pages %} サイトでの Jekyll の構成](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)」または使用している静的サイト ジェネレーターのドキュメントを参照してください。

プライベートに公開するサイトにより短くて覚えやすいドメインを使うには、カスタム ドメインを構成します。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインの構成](/pages/configuring-a-custom-domain-for-your-github-pages-site)」を参照してください。

## {% data variables.product.prodname_pages %} サイトの可視性を変更する

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. "{% data variables.product.prodname_pages %}" の下で、 **[{% data variables.product.prodname_pages %} の可視性]** ドロップ ダウン メニューを選択してから、可視性をクリックします。
   ![サイトの可視性を選択するドロップダウン](/assets/images/help/pages/public-or-private-visibility.png)
4. 公開されたサイトを見るには、"{% data variables.product.prodname_pages %}"の下で、サイトのURLをクリックしてください。
![プライベートで公開されたサイトの URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
