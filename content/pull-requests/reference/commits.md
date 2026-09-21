---
title: Commits
intro: Learn how commits save changes to your files, track authorship, and organize your project's history in GitHub.
redirect_from:
  - /pull-requests/concepts/about-commits
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
  - /pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Commit changes
contentType: reference
---
## About commits

{% data reusables.commits.about-commits %}

If the repository you are committing to requires commit signoffs, and you are committing in the web interface, you will automatically sign off on the commit. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository).

You can add a co-author on any commits you collaborate on. See [AUTOTITLE](/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

You can also create a commit on behalf of an organization. See [AUTOTITLE](/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors#creating-a-commit-on-behalf-of-an-organization).

Rebasing lets you change a series of commits and can change the order of the commits in your timeline. See [AUTOTITLE](/get-started/using-git/about-git-rebase).

## About commit branches and tag labels

Commit pages can show labels for branches and tags that contain the commit. These labels help you understand where a commit appears in the repository history.

![Screenshot of a commit summary. A branch icon and "main" are highlighted with an orange outline.](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

Once the commit is on the default branch, any tags that contain the commit will be shown and the default branch will be the only branch listed. See [Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) in the Git documentation.

![Screenshot of a commit summary. The tag icon and "v2.3.4" are highlighted with an orange outline.](/assets/images/help/commits/commit-tag-label.png)

## Using the file tree

The file tree helps you navigate between files in a commit and focus on the diffs that matter. You can select a file to view its diff or filter by file path when a commit changes many files.

> [!NOTE]
> The file tree will not display if your screen width is too narrow or if the commit only includes one file.

![Screenshot of the "Files changed" tab of a pull request. In the left sidebar, the file tree is outlined in dark orange.](/assets/images/help/repository/file-tree.png)

## Further reading

* [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#about-commits) on {% data variables.product.prodname_desktop %}
