---
title: About commits
intro: You can save small groups of meaningful changes as commits.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
## About commits

{% data reusables.commits.about-commits %}

You can add a co-author on any commits you collaborate on. For more information, see "[Creating a commit with multiple authors](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

{% ifversion fpt or ghec %}
You can also create a commit on behalf of an organization. For more information, see "[Creating a commit on behalf of an organization](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)."{% endif %}

Rebasing allows you to change a series of commits and can modify the order of the commits in your timeline. For more information, see "[About git rebase](/github/getting-started-with-github/about-git-rebase)."

## About commit branches and tag labels

You can see which branch a commit is on by looking at the labels beneath the commit on the commit page.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. Navigate to the commit by clicking the commit message link.
   ![Screenshot of commit with commit message link emphasized](/assets/images/help/commits/commit-message-link.png)
2. To see what branch the commit is on, check the label below the commit message.
   ![Screenshot of commit with commit branch indicator emphasized](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

Once the commit is on the default branch, any tags that contain the commit will be shown and the default branch will be the only branch listed. For more information on tags, see "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation.

![Screenshot of commit with commit tag emphasized](/assets/images/help/commits/commit-tag-label.png)

## Further reading
- "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" on {% data variables.product.prodname_desktop %}