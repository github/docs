---
title: Changing the base branch of a pull request
intro: 'After a pull request is opened, you can change the base branch to compare the changes in the pull request against a different branch.'
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% warning %}

**Warning**: When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated, as the line of code that the comment referenced may no longer be part of the changes in the pull request.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to modify.
3. Next to the pull request's title, click **Edit**. ![Pull Request edit button](/assets/images/help/pull_requests/pull-request-edit.png)
4. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Base branch drop-down menu ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Read the information about changing the base branch and click **Change base**. ![Base branch change confirmation button ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Tip:** When you open a pull request, {% data variables.product.product_name %} will set the base to the commit that branch references. If the branch is updated in the future, {% data variables.product.product_name %} will not update the base branch's commit.

{% endtip %}

### 더 읽을거리

- "[Creating a pull request](/articles/creating-a-pull-request)"
- "[About pull requests](/articles/about-pull-requests)"
- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
