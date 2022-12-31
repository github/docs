---
title: パーソナルダッシュボードについて
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090069"
---
## <a name="accessing-your-personal-dashboard"></a>パーソナルダッシュボードにアクセスする

パーソナルダッシュボードは、{% data variables.product.product_name %}にサインインしたときに最初に表示されるページです。

サインインした後にパーソナルダッシュボードにアクセスするには、{% data variables.product.product_name %} のすべてのページの左上の隅にある {% octicon "mark-github" aria-label="The github octocat logo" %} をクリックします。

## <a name="finding-your-recent-activity"></a>最近のアクティビティを見つける

ニュースフィードの [Recent activity] セクションでは、あなたが作業している最近更新された Issue やプルリクエストを素早く見つけてフォローアップできます。 [最近のアクティビティ] では、過去 2 週間に行われた更新のプレビューを最大 4 件プレビューすることができます。

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>トップリポジトリと Team を見つける

ダッシュボードの左サイドバーから、使っている上位のリポジトリおよび Team にアクセスできます。

![さまざまな Organization のリポジトリや Team のリスト](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

上位のリポジトリのリストは自動的に生成され、アカウントが直接所有しているかどうかに関係なく、操作したリポジトリを含めることができます。 インタラクションには、コミットの作成、Issue およびプルリクエストのオープンまたはコメントが含まれます。 上位のリポジトリのリストは編集できませんが、リポジトリを最後に操作してから 4 か月後にリポジトリはリストから削除されます。

{% data variables.product.product_name %} 上の任意のページの上部にある検索バーをクリックすれば、最近アクセスしたリポジトリ、Team、プロジェクトボードのリストを見つけることもできます。

## <a name="staying-updated-with-activity-from-the-community"></a>コミュニティからのアクティビティの更新を受ける

{% if for-you-feed %} ダッシュボードのメイン セクションには、次の 2 つのアクティビティ フィードがあります。

- フォロー中: フォローしているユーザーによるアクティビティと、監視しているリポジトリのアクティビティ。
- おすすめ: ユーザーの {% data variables.product.product_name %} ネットワークに基づいたアクティビティとおすすめ候補。

### <a name="following-feed"></a>フォロー中フィード

このフィードには、ユーザーをフォローしたり、リポジトリをウォッチしたりするなど、あなたが直接興味を示したリポジトリやユーザーのアクティビティが表示されます。 たとえば、フォローしているユーザーが次の操作を行うと、更新プログラムが表示されます。

{% else %} あなたのニュース フィードの [すべてのアクティビティ] セクションでは、ウォッチしているリポジトリやフォローしているユーザーの更新情報を見ることができます。

ニュース フィードでは、あなたがフォローしているユーザーが以下のことをした場合に更新情報が示されます。{% endif %}


- リポジトリに Star を付ける。
- 別のユーザーをフォローする。{% ifversion fpt or ghes or ghec %}
- パブリックリポジトリを作成する{% endif %}
- あなたが Watch しているリポジトリ上で "help wanted" あるいは "good first issue" のラベルを付けた Issue あるいはプルリクエストをオープンする。
- ウォッチするリポジトリにコミットをプッシュする。{% ifversion fpt or ghes or ghec %}
- パブリックリポジトリをフォークする。{% endif %}
- 新しいリリースを公開する。

ユーザーのフォローとリポジトリのウォッチの詳細については、「[人をフォローする](/get-started/exploring-projects-on-github/following-people)」と「[ソーシャル機能](/get-started/quickstart/be-social)」を参照してください。

{% if for-you-feed %}
### <a name="for-you-feed"></a>おすすめフィード

{% note %}

**注:** この新しいタブは現在パブリックベータであり、変更されることがあります。 

{% endnote %}

このフィードには、あなたの {% data variables.product.product_name %} のネットワークに基づくアクティビティとおすすめ候補が表示されます。 これは、あなたを刺激し、常に新しい情報を提供し、あなたが参加したい新しいコミュニティを見つけるのに役立つ更新情報を提供するように設計されています。 あなたのネットワークには次のものが含まれます。

- あなたがスターを付けたリポジトリ
- あなたが投稿したリポジトリ
- あなたがフォローしている、またはあなたがスポンサーであるユーザー
- コラボレーションを行ったユーザー
- フォローしている Organization

{% endif %}

## <a name="exploring-recommended-repositories"></a>推奨されているリポジトリを調べる

ダッシュボードの右側にある [Explore repositories] セクションでは、コミュニティで推奨されているリポジトリを調べることができます。 おすすめ候補は、あなたがスターを付けたか、またはアクセスしたリポジトリ、フォローしているユーザー、アクセス権を持つリポジトリ内のアクティビティに基づいています。{% ifversion fpt or ghec %}詳細については、「[{% data variables.product.prodname_dotcom %} でオープンソースにコントリビュートする方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。{% endif %}

## <a name="further-reading"></a>参考資料

- [Organization ダッシュボードについて](/articles/about-your-organization-dashboard)
