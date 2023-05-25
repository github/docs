---
title: Managing default labels for repositories in your organization
intro: You can customize the labels that are included in every new repository in your organization.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
---

Organization owners can manage default labels for repositories in the organization.

Default labels are included in every new repository in your organization, but anyone with write access to the repository can edit or delete the labels in that repository later. Adding, editing, or deleting a default label does not add, edit, or delete the label from existing repositories.

## Creating a default label

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
1. Under "Repository labels", click **New label**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

## Editing a default label

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

## Deleting a default label

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

## Further reading

- "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)"
