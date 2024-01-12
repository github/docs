---
title: Committing and reviewing changes to your project in GitHub Desktop
intro: '{% data variables.product.prodname_desktop %} tracks all changes to all files as you edit them. You can decide how to group the changes to create meaningful commits.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop
versions:
  feature: desktop
shortTitle: Commit & review changes
---
## About commits

{% data reusables.commits.about-commits %} You can also add a co-author on any commits you collaborate on.

{% data reusables.desktop.update-email-address %} For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop)."

{% ifversion repo-rules %}

Repository administrators can enable rulesets for a branch to enforce specific conventions when committing. For example, a ruleset can require a commit to be signed, or for an issue number to be referenced at the start of a commit message. {% data variables.product.prodname_desktop %} will display a warning and prevent committing if a commit does not follow the rulesets.  For more information, see "[AUTOTITLE](/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

{% endif %}

## Choosing a branch and making changes

1. [Create a new branch](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop), or select an existing branch by clicking {% octicon "git-branch" aria-hidden="true" %} **Current Branch** on the toolbar and selecting the branch from the list.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

## Choosing how to display diffs

You can change the way diffs are displayed in {% data variables.product.prodname_desktop %} to suit your reviewing needs.

To change how you view diffs, in the top-right corner of the diff view, click {% octicon "gear" aria-label="The Gear icon" %}.
- To change how the entire diff is displayed, under "Diff display", select  **Unified** or **Split**. The Unified view shows changes linearly, while the Split view shows old content on the left side and new content on the right side.
- To hide whitespace changes so you can focus on more substantive changes, select **Hide Whitespace Changes**.

![Screenshot of the diff view of a "README" file. A gear icon is outlined in orange above an expanded dropdown displaying "Whitespace" and "Diff display" settings.](/assets/images/help/desktop/diff-selection.png)

If you need to see more of the file than {% data variables.product.prodname_desktop %} shows by default, you can expand the diff.
- To see the next few lines above or below the highlighted changes, click the arrow above or below the line numbers.
- To see the entire file, right-click in the diff view and click **Expand Whole File**.

![Screenshot of the diff view of a "README" file. Over a green "addition" line, in a context menu, the cursor hovers over "Expand Whole File".](/assets/images/help/desktop/expand-diff-view.png)

## Selecting changes to include in a commit

As you make changes to files in your text editor and save them locally, you will also see the changes in {% data variables.product.prodname_desktop %}.

In the "Changes" tab in the left sidebar:

- The red {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} icon indicates removed files.
- The yellow {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} icon indicates modified files.
- The green {% octicon "diff-added" aria-label="The diff added icon color-green" %} icon indicates added files.
- To access stashed changes, click **Stashed Changes**.
- {% data reusables.desktop.commit-all-desc %}

  ![Screenshot of the "Changes" tab. Above the list of changed files, next to the text "3 changed files", a selected checkbox is outlined in orange.](/assets/images/help/desktop/commit-all.png)
- {% data reusables.desktop.commit-some-desc %}

### Creating a partial commit

If one file contains multiple changes, but you only want some of those changes to be included in a commit, you can create a partial commit. The rest of your changes will remain intact, so that you can make additional modifications and commits. This allows you to make separate, meaningful commits, such as keeping line break changes in a commit separate from code or prose changes.

To exclude changed lines from your commit, click one or more changed lines so the blue disappears. The lines that are still highlighted in blue will be included in the commit.

![Screenshot of the diff view of a text file. Next to the text "I don't want to include this line", the background color behind the line numbers is green, not blue.](/assets/images/help/desktop/partial-commit.png)

## Discarding changes

If you have uncommitted changes that you don't want to keep, you can discard the changes. This will remove the changes from the files on your computer. You can discard all uncommitted changes in one or more files, or you can discard specific lines you added.

Discarded changes are saved in a dated file in the Trash. You can recover discarded changes until the Trash is emptied.

### Discarding changes in one or more files

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

   ![Screenshot of the "Changes" tab. Two selected files are highlighted in blue. In a context menu, the cursor hovers over "Discard 2 Selected Changes".](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

### Discarding changes in one or more lines

You can discard one or more changed lines that are uncommitted.

{% note %}

**Note:** Discarding single lines is disabled in a group of changes that adds and removes lines.

{% endnote %}

To discard one added line, in the list of changed lines, right-click the line number of the line you want to discard, then select **Discard Added Line**.

![Screenshot of the diff view of a file. In a context menu, a cursor hovers over "Discard Added Line", highlighted in blue.](/assets/images/help/desktop/discard-single-line.png)

To discard a group of changed lines, right-click the vertical bar to the right of the line numbers for the lines you want to discard, then select **Discard added lines**.

![Screenshot of the diff view of a file. To the right of the line numbers, a narrow, darker blue line is highlighted with an orange outline.](/assets/images/help/desktop/discard-multiple-lines.png)

## Write a commit message and push your changes

Once you're satisfied with the changes you've chosen to include in your commit, write your commit message and push your changes. If you've collaborated on a commit, you can also attribute a commit to more than one author.

{% note %}

**Note**: {% data reusables.desktop.tags-push-with-commits %} For more information, see "[AUTOTITLE](/desktop/managing-commits/managing-tags-in-github-desktop)."

{% endnote %}

{% data reusables.desktop.commit-message %}

   ![Screenshot of the "Changes" tab in the sidebar. To the right of a profile picture, a text field containing a commit message is outlined in orange.](/assets/images/help/desktop/commit-message.png)
1. Optionally, to attribute a commit to another author, click the add co-authors icon and type the username(s) you want to include.

   ![Screenshot of the "Changes" tab. In the corner of the "Description" field, a "person with a plus sign" icon for adding a co-author is outlined in orange.](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
1. If the branch you're trying to commit to is protected, Desktop will warn you.
    - To move your changes, click **switch branches**.
    - To commit your changes to the protected branch, click **Commit to BRANCH**.

   For more information about protected branches, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."
{% data reusables.desktop.push-origin %}

1. If you have a pull request based off the branch you are working on, {% data variables.product.prodname_desktop %} will display the status of the checks that have run for the pull request next to the "Current Branch" section of the repository bar. For more information about checks, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)."

   If a pull request has not been created for the current branch, {% data variables.product.prodname_desktop %} will give you the option to preview the changes and create one. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop)."

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

## Further reading

- "[AUTOTITLE](/get-started/using-git)"
