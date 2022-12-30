---
title: Einführen von GitHub Actions in deinem Unternehmen
shortTitle: Introduce Actions
intro: 'Du kannst planen, wie du {% data variables.product.prodname_actions %} in deinem Unternehmen einführen möchtest.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191862'
---
## Informationen zu {% data variables.product.prodname_actions %} für Unternehmen

{% data reusables.actions.about-actions %} Mit {% data variables.product.prodname_actions %} kann dein Unternehmen deine Softwareentwicklungs-Workflows wie Tests und Bereitstellungen automatisieren, anpassen und ausführen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

![Diagramm der auf selbstgehosteten Runnern ausgeführten Aufträge](/assets/images/help/images/actions-enterprise-overview.png)

Bevor du {% data variables.product.prodname_actions %} in einem großen Unternehmen einführst, musst du die Einführung zuerst planen und Entscheidungen darüber treffen, wie das Unternehmen {% data variables.product.prodname_actions %} verwenden soll, um seine besonderen Anforderungen optimal zu unterstützen.

## Governance und Einhaltung

Du solltest einen Plan erstellen, um das Verwenden von {% data variables.product.prodname_actions %} in deinem Unternehmen zu steuern und deine Complianceverpflichtungen zu erfüllen.

Bestimme, welche Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} deine Entwickler*innen verwenden dürfen. {% ifversion ghes %}Entscheide zunächst, ob du den Zugriff auf Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} von außerhalb deiner Instanz aktivieren möchtest. {% data reusables.actions.access-actions-on-dotcom %} Weitere Informationen findest du unter [Informationen zum Verwenden von Aktionen in deinem Unternehmen](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

Dann{% else %}Entscheide{% endif %} zunächst, ob du Drittanbieteraktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} zulässt, die nicht von {% data variables.product.company_short %} erstellt wurden. Du kannst die Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbaren Workflows{% endif %} konfigurieren, die auf Repository-, Organisations- und Unternehmensebenen ausgeführt werden dürfen. Außerdem kannst du auch nur Aktionen zulassen, die von {% data variables.product.company_short %} erstellt wurden. Wenn du Drittanbieteraktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} zulässt, kannst du zulässige Aktionen auf diejenigen beschränken, die von überprüften Autor*innen erstellt wurden oder die in einer Liste mit bestimmten Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} aufgeführt sind. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository), [Deaktivieren oder Einschränken von {% data variables.product.prodname_actions %} für deine Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization) und [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise).

{% ifversion actions-workflow-policy %} ![Screenshot von {% data variables.product.prodname_actions %}-Richtlinien](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Screenshot von {% data variables.product.prodname_actions %}-Richtlinien](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %} Erwäge, OpenID Connect (OIDC) mit wiederverwendbaren Workflows zu kombinieren, um konsistente Bereitstellungen in deinem Repository, deiner Organisation oder deinem Unternehmen zu erzwingen. Dies erreichst du durch das Definieren von Vertrauensbedingungen für Cloudrollen basierend auf wiederverwendbaren Workflows. Weitere Informationen findest du unter [Verwenden von OpenID Connect mit wiederverwendbaren Workflows](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).
{% endif %}

Über die Überwachungsprotokolle deines Unternehmens kannst du auf Informationen zu Aktivitäten im Zusammenhang mit {% data variables.product.prodname_actions %} zugreifen. Wenn deine geschäftlichen Anforderungen voraussetzen, dass diese Informationen länger aufbewahrt werden als die Daten der Überwachungsprotokolle, plane das Exportieren und Speichern dieser Daten außerhalb von {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du unter {% ifversion ghec %}[Exportieren von Überwachungsprotokollaktivitäten für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise) und [Streamen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).{% else %}{% ifversion audit-log-streaming %}[Streamen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) und {% endif %}[Weiterleiten von Protokollen](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).{% endif %}

![Überwachungsprotokolleinträge](/assets/images/help/repository/audit-log-entries.png)

## Sicherheit

Du solltest deine Herangehensweise an die Sicherheitshärtung von {% data variables.product.prodname_actions %} planen.

### Sicherheitshärtung einzelner Workflows und Repositorys

Plane, gute Sicherheitspraktiken für Personen mit Features von {% data variables.product.prodname_actions %} innerhalb deines Unternehmens zu erzwingen. Weitere Informationen zu diesen Praktiken findest du unter [Sicherheitshärtung für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions).

Du kannst auch das Wiederverwenden von Workflows unterstützen, deren Sicherheit bereits bewertet wurde. Weitere Informationen findest du unter [Innersourcing](#innersourcing).

### Absichern des Zugriffs auf Geheimnisse und Bereitstellungsressourcen

Du solltest planen, wo du deine Geheimnisse speicherst. Es wird empfohlen, Geheimnisse auf {% data variables.product.prodname_dotcom %} zu speichern, aber du kannst Geheimnisse auch bei einem Cloudanbieter speichern.

Auf {% data variables.product.prodname_dotcom %} kannst du Geheimnisse auf Repository- oder Organisationsebene speichern. Geheimnisse auf Repositoryebene können auf Workflows in bestimmten Umgebungen beschränkt werden, z. B. Produktion oder Test. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

![Screenshot einer Liste von Geheimnissen](/assets/images/help/settings/actions-org-secrets-list.png) Du solltest erwägen, eine Schutzfunktion mit manueller Genehmigung für vertrauliche Umgebungen hinzuzufügen, sodass Workflows genehmigt werden müssen, bevor auf die Geheimnisse der Umgebungen zugegriffen werden kann. Weitere Informationen findest du unter [Verwenden von Umgebungen für Bereitstellungen](/actions/deployment/targeting-different-environments/using-environments-for-deployment).

### Sicherheitsaspekte für Aktionen von Drittanbietern

Es besteht ein erhebliches Risiko, wenn Aktionen aus Drittanbieterrepositorys in {% data variables.product.prodname_dotcom %} ausgeführt werden. Wenn du Aktionen von Drittanbietern zulässt, solltest du interne Richtlinien erstellen, die dein Team ermutigen, bewährte Methoden zu befolgen, z. B. das Anheften von Aktionen an vollständige Commit-SHAs. Weitere Informationen findest du unter [Verwenden von Drittanbieteraktionen](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions).

## Innersourcing

Denke darüber nach, wie dein Unternehmen Features von {% data variables.product.prodname_actions %} für das Innersourcing der Automatisierung verwenden kann. Innersourcing ist eine Möglichkeit, die Vorteile von Open-Source-Methoden in den internen Softwareentwicklungszyklus einzubeziehen. Weitere Informationen findest du unter [Einführung ins Innersourcing](https://resources.github.com/whitepapers/introduction-to-innersource/) in den {% data variables.product.company_short %}-Ressourcen.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %} Mit wiederverwendbaren Workflows kann dein Team einen Workflow aus einem anderen Workflow aufrufen, um eine exakte Duplizierung zu vermeiden. Wiederverwendbare Workflows fördern bewährte Methoden, indem dein Team so Workflows verwendet, die gut konzipiert sind und bereits getestet wurden. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).
{% endif %}

Du kannst Starterworkflows als Ausgangspunkt für Entwickler*innen bereitstellen, die neue Workflows erstellen. So sparen deine Entwickler*innen nicht nur Zeit, sondern du förderst auch unternehmensweit Konsistenz und bewährte Methoden. Weitere Informationen findest du unter [Erstellen von Starterworkflows für deine Organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

{% ifversion not internal-actions %} Wenn deine Workflowentwickler*innen eine Aktion verwenden möchten, die in einem privaten Repository gespeichert ist, müssen sie den Workflow so konfigurieren, dass das Repository zuerst geklont wird. Um die Anzahl der zu klonenden Repositorys zu verringern, solltest du häufig verwendete Aktionen in einem einzelnen Repository gruppieren. Weitere Informationen findest du unter [Informationen zu benutzerdefinierten Aktionen](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action).
{% endif %}

## Verwalten von Ressourcen

Du solltest das Verwalten der benötigten Ressourcen zum Verwenden von {% data variables.product.prodname_actions %} planen.

{% ifversion ghes %}
### Hardwareanforderungen

Eventuell musst du ein Upgrade der CPU- und Arbeitsspeicherressourcen für {% data variables.location.product_location %} durchführen, um die Last von {% data variables.product.prodname_actions %} ohne Leistungsverlust zu verarbeiten. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements).
{% endif %}

### Runner

{% data variables.product.prodname_actions %}-Workflows benötigen Runner. {% ifversion ghec %} Du kannst von {% data variables.product.prodname_dotcom %} gehostete oder selbstgehostete Runner verwenden. Von {% data variables.product.prodname_dotcom %} gehostete Runner sind praktisch, da sie von {% data variables.product.company_short %} verwaltet werden. Auch Wartung und Upgrades werden so für dich übernommen. Wenn du einen Workflow ausführen musst, bei dem auf Ressourcen hinter deiner Firewall zugegriffen wird, oder wenn du mehr Kontrolle über die Ressourcen, die Konfiguration oder den geografischen Standort der Computer benötigst, auf denen die Runner ausgeführt werden, solltest du jedoch selbstgehostete Runner in Betracht ziehen. Weitere Informationen findest du unter [Informationen zu von {% data variables.product.prodname_dotcom %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners) und [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).{% else %} Du musst eigene Runner hosten, indem du die selbstgehostete Runneranwendung von {% data variables.product.prodname_actions %} auf deinen eigenen Computern installierst. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).{% endif %}

{% ifversion ghec %}Wenn du selbstgehostete Runner verwendest, musst du entscheiden, ob du physische Computer, virtuelle Computer oder Container verwenden möchtest.{% else %}Entscheide, ob du physische Computer, virtuelle Computer oder Container für deine selbstgehosteten Runner verwenden möchtest.{% endif %} Auf physischen Computern verbleiben Reste früherer Aufträge. Dies gilt auch für virtuelle Computer, es sei denn, du verwendest für jeden Auftrag ein frisches Image oder bereinigst die Computer nach jeder Auftragsausführung. Wenn du dich für Container entscheidest, solltest du dir bewusst sein, dass der Container bei automatischen Updates des Runners heruntergefahren wird. Dabei kann es passieren, dass Workflows fehlschlagen. Du solltest dafür eine Lösung finden, indem du automatische Updates verhinderst oder den Befehl zum Beenden des Containers überspringst.

Du musst auch entscheiden, wo die einzelnen Runner hinzugefügt werden sollen. Du kannst einen selbstgehosteten Runner einem einzelnen Repository hinzufügen, oder du kannst den Runner für eine gesamte Organisation oder dein gesamtes Unternehmen zur Verfügung stellen. Das Hinzufügen von Runnern auf Organisations- oder Unternehmensebene ermöglicht die Freigabe von Runnern. Dadurch wird möglicherweise die Größe der Runnerinfrastruktur verringert. Du kannst Richtlinien verwenden, um den Zugriff auf selbstgehostete Runner auf Organisations- und Unternehmensebene zu beschränken, indem du Gruppen von Runnern bestimmten Repositorys oder Organisationen zuweist. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

{% ifversion ghec or ghes %} Du solltest die automatische Skalierung erwägen, um die Anzahl der verfügbaren selbstgehosteten Runner automatisch zu erhöhen oder zu verringern. Weitere Informationen findest du unter [Automatische Skalierung mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).
{% endif %}

Schließlich solltest du die Sicherheitshärtung für selbstgehostete Runner berücksichtigen. Weitere Informationen findest du unter [Sicherheitshärtung für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

### Storage

{% data reusables.actions.about-artifacts %} Weitere Informationen findest du unter [Speichern von Workflowdaten als Artefakte](/actions/advanced-guides/storing-workflow-data-as-artifacts). 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} verfügt auch über ein Cachesystem, mit dem du Abhängigkeiten zwischenspeichern kannst, um die Ausführung von Workflows zu beschleunigen. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

{% ifversion ghes %} Du musst externen Blobspeicher für Workflowartefakte{% ifversion actions-caching %}, Caches{% endif %} und andere Workflowprotokolle konfigurieren. Entscheide, welchen unterstützten Speicheranbieter dein Unternehmen verwendet. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements).
{% endif %}

{% ifversion ghec or ghes %}

Mit Richtlinieneinstellungen für {% data variables.product.prodname_actions %} kannst du das Speichern von Workflowartefakten{% ifversion actions-caching %}, Caches{% endif %} und die Protokollaufbewahrung anpassen. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

{% endif %}

{% ifversion ghec %} Eine gewisse Speichermenge ist in deinem Abonnement enthalten, aber zusätzlicher Speicherplatz wirkt sich auf deine Rechnung aus. Du solltest diese Kosten einplanen. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
{% endif %}

## Nachverfolgen der Nutzung

Du solltest einen Plan zum Nachverfolgen der durch dein Unternehmen erfolgenden Nutzung von {% data variables.product.prodname_actions %} erstellen. Überlege zum Beispiel, wie oft Workflows ausgeführt werden, wie viele dieser Ausführungen erfolgreich sind und wie viele fehlschlagen, und von welchen Repositorys welche Workflows verwenden.

{% ifversion ghec %} Du kannst grundlegende Details zu Speicher- und Datenübertragungsnutzung von {% data variables.product.prodname_actions %} für jede Organisation in deinem Unternehmen mithilfe der Abrechnungseinstellungen anzeigen. Weitere Informationen findest du unter [Anzeigen der {% data variables.product.prodname_actions %}-Nutzung](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account).

Wenn du ausführlichere Nutzungsdaten anzeigen möchtest, kannst du{% else %}Du kannst{% endif %} Webhooks verwenden, um Informationen über Workflowaufträge und Workflowausführungen zu abonnieren. Weitere Informationen findest du unter [Informationen zu Webhooks](/developers/webhooks-and-events/webhooks/about-webhooks).

Plane, wie dein Unternehmen die Informationen aus diesen Webhooks in ein Datenarchivierungssystem übertragen kann. Du kannst „CEDAR.GitHub.Collector“ verwenden, ein Open-Source-Tool, mit dem Webhookdaten aus {% data variables.product.prodname_dotcom %} gesammelt und verarbeitet werden. Weitere Informationen findest du im [`Microsoft/CEDAR.GitHub.Collector`-Repository](https://github.com/microsoft/CEDAR.GitHub.Collector/).

Du solltest auch planen, wie du es deinen Teams ermöglichst, die benötigten Daten aus deinem Archivierungssystem abzurufen.
