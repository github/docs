---
title: Custom properties
intro: 'Custom properties allow you to add structured metadata to repositories and organizations, enabling better organization, governance, and automation across your {% data variables.product.github %} environment.'
permissions: 'Repository custom properties can be managed by organization owners and users with admin permissions to the repository. Organization custom properties can be managed by enterprise owners and users with the "Manage the Enterprise''s custom properties definitions" permission.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
  - Organizations
  - Repositories
  - Policies
shortTitle: Custom properties
contentType: concepts
---

## What are custom properties?

Custom properties are structured metadata fields that you can attach to repositories or organizations in {% data variables.location.product_location %}. They allow you to decorate your repositories or organizations with information such as compliance frameworks, data sensitivity, or project details.

An enterprise can have up to 100 property definitions. An allowed value list can have up to 200 items.

There are two types of custom properties:

* **Repository custom properties**: Metadata attached to individual repositories.
* **Organization custom properties**: Metadata attached to organizations within an enterprise.

{% data reusables.enterprise-accounts.org-custom-properties-public-preview %}

## What are the benefits of using custom properties?

As well as providing improved discovery, automated workflows, compliance tracking, targeted policy enforcement, and better reporting capabilities, custom properties enable powerful governance through **ruleset integration**.

Both repository and organization custom properties can be used as targeting criteria for rulesets, enabling fine-grained policy enforcement based on metadata.

* For repository custom rules, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#targeting-repositories-by-properties-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise).
* For organization custom rules, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/managing-policies-for-code-governance).{% endif %}

## How do I add and manage custom properties?

{% ifversion ghec %}

Custom properties are fully supported through {% data variables.product.github %}'s REST API, enabling programmatic management and integration with external systems. See [AUTOTITLE](/rest/enterprise-admin/custom-properties).

{% endif %}

You can add custom properties through {% data variables.product.github %}'s UI. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) and [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-custom-properties-for-organizations).
