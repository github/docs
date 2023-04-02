---
title: Viewing a pull request in GitHub Desktop
shortTitle: Viewing a pull request
intro: 'You can view proposed changes in open pull requests on {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop
versions:
  fpt: '*'
---
## About pull requests in {% data variables.product.prodname_desktop %}
You can view pull requests that you or your collaborators have proposed in {% data variables.product.prodname_desktop %}. Pull requests let you propose changes to projects, provide feedback and reviews, and merge changes into projects. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

When you view a pull request in {% data variables.product.prodname_desktop %}, you can see a history of commits that contributors made. You can also see which files the commits modified, added, or deleted. From {% data variables.product.prodname_desktop %}, you can open repositories in your preferred text editor to view any changes or make additional changes. After reviewing changes in a pull request, you can give feedback on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."

If checks have been enabled in your repository, {% data variables.product.prodname_desktop %} will show the status of the checks on the pull request and allow you to re-run checks. For more information, see "[AUTOTITLE](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)."

## Viewing a pull request in {% data variables.product.prodname_desktop %}
{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![Screenshot of the "Current Branch" dropdown menu. A tab, labeled "Pull Requests", is highlighted with an orange outline.](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
   
   Optionally, to refresh the list of pull requests, click {% octicon "sync" aria-label="The sync icon" %}.

  ![Screenshot of the "Pull Requests" tab. A button, labeled with an icon of two arrows forming a circle, is highlighted with an orange outline.](/assets/images/help/desktop/pull-request-list-sync.png)

## Opening a pull request in {% data variables.product.prodname_desktop %} from {% data variables.product.prodname_dotcom %}
{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request that you would like to open in {% data variables.product.prodname_desktop %}.
3. To the right of the title of the pull request, click **{% octicon "code" aria-label="" %} Code**, then, on the **Local** tab, click **Checkout with GitHub Desktop**.
   
   ![Screenshot of a pull request on GitHub. The "Code" dropdown menu is expanded, and a button, labeled "Checkout with GitHub Desktop" is outlined in orange.](/assets/images/help/desktop/open-pr-in-desktop-button.png)
