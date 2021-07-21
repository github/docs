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
You can view pull requests that you or your collaborators have proposed in {% data variables.product.prodname_desktop %}. Pull requests let you propose changes to projects, provide feedback and reviews, and merge changes into projects. For more information, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

When you view a pull request in {% data variables.product.prodname_desktop %}, you can see a history of commits that contributors made. You can also see which files the commits modified, added, or deleted. From {% data variables.product.prodname_desktop %}, you can open repositories in your preferred text editor to view any changes or make additional changes. After reviewing changes in a pull request, you can give feedback on {% data variables.product.prodname_dotcom %}. For more information, see "[About pull request reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)."

## Viewing a pull request in {% data variables.product.prodname_desktop %}
{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![Pull Requests tab in the Current Branch drop-down menu](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
  ![List of open pull requests in the repository](/assets/images/help/desktop/click-pull-request.png)
4. Optionally, to refresh the list of pull requests, click {% octicon "sync" aria-label="The sync icon" %}.
  ![Sync button to refresh](/assets/images/help/desktop/pull-request-list-sync.png)

## Opening a pull request in {% data variables.product.prodname_desktop %} from {% data variables.product.prodname_dotcom %}
{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request that you would like to open in {% data variables.product.prodname_desktop %}.
3. To the right of the title of the pull request, click the **Open with** drop-down and then click the **Open in Desktop** button.
  ![The Open in Desktop button](/assets/images/help/desktop/open-pr-in-desktop-button.png)
