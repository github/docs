---
title: 'Allowing project visibility changes in your organization'
intro: 'Organization owners can allow members with admin permissions to adjust the visibility of {% data variables.projects.projects_v2_and_v1 %} in their organization.'
versions:
  feature: "classic-project-visibility-permissions-or-projects-v2"
topics:
  - Organizations
  - Projects
shortTitle: 'Project visibility permissions'
allowTitleToDifferFromFilename: true
permissions: Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.
---

## About visibility changes for projects

You can restrict who has the ability to change the visibility of {% data variables.projects.projects_v2_and_v1 %} in your organization, such as restricting members from changing {% data variables.projects.projects_v2_and_v1 %} from private to public. 

You can limit the ability to change {% data variables.projects.project_v2_and_v1 %} visibility to just organization owners, or you can allow anyone granted admin permissions to change the visibility.

{% ifversion project-visibility-policy %}
This option may not be available to you if an enterprise owner restricts visibility changes for {% data variables.projects.projects_v2_and_v1 %} at the enterprise level. For more information, see "[Enforcing policies for projects in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)."
{% endif %}

## Allowing members to change project visibilities

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
1. To allow members to adjust project visibility, select **Allow members to change project visibilities for this organization**.
  ![Screenshot showing checkbox to set visibility changes](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Click **Save**.

## Further reading

{% ifversion projects-v2 %}
- "[Managing visibility of your {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)"
{%- endif %}{%- ifversion projects-v1 %}
- "[Changing {% data variables.product.prodname_project_v1 %} visibility](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)"
{% endif %}