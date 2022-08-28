---
title: Enabling unified contributions between your enterprise account and GitHub.com
shortTitle: Enable unified contributions
intro: 'Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie festlegen, dass {% data variables.product.prodname_ghe_cloud %}-Mitglieder ihre Arbeit auf {% data variables.product.product_name %} hervorheben können, indem sie die Beitragsanzahlen an ihre {% data variables.product.prodname_dotcom_the_website %}-Profile senden.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

{% data reusables.github-connect.beta %}

As an enterprise owner, you can allow end users to send anonymized contribution counts for their work from {% data variables.product.product_location %} to their {% data variables.product.prodname_dotcom_the_website %} contribution graph.

After you enable {% data variables.product.prodname_github_connect %} and enable {% data variables.product.prodname_unified_contributions %} in both environments, end users on your enterprise account can connect to their {% data variables.product.prodname_dotcom_the_website %} accounts and send contribution counts from {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} For more information, see "[Sending enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)."

If the enterprise owner disables the functionality or developers opt out of the connection, the {% data variables.product.product_name %} contribution counts will be deleted on {% data variables.product.prodname_dotcom_the_website %}. Wenn der Entwickler seine Profile nach ihrer Deaktivierung erneut verbindet, werden die Beitragsanzahlen für die letzten 90 Tage wiederhergestellt.

{% data variables.product.product_name %} sendet **nur** nur die Beitragsanzahl und -quelle ({% data variables.product.product_name %}) für verbundene Benutzer. Es werden weder Informationen zum Beitrag noch dazu gesendet, wie er zustande kam.

Vor der Aktivierung von {% data variables.product.prodname_unified_contributions %} auf {% data variables.product.product_location %} müssen Sie {% data variables.product.product_location %} mit {% data variables.product.prodname_dotcom_the_website %} verbinden. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melden Sie sich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Klicken Sie unter „Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können ihre Beitragsanzahlen auf {% data variables.product.prodname_dotcom_the_website %} freigeben) auf **Request access** (Zugriff anfordern). ![Request access to unified contributions option](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. Weitere Anweisungen erhalten Sie, wenn Sie sich bei der {% data variables.product.prodname_ghe_server %}-Website [anmelden](https://enterprise.github.com/login).

When you request access, we may redirect you to the {% data variables.product.prodname_ghe_server %} site to check your current terms of service.
{% endif %}
