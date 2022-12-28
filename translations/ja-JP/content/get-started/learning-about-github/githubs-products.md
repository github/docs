---
title: GitHub の製品
intro: '{% data variables.product.prodname_dotcom %} の製品と価格プランの概要。'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160040'
---
## {% data variables.product.prodname_dotcom %} の製品について

{% data variables.product.prodname_dotcom %} では、コードを保存および共同作業するための無料および有料の製品が提供されます。 一部の製品は個人アカウントにのみ適用され、他のプランは組織アカウントと Enterprise アカウントにのみ適用されます。 アカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

各製品の料金と機能の全リストは <{% data variables.product.pricing_url %}> に掲載されています。 {% data reusables.products.product-roadmap %}

{% data variables.product.prodname_docs %} を読み取る場合は、製品を反映するバージョンを選択してください。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

## 個人アカウント用の {% data variables.product.prodname_free_user %}

個人アカウント用の {% data variables.product.prodname_free_team %} では、完全な機能セットを持つ無制限のパブリック リポジトリ上で無制限のコラボレータと、そして限定された機能セットを持つ無制限のプライベート リポジトリ上で作業ができます。

{% data variables.product.prodname_free_user %} の個人アカウントには次が含まれます。
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- 2 要素認証の強制
- 1 か月あたり 2,000 {% data variables.product.prodname_actions %} 分 
- 500 MB {% data variables.product.prodname_registry %} ストレージ {% ifversion fpt or ghec%}
- 1 か月あたり 120 {% data variables.product.prodname_github_codespaces %} コア時間
- 1 か月あたり 15 GB {% data variables.product.prodname_github_codespaces %} ストレージ {% endif %}

## {% data variables.product.prodname_pro %}

個人アカウント用の {% data variables.product.prodname_free_user %} で利用できる機能に加え、{% data variables.product.prodname_pro %} には以下が含まれます。
- メールでの{% data variables.contact.github_support %}
- 1 か月あたり 3,000 {% data variables.product.prodname_actions %} 分 
- 2 GB {% data variables.product.prodname_registry %} ストレージ {% ifversion fpt or ghec%}
- 1 か月あたり 180 {% data variables.product.prodname_github_codespaces %} コア時間
- 1 か月あたり 20 GB {% data variables.product.prodname_github_codespaces %} ストレージ{% endif %}
- プライベートリポジトリでの高度なツールとインサイト：
  - 必須のプル リクエスト レビュー担当者
  - 複数のプル リクエスト レビュー担当者
  - 保護されたブランチ
  - コード オーナー
  - 参照の自動リンク
  - {% data variables.product.prodname_pages %}
  - Wiki
  - リポジトリインサイトグラフ: パルス、コントリビュータ−、トラフィック、コミット、コード更新頻度、ネットワーク、フォーク

## 組織の {% data variables.product.prodname_free_team %}

Organizationの{% data variables.product.prodname_free_team %}では、完全な機能セットを持つ無制限のパブリックリポジトリ上で無制限のコラボレータ、あるいは限定された機能セットを持つ無制限のプライベートリポジトリで作業ができます。

個人アカウント用の {% data variables.product.prodname_free_user %} で利用できる機能に加えて、Organizationの {% data variables.product.prodname_free_team %} には以下が含まれます。
- {% data variables.product.prodname_gcf %}
- Team ディスカッション
- グループを管理するための Team アクセス コントロール
- 1 か月あたり 2,000 {% data variables.product.prodname_actions %} 分 
- 500 MB {% data variables.product.prodname_registry %} ストレージ 

## {% data variables.product.prodname_team %}

Organizationの{% data variables.product.prodname_free_team %}で利用できる機能に加えて、{% data variables.product.prodname_team %}には以下が含まれます。
- メールでの{% data variables.contact.github_support %}
- 1 か月あたり 3,000 {% data variables.product.prodname_actions %} 分 
- 2 GB {% data variables.product.prodname_registry %} ストレージ 
- プライベートリポジトリでの高度なツールとインサイト：
  - 必須のプル リクエスト レビュー担当者
  - 複数のプル リクエスト レビュー担当者
  - ドラフト プル リクエスト
  - Team のプル リクエスト レビュー担当者
  - 保護されたブランチ
  - コード オーナー
  - スケジュールされたリマインダー
  - {% data variables.product.prodname_pages %}
  - Wiki
  - リポジトリ分析情報グラフ: パルス、共同作成者、トラフィック、コミット、コードの更新頻度、ネットワーク、フォーク {%- ifversion fpt or ghec %}
- {% data variables.product.prodname_github_codespaces %} を有効にするオプション
  - 組織の所有者は、使用制限を設定し、組織のメンバーにユーザーのアクセス許可を付与することで、組織の {% data variables.product.prodname_github_codespaces %} を有効にすることができます。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」をご覧ください。
{%- endif %}

{% data variables.product.company_short %} では、ユーザーごとに {% data variables.product.prodname_team %} に対して課金されます。 詳細については、「[ユーザーごとの価格について]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)」{% ifversion fpt %} Free、Pro、Team のドキュメントの「{% else %}」を参照してください。{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} には、クラウドホストとセルフホストの 2 種類のデプロイメントオプションがあります。 

{% data variables.product.prodname_team %} で利用可能な機能に加えて、{% data variables.product.prodname_enterprise %} には以下が含まれます。
- {% data variables.contact.enterprise_support %}
- 追加のセキュリティ、コンプライアンス、およびデプロイメントコントロール
- SAML シングル サインオンによる認証
- SAML または SCIM を使用したアクセスのプロビジョニング
- {% data variables.product.prodname_github_connect %}
- {% data variables.product.prodname_GH_advanced_security %} を購入するオプション。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

{% data variables.product.prodname_ghe_cloud %} には次も含まれます:
- {% data variables.contact.enterprise_support %}。 詳細については、「<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} サポート</a>」および「<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 補遺</a>」を参照してください。
- 1 か月あたり 50,000 {% data variables.product.prodname_actions %} 分 
- 50 GB {% data variables.product.prodname_registry %} ストレージ 
- {% data variables.product.prodname_pages %} サイトのアクセス制御。 詳細については、「[{% data variables.product.prodname_pages %} サイトの可視性の変更](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)」を参照してください。
- 99.9% の月間稼働率のサービス レベル アグリーメント
- {% data variables.product.prodname_emus %} 用にエンタープライズを構成するオプションを使用すると、ID プロバイダーでメンバーをプロビジョニングおよび管理し、メンバーの投稿を自分のエンタープライズのみに制限できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
- エンタープライズアカウントで複数の {% data variables.product.prodname_dotcom_the_website %} Organization に対してポリシーと請求を一元管理するためのオプション。 詳細については、「[Enterprise アカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)」を参照してください。

{% data reusables.enterprise.about-github-for-enterprises %}

{% data variables.product.prodname_ghe_cloud %} を評価するためのトライアルを設定できます。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} の試用版を設定する](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud)」を参照してください。

試用版の設定など、{% data variables.product.prodname_ghe_server %} の独自のインスタンスをホストする方法について詳しくは、「[{% data variables.product.prodname_ghe_server %} について](/enterprise-server/admin/overview/about-github-enterprise-server)」をご覧ください。

## 参考資料

- 「[ユーザーごとの価格付けについて]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)」{% ifversion not ghec %}({% data variables.product.prodname_ghe_cloud %} ドキュメント){% endif %}
