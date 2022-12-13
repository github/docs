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
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
ms.openlocfilehash: eb4711251f7bebc9088ae711ba8a36dc60acba56
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108827'
---
## コードレビューの設定について

{% ifversion only-notify-requested-members %}Team のノイズを減らし、pull request レビューに対する個人の責任を明確にするには、コード レビュー設定を構成します。

- Teamの通知
- 自動割り当て

## Team通知について

リクエストされたTeamメンバーにのみ通知されるようにした場合、TeamにPull Requestのレビューがリクエストされても、そのTeam内の特定のメンバーにもレビューがリクエストされていたなら、Team全体への通知送信は無効化されることになります。 これは、リポジトリでTeamがコードオーナーとして設定されているものの、しばしば特定の個人が自分たちのPull Requestに対する適切なコードレビュー担当者となるだろうことをリポジトリのコントリビューターたちが知っている場合に、特に役立ちます。 詳細については、「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

## 自動割り当てについて
{% endif %}

自動割り当てを有効化すると、TeamがPull Requestのレビューをリクエストされた場合、そのチームはレビュー担当者から外され、指定されたTeamメンバーの一部がそのTeamの代わりに割り当てられます。 コードレビューの割り当てでは、Team がレビューをリクエストされたとき、Team の全体に通知するか、Team メンバーのサブセットのみに通知するかを決めることができます。

コードオーナーが自動的にレビューをリクエストされた場合でも、ブランチ保護ルールがコードオーナーからのレビューを必須として設定されていないかぎり、やはりTeamは外され、個人に置き換えられます。 そういったブランチ保護ルールがある場合、Teamへのリクエストは削除できないので、個人へのリクエストは追加されることになります。

### ルーティングアルゴリズム

コードレビューの割り当てでは、2 つの可能なアルゴリズムのいずれかに基づいて、レビュー担当者が自動的に選択されて割り当てられます。 

ラウンドロビンアルゴリズムは、現在未処理のレビューの数とは関係なく、Team のすべてのメンバー間で交互に、最も新しいレビューリクエストを誰が受け取ったかに基づいてレビュー担当者を選択します。 

ロードバランスアルゴリズムは、各メンバーの最近のレビューリクエスト合計数に基づいてレビュー担当者を選択し、メンバーごとの未処理レビューの数を考慮します。 ロードバランスアルゴリズムは、各 Teamメンバーが 30 日間に等しい数のプルリクエストをレビューすることを保証しようとします。

ステータスを"Busy"に設定したTeamメンバーは、レビューに選択されません。 すべてのTeamメンバーがBusyの場合、Pull RequestはTeam自体に割り当てられたままになります。 ユーザーのステータスの詳しい情報については、「[ステータスを設定する](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)」を参照してください。

{% ifversion only-notify-requested-members %}
## Team通知の設定

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 左側のサイドバーで、 **[{% octicon "code-review" aria-label="The code-review icon" %} コード レビュー]** をクリックします。
{% else %}
1. 左側のサイドバーで、 **[コード レビュー]** 
![[コード レビュー] ボタン](/assets/images/help/teams/review-button.png) をクリックします {% endif %}
1. **[リクエストされた Team メンバーにのみ通知]** を選びます。
![コード レビューの Team 通知](/assets/images/help/teams/review-assignment-notifications.png)
1. **[変更を保存]** をクリックします。
{% endif %}

## 自動割り当ての設定
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 左側のサイドバーで、 **[{% octicon "code-review" aria-label="The code-review icon" %} コード レビュー]** をクリックします。
{% else %}
1. 左側のサイドバーで、 **[コード レビュー]** 
![[コード レビュー] ボタン](/assets/images/help/teams/review-button.png) をクリックします {% endif %}
1. **[自動割り当てを有効にする]** を選びます。
![[自動割り当て] ボタン](/assets/images/help/teams/review-assignment-enable.png)
1. [How many team members should be assigned to review?] でドロップダウンメニューを使用し、各プルリクエストに割り当てるレビュー担当者の数を選択します。
![[レビュー担当者数] ドロップダウン](/assets/images/help/teams/review-assignment-number.png)
1. [Routing algorithm] のドロップダウンメニューで、使用するアルゴリズムを選択します。 詳しい情報については、「[ルーティング アルゴリズム](#routing-algorithms)」を参照してください。
![[ルーティング アルゴリズム] ドロップダウン](/assets/images/help/teams/review-assignment-algorithm.png)
1. 必要に応じて、Team の特定のメンバーを常にスキップするには、 **[特定の Team メンバーを割り当てない]** を選びます。 次に、スキップする 1 つ以上の Team メンバーを選択します。
![[特定の Team メンバーを割り当てない] チェックボックスとドロップダウン](/assets/images/help/teams/review-assignment-skip-members.png) {% ifversion ghes < 3.4 %}
1. 必要に応じて、各 pull request レビューのコード レビュー割り当てで選んだ Team メンバーにのみ通知するには、[通知] で、 **[Team メンバーを割り当てる場合に Team 全体に通知しない]** を選びます。
{%- endif %} {% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. 必要に応じて、リクエストを割り当てるときに、レビュー担当者となる可能性がある子 Team のメンバーを含めるには、 **[子 Team メンバー]** を選びます。
1. 必要に応じて、割り当てるメンバーの合計人数に対して、自分のレビューが既にリクエストされているメンバーを数えるには、 **[既存のリクエストを数える]** を選びます。
1. 必要に応じて、Team メンバーを割り当てるときに、Team からレビュー リクエストを削除するには、 **[Team レビュー リクエスト]** を選びます。
{%- endif %}
1. **[変更を保存]** をクリックします。

## 自動割り当ての無効化
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. **[自動割り当てを有効にする]** を選び、チェックマークを外します。
![[コードレビューの割り当て] ボタン](/assets/images/help/teams/review-assignment-enable.png)
1. **[変更を保存]** をクリックします。
