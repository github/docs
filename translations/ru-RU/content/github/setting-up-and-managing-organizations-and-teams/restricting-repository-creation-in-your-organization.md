---
title: Restricting repository creation in your organization
intro: 'To protect your organization''s data, you can configure permissions for creating repositories in your organization.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can choose whether members can create repositories in your organization. If you allow members to create repositories, you can choose which types of repositories members can create.{% if currentVersion == "free-pro-team@latest" %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %} For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Organization owners can always create any type of repository.

{% if currentVersion == "free-pro-team@latest" %}Enterprise owners{% else %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}"[Restricting repository creation in your instance](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)."{% endif %}

{% warning %}

**Warning**: This setting only restricts the visibility options available when repositories are created and does not restrict the ability to change repository visibility at a later time. For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options. ![Repository creation options](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. Click **Save**.
