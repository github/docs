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
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Transfer ownership
---

## About transferring {% data variables.product.prodname_github_apps %}

The owner of a {% data variables.product.prodname_github_app %} registration can transfer ownership of the {% data variables.product.prodname_github_app %} registration to another account. App managers can also transfer ownership of the {% data variables.product.prodname_github_app %} registration. For more information about app managers, see [AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers).

You can transfer apps from a user or organization to another account. You cannot transfer ownership to a team.

{% data reusables.apps.transfer-to-enterprise %}

## Transferring a {% data variables.product.prodname_github_app %} registration

{% data reusables.apps.settings-step-personal-orgs %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Select the {% data variables.product.prodname_github_app %} whose ownership you want to transfer.
{% data reusables.user-settings.github_apps_advanced %}
1. Click **Transfer ownership**.
1. Under "New owner's {% data variables.product.prodname_dotcom %} {% ifversion fpt or enterprise-apps-public-beta %}username, organization, or enterprise name",{% else %}username or organization name",{% endif %} type the name of the account you want to transfer the {% data variables.product.prodname_github_app %} to.
{%- ifversion fpt or enterprise-apps-public-beta %}
1. Select the account from the dropdown that you wish to transfer to. Be aware that enterprises and organizations can have the same name, so check that you are transferring to the correct account type.
1. If transferring the app would uninstall it from your account, a warning will appear.
{%- endif %}
1. Click **Transfer this {% data variables.product.prodname_github_app %}**.
