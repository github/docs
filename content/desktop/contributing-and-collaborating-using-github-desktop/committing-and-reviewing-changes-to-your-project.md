---
title: Committing and reviewing changes to your project
intro: '{% data variables.product.prodname_desktop %} tracks all changes to all files as you edit them. You can decide how to group the changes to create meaningful commits.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### About commits

{% data reusables.commits.about-commits %} You can also add a co-author on any commits you collaborate on.

{% data reusables.desktop.update-email-address %} For more information, see ["Configuring Git for GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)."

### 1. Choosing a branch and making changes

1. [Create a new branch](/desktop/guides/contributing-to-projects/managing-branches), or select an existing branch by clicking {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** on the toolbar and selecting the branch from the list.
  ![Drop down menu to switch your current branch](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. Selecting changes to include in a commit

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

If one file contains multiple changes, but you only want *some* of those changes to be included in a commit, you can create a partial commit. The rest of your changes will remain intact, so that you can make additional modifications and commits. This allows you to make separate, meaningful commits, such as keeping line break changes in a commit separate from code or prose changes.

When you review the diff of the file, the lines that will be included in the commit are highlighted in blue. To exclude the change, click the changed line so the blue disappears.

![Unselected lines in a file](/assets/images/help/desktop/partial-commit.png)

#### Discarding changes

You can discard all the uncommitted changes in one file, a range of files, or discard all changes in all files since the last commit.

{% mac %}

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![Discard Changes option in context menu](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Discard Changes button in the confirmation dialog](/assets/images/help/desktop/discard-changes-confirm-mac.png)

{% tip %}

**Tip:** The changes you discarded are saved in a dated file in the Trash and you can recover them until the Trash is emptied.

{% endtip %}

{% endmac %}

{% windows %}

{% data reusables.desktop.select-discard-files %}{% data reusables.desktop.click-discard-files %}
  ![Discard Changes option in context menu](/assets/images/help/desktop/discard-changes-win.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Discard Changes button in the confirmation dialog](/assets/images/help/desktop/discard-changes-confirm-win.png)

{% tip %}

**Tip:** The changes you discarded are saved in a file in the Recycle Bin and you can recover them until it is emptied.

{% endtip %}

{% endwindows %}

### 3. Write a commit message and push your changes

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
