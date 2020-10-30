---
title: Changing the base branch of a pull request
intro: 'After a pull request is opened, you can change the base branch to compare the changes in the pull request against a different branch.'
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Warning**: When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated, as the line of code that the comment referenced may no longer be part of the changes in the pull request.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to modify.
3. Next to the pull request's title, click **Edit**. ![Pull Request edit button](/assets/images/help/pull_requests/pull-request-edit.png)
4. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Base branch drop-down menu ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Read the information about changing the base branch and click **Change base**. ![Base branch change confirmation button ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

### Further reading

- "[Creating a pull request](/articles/creating-a-pull-request)"
- "[About pull requests](/articles/about-pull-requests)"
- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
