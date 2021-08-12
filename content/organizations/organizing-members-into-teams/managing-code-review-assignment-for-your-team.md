---
title: Managing code review assignment for your team
intro: Code review assignments clearly indicate which members of a team are expected to submit a review for a pull request.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review assignment
permissions: Team maintainers and organization owners can configure code review assignments.
---

## About code review assignments

By using code review assignments, any time your team has been requested to review a pull request, the team is removed as a reviewer and a specified subset of team members are assigned in the team's place. Code review assignments allow you to decide whether the whole team or just a subset of team members are notified when a team is requested for review.

When code owners are automatically requested for review, the team is still removed and replaced with individuals. The individual approvals don't satisfy the requirement for code owner approval in a protected branch. For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

{% ifversion fpt %}
To further enhance your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Routing algorithms

Code review assignments automatically choose and assign reviewers based on one of two possible algorithms. 

The round robin algorithm chooses reviewers based on who's received the least recent review request, focusing on alternating between all members of the team regardless of the number of outstanding reviews they currently have. 

The load balance algorithm chooses reviewers based on each member's total number of recent review requests and considers the number of outstanding reviews for each member. The load balance algorithm tries to ensure that each team member reviews an equal number of pull requests in any 30 day period.

## Configuring code review assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. In the left sidebar, click **Code review assignment**
![Code review assignment button](/assets/images/help/teams/review-assignment-button.png)
6. Select **Enable auto assignment**.
![Code review assignment button](/assets/images/help/teams/review-assignment-enable.png)
7. Under "How many team members should be assigned to review?", use the drop-down menu and choose a number of reviewers to be assigned to each pull request.
![Number of reviewers dropdown](/assets/images/help/teams/review-assignment-number.png)
8. Under "Routing algorithm", use the drop-down menu and choose which algorithm you'd like to use. For more information, see "[Routing algorithms](#routing-algorithms)."
![Routing algorithm dropdown](/assets/images/help/teams/review-assignment-algorithm.png)
9. Optionally, to always skip certain members of the team, select **Never assign certain team members**. Then, select one or more team members you'd like to always skip.
![Never assign certain team members checkbox and dropdown](/assets/images/help/teams/review-assignment-skip-members.png)
10. Optionally, to only notify the team members chosen by code review assignment for each pull review request, under "Notifications" select **If assigning team members, don't notify the entire team.**
![Code review assignment notifications](/assets/images/help/teams/review-assignment-notifications.png)
11. Click **Save changes**.

## Disabling code review assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Select **Enable auto assignment** to remove the checkmark.
![Code review assignment button](/assets/images/help/teams/review-assignment-enable.png)
6. Click **Save changes**.
