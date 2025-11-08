---
title: Adding and removing GitHub App managers in your enterprise
intro: Enterprise owners can grant or revoke access for a user to manage {% data variables.product.prodname_github_apps %} owned by the enterprise.
versions:
  feature: enterprise-app-manager
type: how_to
topics:
  - Enterprise
  - GitHub Apps
permissions: Enterprise owners.
shortTitle: Add app managers
redirect_from:
  - /admin/managing-your-enterprise-account/adding-and-removing-github-app-managers-in-your-enterprise
contentType: other
---

## About {% data variables.product.prodname_github_app %} managers

Enterprise owners can designate other users in their enterprise as {% data variables.product.prodname_github_app %} managers for apps.

An app manager:

* Can manage the settings for a {% data variables.product.prodname_github_app %} registration that is owned by the enterprise. For the specific app settings that {% data variables.product.prodname_github_app %} managers can control, see [AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app).
* Cannot install and uninstall {% data variables.product.prodname_github_apps %} on an enterprise or organization.

When an enterprise app manager adds permissions to a {% data variables.product.prodname_github_app %}, the update is automatically accepted in all organizations where the app manager is also an organization owner. When an enterprise owner adds permissions to a {% data variables.product.prodname_github_app %}, the update is automatically accepted in all organizations regardless of their organization membership.

## Granting the ability to manage an individual {% data variables.product.prodname_github_app %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-apps-tab %}

1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for.
1. In the left sidebar, click **App managers**.
1. At the bottom of the "App managers" section, in the search field, type the username of the person you want to designate as a GitHub App manager for the app, then click **Grant**.

The user must be a member of the enterprise to be granted {% data variables.product.prodname_github_app %} manager permissions.

## Removing managers from an individual {% data variables.product.prodname_github_app %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-apps-tab %}

1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from.
1. In the left sidebar, click **App managers**.
1. Under "App managers", next to the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, click **Revoke**.

## Granting the ability to manage all enterprise-owned apps

Enterprise app manager is a predefined role that grants access to all app registrations owned by the enterprise. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).

## Further reading

* [AUTOTITLE](/admin/managing-your-enterprise-account/creating-github-apps-for-your-enterprise)
* [AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)
