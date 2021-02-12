---
title: Automatically merging a pull request
intro: 'You can increase development velocity by enabling auto-merge for a pull request so that the pull request will merge automatically when all merge requirements are met.'
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
---

{% data reusables.pull_requests.auto-merge-release-phase %}

### About auto-merge

If you enable auto-merge for a pull request, the pull request will merge automatically when all required reviews are met and status checks have passed. Auto-merge prevents you from waiting around for requirements to be met, so you can move on to other tasks.

Before you can use auto-merge with a pull request, auto-merge must be enabled for the repository. For more information, see "[Managing auto-merge for pull requests in your repository](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)."

You can provide feedback about auto-merge by [contacting us](https://support.github.com/contact/feedback?category=prs-and-code-review&subject=Pull%20request%20auto-merge%20feedback).

### Enabling auto-merge

People with write permissions to a repository can enable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to auto-merge.
1. Optionally, to choose a merge method, select the **Enable auto-merge** drop-down menu, then click a merge method. Weitere Informationen finden Sie unter „[Informationen zum Mergen von Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)“. !["Enable auto-merge" drop-down menu](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Click **Enable auto-merge**. ![Button to enable auto-merge](/assets/images/help/pull_requests/enable-auto-merge-button.png)
1. If you chose the merge or squash and merge methods, type a commit message and description and choose the email address you want to author the merge commit. ![Fields to enter commit message and description and choose commit author email](/assets/images/help/pull_requests/pull-request-information-fields.png)
1. Click **Confirm auto-merge**. ![Button to confirm auto-merge](/assets/images/help/pull_requests/confirm-auto-merge-button.png)

### Disabling auto-merge

People with write permissions to a repository and pull request authors can disable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to disable auto-merge for.
1. In the merge box, click **Disable auto-merge**. ![Button to disable auto-merge](/assets/images/help/pull_requests/disable-auto-merge-button.png)
