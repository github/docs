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
  ghec: '*'
---
## About commits

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %}
If the repository you are committing to has compulsory commit signoffs enabled, and you are committing via the web interface, you will automatically sign off on the commit as part of the commit process. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)." {% endif %}

You can add a co-author on any commits you collaborate on. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)."

{% ifversion fpt or ghec %}
You can also create a commit on behalf of an organization. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)."{% endif %}

Rebasing allows you to change a series of commits and can modify the order of the commits in your timeline. For more information, see "[AUTOTITLE](/get-started/using-git/about-git-rebase)."

## About commit branches and tag labels

You can see which branch a commit is on by looking at the labels beneath the commit on the commit page.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
{% data reusables.repositories.navigate-to-commit %}
1. To see what branch the commit is on, check the label below the commit message.

   ![Screenshot of a commit summary. A branch icon and "main" are highlighted with an orange outline.](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

Once the commit is on the default branch, any tags that contain the commit will be shown and the default branch will be the only branch listed. For more information on tags, see "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation.

![Screenshot of a commit summary. The tag icon and "v2.3.4" are highlighted with an orange outline.](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Using the file tree

You can use the file tree to navigate between files in a commit.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
{% data reusables.repositories.navigate-to-commit %}
1. Click on a file in the file tree to view the corresponding file diff. If the file tree is hidden, click {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the commit only includes one file.

   {% endnote %}

   ![Screenshot of the "Files changed" tab of a pull request. In the left sidebar, the file tree is outlined in dark orange.](/assets/images/help/repository/file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box.

{% endif %}

## Further reading

* "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#about-commits)" on {% data variables.product.prodname_desktop %}
