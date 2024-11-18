---
title: Sending enterprise contributions to your GitHub.com profile
intro: 'You can highlight your work on {% data variables.product.prodname_enterprise %} by sending the contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
---

## About enterprise contributions on your {% data variables.product.prodname_dotcom_the_website %} profile

Your {% data variables.product.prodname_dotcom_the_website %} profile shows {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} contribution counts from the past 90 days. {% data reusables.github-connect.sync-frequency %} Contribution counts from {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} are considered private contributions. The commit details will only show the contribution counts and that these contributions were made in a {% data variables.product.prodname_enterprise %} environment outside of {% data variables.product.prodname_dotcom_the_website %}.

You can decide whether to show counts for private contributions on your profile. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)."

For more information about how contributions are calculated, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile)."

{% note %}

**Note:** The connection between your accounts is governed by [GitHub's Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement) and users enabling the connection must agree to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service).

{% endnote %}

## Sending your enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile

Before you can connect your {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} profile to your {% data variables.product.prodname_dotcom_the_website %} profile, your enterprise owner must enable {% data variables.product.prodname_github_connect %} and enable contribution sharing between the environments. For more information, contact your enterprise owner.

{% ifversion fpt or ghec %}

To send enterprise contributions from {% data variables.product.prodname_ghe_server %} to your {% data variables.product.prodname_dotcom_the_website %} profile, see "[AUTOTITLE](/enterprise-server@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" in the {% data variables.product.prodname_ghe_server %} documentation.

{% elsif ghes %}

1. Sign in to {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.
1. On {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click your profile photo, then click **Settings**.

{% ifversion global-nav-update %}

   ![Screenshot of a user's account menu on {% data variables.product.prodname_dotcom %}. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings-global-nav-update.png)

{% else %}

   ![Screenshot of a user's account menu on {% data variables.product.prodname_dotcom %}. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

{% endif %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Review the resources that {% data variables.product.prodname_ghe_server %} will access from your {% data variables.product.prodname_dotcom_the_website %} account, then click **Authorize**.
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
