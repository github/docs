---
title: Viewing people with access to your repository
intro: 'You can view{% ifversion ghec or ghes or ghae %} and export{% endif %} a list of people with access to a repository within an organization.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
  - /organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository
  - /organizations/managing-user-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
---

## About the list of people with access to your repository

You can use this information to help off-board people, gather data for compliance, and other general security checkups.

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can also export a CSV list of people who have access to a repository. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository).
{% endif %}

## Viewing people with access to your repository

You can see a combined overview of teams and people with access to your repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)."

{% ifversion ghec or ghes or ghae %}

## Exporting a list of people with access to your repository

{% ifversion ghec %}
{% note %}

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can export a list of people with access to a repository. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
1. Above the list of people, click **Export CSV**.
{% endif %}
