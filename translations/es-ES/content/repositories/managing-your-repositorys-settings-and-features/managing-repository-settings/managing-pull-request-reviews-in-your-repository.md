---
title: Managing pull request reviews in your repository
intro: You can limit which users can approve or request changes to a pull requests in a public repository.
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
---

## About code review limits

By default, in public repositories, any user can submit reviews that approve or request changes to a pull request.

You can limit which users are able to submit reviews that approve or request changes to pull requests in your public repository. When you enable code review limits, anyone can comment on pull requests in your public repository, but only people with read access or higher can approve pull requests or request changes.

You can also enable code review limits for an organization. If you enable limits for an organization, you will override any limits for individual repositories owned by the organization. For more information, see "[Managing pull request reviews in your organization](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)"

## Enabling code review limits

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under **Access**, click **Moderation options**. ![Moderation options repository settings](/assets/images/help/repository/access-settings-repositories.png)
1. Under **Moderation options**, click **Code review limits**. ![Code review limits repositories](/assets/images/help/repository/code-review-limits-repositories.png)
1. Select or deselect **Limit to users explicitly granted read or higher access**. ![Limit review in repository](/assets/images/help/repository/limit-reviews-in-repository.png)
