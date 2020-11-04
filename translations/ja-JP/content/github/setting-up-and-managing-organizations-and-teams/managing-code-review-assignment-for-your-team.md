---
title: Team のコードレビューの割り当てを管理する
intro: コードレビューの割り当てには、Team のどのメンバーがプルリクエストのレビューをサブミットするかが明確に指定されます。
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

チームメンテナと Organization のオーナーは、コードレビューの割り当てを設定できます。

### コードレビューの割り当てについて

コードレビューの割り当てを使用すると、Team がプルリクエストのレビューをリクエストされたときいつでも、その Team がレビュー担当者として削除され、指定した Team メンバーサブセットが Team のかわりに割り当てられます。 コードレビューの割り当てでは、Team がレビューをリクエストされたとき、Team の全体に通知するか、Team メンバーのサブセットのみに通知するかを決めることができます。

コードオーナーが自動的にレビューをリクエストされる場合、Team は引き続き削除され、個人に置き換えられます。 個別の承認は、保護されたブランチでのコードオーナーの承認要件を満たしません。 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

### ルーティングアルゴリズム

コードレビューの割り当ては、2 つのアルゴリズム候補のいずれかに基づいて自動的にレビュー担当者を選択して割り当てます。

ラウンドロビンアルゴリズムは、現在未処理のレビューの数とは関係なく、Team のすべてのメンバー間で交互に、最も新しいレビューリクエストを誰が受け取ったかに基づいてレビュー担当者を選択します。

ロードバランスアルゴリズムは、各メンバーの最近のレビューリクエスト合計数に基づいてレビュー担当者を選択し、メンバーごとの未処理レビューの数を考慮します。 ロードバランスアルゴリズムは、各 Teamメンバーが 30 日間に等しい数のプルリクエストをレビューすることを保証しようとします。

### コードレビューの割り当ての設定
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. 左サイドバーで [**Code review assignment**] をクリックします。 ![[Code review assignment] ボタン](/assets/images/help/teams/review-assignment-button.png)
6. [**Enable auto assignment**] を選択します。 ![[Code review assignment] ボタン](/assets/images/help/teams/review-assignment-enable.png)
7. [How many team members should be assigned to review?] でドロップダウンメニューを使用し、各プルリクエストに割り当てるレビュー担当者の数を選択します。 ![[Number of reviewers] ドロップダウン](/assets/images/help/teams/review-assignment-number.png)
8. [Routing algorithm] のドロップダウンメニューで、使用するアルゴリズムを選択します。 詳細は、「[ルーティングアルゴリズム](#routing-algorithms)」を参照してください。 ![[Routing algorithm] ドロップダウン](/assets/images/help/teams/review-assignment-algorithm.png)
9. オプションで、Team の特定メンバーを常にスキップする場合は、[**Never assign certain team members**] を選択します。 次に、スキップする 1 つ以上の Team メンバーを選択します。 ![[Never assign certain team members] チェックボックスとラジオボタン](/assets/images/help/teams/review-assignment-skip-members.png)
10. オプションで、プルレビューリクエストごとのコードレビュー割り当てによって選択された Teamメンバーのみに通知する場合は、[Notifications] で[**If assigning team members, don't notify the entire team.**] を選択します。 ![コードレビューの割当ての通知](/assets/images/help/teams/review-assignment-notifications.png)
11. [**Save changes**] をクリックします。

### コードレビューの割り当てを無効化する
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. [**Enable auto assignment**] を選択してチェックマークを外します。 ![[Code review assignment] ボタン](/assets/images/help/teams/review-assignment-enable.png)
6. [**Save changes**] をクリックします。
