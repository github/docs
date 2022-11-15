---
title: About organizations
intro: 'Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once, with sophisticated security and administrative features.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## About organizations

{% data reusables.organizations.about-organizations %} For more information about account types, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

You can invite an unlimited number of people to join your organization, then give these organization members a variety of roles that grant different levels of access to the organization and its data. For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

In addition to managing access to the organization itself, you can separately manage access to your organization's repositories, project boards, and apps. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Project board permissions for an organization](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)", and "[Managing access to your organization's apps](/organizations/managing-access-to-your-organizations-apps)."

To simplify access management and enhance collaboration, you can create nested teams that reflect your group's structure, with cascading access permissions and mentions. For more information, see "[About teams](/organizations/organizing-members-into-teams/about-teams)."

You can configure the organization to meet the unique needs of your group by managing settings, such as restricting the types of repositories that members can create. For more information, see "[Managing organization settings](/organizations/managing-organization-settings)."

To harden your organization's security, you can enforce security requirements and review the organization's audit log. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

To learn how to use organizations most effectively, see "[Best practices for organizations](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)."

{% ifversion fpt or ghec %}
## About feature availability

{% data reusables.organizations.organization-plans %}
{% endif %}

## Organizations and enterprise accounts

{% ifversion fpt %}
Enterprise accounts are a feature of {% data variables.product.prodname_ghe_cloud %} that allow owners to centrally manage policy and billing for multiple organizations. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %}
{% ifversion ghec %}For organizations that belong to an enterprise account, billing is managed at the enterprise account level, and billing settings are not available at the organization level.{% endif %} Enterprise owners can set policy for all organizations in the enterprise account or allow organization owners to set the policy at the organization level. Organization owners cannot change settings enforced for your organization at the enterprise account level. If you have questions about a policy or setting for your organization, contact the owner of your enterprise account.

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Terms of service and data protection for organizations

An entity, such as a company, non-profit, or group, can agree to the Standard Terms of Service or the Corporate Terms of Service for their organization. For more information, see "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."

{% endif %}
