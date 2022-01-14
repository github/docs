---
title: Managing code review settings for your team
intro: You can decrease noise for your team by limiting notifications when your team is requested to review a pull request.
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
---

## About code review settings

{% if only-notify-requested-members %}
To reduce noise for your team and clarify individual responsibility for pull request reviews, you can configure code review settings.

- Team notifications
- Auto assignment

## About team notifications

When you choose to only notify requested team members, you disable sending notifications to the entire team when the team is requested to review a pull request if a specific member of that team is also requested for review. This is especially useful when a repository is configured with teams as code owners, but contributors to the repository often know a specific individual that would be the correct reviewer for their pull request. 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

## About auto assignment
{% endif %}

When you enable auto assignment, any time your team has been requested to review a pull request, the team is removed as a reviewer and a specified subset of team members are assigned in the team's place. コードレビューの割り当てでは、Team がレビューをリクエストされたとき、Team の全体に通知するか、Team メンバーのサブセットのみに通知するかを決めることができます。

When code owners are automatically requested for review, the team is still removed and replaced with individuals unless a branch protection rule is configured to require review from code owners. If such a branch protection rule is in place, the team request cannot be removed and so the individual request will appear in addition.

{% ifversion fpt %}
To further enhance your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

### ルーティングアルゴリズム

コードレビューの割り当てでは、2 つの可能なアルゴリズムのいずれかに基づいて、レビュー担当者が自動的に選択されて割り当てられます。

ラウンドロビンアルゴリズムは、現在未処理のレビューの数とは関係なく、Team のすべてのメンバー間で交互に、最も新しいレビューリクエストを誰が受け取ったかに基づいてレビュー担当者を選択します。

ロードバランスアルゴリズムは、各メンバーの最近のレビューリクエスト合計数に基づいてレビュー担当者を選択し、メンバーごとの未処理レビューの数を考慮します。 ロードバランスアルゴリズムは、各 Teamメンバーが 30 日間に等しい数のプルリクエストをレビューすることを保証しようとします。

Any team members that have set their status to "Busy" will not be selected for review. If all team members are busy, the pull request will remain assigned to the team itself. For more information about user statuses, see "[Setting a status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

{% if only-notify-requested-members %}
## Configuring team notifications

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
2. Select **Only notify requested team members.** ![Code review team notifications](/assets/images/help/teams/review-assignment-notifications.png)
3. [**Save changes**] をクリックします。
{% endif %}

## Configuring auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
6. [**Enable auto assignment**] を選択します。 ![Auto-assignment button](/assets/images/help/teams/review-assignment-enable.png)
7. [How many team members should be assigned to review?] でドロップダウンメニューを使用し、各プルリクエストに割り当てるレビュー担当者の数を選択します。 ![[Number of reviewers] ドロップダウン](/assets/images/help/teams/review-assignment-number.png)
8. [Routing algorithm] のドロップダウンメニューで、使用するアルゴリズムを選択します。 詳細は、「[ルーティングアルゴリズム](#routing-algorithms)」を参照してください。 ![[Routing algorithm] ドロップダウン](/assets/images/help/teams/review-assignment-algorithm.png)
9. オプションで、Team の特定メンバーを常にスキップする場合は、[**Never assign certain team members**] を選択します。 次に、スキップする 1 つ以上の Team メンバーを選択します。 ![[Never assign certain team members] チェックボックスとラジオボタン](/assets/images/help/teams/review-assignment-skip-members.png)
{% ifversion fpt or ghec or ghae-issue-5108 or ghes > 3.2 %}
11. Optionally, to include members of child teams as potential reviewers when assigning requests, select **Child team members**.
12. Optionally, to count any members whose review has already been requested against the total number of members to assign, select **Count existing requests**.
13. Optionally, to remove the review request from the team when assigning team members, select **Team review request**.
{%- else %}
10. オプションで、プルレビューリクエストごとのコードレビュー割り当てによって選択された Teamメンバーのみに通知する場合は、[Notifications] で[**If assigning team members, don't notify the entire team.**] を選択します。
{%- endif %}
14. [**Save changes**] をクリックします。

## Disabling auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. [**Enable auto assignment**] を選択してチェックマークを外します。 ![[Code review assignment] ボタン](/assets/images/help/teams/review-assignment-enable.png)
6. [**Save changes**] をクリックします。
