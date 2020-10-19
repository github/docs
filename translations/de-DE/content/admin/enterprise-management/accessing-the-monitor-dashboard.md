---
title: Auf das Überwachungs-Dashboard zugreifen
intro: '{% data variables.product.prodname_ghe_server %} enthält ein webbasiertes Überwachungs-Dashboard, das Verlaufsdaten zu Ihrer {% data variables.product.prodname_ghe_server %}-Appliance anzeigt. Dazu zählen beispielsweise die CPU- und Speichernutzung, Anwendungs- und Authentifizierungsantwortzeiten und der allgemeine Systemzustand.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
---

### Auf das Überwachungs-Dashboard zugreifen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicken Sie im oberen Bereich der Seite auf **Monitor** (Überwachen). ![Link zum Überwachungs-Dashboard](/assets/images/enterprise/management-console/monitor-dash-link.png)

### Fehlerbehebung bei allgemeinen Ressourcenzuordnungsproblemen auf Ihrer Appliance

{% note %}

**Hinweis**: Da das regelmäßige automatische Abrufen von {% data variables.product.product_location_enterprise %} mittels fortlaufender Integration (CI) oder Build-Servern effektiv zu Denial-of-Service-Angriffen führen kann, die zu Problemen führen, sollten Sie Webhooks verwenden, um Updates per Push-Vorgang zu übertragen. Weitere Informationen finden Sie unter „[Informationen zu Webhooks](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)“.

{% endnote %}

Mit dem Überwachungs-Dashboard können Sie in Bezug auf den Ressourcenzustand Ihrer Appliance auf dem Laufenden bleiben und Entscheidungen treffen, wie Sie Probleme hinsichtlich hoher Nutzungen beheben können.

| Problem                                   | Mögliche Ursache(n)                                                               | Empfehlungen                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hohe CPU-Auslastung                       | VM-Konflikte von anderen auf demselben Host ausgeführten Diensten oder Programmen | Konfigurieren Sie nach Möglichkeit andere Dienste oder Programme so neu, dass sie weniger CPU-Ressourcen beanspruchen. Informationen zum Erhöhen der CPU-Gesamtressourcen für die VM finden Sie unter „[CPU- und Arbeitsspeicherressourcen erhöhen](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)“.                                |
| Hohe Arbeitsspeicherauslastung            | VM-Konflikte von anderen auf demselben Host ausgeführten Diensten oder Programmen | Konfigurieren Sie nach Möglichkeit andere Dienste oder Programme so, dass sie weniger Arbeitsspeicher beanspruchen. Informationen zum Erhöhen des insgesamt auf der VM verfügbaren Arbeitsspeichers finden Sie unter „[CPU- und Arbeitsspeicherressourcen erhöhen](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)“.                 |
| Niedrige Festplattenspeicherverfügbarkeit | Große Binärdateien oder Protokolldateien, die Festplattenspeicher nutzen          | Hosten Sie große Binärdateien nach Möglichkeit auf einem separaten Server, und komprimieren oder archivieren Sie Protokolldateien. Erhöhen Sie ggf. den Festplattenspeicher auf der VM. Befolgen Sie dazu die unter „[Speicherkapazität erhöhen](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)“ für Ihre Plattform angegebenen Schritte.  |
| Ungewöhnlich hohe Antwortzeiten           | Wird oft durch einen der obigen Issues verursacht                                 | Identifizieren und beheben Sie die zugrunde liegenden Issues. Kontaktieren Sie {% data variables.contact.contact_ent_support %}, falls die Antwortzeiten hoch bleiben.                                                                                                                                                                                                             |
| Erhöhte Fehlerraten                       | Software-Issues                                                                   | Kontaktieren Sie {% data variables.contact.contact_ent_support %}, und fügen Sie Ihr Support-Bundle hinzu. Weitere Informationen finden Sie unter „[Daten für den {% data variables.product.prodname_enterprise %}-Support bereitstellen](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)“. |
