---
title: Managing custom properties for repositories in your enterprise
intro: 'Create custom properties to give organizations a consistent way to categorize repositories.'
permissions: Enterprise owners
versions:
  ghec: '*'
topics:
  - Repositories
shortTitle: Custom properties
---

> [!NOTE] Custom properties for your enterprise are in {% data variables.release-phases.public_preview %} and subject to change.

Custom properties allow you to decorate your repositories with information such as compliance frameworks, data sensitivity, or project details. Custom properties are private and can only be viewed by people with read permissions to the repository. An enterprise can have up to 100 property definitions. An allowed value list can have up to 200 items.

Defining custom properties at the enterprise level allows you to create consistent values that users can apply to repositories. With custom properties in place, you can apply consistent governance across repositories in your enterprise by creating a ruleset or repository policy targeting repositories with certain properties. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).

## Allowed characters

{% data reusables.repositories.custom-property-allowed-characters %}

## Who can set and view values for custom properties I define?

After you define a custom property, users can set a value for that property in repositories in the enterprise. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#setting-values-for-repositories-in-your-organization).

* As an enterprise owner, you can set a default value for required properties.
* Organization owners can set values in their organization, either across repositories or at the repository level.
* If enabled, people with repository access, or the `custom properties` fine-grained permission, can set and update the property value for their repository.

People with read permissions to a repository can view the custom property values for that repository.

Additionally, organization owners can search for repositories in their organization by custom property values. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#searching-and-filtering-repositories-by-custom-property-values).

## Adding custom properties

You can add custom properties to your enterprise to make those properties available in all of your orgaizations.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, under "Policies", click **Custom properties**.
1. To add a new custom property, in the upper-right corner, click **New property**.
1. Enter a name, description, and type for the custom property. The name must be unique across all of your organizations, and cannot contain spaces.
1. Optionally, select **Allow repository actors to set this property**. When enabled, repository users and apps with the repository-level `custom properties` fine-grained permission will be able to set and update the property value for their repository. Additionally, any actor creating a repository can set the property on the repository.
1. Optionally, select **Require this property for all repositories** and add a default value. This means that you require that all repositories in your enterprise have a value for this property. Repositories that don’t have an explicit value for this property will inherit the default value.
1. Click **Save property**.

## Promoting organization properties to enterprise properties

You can promote a property from an organization to your enterprise account, to ensure that property name and values are available for use across all organizations in the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, under "Policies", click **Custom properties**.
1. To see all properties managed by organizations, select **Filter** and choose the qualifier **Managed by** and **organization** as the value, or enter `managed-by:organization` in the filter bar.
1. Optionally, to see properties managed by a specific organization, select **Filter** and choose the qualifier **Organization** and an organization name as the value, or enter `org:<ORGANIZATION-NAME>` in the filter bar.
1. From the list of properties, select the property name that you want to promote. This takes you to the property details page.
1. To promote the selected property, click **Promote to enterprise**. The property name must be unique across all organizations in the enterprise otherwise the promotion will not be permitted.
1. Click **Promote**.
