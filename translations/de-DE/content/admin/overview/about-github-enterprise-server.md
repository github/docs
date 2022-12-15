---
title: Informationen zu GitHub Enterprise Server
intro: '{% data variables.product.product_name %} ist eine Plattform zur Softwareentwicklung, die du in einer privaten Umgebung hosten kannst.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879123'
---
## Informationen zu {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Dein Team kann {% data variables.product.product_name %} nutzen, um Software mithilfe von Git-Versionskontrolle, leistungsstarken APIs, Tools für Produktivität und Zusammenarbeit sowie Integrationen zu erstellen und auszuliefern. Entwickler, die mit {% data variables.product.prodname_dotcom_the_website %} vertraut sind, können problemlos einsteigen und mit vertrauten Features und Workflows ihren Beitrag leisten. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Weitere Informationen findest in der [Systemübersicht](/admin/overview/system-overview).

Du kannst wählen, ob du {% data variables.product.product_name %} lokal oder in einer unterstützten Cloudumgebung bereitstellst.

## Unterstützte Umgebungen für die Bereitstellung

Du kannst {% data variables.product.product_name %} auf einem Virtualisierungshypervisor in deinem lokalen Rechenzentrum oder einem öffentlichen Clouddienst bereitstellen.

{% data variables.product.company_short %} unterstützt die folgenden Virtualisierungshypervisoren für die lokale Bereitstellung.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} unterstützt die folgenden Dienste für die Cloudbereitstellung.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/admin/installation/setting-up-a-github-enterprise-server-instance).

## Informationen zu Releases und Upgrades

{% data reusables.enterprise.constantly-improving %} Du bist für Upgrades deiner Instanz verantwortlich. Weitere Informationen findest du unter [{% data variables.product.product_name %} releases](/admin/all-releases).

## Informationen zur Verwaltung

Du kannst {% data variables.product.product_name %} über einen Browser, administrativen SSH-Zugriff und REST- oder GraphQL-APIs konfigurieren und überwachen. {% data variables.product.company_short %} hat festgestellt, dass Personen mit Erfahrung als Linux-Administrator bei der Bereitstellung und Wartung von {% data variables.product.product_name %} erfolgreicher sind.

Du kannst bestimmten Mitarbeitern administrativen Zugriff auf {% data variables.product.product_name %} gewähren, damit sie die externe Authentifizierung einrichten, die Instanz nach den Bedürfnissen der Entwickler konfigurieren und Aktivität und Leistung der Instanz überwachen können. Um die Einhaltung von Geschäftsregeln oder gesetzlichen Vorschriften zu gewährleisten, können Administratoren Richtlinien zur Steuerung der Nutzung von {% data variables.product.product_location %} konfigurieren. Weitere Informationen findest du in den folgenden Artikeln.

- [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)
- [Konfigurieren deines Unternehmens](/admin/configuration/configuring-your-enterprise)
- [Informationen zur {% data variables.product.prodname_enterprise %}-API](/admin/overview/about-the-github-enterprise-api)"
- [Überwachen deiner Appliance](/admin/enterprise-management/monitoring-your-appliance)
- [Überwachen von Aktivitäten in deinem Unternehmen](/admin/monitoring-activity-in-your-enterprise)
- [Informationen zu Unternehmensrichtlinien](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)

## Informationen zu optionalen Features

Du kannst optionale Features für {% data variables.product.product_name %} konfigurieren, die den Lebenszyklus der Softwareentwicklung in deinem Unternehmen verbessern.

| Funktion | BESCHREIBUNG | Weitere Informationen |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | Automatisieren von CI/CD- und Entwicklungsworkflows | [Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) |
| {% data variables.product.prodname_github_connect %} | Profitieren von der Leistungsfähigkeit von {% data variables.product.prodname_dotcom_the_website %} auf begrenzte Weisen | [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) |
| {% data variables.product.prodname_GH_advanced_security %} | Verbessern von Codesicherheit und -qualität | [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) |
| {% data variables.product.prodname_registry %} | Hosten von Softwarepaketen für dein Unternehmen | [Einführung in {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages) |

## Informationen zu Bereitstellungstopologien

Standardmäßig wird {% data variables.product.product_name %} als eigenständige Instanz ausgeführt. Du kannst die Zuverlässigkeit und Leistung von {% data variables.product.product_name %} erhöhen, indem du für deine Bereitstellung eine andere Topologie nutzt.

- Um die Auswirkungen von System- oder Netzwerkausfällen abzufedern, kannst du eine passive Replikatinstanz bereitstellen. Wenn deine primäre Instanz von einem Ausfall betroffen ist, kannst du manuell ein Failover auf die Replikatinstanz durchführen. Weitere Informationen findest du unter [Informationen zur Hochverfügbarkeitskonfiguration](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration).
- Du kannst mehrere aktive Replikate konfigurieren, um die Leistung für Entwickler zu verbessern, die geografisch weit von deiner primären Instanz entfernt sind. Weitere Informationen findest du unter [Informationen zur Georeplikation](/admin/enterprise-management/configuring-high-availability/about-geo-replication).
- Einige Unternehmen mit Zehntausenden von Entwicklern können von einer Clusterkonfiguration mit horizontaler statt vertikaler Skalierung profitieren. Weitere Informationen findest du unter [Informationen zum Clustering](/admin/enterprise-management/configuring-clustering/about-clustering).

## Informationen zu Sicherungen und Notfallwiederherstellung

Um deine Entwickler vor Datenverlust oder Dienstunterbrechungen zu schützen, empfiehlt {% data variables.product.company_short %} dir dringend einen Plan für die Notfallwiederherstellung. Du kannst die Konfiguration und Benutzerdaten deiner Instanz sichern, indem du mit {% data variables.product.prodname_enterprise_backup_utilities %} ein Linux- oder Unix-Hostsystem bereitstellst und konfigurierst. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).

Außerdem kannst du eine passive Replikatinstanz konfigurieren, auf die bei einem System- oder Netzwerkausfall ein Failover erfolgt. Weitere Informationen findest du unter [Informationen zu Bereitstellungstopologien](#about-deployment-topologies).

## Informationen zur Dokumentation

Dokumentation für Administratoren und Benutzer von {% data variables.product.product_name %} findest du auf dieser Website, {% data variables.product.prodname_docs %}. 

- [Dokumentation für Enterprise-Administratoren](/admin)
- [Benutzerdokumentation](/)

Unterschiedliche Versionen von {% data variables.product.product_name %} werden in der Dokumentation zu {% data variables.product.prodname_docs %} separat abgebildet. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## Testen von {% data variables.product.product_name %}

Du kannst dich für eine kostenlose 45-tägige Testversion von {% data variables.product.product_name %} registrieren. Weitere Informationen findest du unter [Einrichten einer Testversion von {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server).

## Weitere Informationsquellen

- [Erste Schritte mit {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)
- [Informationen zum {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) im `github/roadmap`-Repository
