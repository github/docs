---
title: Transferring ownership of a GitHub App
intro: '{% data reusables.shortdesc.transferring_ownership_of_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/transferring-ownership-of-a-github-app
  - /apps/managing-github-apps/transferring-ownership-of-a-github-app
  - /developers/apps/transferring-ownership-of-a-github-app
  - /developers/apps/managing-github-apps/transferring-ownership-of-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Transfer ownership
---

## About transferring {% data variables.product.prodname_github_apps %}

The owner of a {% data variables.product.prodname_github_app %} registration can transfer ownership of the {% data variables.product.prodname_github_app %} registration to another user or organization. If an organization has designated any app managers for an app owned by the organization, the app managers can also transfer ownership of the {% data variables.product.prodname_github_app %} registration. For more information about app managers, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization)."

You can only transfer ownership to a user or organization. You cannot transfer ownership to a team.

## Transferring a {% data variables.product.prodname_github_app %} registration

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Select the GitHub App whose ownership you want to transfer.
{% data reusables.user-settings.github_apps_advanced %}
1. Click **Transfer ownership**.
1. Under "Type the name of the GitHub App to confirm", type the name of the GitHub App you want to transfer.
1. Under "New owner's GitHub username or organization name", type the name of the user or organization you want to transfer the GitHub App to.
1. Click **Transfer this GitHub App**.
