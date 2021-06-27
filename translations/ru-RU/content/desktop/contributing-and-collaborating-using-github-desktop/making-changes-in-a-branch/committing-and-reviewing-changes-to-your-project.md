---
title: Committing and reviewing changes to your project
intro: '{% data variables.product.prodname_desktop %} tracks all changes to all files as you edit them. You can decide how to group the changes to create meaningful commits.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### About commits

{% data reusables.commits.about-commits %} You can also add a co-author on any commits you collaborate on.

{% data reusables.desktop.update-email-address %} For more information, see ["Configuring Git for GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)."

### Choosing a branch and making changes

1. [Create a new branch](/desktop/guides/contributing-to-projects/managing-branches), or select an existing branch by clicking {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** on the toolbar and selecting the branch from the list.

  ![Drop down menu to switch your current branch](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

### Choosing how to display diffs

You can change the way diffs are displayed in {% data variables.product.prodname_desktop %} to suit your reviewing needs.

To change how you view diffs, in the top-right corner of the diff view, click {% octicon "gear" aria-label="The Gear icon" %}.
- To change how the entire diff is displayed, under "Diff display", select  **Unified** or **Split**. The Unified view shows changes linearly, while the Split view shows old content on the left side and new content on the right side.
- To hide whitespace changes so you can focus on more substantive changes, select **Hide Whitespace Changes**.

![Diff option menu](/assets/images/help/desktop/diff-selection.png)

If you need to see more of the file than {% data variables.product.prodname_desktop %} shows by default, you can expand the diff.
- To see the next few lines above or below the highlighted changes, click the arrow above or below the line numbers.
- To see the entire file, right-click in the diff view and click **Expand Whole File**.

![Expand diff view](/assets/images/help/desktop/expand-diff-view.png)

### Selecting changes to include in a commit

As you make changes to files in your text editor and save them locally, you will also see the changes in {% data variables.product.prodname_desktop %}.

* The red {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} icon indicates removed files.
* The yellow {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} icon indicates modified files.
* The green {% octicon "diff-added" aria-label="The diff added icon color-green" %} icon indicates added files.
* To access stashed changes, click **Stashed Changes**.

  ![Stashed changes option](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Select checkbox to commit all changed files](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Select checkboxes next to the files you want to commit](/assets/images/help/desktop/commit-some.png)

#### Creating a partial commit

If one file contains multiple changes, but you only want some of those changes to be included in a commit, you can create a partial commit. The rest of your changes will remain intact, so that you can make additional modifications and commits. This allows you to make separate, meaningful commits, such as keeping line break changes in a commit separate from code or prose changes.

To exclude changed lines from your commit, click one or more changed lines so the blue disappears. The lines that are still highlighted in blue will be included in the commit.

  ![Unselected lines in a file](/assets/images/help/desktop/partial-commit.png)

### Discarding changes
If you have uncommitted changes that you don't want to keep, you can discard the changes. This will remove the changes from the files on your computer. You can discard all uncommitted changes in one or more files, or you can discard specific lines you added.

Discarded changes are saved in a dated file in the Trash. You can recover discarded changes until the Trash is emptied.

#### Discarding changes in one or more files

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

  ![Discard Changes option in context menu](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

  ![Discard Changes button in the confirmation dialog](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### Discarding changes in one or more lines
You can discard one or more changed lines that are uncommitted.

{% note %}

**Note:** Discarding single lines is disabled in a group of changes that adds and removes lines.

{% endnote %}

To discard one added line, in the list of changed lines, right click on the line you want to discard and select **Discard added line**.

  ![Discard single line in the confirmation dialog](/assets/images/help/desktop/discard-single-line.png)

To discard a group of changed lines, right click the vertical bar to the right of the line numbers for the lines you want to discard, then select **Discard added lines**.

  ![Discard a group of added lines in the confirmation dialog](/assets/images/help/desktop/discard-multiple-lines.png)


### Write a commit message and push your changes

Once you're satisfied with the changes you've chosen to include in your commit, write your commit message and push your changes. If you've collaborated on a commit, you can also attribute a commit to more than one author.

{% note %}

**Note**: {% data reusables.desktop.tags-push-with-commits %} For more information, see "[Managing tags](/desktop/contributing-to-projects/managing-tags)."

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Commit message field](/assets/images/help/desktop/commit-message.png)
2. Optionally, to attribute a commit to another author, click the add co-authors icon and type the username(s) you want to include.

  ![Add a co-author to the commit message](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}

  ![Commit button](/assets/images/help/desktop/commit-button.png)
4. If the branch you're trying to commit to is protected, Desktop will warn you.
    - To move your changes, click **switch branches**.
    - To commit your changes to the protected branch, click **Commit to _BRANCH_**.

  For more information about protected branches, see "[About protected branches](/github/administering-a-repository/about-protected-branches)".

  ![Protected branch warning](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
