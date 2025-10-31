---
title: Managing custom properties for repositories in your organization
intro: 'With custom properties, you can add metadata to repositories in your organization. You can use those properties to target repositories with rulesets.'
permissions: 'Organization owners {% ifversion custom-org-roles %}and users with the "Manage the organization''s custom properties definitions" permission {% endif %}can add and set a custom property schema at the organization level.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
shortTitle: Repository custom properties
---

## About custom properties

{% data reusables.enterprise.custom-properties-intro %}. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties).

This article relates to **repository custom properties.**

The **visibility** of custom properties matches the visibility of the repository. Custom properties on public repositories can be viewed by anyone, while custom properties on internal or private repositories can be viewed by accounts with `read` permissions to the repository.

## Allowed characters

{% data reusables.repositories.custom-property-allowed-characters %}

## Adding custom properties

You can add custom properties to your organization and set values for those properties for repositories in your organization.

{% ifversion ghec %}You can also use the REST API to create and manage custom properties for an organization. For more information, see [AUTOTITLE](/rest/orgs/custom-properties).{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-custom-properties %}
1. To add a new custom property, click **New property** in the upper right corner.
1. In the "Name" field, type the name you'd like to use for your custom property. The name can't contain spaces, and cannot exceed 75 characters in length.
1. Optionally, in the "Description" field, fill in a description of your custom property.
1. Under "Type", select the type of property you'd like to add. This can either be a text string{% ifversion ghes < 3.15 %} or a single select field{% else %}, a single select field, a multi select field, or a true/false boolean{% endif %}.
1. Optionally, you can select **Allow repository actors to set this property**. When enabled, repository users and apps with the repository-level "custom properties" fine-grained permission will be able to set and update the property value for their repository.
1. Optionally, you can select **Require this property for all repositories** and add a default value. This means that you require that all repositories in your organization have a value for this property. Repositories that don’t have an explicit value for this property will inherit the default value.
1. Click **Save property**.

## Setting values for repositories in your organization

You{% ifversion custom-org-roles %}, and any users with the "Edit custom properties values at the organization level" permission,{% endif %} can set values for custom properties for repositories in your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-custom-properties %}
1. Click the "Set values" tab.
1. Select one or more repositories from the list and click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit properties**.

    ![Screenshot the page to set values for repositories. A button, labeled with a pencil icon and "Edit properties", is highlighted with an orange outline.](/assets/images/help/repository/edit-properties.png)

1. In the modal dialog that appears, select a value for each property you'd like to set for the selected repositories.
1. Click **Save changes**.

## Viewing values for repositories in your organization

People with read permissions to a repository can view the values of custom properties for that repository, but they can't edit those values.

{% ifversion ghec %}You can also use the REST API to list the custom properties assigned to a repository by your organization. For more information, see [AUTOTITLE](/rest/repos/custom-properties).{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code and automation" section of the sidebar, click **{% octicon "tools" aria-hidden="true" aria-label="tools" %} Custom properties**.

{% ifversion ghec or fpt or ghes > 3.14 %}

## Searching and filtering repositories by custom properties values

You can search for repositories in your organization by custom properties values.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
1. Under your organization name, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repositories**.
1. In the search bar, type `prop` to see a list of all custom properties in your organization, and select the property you'd like to search by.

{% endif %}
