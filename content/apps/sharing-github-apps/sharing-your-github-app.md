---
title: Sharing your GitHub App
intro: 'You can share your {% data variables.product.prodname_github_app %} with other users.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Share your app
redirect_from:
  - /apps/maintaining-github-apps/sharing-your-github-app
---

{% ifversion fpt or ghec %}

## Sharing your {% data variables.product.prodname_github_app %} on {% data variables.product.prodname_marketplace %}

If your {% data variables.product.prodname_github_app %} is public, you can choose to publish it to {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)."

{% ifversion ghec %}If you are an {% data variables.product.prodname_emu %}, then you cannot share your app on {% data variables.product.prodname_marketplace %}.{% endif %}

For more information about how users can install your app from {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations)" and "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account)."

{% endif %}

## Sharing your {% data variables.product.prodname_github_app %} via an install link

{% ifversion fpt or ghec %}
If your {% data variables.product.prodname_github_app %} is public, other users and organizations {% ifversion ghec %}within your enterprise {% endif %}can install your app. For more information about making your app public, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-a-github-app-public-or-private)."

{% ifversion ghec %}If you are an {% data variables.product.prodname_emu %}, then you can only share your app with other users or organizations within your enterprise.{% endif %}

{% else %}
{% endif %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to share, click **Edit**.
1. Click **Public page**. {% data variables.product.company_short %} will bring you to the public page for your {% data variables.product.prodname_github_app %}.
1. Click **Install**. {% data variables.product.company_short %} will bring you to the installation URL for your {% data variables.product.prodname_github_app %}. The URL will look something like `{% data variables.product.oauth_host_code %}/{% ifversion ghes %}github-apps{% else %}apps{% endif %}/APP-NAME/installations/new`, where `APP-NAME` is the name of the {% data variables.product.prodname_github_app %}.
1. Share the installation URL with other users. For more information about how users can install your app from this URL, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)."

   When you share the URL, you can include a `state` query parameter in the installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the `state` to correlate an installation to a user or account.

   To preserve a state, add it to the installation URL: `{% data variables.product.oauth_host_code %}/{% ifversion ghes %}github-apps{% else %}apps{% endif %}/<app name>/installations/new?state=AB12t`

## Sharing your {% data variables.product.prodname_github_app %} with {% data variables.product.prodname_ghe_server %} instances

If you want to share your {% data variables.product.prodname_github_app %} with {% data variables.product.prodname_ghe_server %} instances that you are not part of, you need to take additional steps. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-your-github-app-available-for-github-enterprise-server)."
