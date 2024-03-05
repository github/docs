---
title: Setting permissions for adding outside collaborators
intro: 'To protect your organization''s data and the number of paid licenses used in your organization, you can configure who can add outside collaborators to organization repositories.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
---

{% data reusables.organizations.about-outside-collaborators %} For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)."

By default, anyone with admin access to a repository can invite outside collaborators to work on the repository. You can choose to restrict the ability to add outside collaborators to organization owners only.

{% ifversion ghec %}
{% note %}

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can restrict the ability to invite outside collaborators to organization owners. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}If your organization is owned by an enterprise account, you{% else %}You{% endif %} may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see "[Enforcing repository management policies in your enterprise]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}."

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository outside collaborators", deselect **Allow repository administrators to invite outside collaborators to repositories for this organization**.
1. Click **Save**.
