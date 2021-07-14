---
title: Enabling a link between GitHub Insights and GitHub Enterprise
intro: 'You can enable a link that will allow users to navigate from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_insights %}.'
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} can enable a link between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_insights %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '*'
---

After you enable the link, each user can navigate directly from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_insights %}. For more information, see "[Navigating between {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)."

1. Connect to the administrative shell for {% data variables.product.prodname_ghe_server %}. Weitere Informationen finden Sie unter „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)“.
2. Run the following command.
  ```shell
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. Kehren Sie zu {% data variables.product.prodname_ghe_server %} zurück.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
7. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **{% data variables.product.prodname_insights %}**.
  {% note %}

  **Note:** It takes several minutes after you run the configuration command for this option to become available in {% data variables.product.prodname_enterprise %}. If you don't see **{% data variables.product.prodname_insights %}**, wait, or restart {% data variables.product.prodname_enterprise %}.

  {% endnote %}

  ![{% data variables.product.prodname_insights %} tab](/assets/images/help/business-accounts/github-insights-tab.png)
3. Under "{% data variables.product.prodname_insights %} instance URL", type the URL of the server your company uses for {% data variables.product.prodname_insights %}. ![{% data variables.product.prodname_insights %} instance URL](/assets/images/help/business-accounts/insights-instance-url.png)
4. Klicke auf **Save** (Speichern).
