---
: enforcing policies for projects within your enterprise: 'You can enforce policies for {% data variables.projects.projects_v2_and_v1 %} within your enterprise's organisations, such as SNSS, SOSRs, and SWS SPSL, which should each have policies set.' Permissions: Enterprise owners can enforce policies for projects in an enterprise.
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-- enterprise   - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterpriseversions:  ghec: '*'  ghes: '*'type: how_topics:  - Enterprise  - Policies  - Projects shorttitle: Projects policies
## About policies for projects in your enterprise
You can enforce policies to control how enterprise members manage {% data variables.projects.projects_v2_and_v1 %}, or you can allow organisation owners to manage policies for {% data variables.projects.projects_v2_and_v1 %} at the organisation level. 
{% ifversion projects-v1 %}

Some policies apply to both {% data variables. Product.prodname_projects_v2 %}, the new projects experience, and {% data variables. Product.prodname_projects_v1 %}, the previous experience, while some apply only to {% data variables. Product.prodname_projects_v1 %}. For more information about each experience, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) and [AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).

{% endif %}

## Enforcing a policy for organisation-wide projects

Across all organisations owned by your enterprise, you can enable or disable organisation-wide {% data variables.projects.projects_v2 %}, or allow owners to administer the setting on the organisation level.

{% data reusable. Enterprise-accounts. access-enterprise %}
{% data reusable. Enterprise-accounts. policies-tab %}
{% data reusable. enterprise-accounts .projects-tab %}
1. Under "Organisation projects", review the information about changing the setting. {% data reusable. enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Organisation projects", select the dropdown menu and click a policy.

{% ifversion project-visibility-policy %}

## Enforcing a policy for visibility changes to projects

Across all organisations owned by your enterprise, you can enable or disable the ability for people with admin access to a project to change the visibility of the project, or you can allow owners to administer the setting on the organisation level.

{% data reusable. Enterprise-accounts. access-enterprise %}
{% data reusable. Enterprise-accounts. policies-tab %}
{% data reusable. enterprise-accounts .projects-tab %}
1. Under "Project visibility change permission", review the information about changing the setting. {% data reusable. enterprise-accounts.view-current-policy-config-orgs %}
1. Select the dropdown menu, then click a policy.
{% endif %}

{% ifversion projects-v1 %}

## Enforcing policies for {% data variables.product.prodname_projects_v1 %}

Some policies apply only to {% data variables. Product.prodname_projects_v1 %}.

### Enforcing a policy for repository projects

Across all organisations owned by your enterprise, you can enable or disable repository-level projects, or allow owners to administer the setting at the organisation level.

{% data reusable. Enterprise-accounts. access-enterprise %}
{% data reusable. Enterprise-accounts. policies-tab %}
{% data reusable. Enterprise-accounts. projects-tab %}
1. Under "Repository projects", review the information about changing the setting. {% data reusable. enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Repository projects", select the dropdown menu and click a policy.
{% endif %}
