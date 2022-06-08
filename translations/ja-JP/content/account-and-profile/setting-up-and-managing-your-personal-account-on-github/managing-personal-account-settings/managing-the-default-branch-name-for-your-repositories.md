---
title: Managing the default branch name for your repositories
intro: 'You can set the default branch name for new repositories that you create on {% data variables.product.product_location %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
shortTitle: Manage default branch name
---
## About management of the default branch name

When you create a new repository on {% data variables.product.product_location %}, the repository contains one branch, which is the default branch. You can change the name that {% data variables.product.product_name %} uses for the default branch in new repositories you create. For more information about the default branch, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% data reusables.branches.change-default-branch %}

## Setting the default branch name

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.repo-tab %}
3. Under "Repository default branch", click **Change default branch name now**.
    ![Override button](/assets/images/help/settings/repo-default-name-button.png)
4. Type the default name that you would like to use for new branches.
    ![Text box for entering default name](/assets/images/help/settings/repo-default-name-text.png)
5. Click **Update**.
    ![Update button](/assets/images/help/settings/repo-default-name-update.png)

## Further reading

- "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"
