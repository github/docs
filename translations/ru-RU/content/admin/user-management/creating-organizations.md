---
title: Creating organizations
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
intro: You can choose to set up a new organization or convert an existing personal account into an organization.
versions:
  enterprise-server: '*'
---

An organization is a collection of user accounts that owns repositories. Organizations have one or more owners, who have administrative privileges for the organization. Organizations can also be used for namespacing—for example, `http(s)://[hostname]/[organization name]/` takes you to an organization's profile on {% data variables.product.prodname_ghe_server %}, while `http(s)://[hostname]/[organization name]/[repository name]/` takes you to a repository's profile.

When you create an organization, it doesn't have any repositories associated with it. At any time, [members of the organization with the Owner role can add new repositories](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization), or transfer existing repositories. For more information, see "[Transferring a repository](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. In the "Organizations" section, click **New organization**. ![New organization button](/assets/images/help/settings/new-org-button.png)
4. Under "Organization name", give the organization a name. ![New organization name](/assets/images/help/organizations/new-org-name.png)
5. Under "Contact email," type the email address of a person who can be contacted for more information about the organization.
6. Click **Create organization**.
