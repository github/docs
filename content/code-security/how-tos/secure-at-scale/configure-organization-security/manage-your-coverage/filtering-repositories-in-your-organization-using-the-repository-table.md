---
title: Filtering repositories in your organization using the repository table
shortTitle: Filter repositories
intro: You can filter the repository table for your organization to better manage the security settings of specific repositories.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table
contentType: how-tos
---

You can filter the repository table in your organization to quickly find and manage specific repositories when applying {% data variables.product.prodname_security_configurations %} or managing {% data variables.product.prodname_AS %} license usage in the organization. This article explains how to use filters in the repository table.

## Filtering the repository table with the search bar

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Apply configurations" section, use the **Search repositories** search bar to filter repositories in your organization in one of two ways:
    * Find repositories by name with free-text search
    * Select filters from the dropdown menu that appears once you click the search bar

## Filtering the repository table with the advanced filter builder

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. To open the advanced filter dialog, in the "Apply configurations" section, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**.
1. In the "Advanced filters" window, select the **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter** dropdown menu, then click a filter.
1. To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
1. Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.
