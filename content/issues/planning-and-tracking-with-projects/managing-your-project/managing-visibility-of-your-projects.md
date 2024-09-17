---
title: 'Managing visibility of your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Learn about setting your {% data variables.projects.project_v2 %} to private or public visibility.'
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of {% data variables.projects.projects_v2 %} in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
---

## About project visibility

Project visibility can be set to {% ifversion ghec %}private, internal when using an {% data variables.enterprise.prodname_emu_enterprise %}, or public if your enterprise does not use {% data variables.enterprise.prodname_managed_users %}{% else %}public or private{% endif %}. For public projects, everyone on the internet can view the project. For private projects, only users granted at least read access can see the project. {% ifversion ghec %} For internal projects, other members of your enterprise can see the project.{% endif %}

Only the project visibility is affected; to view an item on the project, someone must have the required permissions for the repository that the item belongs to. Only people with access to a private repository will be able to view project items from that private repository.

![Screenshot showing a project using a table layout. One of the items is marked with a padlock icon, indicating it's hidden, and highlighted with an orange outline.](/assets/images/help/projects-v2/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners{% ifversion project-visibility-policy %} and enterprise owners{% endif %} can restrict the ability to change project visibility to just organization owners.

In public{% ifversion ghec %}, internal, {% endif %} and private projects, insights are only visible to users with write permissions for the project.

In private{% ifversion ghec %} and internal{% endif %} organization-owned projects, the avatars of users who are current making updates to the project are displayed in the project UI.

Project admins can also manage write and admin access to their project and control read access for individual users. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## Changing project visibility

{% data reusables.projects.project-settings %}
1. Next to **Visibility** in the "Danger zone", {% ifversion ghec %}select the visibility.
   * If using an {% data variables.enterprise.prodname_emu_enterprise %}, choose between **Private** and **Internal**.
   * If your enterprise does not use {% data variables.enterprise.prodname_managed_users %}, choose between **Private** and **Public**.{% else %} select **Private** or **Public**.{% endif %}

## Further reading

* [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
