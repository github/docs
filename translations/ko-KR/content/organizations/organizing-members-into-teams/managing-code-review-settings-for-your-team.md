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

{% ifversion only-notify-requested-members %}
To reduce noise for your team and clarify individual responsibility for pull request reviews, you can configure code review settings.

- Team notifications
- Auto assignment

## About team notifications

When you choose to only notify requested team members, you disable sending notifications to the entire team when the team is requested to review a pull request if a specific member of that team is also requested for review. This is especially useful when a repository is configured with teams as code owners, but contributors to the repository often know a specific individual that would be the correct reviewer for their pull request. For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

## About auto assignment
{% endif %}

When you enable auto assignment, any time your team has been requested to review a pull request, the team is removed as a reviewer and a specified subset of team members are assigned in the team's place. Code review assignments allow you to decide whether the whole team or just a subset of team members are notified when a team is requested for review.

When code owners are automatically requested for review, the team is still removed and replaced with individuals unless a branch protection rule is configured to require review from code owners. If such a branch protection rule is in place, the team request cannot be removed and so the individual request will appear in addition.

### Routing algorithms

Code review assignments automatically choose and assign reviewers based on one of two possible algorithms. 

The round robin algorithm chooses reviewers based on who's received the least recent review request, focusing on alternating between all members of the team regardless of the number of outstanding reviews they currently have. 

The load balance algorithm chooses reviewers based on each member's total number of recent review requests and considers the number of outstanding reviews for each member. The load balance algorithm tries to ensure that each team member reviews an equal number of pull requests in any 30 day period.

Any team members that have set their status to "Busy" will not be selected for review. If all team members are busy, the pull request will remain assigned to the team itself. For more information about user statuses, see "[Setting a status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

{% ifversion only-notify-requested-members %}
## Configuring team notifications

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the left sidebar, click **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. In the left sidebar, click **Code review**
![Code review button](/assets/images/help/teams/review-button.png)
{% endif %}
1. Select **Only notify requested team members.**
![Code review team notifications](/assets/images/help/teams/review-assignment-notifications.png)
1. Click **Save changes**.
{% endif %}

## Configuring auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the left sidebar, click **{% octicon "code-review" aria-label="The code-review icon" %} Code review**.
{% else %}
1. In the left sidebar, click **Code review**
![Code review button](/assets/images/help/teams/review-button.png)
{% endif %}
1. Select **Enable auto assignment**.
![Auto-assignment button](/assets/images/help/teams/review-assignment-enable.png)
1. Under "How many team members should be assigned to review?", use the drop-down menu and choose a number of reviewers to be assigned to each pull request.
![Number of reviewers dropdown](/assets/images/help/teams/review-assignment-number.png)
1. Under "Routing algorithm", use the drop-down menu and choose which algorithm you'd like to use. For more information, see "[Routing algorithms](#routing-algorithms)."
![Routing algorithm dropdown](/assets/images/help/teams/review-assignment-algorithm.png)
1. Optionally, to always skip certain members of the team, select **Never assign certain team members**. Then, select one or more team members you'd like to always skip.
![Never assign certain team members checkbox and dropdown](/assets/images/help/teams/review-assignment-skip-members.png)
{% ifversion ghes < 3.4 %}
1. Optionally, to only notify the team members chosen by code review assignment for each pull review request, under "Notifications" select **If assigning team members, don't notify the entire team.**
{%- endif %}
{% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. Optionally, to include members of child teams as potential reviewers when assigning requests, select **Child team members**.
1. Optionally, to count any members whose review has already been requested against the total number of members to assign, select **Count existing requests**.
1. Optionally, to remove the review request from the team when assigning team members, select **Team review request**.
{%- endif %}
1. Click **Save changes**.

## Disabling auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. Select **Enable auto assignment** to remove the checkmark.
![Code review assignment button](/assets/images/help/teams/review-assignment-enable.png)
1. Click **Save changes**.
