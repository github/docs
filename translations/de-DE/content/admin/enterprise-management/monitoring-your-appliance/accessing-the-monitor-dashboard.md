---
title: Auf das Überwachungs-Dashboard zugreifen
intro: '{% data variables.product.prodname_ghe_server %} enthält ein webbasiertes Überwachungsdashboard, das Verlaufsdaten zu deiner {% data variables.product.prodname_ghe_server %}-Appliance anzeigt. Dazu zählen beispielsweise die CPU-Auslastung, die Speichernutzung, Anwendungs- und Authentifizierungsantwortzeiten und der allgemeine Systemzustand.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: b529369813635a8cafe5f7c7ac6fc04af39001f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332368'
---
## Auf das Überwachungs-Dashboard zugreifen

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicke oben auf der Seite auf **Überwachen**.
![Link zum Überwachungs-Dashboard](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Problembehandlung bei gängigen Ressourcenzuordnungsproblemen auf deiner Appliance

{% note %}

**Hinweis:** Da das regelmäßige automatische Abrufen von {% data variables.product.product_location %} mittels Continuous Integration (CI) oder Buildservern effektiv zu Denial-of-Service-Angriffen führen kann, die zu Problemen führen, solltest du Webhooks verwenden, um Updates per Pushvorgang zu übertragen. Weitere Informationen findest du unter [Informationen zu Webhooks](/enterprise/user/articles/about-webhooks/).

{% endnote %}

Mit dem Überwachungs-Dashboard kannst du in Bezug auf den Ressourcenzustand deiner Appliance auf dem Laufenden bleiben und Entscheidungen treffen, wie du Probleme hinsichtlich hoher Nutzungen beheben kannst.  

| Problem | Mögliche Ursache(n) | Empfehlungen |
| -------- | ----------------- | --------------- |
| Hohe CPU-Auslastung | VM-Konflikte von anderen auf demselben Host ausgeführten Diensten oder Programmen | Konfiguriere nach Möglichkeit andere Dienste oder Programme so neu, dass sie weniger CPU-Ressourcen beanspruchen. Informationen zum Erhöhen der gesamten CPU-Ressourcen für den virtuellen Computer findest du unter [CPU- und Arbeitsspeicherressourcen erhöhen](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/). |
| Hohe Speicherauslastung | VM-Konflikte von anderen auf demselben Host ausgeführten Diensten oder Programmen | Konfiguriere nach Möglichkeit andere Dienste oder Programme so, dass sie weniger Arbeitsspeicher beanspruchen. Informationen zum Erhöhen des gesamten Arbeitsspeichers, der auf dem virtuellen Computer verfügbar ist, findest du unter [CPU- und Arbeitsspeicherressourcen erhöhen](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/). |
| Niedrige Festplattenspeicherverfügbarkeit | Große Binärdateien oder Protokolldateien, die Festplattenspeicher nutzen | Hoste große Binärdateien nach Möglichkeit auf einem separaten Server, und komprimiere oder archiviere Protokolldateien. Erhöhe bei Bedarf den Speicherplatz auf dem virtuellen Computer, indem du die Schritte für deine Plattform unter [Speicherkapazität erhöhen](/enterprise/admin/guides/installation/increasing-storage-capacity/) ausführst. |
| Ungewöhnlich hohe Antwortzeiten | Wird oft durch einen der obigen Issues verursacht | Identifiziere und behebe die zugrunde liegenden Issues. Kontaktiere {% data variables.contact.contact_ent_support %}, falls die Antwortzeiten hoch bleiben. |
| Erhöhte Fehlerraten | Software-Issues  | Kontaktiere {% data variables.contact.contact_ent_support %}, und füge dein Support-Bundle hinzu. Weitere Informationen findest du unter [Daten für den {% data variables.product.prodname_enterprise %}-Support bereitstellen](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles). |
