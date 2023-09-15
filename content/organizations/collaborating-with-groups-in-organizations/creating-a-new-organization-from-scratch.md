---
title: Creating a new organization from scratch
intro: Create an organization to apply fine-grained access permissions to repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Create new organization
---

When you create a new organization from scratch, it doesn't have any repositories associated with it. For more information on adding repositories to your organization, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)" and "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
{% data reusables.organizations.new-organization %}
1. Follow the prompts to create your organization. {% ifversion fpt or ghec %}For more information about the plans available for your team, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."{% endif %}

## Further reading

{% ifversion fpt or ghec %}
- "[AUTOTITLE](/billing/managing-your-github-billing-settings/setting-your-billing-email)"{% endif %}
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
