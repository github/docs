---
title: Managing the forking policy for your organization
intro: 'You can allow or prevent the forking of any private{% ifversion ghes or ghae or ghec %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
---

By default, new organizations are configured to disallow the forking of private{% ifversion ghes or ghec or ghae %} and internal{% endif %} repositories.

If you allow forking of private{% ifversion ghes or ghec or ghae %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% ifversion ghes or ghec or ghae %} or internal{% endif %} repository. For more information, see "[Managing the forking policy for your repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Under "Repository forking", select **Allow forking of private {% ifversion ghec or ghes or ghae %}and internal {% endif %}repositories**.

   {%- ifversion fpt %}
   ![Checkbox to allow or disallow forking in the organization](/assets/images/help/repository/allow-disable-forking-fpt.png)
   {%- elsif ghes or ghec or ghae %}
   ![Checkbox to allow or disallow forking in the organization](/assets/images/help/repository/allow-disable-forking-organization.png)
   {%- endif %}
6. Click **Save**.

## Further reading

- "[About forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
