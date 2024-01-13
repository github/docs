---
title: Creating an issue or pull request from GitHub Desktop
intro: You can create an issue or pull request to propose and collaborate on changes to a repository.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop
versions:
  feature: desktop
shortTitle: Create an issue or PR
---
## About issues and pull requests

You can use issues to track ideas, bugs, tasks, and other information that's important to your project. You can create an issue in your project's repository with {% data variables.product.prodname_desktop %}. For more information about issues, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."

After you create a branch and make changes to files in a project, you can create a pull request. With a pull request, you can propose, discuss, and iterate on changes before you merge the changes into the project. You can create a pull request in your project's repository with {% data variables.product.prodname_desktop %}. For more information about pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

## Prerequisites

Before you create a pull request, you'll need to push changes to a branch on {% data variables.product.prodname_dotcom %}.
- Save and commit any changes on your local branch. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)."
- Push your local commits to the remote repository. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop)."
- Publish your current branch to {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop)."

## Creating an issue

1. In the menu bar, select **Repository**, then click **Create Issue on {% data variables.product.prodname_dotcom %}**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. In the expanded "Repository" dropdown menu, the cursor hovers over "Create Issue on GitHub".](/assets/images/help/desktop/create-issue-mac.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "Repository" dropdown menu, an option labeled "Create Issue on GitHub" is outlined in orange.](/assets/images/help/desktop/create-issue-windows.png)

   {% endwindows %}

1. On {% data variables.product.prodname_dotcom %}, click **Get started** to open an issue template or click **Open a blank issue**.

{% note %}

**Note**: If issue templates aren't enabled in your current repository, {% data variables.product.prodname_desktop %} will direct you to a blank issue on {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Creating a pull request

1. Click **Preview Pull Request**. {% data variables.product.prodname_desktop %} will open a preview dialog showing the diff of the changes between your current branch and the base branch.

   {% mac %}

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/windows-preview-pull-request.png)

   {% endwindows %}

   Alternatively, to go straight to {% data variables.product.prodname_dotcom %} to create your pull request, select the dropdown icon and click **Create Pull Request**.
1. Confirm that the branch in the **base:** dropdown menu is the branch where you want to merge your changes.
   ![Screenshot of the "Open a Pull Request" dialog window. A button with a dropdown icon, labeled "base: development", is outlined in orange.](/assets/images/help/desktop/base-branch-selection.png)

   {% data variables.product.prodname_desktop %} will advise you whether the current branch can be automatically merged into the base branch.
   ![Screenshot of the "Open a Pull Request" dialog window. A status label stating "Can't automatically merge" is highlighted with an orange outline.](/assets/images/help/desktop/preview-dialog-merge-status.png)

1. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

## Further reading

- "[Issue](/get-started/quickstart/github-glossary#issue)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Pull request](/get-started/quickstart/github-glossary#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Base branch](/get-started/quickstart/github-glossary#base-branch)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Topic branch](/get-started/quickstart/github-glossary#topic-branch)" in the {% data variables.product.prodname_dotcom %} glossary
