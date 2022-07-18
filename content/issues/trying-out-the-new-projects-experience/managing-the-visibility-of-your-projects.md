---
title: Managing the visibility of your projects (beta)
intro: You can control who can view your projects.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## About project visibility

Projects (beta) can be public or private. For public projects, everyone on the internet can view the project. For private projects, only users granted at least read access can see the project.

Only the project visibility is affected; to view an item on the project, someone must have the required permissions for the repository that the item belongs to. If your project includes items from a private repository, people who are not collaborators in the repository will not be able to view items from that repository.

![Project with hidden item](/assets/images/help/projects/hidden-items.png)

Only project admins can control project visibility.

In private, organization-owned projects, the avatars of users who are current making updates to the project are displayed in the project UI.

Project admins can also manage write and admin access to their project and control read access for individual users. For more information, see "[Managing access to projects](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)."

## Changing project visibility

{% data reusables.projects.project-settings %}
1. Under **Visibility**, select **Private** or **Public**.
