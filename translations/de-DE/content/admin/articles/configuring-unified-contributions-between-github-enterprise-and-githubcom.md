---
title: Einheitliche Beiträge zwischen GitHub Enterprise und GitHub konfigurieren
intro: 'Wenn Sie als ein Websiteadministrator {% data variables.product.prodname_github_connect %} aktiviert haben, können Sie zulassen, dass Endbenutzer in ihrem {% data variables.product.prodname_dotcom_the_website %}-Beteiligungsdiagramm anonymisierte Beitragsanzahlen für ihre Arbeit auf {% data variables.product.prodname_enterprise %} sehen.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


Nachdem Sie {% data variables.product.prodname_github_connect %} und {% data variables.product.prodname_unified_contributions %} in beiden Umgebungen aktiviert haben, können Endbenutzer auf Ihrer Instanz eine Verbindung mit ihren {% data variables.product.prodname_dotcom_the_website %}-Konten herstellen und Beitragsanzahlen von {% data variables.product.prodname_enterprise %} an {% data variables.product.prodname_dotcom_the_website %} senden. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_unified_contributions %} zwischen {% data variables.product.prodname_enterprise %} und {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com) aktivieren“ und "[Ihre {% data variables.product.prodname_ghe_server %}-Beiträge an Ihr {% data variables.product.prodname_dotcom_the_website %}-Profil senden](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)“.

Wenn der Websiteadministrator die Funktion deaktiviert oder Entwickler die Verbindung abbrechen, werden die {% data variables.product.prodname_enterprise %}-Beitragsanzahlen auf {% data variables.product.prodname_dotcom_the_website %} gelöscht. Wenn der Entwickler seine Profile nach ihrer Deaktivierung erneut verbindet, werden die Beitragsanzahlen für die letzten 90 Tage wiederhergestellt.

1.  Aktivieren Sie in der Verwaltungsshell die {% data variables.product.prodname_unified_contributions %}-Konfiguration auf {% data variables.product.product_location_enterprise %}:
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. Kehren Sie zu {% data variables.product.prodname_enterprise %} zurück.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.business-settings %}
{% data reusables.enterprise-accounts.github-connect-tab %}
7. Verwenden Sie unter „Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können ihre Beitragsanzahlen auf GitHub.com freigeben) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert).
8. Nach der Weiterleitung zu {% data variables.product.prodname_dotcom_the_website %} müssen Sie ein Upgrade der {% data variables.product.prodname_github_app %} vornehmen, wenn {% data variables.product.prodname_enterprise %}-Beitragskonten in verbundene Benutzerkonten geschrieben werden sollen. Ein Organisationsadministrator für die verbundene {% data variables.product.prodname_dotcom_the_website %}-Organisation muss das Upgrade der {% data variables.product.prodname_github_app %} mit `external_contributions`-Berechtigungen genehmigen.

