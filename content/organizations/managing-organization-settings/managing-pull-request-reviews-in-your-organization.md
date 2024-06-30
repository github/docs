---
title: Managing pull request reviews in your organization
intro: You can limit which users can approve or request changes to a pull requests in your organization.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
---

## About code review limits

By default, in public repositories, any user can submit reviews that approve or request changes to a pull request.

You can limit who is able to approve or request changes to pull requests in public repositories owned by your organization. After you enable code review limits, anyone can comment on pull requests in your public repositories, but only people with explicit access to a repository can approve a pull request or request changes.

You can also enable code review limits for individual repositories. If you enable or limits for your organization, you will override any limits for individual repositories owned by the organization. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)."

## Managing code review limits

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "report" aria-hidden="true" %} Moderation**.
1. Under "{% octicon "report" aria-hidden="true" %} Moderation", click **Code review limits**.
1. Review the information on screen.
1. Manage code review limits.
   * To limit reviews to those with explicit access, click **Limit review on all repositories**.
   * To remove the limits from every public repository in your organization, click **Remove review limits from all repositories**.
