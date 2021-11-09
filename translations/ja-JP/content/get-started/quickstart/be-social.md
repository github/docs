---
title: ソーシャル機能
redirect_from:
  - /be-social/
  - /articles/be-social
  - /github/getting-started-with-github/be-social
  - /github/getting-started-with-github/quickstart/be-social
intro: '{% data variables.product.prodname_dotcom %} 上で、人々、リポジトリ、Organization と関わることができます。 個人ダッシュボードから、他の人々がどんな作業をしていて、何とつながっているのかを見てください。'
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
---

個人ダッシュボードへのアクセスについて学ぶには、「[個人ダッシュボードについて](/articles/about-your-personal-dashboard)」を参照してください。

## 人をフォローする

When you follow someone on {% data variables.product.prodname_dotcom %}, you'll get notifications on your personal dashboard about their activity. 詳しい情報については[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)を参照してください。

人をフォローするには、その人のプロフィールページで [**Follow**] をクリックします。

![ユーザのフォローボタン](/assets/images/help/profile/follow-user-button.png)

## リポジトリを Watch する

リポジトリを Watch して、新しいプルリクエストと Issue に関する通知を受け取ることができます。 オーナーがリポジトリを更新すると、個人ダッシュボード上で変更を見ることができます。 For more information see {% ifversion fpt or ghae or ghes or ghec %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Watching and unwatching repositories](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}."

リポジトリを Watch するには、リポジトリの上部で [**Watch**] をクリックします。

![リポジトリの Watch ボタン](/assets/images/help/repository/repo-actions-watch.png)

## 会話に参加する

{% data reusables.support.ask-and-answer-forum %}

## Communicating on {% data variables.product.product_name %}

{% data variables.product.product_name %} provides built-in collaborative communication tools, such as issues and pull requests, allowing you to interact closely with your community when building great software. For an overview of these tools, and information about the specificity of each, see "[Quickstart for communicating on {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)."

## さらなる活動

### プルリクエストを作成する

 機能を追加したり、バグを修正したりして、他者のプロジェクトにコントリビュートしたいこともあるでしょう。 変更を行ったら、プルリクエストを送信してオリジナルの作者に知らせましょう。 詳しい情報については[プルリクエストについて](/articles/about-pull-requests)を参照してください。

 ![プルリクエストボタン](/assets/images/help/repository/repo-actions-pullrequest.png)

### Issue を使用する

リポジトリでコラボレーションする際に、Issue を使ってアイデア、拡張、タスク、バグを追跡してください。 詳細は「[Issues について](/articles/about-issues/)」を参照してください。

![Issue ボタン](/assets/images/help/repository/repo-tabs-issues.png)

### Organization への参加

Organizationは、企業やオープンソースプロジェクトが多くのプロジェクトにわたって一度にコラボレーションできる共有アカウントです。 オーナーや管理者は、特殊な権限を持つ Team を作ることができ、パブリックな Organization のプロフィールを持つことができ、Organization 内でのアクティビティを追跡することができます。 詳細は「[Organization について](/articles/about-organizations/)」を参照してください。

![アカウントのコンテキストの切り替えのドロップダウン](/assets/images/help/overview/dashboard-contextswitcher.png)

### {% data variables.product.prodname_dotcom %} 上の他のプロジェクトを調べる

{% data variables.explore.explore_github %}、[リポジトリを調べる](https://github.com/explore)、そして {% data variables.explore.trending_page %} を使って、興味深いプロジェクトを見つけてください。 興味深いプロジェクトに Star を付け、後から戻っていってください。 {% data variables.explore.your_stars_page %} にアクセスすれば、Star を付けたすべてのプロジェクトを見ることができます。  詳細は「[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard/)」を参照してください。

## おめでとうございます

これで、{% data variables.product.product_name %} コミュニティにつながりました。 次に何をしたいですか? ![プロジェクトに Star を付ける](/assets/images/help/stars/star-a-project.png)


- To synchronize your {% data variables.product.product_name %} projects with your computer, you can set up Git. For more information see "[Set up Git](/articles/set-up-git)."
- You can also create a repository, where you can put all your projects and maintain your workflows. For more information see, "[Create a repository](/articles/create-a-repo)."
- You can fork a repository to make changes you want to see without affecting the original repository. For more information, see "[Fork a repository](/articles/fork-a-repo)."
- {% data reusables.support.connect-in-the-forum-bootcamp %}
