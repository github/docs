---
title: Managing the default branch name for repositories in your organization
intro: 'You can set the default branch name for repositories that members create in your organization on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
---

## About management of the default branch name

When a member of your organization creates a new repository in your organization, the repository contains one branch, which is the default branch. You can change the name that {% data variables.product.product_name %} uses for the default branch in new repositories that members of your organization create. For more information about the default branch, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch)."

{% data reusables.branches.change-default-branch %}

If an enterprise owner has enforced a policy for the default branch name for your enterprise, you cannot set a default branch name for your organization. Instead, you can change the default branch for individual repositories. For more information, see {% ifversion fpt %}"[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)"{% else %}"[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)"{% endif %} and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)."

## Setting the default branch name

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
1. Under "Repository default branch", click **Change default branch name now**.
1. In the text field, type the default name that you would like to use for new branches.
1. Click **Update**.

## Further reading

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-the-default-branch-name-for-your-repositories)"
