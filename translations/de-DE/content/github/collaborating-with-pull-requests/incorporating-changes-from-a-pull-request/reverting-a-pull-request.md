---
title: Pull Request rückgängig machen
intro: 'Du kannst einen Pull Request rückgängig machen, der in den vorgelagerten Branch zusammengeführt wurde.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### About reverting a pull request

Durch das Rückgängigmachen eines Pull Requests auf {% data variables.product.product_name %} wird ein neuer Pull Request erstellt, der ein „Revert“ des Merge-Commits des ursprünglich gemergten Pull Requests enthält.

### Pull Request rückgängig machen

{% note %}

**Note:** You may need to revert the individual commits in your pull request if either of the following is true.

- Die Rückgängigmachung eines Pull Requests verursacht Mergekonflikte
- The original pull request was not originally merged on {% data variables.product.product_name %}. For example, someone could have merged the pull request using a fast-forward merge on the command line.

For more information about using Git to manually revert individual commits, see [Git revert](https://git-scm.com/docs/git-revert.html) in the Git documentation.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, den Du rückgängig machen möchtest.
3. Klicke im unteren Teil des Pull Requests auf **Revert** (Rückgängig machen). ![Link „Revert pull request“ (Pull Request rückgängig machen)](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Führe den daraus entstandenen Pull Request zusammen. Weitere Informationen findest Du unter „[Einen Pull Request zusammenführen](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request).“
