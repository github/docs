---
title: Transferring ownership of an OAuth app
intro: '{% data reusables.shortdesc.transferring_ownership_of_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/transferring-ownership-of-an-oauth-app
  - /apps/managing-oauth-apps/transferring-ownership-of-an-oauth-app
  - /developers/apps/transferring-ownership-of-an-oauth-app
  - /developers/apps/managing-oauth-apps/transferring-ownership-of-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - OAuth apps
shortTitle: Transfer ownership
---
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Select the {% data variables.product.prodname_oauth_app %} you want to modify.
1. Click **Transfer ownership**.
1. To confirm the transfer, in the text field, type the name of the {% data variables.product.prodname_oauth_app %} you want to transfer.
1. Under "New owner's {% data variables.product.prodname_dotcom %} username or organization name," type the name of the user or organization you want to transfer the {% data variables.product.prodname_oauth_app %} to.
1. Click **Transfer this application**.

Once you initiate the transfer, the new owner needs to navigate to their {% data variables.product.prodname_oauth_app %}s page. From there, they should see the app listed under "Pending transfer requests". They need to click on the app name and then click **Complete transfer**.
