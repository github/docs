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
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
---

## About policies for projects in your enterprise

You can enforce policies to control how enterprise members manage {% data variables.projects.projects_v2_and_v1 %}, or you can allow organization owners to manage policies for {% data variables.projects.projects_v2_and_v1 %} at the organization level.{% ifversion project-visibility-policy %}

Some policies apply to both {% data variables.product.prodname_projects_v2 %}, the new projects experience, and {% data variables.product.prodname_projects_v1 %}, the previous experience, while some apply only to {% data variables.product.prodname_projects_v1 %}. For more information about each experience, see "[About {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)" and "[About {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."
{% else %}For more information, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."{% endif %}

## Enforcing a policy for organization-wide projects

Across all organizations owned by your enterprise, you can enable or disable organization-wide project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. Under "Organization projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Organization projects", use the drop-down menu and choose a policy.
  ![Drop-down menu with organization project board policy options](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Enforcing a policy for visibility changes to projects

Across all organizations owned by your enterprise, you can enable or disable the ability for people with admin access to a project to change the visibility of the project, or you can allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
1. Under "Project visibility change permission", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Select the dropdown menu, then click a policy.

   ![Screenshot of the dropdown menu for configuring the "Project visibility change permission" policy](/assets/images/help/business-accounts/project-visibility-change-drop-down.png)
{% endif %}

{% ifversion projects-v1 %}
## Enforcing policies for {% data variables.product.prodname_projects_v1 %}

Some policies apply only to {% data variables.product.prodname_projects_v1 %}.

### Enforcing a policy for repository projects

Across all organizations owned by your enterprise, you can enable or disable repository-level projects, or allow owners to administer the setting at the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. Under "Repository projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Repository projects", use the drop-down menu and choose a policy.

   ![Drop-down menu with repository project board policy options](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
{% endif %}
