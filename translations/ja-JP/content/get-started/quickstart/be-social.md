---
title: ソーシャル機能
redirect_from:
  - /be-social
  - /articles/be-social
  - /github/getting-started-with-github/be-social
  - /github/getting-started-with-github/quickstart/be-social
intro: '{% data variables.product.prodname_dotcom %} 上で、人々、リポジトリ、Organization と関わることができます。 個人用ダッシュボードから、他の人々がどんな作業をしていて、誰とつながっているのかを確認します。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profile
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 8f57382a4eba028e9c83dda0c5780c240dc3860c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147692114'
---
個人用ダッシュボードへのアクセスに関する詳細については、「[個人用ダッシュボードについて](/articles/about-your-personal-dashboard)」を参照してください。

## 人をフォローする

{% data variables.product.prodname_dotcom %} でだれかをフォローすると、個人用ダッシュボードに、その人のパブリック アクティビティについて通知されます。 フォロー対象者が新しいリポジトリを作成したり、リポジトリに Star を付けたり、別のユーザーをフォローしたりすると、そのアクティビティがダッシュボードに表示されます。 

あるユーザーをフォローするには、そのユーザーのプロフィール ページで **[フォロー]** をクリックします。

![ユーザのフォローボタン](/assets/images/help/profile/follow-user-button.png)

詳細については、「[人をフォローする](/get-started/exploring-projects-on-github/following-people)」を参照してください。

## リポジトリを Watch する

リポジトリをサブスクライブして Watch し、その中のアクティビティの通知を受け取ることができます。 オーナーがリポジトリを更新すると、個人用ダッシュボードで変更を確認できます。 詳細については、「[サブスクリプションを表示する](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)」を参照してください。

リポジトリを Watch するには、リポジトリの上部で **[Watch]** をクリックします。

![リポジトリの Watch ボタン](/assets/images/help/repository/repo-actions-watch.png)

## 会話に参加する

{% data reusables.support.ask-and-answer-forum %}

## {% data variables.product.product_name %} での通信

{% data variables.product.product_name %} にはコラボレーション可能なコミュニケーション ツールが用意されており、コミュニティと緊密にやりとりしながら、優れたソフトウェアをビルドできます。 たとえば、pull request を作成して別のユーザーのプロジェクトにコントリビューションを行う、issue を使用してバグを追跡する、リポジトリ内のアイデアを提案することができます。 また、チームでディスカッションして、新しいアイデアを出し合うこともできます。 

これらのツールの概要については、[{% data variables.product.prodname_dotcom %} でコミュニケーションするためのクイック スタート](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)に関するページを参照してください。

## Organization への参加

Organization は、企業とオープンソース プロジェクトが多数のプロジェクトにわたって一度にコラボレーションできる共有アカウントです。 オーナーや管理者は、特殊な権限を持つ Team を作ることができ、パブリックな Organization のプロフィールを持つことができ、Organization 内でのアクティビティを追跡することができます。 詳細については、「[Organization について](/articles/about-organizations/)」を参照してください。

ダッシュボードから、ダッシュボードの左側にあるご自分のユーザー名のドロップダウン メニューをクリックします。 ここで、所属している Organization を表示し、簡単に切り替えることができます。

![アカウントのコンテキストの切り替えのドロップダウン](/assets/images/help/overview/dashboard-contextswitcher.png)

{% ifversion for-you-feed %}

## 組織をフォローする

{% data reusables.organizations.follow-organizations-beta %}

{% data reusables.organizations.about-following-organizations %}

組織をフォローするには、組織のページのヘッダーで **[フォロー]** をクリックします。

![[フォロー] ボタンが強調表示されている組織ヘッダーのスクリーンショット](/assets/images/help/profile/organization-profile-following.png)

詳しくは、「[組織をフォローする](/get-started/exploring-projects-on-github/following-organizations)」をご覧ください。

{% endif %}

## {% data variables.product.prodname_dotcom %} 上の他のプロジェクトを調べる

{% data variables.product.prodname_dotcom %} の [探索] ページで新しい興味深いプロジェクトを探すことができます。 興味深いプロジェクトに Star を付けて、後で簡単に見つけられるようにできます。 Star 付きプロジェクトをすべて表示するには、ご自分の Star ページにアクセスします。 Star の詳細については、「[Star を付けてリポジトリを保存する](/get-started/exploring-projects-on-github/saving-repositories-with-stars)」を参照してください。

ダッシュボード フィードには、Star を付けたリポジトリ、フォロー対象者、パブリック リポジトリへのコントリビューションなど、関心に基づいてプロジェクトが表示されます。 ダッシュボードから、注目のプロジェクトを確認する、トピックを表示する、コレクションをチェックアウトすることができます。 

その他のプロジェクトについては、「{% data variables.explore.explore_github %}」を参照してください。

## 次の手順
これで、{% data variables.product.product_name %} コミュニティにつながりました。 {% data variables.product.product_name %} 内でやりとりしてビルドする方法は他にもあります。

* {% data reusables.getting-started.set-up-git %}

* {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.contributing-to-projects  %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
