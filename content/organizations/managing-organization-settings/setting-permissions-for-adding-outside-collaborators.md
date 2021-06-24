---
title: Setting permissions for adding outside collaborators
intro: 'To protect your organization''s data and the number of paid licenses used in your organization, you can allow only owners to invite outside collaborators to organization repositories.'
product: '{% data reusables.gated-features.restrict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
---

Organization owners, and members with admin privileges for a repository, can invite outside collaborators to work on the repository. You can also restrict outside collaborator invite permissions to only organization owners.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository invitations", select **Allow members to invite outside collaborators to repositories for this organization**.{% ifversion fpt or ghes > 2.21 or ghae %}
  ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
  ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. Click **Save**.
