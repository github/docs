---
title: パーソナルダッシュボードについて
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: パーソナルダッシュボードにアクセスして、作業したりフォローしたりしている Issue やプルリクエストを追跡したり、トップリポジトリや Team のページにアクセスしたり、Organization やサブスクライブしているリポジトリの最近のアクティビティを知ったり、推奨されたリポジトリを調べたりできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: ee22085e669eedec2e0a9f298cc4d5ad144316c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179152'
---
## パーソナルダッシュボードにアクセスする

パーソナルダッシュボードは、{% data variables.product.product_name %}にサインインしたときに最初に表示されるページです。

サインインした後にパーソナルダッシュボードにアクセスするには、{% data variables.product.product_name %} のすべてのページの左上の隅にある {% octicon "mark-github" aria-label="The github octocat logo" %} をクリックします。

## 最近のアクティビティを見つける

ニュースフィードの [Recent activity] セクションでは、あなたが作業している最近更新された Issue やプルリクエストを素早く見つけてフォローアップできます。 [最近のアクティビティ] では、過去 2 週間に行われた更新のプレビューを最大 4 件プレビューすることができます。

{% data reusables.dashboard.recent-activity-qualifying-events %}

## トップリポジトリと Team を見つける

ダッシュボードの左サイドバーから、使っている上位のリポジトリおよび Team にアクセスできます。

![さまざまな Organization のリポジトリや Team のリスト](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

上位のリポジトリのリストは自動的に生成され、アカウントが直接所有しているかどうかに関係なく、操作したリポジトリを含めることができます。 インタラクションには、コミットの作成、Issue およびプルリクエストのオープンまたはコメントが含まれます。 上位のリポジトリのリストは編集できませんが、リポジトリを最後に操作してから 4 か月後にリポジトリはリストから削除されます。

{% data variables.product.product_name %} 上の任意のページの上部にある検索バーをクリックすれば、最近アクセスしたリポジトリ、Team、プロジェクトボードのリストを見つけることもできます。

## コミュニティからのアクティビティの更新を受ける

{% ifversion for-you-feed %} ダッシュボードのメイン セクションには、次の 2 つのアクティビティ フィードがあります。

- フォロー中: フォローしているユーザーによるアクティビティと、監視しているリポジトリのアクティビティ。
- おすすめ: ユーザーの {% data variables.product.product_name %} ネットワークに基づいたアクティビティとおすすめ候補。

### フォロー中フィード

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

{% ifversion for-you-feed %}
### おすすめフィード

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

## 推奨されているリポジトリを調べる

ダッシュボードの右側にある [Explore repositories] セクションでは、コミュニティで推奨されているリポジトリを調べることができます。 おすすめ候補は、あなたがスターを付けたか、またはアクセスしたリポジトリ、フォローしているユーザー、アクセス権を持つリポジトリ内のアクティビティに基づいています。{% ifversion fpt or ghec %}詳細については、「[{% data variables.product.prodname_dotcom %} でオープンソースにコントリビュートする方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。{% endif %}

## 参考資料

- [Organization ダッシュボードについて](/articles/about-your-organization-dashboard)
