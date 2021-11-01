---
title: About commits
intro: You can save small groups of meaningful changes as commits.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
## About commits

{% data reusables.commits.about-commits %}

You can add a co-author on any commits you collaborate on. For more information, see "[Creating a commit with multiple authors](/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors)."

{% ifversion fpt or ghec %}
You can also create a commit on behalf of an organization. For more information, see "[Creating a commit on behalf of an organization](/github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization)."{% endif %}

Rebasing allows you to change a series of commits and can modify the order of the commits in your timeline. For more information, see "[About git rebase](/github/getting-started-with-github/about-git-rebase)."

In a pull request, you can link a commit message to an issue to show that a fix is in progress and to automatically close it when the pull request is merged. For more information, see "[Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)."

## Further reading
- "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" on {% data variables.product.prodname_desktop %}
