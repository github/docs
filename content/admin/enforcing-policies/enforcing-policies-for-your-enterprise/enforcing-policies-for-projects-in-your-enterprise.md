---
title: Enforcing policies for projects in your enterprise
intro: 'You can enforce policies for {% data variables.projects.projects_v2_and_v1 %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Projects policies
---

## About policies for projects in your enterprise

You can enforce policies to control how enterprise members manage {% data variables.projects.projects_v2_and_v1 %}, or you can allow organization owners to manage policies for {% data variables.projects.projects_v2_and_v1 %} at the organization level.{% ifversion project-visibility-policy %}

Some policies apply to both {% data variables.product.prodname_projects_v2 %}, the new projects experience, and {% data variables.product.prodname_projects_v1 %}, the previous experience, while some apply only to {% data variables.product.prodname_projects_v1 %}. For more information about each experience, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)" and "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."
{% else %}For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."{% endif %}

## Enforcing a policy for organization-wide projects

Across all organizations owned by your enterprise, you can enable or disable organization-wide {% data variables.projects.projects_v1_boards %}, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
1. Under "Organization projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Organization projects", select the dropdown menu and click a policy.

{% ifversion project-visibility-policy %}

## Enforcing a policy for visibility changes to projects

Across all organizations owned by your enterprise, you can enable or disable the ability for people with admin access to a project to change the visibility of the project, or you can allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
1. Under "Project visibility change permission", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Select the dropdown menu, then click a policy.
{% endif %}

{% ifversion projects-v1 %}

## Enforcing policies for {% data variables.product.prodname_projects_v1 %}

Some policies apply only to {% data variables.product.prodname_projects_v1 %}.

### Enforcing a policy for repository projects

Across all organizations owned by your enterprise, you can enable or disable repository-level projects, or allow owners to administer the setting at the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
1. Under "Repository projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository projects", select the dropdown menu and click a policy.
{% endif %}
