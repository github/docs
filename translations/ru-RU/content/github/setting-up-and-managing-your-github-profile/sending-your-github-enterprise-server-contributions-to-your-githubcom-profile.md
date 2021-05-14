---
title: Sending your GitHub Enterprise Server contributions to your GitHub.com profile
intro: 'You can highlight your work on {% data variables.product.prodname_ghe_server %} by sending the contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Profiles
---

{% note %}

**Замечания:**
- The connection between your accounts is governed by <a href="/articles/github-privacy-statement/" class="dotcom-only">GitHub's Privacy Statement</a> and users enabling the connection agree to the <a href="/articles/github-terms-of-service/" class="dotcom-only">GitHub's Terms of Service</a>.

- Before you can connect your {% data variables.product.prodname_ghe_server %} profile to your {% data variables.product.prodname_dotcom_the_website %} profile, a site administrator must enable {% data variables.product.prodname_github_connect %} and enable contribution sharing between the environments. For more information, contact your {% data variables.product.prodname_ghe_server %} site administrator.

{% endnote %}

Your {% data variables.product.prodname_dotcom_the_website %} profile shows {% data variables.product.prodname_ghe_server %} contribution counts from the past 90 days. {% data reusables.github-connect.sync-frequency %} Contribution counts from {% data variables.product.prodname_ghe_server %} are considered private contributions. The commit details will only show the contribution counts and that these contributions were made on {% data variables.product.prodname_ghe_server %}.

If end users of {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %} want to make their private contribution counts public, they can publicize their private contribution counts. For more information, see "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)."

For more information about how contributions are calculated, see "[Managing contribution graphs on your profile](/articles/managing-contribution-graphs-on-your-profile/)."

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
6. Under "Contributions", select **Send my contribution counts to {% data variables.product.prodname_dotcom_the_website %}**, then click **Update contributions.** ![Send contributions checkbox and update contributions button](/assets/images/help/settings/send-and-update-contributions.png)
