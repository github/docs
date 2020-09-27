---
title: Einheitliche Beiträge zwischen GitHub Enterprise und GitHub konfigurieren
intro: 'Wenn Sie als ein Websiteadministrator {{ site.data.variables.product.prodname_github_connect }} aktiviert haben, können Sie zulassen, dass Endbenutzer in ihrem {{ site.data.variables.product.prodname_dotcom_the_website }}-Beteiligungsdiagramm anonymisierte Beitragsanzahlen für ihre Arbeit auf {{ site.data.variables.product.prodname_enterprise }} sehen.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


Nachdem Sie {{ site.data.variables.product.prodname_github_connect }} und {{ site.data.variables.product.prodname_unified_contributions }} in beiden Umgebungen aktiviert haben, können Endbenutzer auf Ihrer Instanz eine Verbindung mit ihren {{ site.data.variables.product.prodname_dotcom_the_website }}-Konten herstellen und Beitragsanzahlen von {{ site.data.variables.product.prodname_enterprise }} an {{ site.data.variables.product.prodname_dotcom_the_website }} senden. Weitere Informationen finden Sie unter „[{{ site.data.variables.product.prodname_unified_contributions }} zwischen {{ site.data.variables.product.prodname_enterprise }} und {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com) aktivieren“ und "[Ihre {{ site.data.variables.product.prodname_ghe_server }}-Beiträge an Ihr {{ site.data.variables.product.prodname_dotcom_the_website }}-Profil senden](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)“.

Wenn der Websiteadministrator die Funktion deaktiviert oder Entwickler die Verbindung abbrechen, werden die {{ site.data.variables.product.prodname_enterprise }}-Beitragsanzahlen auf {{ site.data.variables.product.prodname_dotcom_the_website }} gelöscht. Wenn der Entwickler seine Profile nach ihrer Deaktivierung erneut verbindet, werden die Beitragsanzahlen für die letzten 90 Tage wiederhergestellt.

1.  Aktivieren Sie in der Verwaltungsshell die {{ site.data.variables.product.prodname_unified_contributions }}-Konfiguration auf {{ site.data.variables.product.product_location_enterprise }}:
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. Kehren Sie zu {{ site.data.variables.product.prodname_enterprise }} zurück.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.business-settings }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
7. Verwenden Sie unter „Users can share contribution counts to {{ site.data.variables.product.prodname_dotcom_the_website }}“ (Benutzer können ihre Beitragsanzahlen auf GitHub.com freigeben) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert).
8. Nach der Weiterleitung zu {{ site.data.variables.product.prodname_dotcom_the_website }} müssen Sie ein Upgrade der {{ site.data.variables.product.prodname_github_app }} vornehmen, wenn {{ site.data.variables.product.prodname_enterprise }}-Beitragskonten in verbundene Benutzerkonten geschrieben werden sollen. Ein Organisationsadministrator für die verbundene {{ site.data.variables.product.prodname_dotcom_the_website }}-Organisation muss das Upgrade der {{ site.data.variables.product.prodname_github_app }} mit `external_contributions`-Berechtigungen genehmigen.

