---
title: Setting permissions for adding outside collaborators
intro: 'To protect your organization''s data and the number of paid licenses used in your organization, you can allow only owners to invite outside collaborators to organization repositories.'
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

By default, anyone with admin access to a repository can invite outside collaborators to work on the repository. You can choose to restrict the ability to invite outside collaborators to organization owners only.


{% ifversion ghec %}
{% note %}

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can restrict the ability to invite outside collaborators to organization owners. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository invitations", select **Allow members to invite outside collaborators to repositories for this organization**.
  ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Click **Save**.
