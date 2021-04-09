---
title: Managing the forking policy for your organization
intro: 'You can can allow or prevent the forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

By default, new organizations are configured to disallow the forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories.

If you allow forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository. For more information, see "[Managing the forking policy for your repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository forking", select **Allow forking of private repositories** or **Allow forking of private and internal repositories**.
  ![Checkbox to allow or disallow forking in the organization](/assets/images/help/repository/allow-disable-forking-organization.png)
6. Click **Save**.

### Further reading

- "[About forks](/articles/about-forks)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
