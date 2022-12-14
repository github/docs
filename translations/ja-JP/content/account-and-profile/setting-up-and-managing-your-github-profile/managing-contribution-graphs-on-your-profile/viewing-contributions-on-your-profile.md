---
title: プロフィールでコントリビューションを表示する
intro: Your {% data variables.product.product_name %} profile shows off {% ifversion fpt or ghes or ghec %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.
redirect_from:
- /articles/viewing-contributions
- /articles/viewing-contributions-on-your-profile-page
- /articles/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: View contributions
ms.openlocfilehash: fccf691bc2fa865dd6ebcdebd112cbe6da02e0b5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145115277"
---
{% ifversion fpt or ghes or ghec %}コントリビューション グラフには、パブリック リポジトリからのアクティビティが表示されます。 {% endif %}匿名化されたプライベート リポジトリでのアクティビティの詳細と一緒に、{% ifversion fpt or ghes or ghec %}パブリックおよび{% endif %}プライベート リポジトリの両方からのアクティビティを表示するように選択できます。 詳細については、「[プライベート コントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。

{% note %}

**注:** コミットは、コミットの作成に使用したメール アドレスが {% data variables.product.product_name %} のアカウントに接続されている場合にのみ、コントリビューション グラフに表示されます。 詳細については、「[自分の投稿がプロフィールに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)」を参照してください。

{% endnote %}

## <a name="what-counts-as-a-contribution"></a>コントリビューションとして何がカウントされるか

プロフィールページでは、特定のアクションがコントリビューションとしてカウントされます:

- リポジトリの既定のブランチまたは `gh-pages` ブランチへのコミット
- イシューのオープン
- ディスカッションをオープンすること
- ディスカッションに回答すること
- プルリクエストを提案すること
- pull request レビューの送信{% ifversion ghes or ghae %}
- リポジトリの既定のブランチまたは `gh-pages` ブランチでのコミットの共同作成{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## <a name="popular-repositories"></a>人気のあるリポジトリ

このセクションには、ウォッチャーが最も多いリポジトリが表示されます。 {% ifversion fpt or ghes or ghec %}[自分のプロファイルにリポジトリをピン留めする](/articles/pinning-repositories-to-your-profile)と、このセクションは [ピン留めされたリポジトリ] に変わります。{% endif %}

![人気のあるリポジトリ](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## <a name="pinned-repositories"></a>Pinned repositories

このセクションには最大 6 つのパブリックリポジトリが表示されます。このリポジトリには、自分のリポジトリだけでなく、自分がコントリビュートしたリポジトリも含めることができます。 選択したリポジトリに関する重要な詳細を簡単に見るために、このセクションの各リポジトリには、行われている作業の概要、そのリポジトリに付けられた[星](/articles/saving-repositories-with-stars/)の数、およびそのリポジトリで使用されている主なプログラミング言語が含まれます。 詳細については、「[プロフィールにアイテムをピン止めする](/articles/pinning-repositories-to-your-profile)」を参照してください。

![Pinned repositories](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## <a name="contributions-calendar"></a>コントリビューションカレンダー

コントリビューションカレンダーは、コントリビューションアクティビティを表示します。

### <a name="viewing-contributions-from-specific-times"></a>特定の時期からのコントリビューションを表示する

- ある日の正方形をクリックすると、その 24 時間の間になされたコントリビューションが表示されます。
- *Shift* キーを押しながら、別の日の正方形をクリックすると、その期間中に行われたコントリビューションが表示されます。

{% note %}

**注:** コントリビューション カレンダーでは最大 1 か月の範囲を選択できます。 より長期間を選択した場合、1 か月分のコントリビューションのみが表示されます。

{% endnote %}

![コントリビューショングラフ](/assets/images/help/profile/contributions_graph.png)

### <a name="how-contribution-event-times-are-calculated"></a>コントリビューションイベント時間の計算方法

タイムスタンプは、コミットとプルリクエストでは異なる方法で計算されます:
- **コミット** では、コミット タイムスタンプのタイム ゾーン情報が使用されます。 詳細については、「[タイムライン上のコミットのトラブルシューティング](/articles/troubleshooting-commits-on-your-timeline)」を参照してください。
- {% data variables.product.product_name %} で開かれた **pull request** と **issue** では、ブラウザーのタイム ゾーンが使用されます。 API を介して開かれたものでは、[API 呼び出しで指定された](https://developer.github.com/changes/2014-03-04-timezone-handling-changes)タイムスタンプまたはタイム ゾーンが使用されます。

## <a name="activity-overview"></a>アクティビティの概要

{% data reusables.profile.activity-overview-summary %} 詳細については、「[プロファイルでのアクティビティの概要の表示](/articles/showing-an-overview-of-your-activity-on-your-profile)」を参照してください。

![プロフィール上のアクティビティオーバービューセクション](/assets/images/help/profile/activity-overview-section.png)

アクティビティの概要に記載されている Organization は、Organization 内でのアクティビティの程度に応じて優先順位が付けられています。 プロファイル略歴で組織に @mention しており、あなたが組織のメンバーである場合、その組織がアクティビティの概要で最優先されます。 詳細については、「[人や Team のメンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」または「[プロフィールに略歴を追加する](/articles/adding-a-bio-to-your-profile/)」を参照してください。

## <a name="contribution-activity"></a>コントリビューションアクティビティ

コントリビューションアクティビティセクションには、あなたが行った、または共作したコミット、あなたが提案したプルリクエスト、あなたが開いた Issue を含む、あなたの仕事の詳細なタイムラインが含まれています。 コントリビューション アクティビティの下部にある **[その他のアクティビティを表示する]** をクリックするか、ページの右側に表示したい年をクリックすることで、経時的にコントリビューションを見ることができます。 Organization に参加した日付、最初のプルリクエストを提案した日付、または注目度の高い Issue を開いた日付など、重要な瞬間が、コントリビューションアクティビティで強調されます。 タイムラインに特定のイベントが表示されない場合は、イベントが発生した Organization またはリポジトリにまだアクセスできることを確認してください。

![コントリビューションアクティビティ時間フィルター](/assets/images/help/profile/contributions_activity_time_filter.png)

## <a name="viewing-contributions-from--data-variablesproductprodname_enterprise--on--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %} 上の {% data variables.product.prodname_enterprise %} からのコントリビューションの表示

{% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} または{% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} を使用しているときに、エンタープライズ所有者が {% data variables.product.prodname_unified_contributions %} を有効にした場合、{% data variables.product.prodname_dotcom_the_website %} プロファイルにエンタープライズ コントリビューション カウントを送信できます。 詳細については、「[{% data variables.product.prodname_dotcom_the_website %} プロファイルへのエンタープライズ コントリビューションの送信](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)」を参照してください。

