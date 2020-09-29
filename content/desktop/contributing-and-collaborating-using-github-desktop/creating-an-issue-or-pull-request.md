---
title: Creating an issue or pull request
intro: You can create an issue or pull request to propose and collaborate on changes to a repository.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---
### About issues and pull requests

You can use issues to track ideas, bugs, tasks, and other information that's important to your project. You can create an issue in your project's repository with {% data variables.product.prodname_desktop %}. For more information about issues, see "[About issues](/github/managing-your-work-on-github/about-issues)."

After you create a branch and make changes to files in a project, you can create a pull request. With a pull request, you can propose, discuss, and iterate on changes before you merge the changes into the project. You can create a pull request in your project's repository with {% data variables.product.prodname_desktop %}. For more information about pull requests, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

### Prerequisites

Before you create a pull request, you'll need to push changes to a branch on {% data variables.product.prodname_dotcom %}.
- Save and commit any changes on your local branch. For more information, see "[Committing and reviewing changes to your project](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)."
- Push your local commits to the remote repository. For more information, see "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)."
- Publish your current branch to {% data variables.product.prodname_dotcom %}. For more information, see "[Managing branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)."

### Creating an issue

{% mac %}

1. In the menu bar, use the **Repository** drop-down menu, then click **Create Issue on {% data variables.product.prodname_dotcom %}**.
    ![Repository value in the Branch menu](/assets/images/help/desktop/create-issue-mac.png)
2. On {% data variables.product.prodname_dotcom %}, click **Get started** to open an issue template or click **Open a blank issue**.
    ![Create new issue options](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. In the menu bar, use the **Repository** drop-down menu, then click **Create issue on {% data variables.product.prodname_dotcom %}**.
    ![The Repository value in the Branch menu](/assets/images/help/desktop/create-issue-windows.png)
2. On {% data variables.product.prodname_dotcom %}, click **Get started** to open an issue template or click **Open a blank issue**.
    ![Create new issue options](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Note**: If issue templates aren't enabled in your current repository, {% data variables.product.prodname_desktop %} will direct you to a blank issue on {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Creating a pull request

{% mac %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.
  ![The Create Pull Request button](/assets/images/help/desktop/mac-create-pull-request.png)
4. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.
  ![The Create Pull Request button](/assets/images/help/desktop/windows-create-pull-request.png)
3. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### Further reading
- "[Issue](/github/getting-started-with-github/github-glossary#issue)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Pull request](/github/getting-started-with-github/github-glossary#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Base branch](/github/getting-started-with-github/github-glossary#base-branch)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Topic branch](/github/getting-started-with-github/github-glossary#topic-branch)" in the {% data variables.product.prodname_dotcom %} glossary
