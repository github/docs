---
title: Sharing contributions from GitHub Enterprise Server
intro: You can send contribution counts from {% data variables.product.prodname_ghe_server %} to your profile on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}.
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sharing-contributions-from-github-enterprise-server
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sharing-contributions-from-github-enterprise-server
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
contentType: how-tos
---

> [!IMPORTANT]
> The connection between your accounts is governed by [GitHub's Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement) and users enabling the connection must agree to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service).

## Sending your enterprise contributions to your profile

Before you can connect your {% data variables.product.prodname_ghe_server %} profile to your {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %} profile, your enterprise owner must enable {% data variables.product.prodname_github_connect %} and enable contribution sharing between the environments. For more information, contact your enterprise owner.

{% ifversion fpt or ghec %}

To share contributions from {% data variables.product.prodname_ghe_server %}, switch to the [{% data variables.product.prodname_ghe_server %} version of this article](/enterprise-server@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

{% elsif ghes %}

1. Sign in to both your user account on {% data variables.product.prodname_ghe_cloud %} **and** your user account on {% data variables.product.prodname_ghe_cloud %} ({% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-github-connect %} or {% data variables.enterprise.data_residency_site %}{% endif %}).
1. On {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click your profile picture, then click **Settings**.

   ![Screenshot of a user's account menu on {% data variables.product.prodname_dotcom %}. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings-global-nav-update.png)

{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Review the resources that {% data variables.product.prodname_ghe_server %} will access from your {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-github-connect %} or {% data variables.enterprise.data_residency_site %}{% endif %} account, then click **Authorize**.
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
