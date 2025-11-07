---
title: Managing custom properties for repositories in your enterprise
intro: 'Create custom properties to give organizations a consistent way to categorize repositories.'
permissions: Enterprise owners
versions:
  feature: custom-properties-enterprise
topics:
  - Repositories
shortTitle: Custom properties
---

{% data reusables.enterprise-onboarding.creating-custom-properties %}

## Promoting organization properties to enterprise properties

You can promote a property from an organization to your enterprise account, to ensure that property name and values are available for use across all organizations in the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, under "Policies", click **Custom properties**.
1. To see all properties managed by organizations, select **Filter** and choose the qualifier **Managed by** and **organization** as the value, or enter `managed-by:organization` in the filter bar.
1. Optionally, to see properties managed by a specific organization, select **Filter** and choose the qualifier **Organization** and an organization name as the value, or enter `org:<ORGANIZATION-NAME>` in the filter bar.
1. From the list of properties, select the property name that you want to promote. This takes you to the property details page.
1. To promote the selected property, click **Promote to enterprise**. The property name must be unique across all organizations in the enterprise otherwise the promotion will not be permitted.
1. Click **Promote**.
