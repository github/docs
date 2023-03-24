---
title: Changing the base branch of a pull request
intro: 'After a pull request is opened, you can change the base branch to compare the changes in the pull request against a different branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
---
{% warning %}

**Warning**: When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated, as the line of code that the comment referenced may no longer be part of the changes in the pull request.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to modify.
1. Next to the pull request's title, click **Edit**.

   ![Screenshot of a pull request title. A button labeled "Edit" is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit.png)

1. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits#comparing-branches).

   ![Screenshot of a pull request title. The dropdown to change the base branch is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)

1. Read the information about changing the base branch and click **Change base**.

{% tip %}

**Tip:** When you open a pull request, {% data variables.product.product_name %} will set the base to the commit that branch references. If the branch is updated in the future, {% data variables.product.product_name %} will not update the base branch's commit.

{% endtip %}

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
