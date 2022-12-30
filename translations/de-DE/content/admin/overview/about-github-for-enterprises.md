---
title: Informationen zu GitHub für Unternehmen
intro: 'Unternehmen können die Enterprise-Produkte von {% data variables.product.prodname_dotcom %} nutzen, um ihren gesamten Softwareentwicklungszyklus zu verbessern.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192649'
---
## Informationen zu {% data variables.product.prodname_dotcom %} für Unternehmen

{% data variables.product.prodname_dotcom %} ist eine vollständige Entwicklerplattform zum Erstellen, Skalieren und Bereitstellen sicherer Software. Unternehmen nutzen unsere Suite von Produkten, um den gesamten Softwareentwicklungs-Lebenszyklus zu unterstützen, die Entwicklungsgeschwindigkeit zu erhöhen und die Codequalität zu verbessern.

Entwickler können in Repositorys deinen Quellcode speichern sowie Versionskontrollen durchführen und Issues und Projekte zum Planen und Nachverfolgen ihrer Arbeit verwenden. Sie können in einer in der Cloud gehosteten Entwicklungsumgebung ({% data variables.product.prodname_github_codespaces %}) programmieren, dann die Codeänderungen der anderen mit Pull Requests überprüfen und Codesicherheitsfunktionen verwenden, um Geheimnisse und Schwachstellen aus Ihrer Codebasis herauszuhalten. Schließlich kannst du deine Build-, Test- und Bereitstellungspipeline mit {% data variables.product.prodname_actions %} automatisieren und Softwarepakete mit {% data variables.product.prodname_registry %} hosten.

Wenn Unternehmen {% data variables.product.prodname_enterprise %} übernehmen, ist ihre Rendite (ROI) hoch. Ihre Entwickler sparen beispielsweise 45 Minuten pro Tag, und die Onboarding- und Schulungszeit wird um 40 % reduziert. Weitere Informationen findest du unter [Gesamtwirtschaftliche Auswirkungen von {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

Um die Verwaltung für alle Phasen des Softwareentwicklungszyklus zu vereinfachen, bieten wir einen zentralen Zugangspunkt für Sichtbarkeit und Verwaltung, das sogenannte Unternehmenskonto. Mit Unternehmenskonten kannst du Abrechnungen und Einstellungen verwalten, Richtlinien erzwingen und Personen überwachen, die Zugriff auf die Ressourcen deines Unternehmens haben. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).

Optional kannst du mit {% data variables.product.prodname_GH_advanced_security %} zusätzliche Codesicherheitsfeatures hinzufügen und mit {% data variables.contact.premium_support %} erweiterte Supportoptionen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) und [Informationen zu {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

## Informationen zu Bereitstellungsoptionen

Wenn du {% data variables.product.prodname_enterprise %} kaufst, erhältst du sowohl auf {% data variables.product.prodname_ghe_cloud %} als auch {% data variables.product.prodname_ghe_server %} Zugriff. {% data variables.product.prodname_ghe_cloud %} ist eine Reihe erweiterter Funktionen auf {% data variables.product.prodname_dotcom_the_website %}, während {% data variables.product.prodname_ghe_server %} eine selbstgehostete Plattform ist. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %} in der {% data variables.product.prodname_ghe_server %}-Dokumentation.{% else %}.{% endif %}

Für {% data variables.product.prodname_ghe_cloud %} kannst du Entwicklern erlauben, ihre eigenen persönlichen Konten zu erstellen und zu verwalten, oder du kannst {% data variables.product.prodname_emus %} verwenden, womit du Benutzerkonten für deine Entwickler erstellen und verwalten kannst. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

{% data variables.product.prodname_ghe_managed %} ist eingeschränkt für ausgewählte Kunden mit strengen Sicherheits- und Complianceanforderungen verfügbar. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %} in der {% data variables.product.prodname_ghe_managed %}-Dokumentation.{% else %}.{% endif %}

Du kannst auch während der Verwendung von {% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %} von der Leistung von {% data variables.product.prodname_dotcom_the_website %} profitieren, indem du {% data variables.product.prodname_github_connect %} aktiviert, was dir ermöglicht, zusätzliche Funktionen und Workflows wie {% data variables.product.prodname_dependabot_alerts %} für unsichere Abhängigkeiten zu konfigurieren.{% ifversion ghec %}

- [Informationen zu {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect) findest du in der {% data variables.product.prodname_ghe_server %}-Dokumentation.
- [Informationen zu {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) findest du in der {% data variables.product.prodname_ghe_managed %}-Dokumentation.{% else %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).{% endif %}

## Weitere Informationsquellen

- [Vergleich von {% data variables.product.prodname_dotcom %} mit anderen DevOps-Lösungen](https://resources.github.com/devops/tools/compare/) in {% data variables.product.company_short %}-Ressourcen
