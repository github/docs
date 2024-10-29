---
title: Restricting repository creation in your organization
intro: 'To protect your organization''s data, you can configure permissions for creating repositories in your organization.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
---

You can choose whether members and {% data variables.product.prodname_github_apps %} can create repositories in your organization. {% ifversion ghec or ghes %}If you allow members and {% data variables.product.prodname_github_apps %} to create repositories, you can choose which types of repositories they can create.{% elsif fpt %}If you allow members and {% data variables.product.prodname_github_apps %} to create repositories, you can choose whether they can create both public and private repositories or public repositories only.{% endif %} Organization owners can always create any type of repository.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} can also restrict members to creating private repositories only. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghes %}
Enterprise owners can restrict the options you have available for your organization's repository creation policy. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)."
{% endif %}

Organization owners can restrict the type of repositories members can create to private {% ifversion ghec or ghes %}or internal{% endif %} to help prevent sensitive information from being exposed. For more information, see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."

{% warning %}

**Warning**: This setting restricts the visibility options available when repositories are _created_, but does not prevent changing the visibility of _existing_ repositories. For more information about restricting changes to existing repositories' visibilities, see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository creation", select one or more options. <br><br>

   {% ifversion fpt or ghec %}
   {% note %}

   **Note:** To restrict members to creating private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %}
   {%- endif %}

1. Click **Save**.
