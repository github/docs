---
title: Verwenden von Startworkflows
intro: '{% data variables.product.product_name %} bietet für verschiedene Sprachen und Tools Startworkflows.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179839'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Startworkflows

{% data variables.product.product_name %} umfasst Startworkflows für verschiedene Sprachen und Tools. Wenn du Workflows im Repository einrichtest, analysiert {% data variables.product.product_name %} den Code im Repository und empfiehlt Workflows anhand der Sprache und des Frameworks im Repository. Wenn du beispielsweise [Node.js](https://nodejs.org/en/) verwendest, schlägt {% data variables.product.product_name %} eine Startworkflowdatei vor, die deine Node.js-Pakete installiert und deine Tests ausführt. {% ifversion actions-starter-template-ui %} Um relevante Startworkflows zu finden, kannst du die Such- und Filterfunktion verwenden.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

Du kannst auch deinen eigenen Startworkflow erstellen und mit deiner Organisation teilen. Diese Startworkflows werden zusammen mit den von {% data variables.product.product_name %} bereitgestellten Startworkflows angezeigt. Weitere Informationen findest du unter [Erstellen von Starterworkflows für deine Organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

## Verwenden von Startworkflows

Jeder mit Schreibberechtigung für ein Repository kann {% data variables.product.prodname_actions %}-Startworkflows für CI/CD oder eine andere Automatisierung einrichten.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Wenn du bereits über einen Workflow im Repository verfügst, klicke auf **Neuer Workflow**.
1. Die Seite „{% ifversion actions-starter-template-ui %}Workflow auswählen{% else %}Workflowvorlage auswählen{% endif %}“ zeigt eine Auswahl empfohlener Startworkflows. Suche den Startworkflow, den du verwenden möchtest, und klicke dann auf {% ifversion actions-starter-template-ui %}**Konfigurieren**{% else %}**Diesen Workflow einrichten**{% endif %}.{% ifversion actions-starter-template-ui %} Um den gewünschten Startworkflow zu finden, kannst du nach Schlüsselwörtern suchen oder nach Kategorie filtern.{% endif %}

   {% ifversion actions-starter-template-ui %}![Konfigurieren dieses Workflows](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Einrichten dieses Workflows](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Wenn der Startworkflow Kommentare mit zusätzlichen Setupschritten enthält, führe die entsprechenden Schritte aus. Viele Startworkflows verfügen über entsprechende Anweisungen. Weitere Informationen findest du in den [{% data variables.product.prodname_actions %}-Leitfäden](/actions/guides).
1. Einige Startworkflows verwenden Geheimnisse. Beispiel: {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Wenn der Startworkflow ein Geheimnis verwendet, speichere den im Geheimnisnamen beschriebenen Wert als Geheimnis im Repository. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).
1. Optional kannst du zusätzliche Änderungen vornehmen. Beispielsweise kannst du den Wert `on` so bearbeiten, dass er sich bei Ausführung des Workflows ändert.
1. Klicke auf **Commit starten**.
1. Schreibe eine Commitnachricht, und entscheide, ob direkt ein Commit an den Standardbranch erfolgen oder ein Pull Request geöffnet werden soll.

## Weitere Informationsquellen

- [Informationen zu Continuous Integration](/articles/about-continuous-integration)
- [Verwalten von Workflowausführungen](/actions/managing-workflow-runs)
- [Informationen zu Überwachung und Problembehandlung](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)
- [Erlernen von {% data variables.product.prodname_actions %}](/actions/learn-github-actions) {% ifversion fpt or ghec %}
- [Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) {% endif %}
