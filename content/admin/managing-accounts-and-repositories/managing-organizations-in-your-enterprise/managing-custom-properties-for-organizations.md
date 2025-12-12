---
title: Managing custom properties for organizations
intro: 'With custom properties, you can add metadata to organizations in your enterprise and use that metadata to target repositories with rulesets.'
permissions: 'Enterprise owners {% ifversion custom-org-roles %}and users with the "Manage the Enterprise''s custom properties definitions" permission {% endif %}can add and set a custom property schema at the enterprise level.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
  - Organizations
shortTitle: Organization custom properties
contentType: how-tos
---

{% data reusables.enterprise-accounts.org-custom-properties-public-preview %}

## About custom properties

{% data reusables.enterprise.custom-properties-intro %} See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties).

This article relates to **organization custom properties.**

## Allowed characters

{% data reusables.repositories.custom-property-allowed-characters %}

## Adding custom properties

You can add custom properties to your enterprise and set values for those properties for organizations in your enterprise.

{% ifversion ghec %}You can also use the REST API to create and manage custom properties for an organization. See [AUTOTITLE](/rest/enterprise-admin/custom-properties).{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-organizations-tab %}
{% data reusables.enterprise-accounts.select-custom-properties %}
1. To add a new custom property, click **New property** in the upper right corner.
1. In the "Name" field, type the name you'd like to use for your custom property. The name can't contain spaces, and cannot exceed 75 characters in length.
1. Optionally, in the "Description" field, add a description for the custom property.
1. Under "Type", select the type of property you'd like to add.
1. Optionally, select **Allow organization actors to set this property** to allow organization users and apps with the organization-level "custom properties" fine-grained permission to set and update the property value for their organization.
1. Optionally, select **Require this property for all organizations** and add a default value. Enabling this option indicates that you require that **all organizations in your enterprise** have a value for this property. Organizations that don't have an explicit value for this property will inherit the default value.
1. Click **Save property**.

## Setting values for organizations in your enterprise

You, and any users with the "Edit custom properties values at the organization level" permission, can set values for custom properties for organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-organizations-tab %}
{% data reusables.enterprise-accounts.select-custom-properties %}
1. Click the "Set values" tab.
1. Select one or more organizations from the list and click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit properties**.

1. In the modal dialog that appears, select a value for each property you'd like to set for the selected organizations.
1. Click **Save changes**.
