---
title: Informationen zu GitHub Actions für Unternehmen
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} können die Produktivität von Entwicklern verbessern, indem sie den Softwareentwicklungszyklus deines Unternehmens automatisieren.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160744'
---
## Informationen zu {% data variables.product.prodname_actions %} für Unternehmen

{% data reusables.actions.about-actions-for-enterprises %}

| Aufgabe | Weitere Informationen |
| ---- | ---------------- |
| Automatisches Testen und Erstellen deiner Anwendung | [Informationen zu Continuous Integration](/actions/automating-builds-and-tests/about-continuous-integration) | 
| Bereitstellen der Anwendung | [Informationen zu Continuous Deployment](/actions/deployment/about-deployments/about-continuous-deployment) |
| Automatisches und sicheres Packen von Code in Artefakte und Container | [Informationen zum Verpacken mit {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions) |
| Automatisieren deiner Projektverwaltungsaufgaben | [Verwenden von {% data variables.product.prodname_actions %} für die Projektverwaltung](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management) |

{% data variables.product.prodname_actions %} hilft deinem Team dabei, schneller und im großen Stil zu arbeiten. Wenn {% data variables.product.prodname_actions %} für große Repositorys eingeführt wird, führen Teams deutlich mehr Pull Requests pro Tag zusammen, und die Pull Requests werden erheblich schneller zusammengeführt. Weitere Informationen findest du im Zustandsbericht für das Octoverse unter [Schnelleres Schreiben und Bereitstellen von Code](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation).

Du kannst eigene individuelle Automatisierungen erstellen oder Workflows aus unserem Ökosystem mit über 10.000 Aktionen nutzen und anpassen, die von Branchenführern und der Open Source-Community erstellt wurden. {% ifversion ghec %}Weitere Informationen findest du unter [Suchen und Anpassen von Aktionen](/actions/learn-github-actions/finding-and-customizing-actions).{% else %}Du kannst festlegen, dass Entwickler nur Aktionen in {% data variables.location.product_location %} verwenden können. Alternativ kannst du Entwicklern Zugriff auf Aktionen auf {% data variables.product.prodname_dotcom_the_website %} gestatten. Weitere Informationen findest du unter [Informationen zum Verwenden von Aktionen in deinem Unternehmen](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).{% endif %}

{% data variables.product.prodname_actions %} ist entwicklerfreundlich, da es direkt in die vertraute Umgebung von {% data variables.product.product_name %} integriert ist.

{% ifversion ghec %}Du kannst die komfortablen, von {% data variables.product.company_short %} gehosteten Runner nutzen, die von {% data variables.product.company_short %} gepflegt und upgegradet werden. Alternativ kannst du{% else %}Du kannst{% endif %} deine eigene private CI/CD-Infrastruktur mit selbstgehosteten Runnern nutzen. Selbstgehostete Runner ermöglichen es dir, die exakte Umgebung und die Ressourcen zu bestimmen, die deine Builds, Tests und Bereitstellungen vervollständigen, ohne deinen Softwareentwicklungszyklus dem Internet auszusetzen. Weitere Informationen findest du unter {% ifversion ghec %}[Informationen zu von {% data variables.product.company_short %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners) sowie unter{% endif %} [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% data variables.product.prodname_actions %} bietet mehr Kontrolle über Bereitstellungen. Du kannst beispielsweise Umgebungen verwenden, um festzulegen, dass für die Fortsetzung eines Auftrags eine Genehmigung erforderlich ist, um einzuschränken, von welchen Branches ein Workflow ausgelöst werden kann, und um den Zugriff auf Geheimnisse zu beschränken.{% ifversion ghec or ghes > 3.4 %} Wenn deine Workflows Zugriff auf Ressourcen eines Cloudanbieters benötigen, der OpenID Connect (OIDC) unterstützt, kannst du deine Workflows so konfigurieren, dass sie sich direkt beim Cloudanbieter authentifizieren. OIDC bietet Sicherheitsvorteile, indem es beispielsweise dafür sorgt, dass Anmeldeinformationen nicht als langlebige Geheimnisse gespeichert werden müssen. Weitere Informationen findest du unter [Informationen zur Sicherheitshärtung mit OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).{% endif %}

{% data variables.product.prodname_actions %} enthält auch Tools zum Steuern des Softwareentwicklungszyklus deines Unternehmens sowie zum Erfüllen von Complianceverpflichtungen. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## Informationen zu den ersten Schritten mit {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} Nach Abschluss der Planung kannst du die Schritte zum Aktivieren von {% data variables.product.prodname_actions %} ausführen. Beispielsweise kann es notwendig sein, ein Upgrade der CPU- und Speicherressourcen für {% data variables.location.product_location %} durchzuführen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

{% else %} Nach Abschluss der Planung kannst du den Anweisungen für die ersten Schritte mit {% data variables.product.prodname_actions %} folgen. Weitere Informationen findest du unter {% ifversion ghec %}[Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud).{% elsif ghae %}[Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).{% endif %} {% endif %}

## Weiterführende Themen

- [Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion ghec %}
- [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions){% endif %}
