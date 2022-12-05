---
title: 'Phase 3: Pilotprogramme'
intro: 'Es kann von Vorteil sein, wenn du mit einigen wenigen Projekten und Teams beginnst, die eine hohe Relevanz haben und mit denen du in einem Pilotprogramm einen ersten Rollout durchführst. Dies ermöglicht es einer ersten Gruppe in deinem Unternehmen, sich mit GHAS vertraut zu machen, zu erfahren, wie GHAS aktiviert und konfiguriert wird, und eine solide Grundlage für GHAS zu erstellen, bevor du den Rollout für den Rest deines Unternehmens durchführst.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108490'
---
{% note %}

Dieser Artikel ist Teil einer Reihe zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß. Den vorherigen Artikel dieser Reihe findest du unter [Phase 2: Vorbereiten der Aktivierung nach Maß](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale).

{% endnote %}

## Informationen zu Pilotprogrammen

Wir empfehlen dir, einige besonders relevante Projekte oder Teams für einen Pilotrollout von GHAS zu bestimmen. So kann sich eine erste Gruppe innerhalb deines Unternehmens mit GHAS vertraut machen und eine solide Grundlage für GHAS schaffen, ehe du den Rollout auf den Rest deines Unternehmens ausweitest.

Mit den Schritten in dieser Phase kannst du GHAS in deinem Unternehmen aktivieren, mit der Nutzung seiner Features beginnen und deine Ergebnisse überprüfen. Wenn du mit {% data variables.product.prodname_professional_services %} arbeitest, können sie durch diesen Prozess zusätzliche Unterstützung durch Onboarding-Sitzungen, GHAS-Workshops und Problembehandlung bei Bedarf bereitstellen.

Bevor du mit deinen Pilotprojekten beginnst, empfehlen wir, einige Besprechungen mit deinen Teams zu planen, z. B. eine erste Besprechung, eine Überprüfung zur Projekthalbzeit und eine Abschlusssitzung, wenn der Pilot abgeschlossen ist. Diese Besprechungen helfen allen, bei Bedarf Anpassungen vorzunehmen und sicherzustellen, dass deine Teams vorbereitet sind und unterstützt werden, um den Piloten erfolgreich abzuschließen.

{% ifversion ghes %}

Wenn du GHAS für deine {% data variables.product.prodname_ghe_server %}-Instanz noch nicht aktiviert hast, lies [Aktivieren von GitHub Advanced Security für dein Unternehmen](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

Du musst GHAS für jedes Pilotprojekt aktivieren, entweder durch Aktivieren des GHAS-Features für jedes Repository oder für alle Repositorys in allen Organisationen, die an dem Pilotprojekt teilnehmen. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

## Pilotprojekt für {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Informationen zum Aktivieren von {% data variables.product.prodname_code_scanning %} für deine {% data variables.product.prodname_ghe_server %}-Instanz findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance).

{% elsif ghae %}

Um {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_actions %} zu aktivieren, musst du Runner für die Ausführung von Workflows in {% data variables.product.prodname_ghe_managed %} zur Verfügung stellen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).

{% endif %}

Du kannst Codeüberprüfungen für ein Repository durchführen, indem du einen {% data variables.product.prodname_actions %}-Workflow zum Ausführen der [CodeQL-Aktion](https://github.com/github/codeql-action/) erstellst. {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} verwendet standardmäßig [von GitHub gehostete Runner](/actions/using-github-hosted-runners/about-github-hosted-runners). Dies kann jedoch angepasst werden, wenn du planst, deinen eigenen Runner mit deinen eigenen Hardwarespezifikationen zu hosten. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners).{% endif %}

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter:
  - [Informationen zu GitHub Actions](/actions/learn-github-actions)
  - [Grundlegendes zu GitHub Actions](/actions/learn-github-actions/understanding-github-actions)
  - [Ereignisse, die Workflows auslösen](/actions/learn-github-actions/events-that-trigger-workflows)
  - [Spickzettel zu Filtermustern](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

Wir empfehlen, {% data variables.product.prodname_code_scanning %} im Rahmen deines Pilotprogramms für alle einzelnen Repositorys zu aktivieren. Weitere Informationen findest du unter [Einrichten der Codeüberprüfung für ein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository).

Wenn du die Codeüberprüfung für viele Repositorys aktivieren möchtest, solltest du ein Skript für den Prozess schreiben.

Ein Beispiel für ein Skript, das Pull Requests öffnet, um einen {% data variables.product.prodname_actions %}-Workflow zu mehreren Repositorys hinzuzufügen, findest du im [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs)-Repository für ein Beispiel mit PowerShell oder [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) für Teams, die keine PowerShell haben und stattdessen NodeJS verwenden möchten.

Beim Ausführen der ersten Codeüberprüfungen kannst du feststellen, dass keine Ergebnisse gefunden werden oder dass eine ungewöhnliche Anzahl von Ergebnissen zurückgegeben wird. Es kann ratsam sein, das anzupassen, was in zukünftigen Überprüfungen gekennzeichnet wird. Weitere Informationen findest du unter [Konfigurieren der Codeüberprüfung](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning).

Wenn dein Unternehmen andere Tools für die Codeanalyse von Drittanbietern mit der GitHub-Codeüberprüfung verwenden möchte, kannst du Aktionen verwenden, um diese Tools innerhalb von GitHub auszuführen. Alternativ kannst du Ergebnisse, die von Drittanbietertools als SARIF-Dateien generiert werden, in die Codeüberprüfung hochladen. Weitere Informationen findest du unter [Integrieren der Codeüberprüfung](/code-security/code-scanning/integrating-with-code-scanning).

## Durchführen eines Pilotprojekts für {% data variables.product.prodname_secret_scanning %}

GitHub durchsucht Repositorys nach bekannten Geheimnistypen, um die betrügerische Verwendung von Geheimnissen zu verhindern, die versehentlich committet wurden.

{% ifversion ghes %}

Informationen zum Aktivieren der Überprüfung von Geheimnissen für deine {% data variables.product.prodname_ghe_server %}-Instanz findest du unter [Konfigurieren von Geheimnisüberprüfung für deine Appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance).

{% endif %}

Du musst die Überprüfung von Geheimnissen für jedes Pilotprojekt aktivieren, entweder durch Aktivieren des Features für jedes Repository oder für alle Repositorys in allen Organisationen, die an dem Projekt teilnehmen. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

Wenn du benutzerdefinierte Muster für dein Unternehmen gesammelt hast, insbesondere solche, die mit den Pilotprojekten für {% data variables.product.prodname_secret_scanning %} zusammenhängen, kannst du diese konfigurieren. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).

Informationen zum Anzeigen und Schließen von Warnungen für Geheimnisse, die in deinem Repository eingecheckt sind, findest du unter [Verwalten von Warnungen aus der Geheimnisüberprüfung](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

{% note %}

Den nächsten Artikel in dieser Reihe findest du unter [Phase 4: Erstellen interner Dokumentation](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation).

{% endnote %}
