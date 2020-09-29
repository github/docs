---
title: Einheitliche Beiträge zwischen GitHub Enterprise Server und GitHub.com aktivieren
intro: 'Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie festlegen, dass {% data variables.product.prodname_ghe_cloud %}-Mitglieder ihre Arbeit auf {% data variables.product.prodname_ghe_server %} hervorheben können, indem sie die Beitragsanzahlen an ihre {% data variables.product.prodname_dotcom_the_website %}-Profile senden.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Website-Administratoren für {% data variables.product.prodname_ghe_server %} , die auch Inhaber einer Organisation oder eines Unternehmenskontos in der {% data variables.product.prodname_ghe_cloud %} sind, können vereinheitlichte Beiträge zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_dotcom_the_website %} aktivieren.'
versions:
  enterprise-server: '*'
---

Als Websiteadministrator können Sie zulassen, dass Endbenutzer anonymisierte Beitragsanzahlen für ihre Arbeit auf {% data variables.product.prodname_ghe_server %} an ihr {% data variables.product.prodname_dotcom_the_website %}-Beteiligungsdiagramm senden können.

Nachdem Sie {% data variables.product.prodname_github_connect %} und {% data variables.product.prodname_unified_contributions %} in beiden Umgebungen aktiviert haben, können sich Endbenutzer auf Ihrer Instanz mit ihren {% data variables.product.prodname_dotcom_the_website %}-Konten verbinden und Beitragsanzahlen von {% data variables.product.prodname_ghe_server %} an {% data variables.product.prodname_dotcom_the_website %} senden. {% data reusables.github-connect.sync-frequency %} Weitere Informationen finden Sie unter „[Ihre {% data variables.product.prodname_ghe_server %}-Beiträge an Ihr {% data variables.product.prodname_dotcom_the_website %}-Profil senden](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)“.

Wenn der Websiteadministrator die Funktion deaktiviert oder Entwickler die Verbindung abbrechen, werden die {% data variables.product.prodname_ghe_server %}-Beitragsanzahlen auf {% data variables.product.prodname_dotcom_the_website %} gelöscht. Wenn der Entwickler seine Profile nach ihrer Deaktivierung erneut verbindet, werden die Beitragsanzahlen für die letzten 90 Tage wiederhergestellt.

{% data variables.product.prodname_ghe_server %} sendet die Beitragsanzahl und -quelle ({% data variables.product.prodname_ghe_server %}) **nur** für verbundene Benutzer. Es werden weder Informationen zum Beitrag noch dazu gesendet, wie er zustande kam.

Vor der Aktivierung von {% data variables.product.prodname_unified_contributions %} auf {% data variables.product.product_location_enterprise %} müssen Sie {% data variables.product.product_location_enterprise %} mit {% data variables.product.prodname_dotcom_the_website %} verbinden. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com) verbinden“.

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Klicken Sie unter „Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können ihre Beitragsanzahlen auf {% data variables.product.prodname_dotcom_the_website %} freigeben) auf **Request access** (Zugriff anfordern). ![Option zum Anfordern des Zugriffs auf einheitliche Beiträge](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. Weitere Anweisungen erhalten Sie, wenn Sie sich bei der {% data variables.product.prodname_ghe_server %}-Website [anmelden](https://enterprise.github.com/login).

Wenn Sie den Zugriff anfordern, werden Sie zur {% data variables.product.prodname_ghe_server %}-Website weitergeleitet, um Ihre aktuellen Nutzungsbedingungen zu überprüfen. Wenn {% data variables.product.product_location_enterprise %} die Standardnutzungsbedingungen verwendet, werden Sie durch die Anforderung automatisch zu den Anweisungen für die Aktivierung von {% data variables.product.prodname_unified_contributions %} weitergeleitet. Wenn Sie benutzerdefinierte Nutzungsbedingungen verwenden, wird Ihre Anforderung protokolliert, und Sie werden zum Einrichten des Zugriffs kontaktiert.
