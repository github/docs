---
title: Teamのコードレビュー設定の管理
intro: TeamがPull Requestのレビューをリクエストされた際の通知を制限することによって、Teamのノイズを減らすことができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: コードレビューの設定
permissions: Team maintainers and organization owners can configure code review settings.
---

## コードレビューの設定について

{% ifversion only-notify-requested-members %}
Teamのノイズを減らし、Pull Requestレビューに対する個人の責任を明確にするために、コードレビューの設定ができます。

- Teamの通知
- 自動割り当て

## Team通知について

リクエストされたTeamメンバーにのみ通知されるようにした場合、TeamにPull Requestのレビューがリクエストされても、そのTeam内の特定のメンバーにもレビューがリクエストされていたなら、Team全体への通知送信は無効化されることになります。 これは、リポジトリでTeamがコードオーナーとして設定されているものの、しばしば特定の個人が自分たちのPull Requestに対する適切なコードレビュー担当者となるだろうことをリポジトリのコントリビューターたちが知っている場合に、特に役立ちます。 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

## 自動割り当てについて
{% endif %}

自動割り当てを有効化すると、TeamがPull Requestのレビューをリクエストされた場合、そのチームはレビュー担当者から外され、指定されたTeamメンバーの一部がそのTeamの代わりに割り当てられます。 コードレビューの割り当てでは、Team がレビューをリクエストされたとき、Team の全体に通知するか、Team メンバーのサブセットのみに通知するかを決めることができます。

コードオーナーが自動的にレビューをリクエストされた場合でも、ブランチ保護ルールがコードオーナーからのレビューを必須として設定されていないかぎり、やはりTeamは外され、個人に置き換えられます。 そういったブランチ保護ルールがある場合、Teamへのリクエストは削除できないので、個人へのリクエストは追加されることになります。

### ルーティングアルゴリズム

コードレビューの割り当てでは、2 つの可能なアルゴリズムのいずれかに基づいて、レビュー担当者が自動的に選択されて割り当てられます。

ラウンドロビンアルゴリズムは、現在未処理のレビューの数とは関係なく、Team のすべてのメンバー間で交互に、最も新しいレビューリクエストを誰が受け取ったかに基づいてレビュー担当者を選択します。

ロードバランスアルゴリズムは、各メンバーの最近のレビューリクエスト合計数に基づいてレビュー担当者を選択し、メンバーごとの未処理レビューの数を考慮します。 ロードバランスアルゴリズムは、各 Teamメンバーが 30 日間に等しい数のプルリクエストをレビューすることを保証しようとします。

ステータスを"Busy"に設定したTeamメンバーは、レビューに選択されません。 すべてのTeamメンバーがBusyの場合、Pull RequestはTeam自体に割り当てられたままになります。 ユーザのステータスに関する詳しい情報については「[ステータスの設定](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)」を参照してください。

{% ifversion only-notify-requested-members %}
## Team通知の設定

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 左のサイドバーで**{% octicon "code-review" aria-label="The code-review icon" %} Code review（コードレビュー）**をクリックしてください。
{% else %}
1. 左のサイドバーで**Code review（コードレビュー）**をクリックしてください。 ![コードレビューボタン](/assets/images/help/teams/review-button.png)
{% endif %}
1. **Only notify requested team members.（リクエストされたTeamメンバーにのみ通知）**を選択してください。 ![コードレビューのTeam通知](/assets/images/help/teams/review-assignment-notifications.png)
1. [**Save changes**] をクリックします。
{% endif %}

## 自動割り当ての設定
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 左のサイドバーで**{% octicon "code-review" aria-label="The code-review icon" %} Code review（コードレビュー）**をクリックしてください。
{% else %}
1. 左のサイドバーで**Code review（コードレビュー）**をクリックしてください。 ![コードレビューボタン](/assets/images/help/teams/review-button.png)
{% endif %}
1. [**Enable auto assignment**] を選択します。 ![自動割り当てボタン](/assets/images/help/teams/review-assignment-enable.png)
1. [How many team members should be assigned to review?] でドロップダウンメニューを使用し、各プルリクエストに割り当てるレビュー担当者の数を選択します。 ![[Number of reviewers] ドロップダウン](/assets/images/help/teams/review-assignment-number.png)
1. [Routing algorithm] のドロップダウンメニューで、使用するアルゴリズムを選択します。 詳細は、「[ルーティングアルゴリズム](#routing-algorithms)」を参照してください。 ![[Routing algorithm] ドロップダウン](/assets/images/help/teams/review-assignment-algorithm.png)
1. オプションで、Team の特定メンバーを常にスキップする場合は、[**Never assign certain team members**] を選択します。 次に、スキップする 1 つ以上の Team メンバーを選択します。 ![[Never assign certain team members] チェックボックスとラジオボタン](/assets/images/help/teams/review-assignment-skip-members.png)
{% ifversion ghes < 3.4 %}
1. オプションで、プルレビューリクエストごとのコードレビュー割り当てによって選択された Teamメンバーのみに通知する場合は、[Notifications] で[**If assigning team members, don't notify the entire team.**] を選択します。
{%- endif %}
{% ifversion fpt or ghec or ghae-issue-5108 or ghes > 3.2 %}
1. あるいは、リクエストを割り当てる際に子チームのメンバーをレビュー担当者になりうるとして含めるには、**Child team members（子チームのメンバー）**を選択してください。
1. あるいは、割り当てるメンバーの総数に対して既にレビューがリクエストされているメンバー数をカウントするには、**Count existing requests（既存のリクエストをカウント）**を選択してください。
1. あるいは、Teamメンバーを割り当てる際にTeamからレビューリクエストを削除するには、**Team review request（Teamレビューリクエスト）**を選択してください。
{%- endif %}
1. [**Save changes**] をクリックします。

## 自動割り当ての無効化
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. [**Enable auto assignment**] を選択してチェックマークを外します。 ![[Code review assignment] ボタン](/assets/images/help/teams/review-assignment-enable.png)
1. [**Save changes**] をクリックします。
