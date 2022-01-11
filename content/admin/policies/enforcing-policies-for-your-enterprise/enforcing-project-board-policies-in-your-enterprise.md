---
title: Enforcing project board policies in your enterprise
intro: 'You can enforce policies for projects within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
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

## About policies for project boards in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage project boards. You can also allow organization owners to manage policies for project boards. For more information, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

## Enforcing a policy for organization-wide project boards

Across all organizations owned by your enterprise, you can enable or disable organization-wide project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. Under "Organization projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Organization projects", use the drop-down menu and choose a policy.
  ![Drop-down menu with organization project board policy options](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## Enforcing a policy for repository project boards

Across all organizations owned by your enterprise, you can enable or disable repository-level project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. Under "Repository projects", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Repository projects", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository project board policy options](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
