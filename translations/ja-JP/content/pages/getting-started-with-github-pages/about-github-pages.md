---
title: GitHub Pages について
intro: '{% data variables.product.prodname_pages %}を使って、あなた自身、あなたのOrganizaiton、あなたのプロジェクトに関するWebサイトを{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上のリポジトリから直接ホストできます。'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507990'
---
## {% data variables.product.prodname_pages %} について

{% data variables.product.prodname_pages %} は、{% data variables.product.product_name %} のリポジトリから HTML、CSS、および JavaScript ファイル を直接取得し、任意でビルドプロセスを通じてファイルを実行し、ウェブサイトを公開できる静的なサイトホスティングサービスです。 {% data variables.product.prodname_pages %} サイトの例は、[{% data variables.product.prodname_pages %} サンプル コレクション](https://github.com/collections/github-pages-examples)で確認できます。

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} の `github.io` ドメインまたは独自のカスタム ドメインでサイトをホストできます。 詳細については、「[{% data variables.product.prodname_pages %} でカスタムドメインを使用する](/articles/using-a-custom-domain-with-github-pages)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} 詳しい情報については、{% data variables.product.prodname_ghe_cloud %} の「[{% data variables.product.prodname_pages %} サイトの可視性を変更する]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %}」のドキュメントを参照してください{% else %}。"{% endif %} {% endif %}

作業を開始する場合は、「[{% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site)」を参照してください。

{% ifversion fpt or ghes or ghec %} 組織の所有者は、組織のリポジトリからの {% data variables.product.prodname_pages %} サイトの公開を無効にすることができます。 詳細については、「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。
{% endif %}

## {% data variables.product.prodname_pages %} サイトの種類

{% data variables.product.prodname_pages %} サイトには、3 つの種類があります。プロジェクト、ユーザ、そして Organization です。 プロジェクトサイトは、JavaScript ライブラリやレシピ集など、{% data variables.product.product_name %} の特定のプロジェクトに関するものです。 ユーザ及びOrganizationのサイトは、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上の特定のアカウントに接続されます。

ユーザー サイトを公開するには、自分の個人アカウントが所有する {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %} という名前のリポジトリを作成する必要があります。 組織サイトを公開するには、{% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %} という名前の組織が所有するリポジトリを作成する必要があります。 {% ifversion fpt or ghec %}カスタム ドメインを使用している場合を除き、ユーザーおよび組織サイトは `http(s)://<username>.github.io` または `http(s)://<organization>.github.io` で利用できます。{% elsif ghae %}ユーザーおよび組織サイトは `http(s)://pages.<hostname>/<username>` または `http(s)://pages.<hostname>/<organization>` で利用できます。{% endif %}

プロジェクトサイトのソースファイルは、プロジェクトと同じリポジトリに保存されます。 {% ifversion fpt or ghec %}カスタム ドメインを使用している場合を除き、プロジェクト サイトは `http(s)://<username>.github.io/<repository>` または `http(s)://<organization>.github.io/<repository>` で利用できます。{% elsif ghae %}プロジェクト サイトは `http(s)://pages.<hostname>/<username>/<repository>/` または `http(s)://pages.<hostname>/<organization>/<repository>/` で利用できます。{% endif %}

{% ifversion ghec %} サイトをプライベートに公開する場合、サイトの URL は異なります。 詳細については、「[{% data variables.product.prodname_pages %} サイトの可視性の変更](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %} カスタム ドメインがサイトの URL にどのように影響するかについて詳しくは、「[カスタム ドメインと {% data variables.product.prodname_pages %} について](/articles/about-custom-domains-and-github-pages)」を参照してください。
{% endif %}

{% data variables.product.product_name %} のアカウントごとに作成できるユーザまたは Organization サイトは 1 つだけです。 Organization または個人アカウントで所有するプロジェクト サイトの数には、制限がありません。

{% ifversion ghes %} サイトが利用できる URL は、{% data variables.product.product_location %} でサブドメインの分離を有効にしているかどうかで異なります。

| サイトの種類 | Subdomain Isolation が有効 | Subdomain isolation が無効 |
| ------------ | --------------------------- | ---------------------------- |
User | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
個人アカウントが所有するプロジェクト サイト | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
組織アカウントが所有するプロジェクト サイト | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

詳細については、「[Subdomain Isolation の有効化](/enterprise/admin/installation/enabling-subdomain-isolation)」を参照するか、サイト管理者にお問い合わせください。
{% endif %}

## {% data variables.product.prodname_pages %} サイトの公開元

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

詳しい情報については、「[GitHub Pages サイトの公開元の構成](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。

{% ifversion ghec %}
## {% data variables.product.prodname_emus %} の制限
{% data variables.product.prodname_managed_user %} が使える {% data variables.product.prodname_pages %} には制限はありません。

  - {% data variables.product.prodname_pages %} サイトは、Organization が所有するリポジトリからのみ公開できます。
  - {% data variables.product.prodname_pages %} サイトは、エンタープライズのその他のメンバーのみが見ることができます。

{% data variables.product.prodname_emus %} の詳しい情報については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)」を参照してください。
{% endif %}

## 静的サイト ジェネレーター

{% data variables.product.prodname_pages %} は、リポジトリにプッシュされたあらゆる静的ファイルを公開します。 静的ファイルを自分で作成することも、静的サイトジェネレータでサイトをビルドすることも可能です。 ローカルまたは別のサーバー上で独自のビルドプロセスをカスタマイズすることもできます。

{% ifversion pages-custom-workflow %}

カスタム ビルド プロセスまたは Jekyll 以外の静的サイト ジェネレーターを使用する場合は、{% data variables.product.prodname_actions %} を作成して、サイトをビルドして公開することができます。 {% data variables.product.product_name %} では、いくつかの静的サイト ジェネレーターのスターター ワークフローが提供されます。 詳しい情報については、「[GitHub Pages サイトの公開元の構成](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。

ソース ブランチからサイトを公開する場合、{% data variables.product.prodname_pages %} では、既定で Jekyll を使用してサイトをビルドします。 Jekyll 以外の静的サイト ジェネレーターを使用する場合は、代わりに {% data variables.product.prodname_actions %} を作成してサイトをビルドして公開することをお勧めします。 それ以外の場合は、公開元のルートに `.nojekyll` という名前の空のファイルを作成して Jekyll ビルド プロセスを無効にし、静的サイト ジェネレーターの指示に従ってローカルでサイトをビルドします。

{% else %}

{% data variables.product.prodname_pages %} に組み込まれている静的サイトジェネレータで、ビルドプロセスを容易化できる Jekyll のご利用をおすすめします。 詳細については、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll)」を参照してください。

{% data variables.product.prodname_pages %} は、デフォルトでは Jekyll を使ってサイトを構築します。 Jekyll 以外の静的サイト ジェネレーターを使用する場合は、公開元のルートに `.nojekyll` という空のファイルを作成し、静的サイト ジェネレーターの指示に従ってローカルでサイトをビルドします。

{% endif %}

{% data variables.product.prodname_pages %} は、PHP、Ruby、Python などのサーバーサイド言語はサポートしていません。

## {% data variables.product.prodname_pages %}の利用上の制限

{% ifversion fpt or ghec %} 2016 年 6 月 15 日以降に作成され、`github.io` ドメインを使用する {% data variables.product.prodname_pages %} サイトは、HTTPS 経由で提供されます。 2016 年 6 月 15 日までにサイトを作成した場合は、サイトへのトラフィックに対して、HTTPS サポートを有効にすることができます。 詳細については、[HTTPS での {% data variables.product.prodname_pages %} の保護](/articles/securing-your-github-pages-site-with-https)に関するページを参照してください。

### 禁止される用途
{% endif %} {% data variables.product.prodname_pages %} は、オンライン ビジネス、eコマース サイト、主に商取引の円滑化またはサービスとしての商用ソフトウェア (SaaS) の提供のどちらかを目的とする、その他の Web サイトを運営するための無料の Web ホスティング サービスとしての使用を意図したものではなく、またそのような使用を許可するものでもありません。 {% data reusables.pages.no_sensitive_data_pages %}

さらに、{% data variables.product.prodname_pages %} の使用には、一獲千金を狙った計画、わいせつなコンテンツ、暴力的あるいは脅迫的なコンテンツや活動に関する制限など、[GitHub 利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service/)が適用されます。

### Usage limits (使用状況の制限)
{% data variables.product.prodname_pages %} サイトには、次の使用制限があります:

  - {% data variables.product.prodname_pages %} ソース リポジトリには、1 GB の推奨上限があります。{% ifversion fpt or ghec %} 詳細については、[ディスク クォータの概要](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)に関するページを参照してください。{% endif %}
  - 公開された{% data variables.product.prodname_pages %}のサイトは1GB以上であってはなりません。
{% ifversion fpt or ghec %}
  - {% data variables.product.prodname_pages %} サイトには、月当たり 100 GB の *ソフトな* 帯域幅制限があります。
  - {% data variables.product.prodname_pages %} サイトには、1 時間あたり 10 ビルドの "ソフト" 制限があります。{% ifversion pages-custom-workflow %} カスタム {% data variables.product.prodname_actions %} ワークフローでサイトをビルドして公開する場合、この制限は適用されません {% endif %}
  - すべての {% data variables.product.prodname_pages %} サイトに一貫したサービス品質を提供するために、レート制限が適用される場合があります。 これらのレート制限は、{% data variables.product.prodname_pages %} の正当な使用を妨げるものではありません。 要求がレート制限をトリガーする場合は、説明を含む HTML 本文と共に、HTTP 状態コードを `429` 伴う適切な応答を受け取ります。

あなたのサイトがこれらの使用割当量を超えている場合、あなたのサイトにサービスを提供できないか、{% data variables.contact.contact_support %} から、あなたのサイトが当社のサーバーに与える影響を減らす方法を示唆するメールが届くことがあります。そうした方法の例としては、サードパーティのコンテンツ配信ネットワーク (CDN) をサイトの前に配置したり、リリースなどの他の {% data variables.product.prodname_dotcom %} 機能を利用したり、ニーズに合った別のホスティングサービスに移行したりすることなどが挙げられます。

{% endif %}

## {% data variables.product.prodname_pages %} での MIME タイプ

MIME タイプとは、ブラウザがリクエストするファイルの性質やフォーマットに関する情報を提供するため、サーバーがブラウザに送信するヘッダのことです。 {% data variables.product.prodname_pages %} は、数千のファイル拡張子にわたり、750 を超える MIME タイプをサポートしています。 サポートされている MIME の種類の一覧は、[mime-db プロジェクト](https://github.com/jshttp/mime-db)から生成されます。

ファイルごと、リポジトリごとにカスタム MIME タイプを指定することはできませんが、{% data variables.product.prodname_pages %} で使う MIME タイプを追加や変更することは可能です。 詳細については、[mime-db のコントリビューション ガイドライン](https://github.com/jshttp/mime-db#adding-custom-media-types)を参照してください。

{% ifversion fpt %}
## データ コレクション

{% data variables.product.prodname_pages %}サイトにアクセスされると、セキュリティを目的として、アクセス者が{% data variables.product.prodname_dotcom %}にサインインしているか否かに関わらず、アクセス者のIPアドレスは記録され、保存されます。 {% data variables.product.prodname_dotcom %} のセキュリティ プラクティスについて詳しくは、「<a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} のプライバシーについての声明</a>」を参照してください。
{% endif %}

## 参考資料

- {% data variables.product.prodname_learning %} の [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages)
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
