---
title: Managing discussion creation for repositories in your organization
intro: You can choose the permission levels that members require to create discussions in repositories owned by your organization.
permissions: Organization owners can manage discussion creation for repositories owned by the organization.
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

{% data reusables.discussions.beta %}

### Allowing or disallowing users with read access to create discussions

By default, organization members with read access can create discussions if a repository administrator or organization owner enables discussions for a repository owned by the organization.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository discussions", select or deselect **Allow users with read access to create discussions**.
  ![Checkbox to allow people with read access to create discussions](/assets/images/help/discussions/toggle-allow-users-with-read-access-checkbox.png)
6. Click **Save**.
  !["Save" button for discussions settings](/assets/images/help/discussions/click-save.png)

### Further reading

- "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)"
- "[Managing discussions for your community](/discussions/managing-discussions-for-your-community)"
