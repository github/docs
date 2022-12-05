---
title: Konfigurieren der Abhängigkeitsüberprüfung für Ihre Appliance
shortTitle: Configuring dependency review
intro: 'Zum besseren Verständnis von Abhängigkeitsänderungen beim Überprüfen von Pull Requests kannst du die Abhängigkeitsüberprüfung für {% data variables.location.product_location %} aktivieren, konfigurieren und deaktivieren.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107757'
---
## Informationen zur Abhängigkeitsüberprüfung

{% data reusables.dependency-review.feature-overview %}  

Einige zusätzliche Features, wie z. B. Lizenzüberprüfungen, das Blockieren von Pull Requests und die CI/CD-Integration, stehen mit der [Aktion zum Überprüfen von Abhängigkeiten](https://github.com/actions/dependency-review-action) zur Verfügung.

## Überprüfen, ob deine Lizenz {% data variables.product.prodname_GH_advanced_security %} umfasst

{% data reusables.advanced-security.check-for-ghas-license %}

## Voraussetzungen für die Abhängigkeitsüberprüfung

- Eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (siehe [Informationen zur Abrechnung für {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)).{% endif %}

- Das für die Instanz aktivierte Abhängigkeitsdiagramm. Standortadministratoren können das Abhängigkeitsdiagramm über die Verwaltungskonsole oder die administrative Shell aktivieren (siehe [Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)).
  
- {% data variables.product.prodname_github_connect %} muss zum Herunterladen und Synchronisieren von Sicherheitsrisiken aus der {% data variables.product.prodname_advisory_database %} aktiviert sein. Diese Konfiguration erfolgt üblicherweise im Rahmen der Einrichtung von {% data variables.product.prodname_dependabot %} (siehe [Aktivieren von Dependabot für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)).

## Aktivieren und Deaktivieren der Abhängigkeitsüberprüfung

Um die Abhängigkeitsüberprüfung zu aktivieren oder zu deaktivieren, musst du das Abhängigkeitsdiagramm für deine Instanz aktivieren oder deaktivieren.

Weitere Informationen findest du unter [Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).

## Durchführen der Abhängigkeitsüberprüfung mit {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

Die Aktion zum Überprüfen von Abhängigkeiten ist in deiner Installation von {% data variables.product.prodname_ghe_server %} enthalten. Sie ist für alle Repositorys verfügbar, bei denen {% data variables.product.prodname_GH_advanced_security %} und das Abhängigkeitsdiagramm aktiviert sind.

{% data reusables.dependency-review.dependency-review-action-overview %}  

Benutzer führen die Aktion zur Abhängigkeitsüberprüfung mit einem {% data variables.product.prodname_actions %}-Workflow aus. Falls du noch keine Runner für {% data variables.product.prodname_actions %} eingerichtet hast, musst du dies nachholen, damit die Benutzer Workflows ausführen können. Du kannst selbstgehostete Runner auf Repository-, Organisations- oder Unternehmenskontoebene bereitstellen. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/about-self-hosted-runners).

