---
title: Restricting repository visibility changes in your organization
intro: 'To protect your organization''s data, you can configure permissions for changing repository visibility in your organization.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

You can restrict the ability to change repository visibility to organization owners only, or allow members with admin privileges for a repository to also change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin permissions to change an existing repository to any visibility, even if you do not allow that type of repository to be created. For more information about restricting the visibility of repositories during creation, see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)."

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository visibility change", deselect **Allow members to change repository visibilities for this organization**.
![Checkbox to allow members to change repository visibility](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Click **Save**.

### Further reading

- "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
