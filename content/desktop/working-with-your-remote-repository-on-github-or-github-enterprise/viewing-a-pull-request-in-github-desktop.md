---
title: Viewing a pull request in GitHub Desktop
shortTitle: Viewing a pull request
intro: 'You can open a pull request branch in {% data variables.product.prodname_desktop %} to view the commit history, run checks, or make changes.'
redirect_from:
  - /desktop/contributing-to-projects/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-a-pull-request-in-github-desktop
versions:
  feature: desktop
---

## About pull requests in {% data variables.product.prodname_desktop %}

Pull requests let you propose changes to projects, provide feedback and reviews, and merge changes into projects. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

When someone creates a pull request, they make changes on a "head branch" and suggest these changes to a "base branch," such as `main`. In {% data variables.product.prodname_desktop %}, you can open (or "check out") the head branch of a pull request to view the changes a contributor is suggesting. For example, you can see a history of the commits that the contributor has made, and see which files the commits modified, added, or deleted.

Checking out the head branch can be useful if you want to make changes to the branch that are too complex for you to leave as suggestions in a review. For example, you might want to make structural changes to some content, add or remove files, or resolve a merge conflict that is too complex to resolve on {% data variables.product.prodname_dotcom %}. From {% data variables.product.prodname_desktop %}, you can view the branch in your preferred editor to view any changes or make additional updates.

Alternatively, you might just want to view information such as commit history and status checks in an environment you're familiar with, without needing to navigate to the pull request on {% data variables.product.prodname_dotcom %}. If checks have been enabled in your repository, {% data variables.product.prodname_desktop %} will show the status of the checks on the pull request and allow you to re-run checks. For more information, see "[Working with a pull request in {% data variables.product.prodname_desktop %}](#working-with-a-pull-request-in-github-desktop)."

You cannot comment on a pull request from {% data variables.product.prodname_desktop %}. After reviewing changes in a pull request, you can give feedback on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)" and "[Viewing a pull request on {% data variables.product.prodname_dotcom %}](#viewing-a-pull-request-on-github)."

## Opening a pull request branch in {% data variables.product.prodname_desktop %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
{% data reusables.desktop.choose-pr-from-list %}

   Optionally, to refresh the list of pull requests, click {% octicon "sync" aria-label="The sync icon" %}.

   ![Screenshot of the "Pull Requests" tab. A button, labeled with an icon of two arrows forming a circle, is highlighted with an orange outline.](/assets/images/help/desktop/pull-request-list-sync.png)

{% data reusables.desktop.checked-out-pr %}

## Opening a pull request branch in {% data variables.product.prodname_desktop %} from {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request that you would like to open in {% data variables.product.prodname_desktop %}.
1. To the right of the title of the pull request, click **{% octicon "code" aria-label="" %} Code**, then, on the **Local** tab, click **Checkout with GitHub Desktop**.

   ![Screenshot of a pull request on GitHub. The "Code" dropdown menu is expanded, and a button, labeled "Checkout with GitHub Desktop" is outlined in orange.](/assets/images/help/desktop/open-pr-in-desktop-button.png)

{% data reusables.desktop.checked-out-pr %}

## Working with a pull request in {% data variables.product.prodname_desktop %}

When you have checked out a pull request branch, you can use {% data variables.product.prodname_desktop %} and your local editor to view the contributor's changes or make further changes to the branch. For example, you can:

- [Open the branch in your editor](#open-the-branch-in-your-editor)
- [View the commit history](#view-the-commit-history)
- [View and re-run checks](#view-and-re-run-checks)

### Open the branch in your editor

If you want to look at changes in context or make additional updates to a pull request, you can view the contents of the branch in your local editor.

1. In the "{% data variables.product.prodname_desktop %}" menu bar, select **Repository**.
1. Click **Open in EDITOR**.

   ![Screenshot of a menu bar on a Mac. Under the open "Repository" dropdown menu, a cursor hovers over "Open in Visual Studio Code", highlighted in blue.](/assets/images/help/desktop/open-in-editor.png)

For more information, see "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-a-default-editor-in-github-desktop)."

### View the commit history

You can view the commit history of the branch if you want to see how the contributor arrived at the set of changes they're suggesting.

{% data reusables.desktop.history-tab %}
1. In "Select Branch to Compare...", search for and select the base branch of the pull request.
1. Click the **Ahead** tab.

   ![Screenshot of the "History" tab. Above a list of commits, "main" is entered as the branch to compare, and a tab labeled "Ahead" is outlined in orange.](/assets/images/help/desktop/ahead-tab.png)

For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/viewing-the-branch-history-in-github-desktop)."

### View and re-run checks

You can view the status of checks that have run against the pull request branch. Failed checks may indicate problems with the proposed changes, which could prevent the branch from merging. You can re-run checks from {% data variables.product.prodname_desktop %}. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop#viewing-and-re-running-checks)."

## Viewing a pull request on {% data variables.product.prodname_dotcom %}

To add comments to a pull request, leave a review, or merge the pull request, you will need to navigate to the pull request on {% data variables.product.prodname_dotcom %}. When you have checked out a pull request branch in {% data variables.product.prodname_desktop %}, you can quickly open the corresponding pull request on {% data variables.product.prodname_dotcom %}.

1. In the {% data variables.product.prodname_desktop %} menu bar, click **Branch**.
1. Select **View Pull Request on {% data variables.product.prodname_dotcom %}**.

   ![Screenshot of the menu bar on a Mac. The "Branch" dropdown menu is expanded, and the cursor hovers over "View Pull Request on {% data variables.product.prodname_dotcom %}".](/assets/images/help/desktop/view-pr-on-github.png)
