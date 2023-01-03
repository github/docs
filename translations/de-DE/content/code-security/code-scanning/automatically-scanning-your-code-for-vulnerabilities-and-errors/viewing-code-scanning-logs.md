---
title: Anzeigen von Codescanprotokollen
intro: 'Du kannst die Ausgabe anzeigen, die während der {% data variables.product.prodname_code_scanning %}-Analyse in {% data variables.product.product_location %} generiert wurde.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444629'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Informationen zu deiner {% data variables.product.prodname_code_scanning %}-Einrichtung 

Du kannst eine Vielzahl von Tools verwenden, um {% data variables.product.prodname_code_scanning %} in deinem Repository einzurichten. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning).

Die für dich verfügbaren Protokoll- und Diagnoseinformationen hängen von der Methode ab, die du für {% data variables.product.prodname_code_scanning %} in deinem Repository verwendest. Du kannst den Typ von {% data variables.product.prodname_code_scanning %} auf der Registerkarte **Sicherheit** deines Repositorys überprüfen, indem du das Dropdownmenü **Tool** in der Warnungsliste verwendest. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

## Informationen zu Analyse- und Diagnoseinformationen

Du kannst Analyse- und Diagnoseinformationen für die {% data variables.product.prodname_code_scanning %}-Ausführung mit {% data variables.product.prodname_codeql %}-Analyse auf {% data variables.product.prodname_dotcom %} anzeigen. 

**Analyseinformationen** werden für die neueste Analyse in einer Kopfzeile oben in der Liste der Warnungen angezeigt. Weitere Informationen findest du unter [Verwalten von Codeüberprüfungswarnungen für dein Repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

**Diagnoseinformationen** werden in den Aktionsworkflowprotokollen angezeigt und bestehen aus Zusammenfassungsmetriken und Extraktordiagnosen. Weitere Informationen zum Zugriff auf {% data variables.product.prodname_code_scanning %}-Protokolle zu {% data variables.product.prodname_dotcom %} findest du im Folgenden unter [Anzeigen der Protokollausgabe von {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning).

Wenn du die {% data variables.product.prodname_codeql_cli %} außerhalb von {% data variables.product.prodname_dotcom %} verwendest, werden Diagnoseinformationen in der Ausgabe angezeigt, die während der Datenbankanalyse generiert wird. Diese Informationen sind auch in der SARIF-Ergebnisdatei enthalten, die du in {% data variables.product.prodname_dotcom %} mit den {% data variables.product.prodname_code_scanning %}-Ergebnissen hochlädst.

Informationen zur {% data variables.product.prodname_codeql_cli %} findest du unter [Konfigurieren von {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information).

### Informationen zu Zusammenfassungsmetriken

{% data reusables.code-scanning.summary-metrics %}

### Informationen zur {% data variables.product.prodname_codeql %}-Quellcodeextraktionsdiagnose

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

Wenn du die Debugprotokollierung aktivierst, werden ausführlichere Informationen zu {% data variables.product.prodname_codeql %}-Extraktorfehlern und Warnungen, die während der Datenbankerstellung aufgetreten sind, angezeigt. Weitere Informationen findest du unter [Problembehandlung beim CodeQL-Workflow](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled).

{% endif %}

## Anzeigen der Protokollausgabe von {% data variables.product.prodname_code_scanning %}

Dieser Abschnitt gilt für die {% data variables.product.prodname_code_scanning %}-Ausführung mit {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} oder Drittanbieter).

Nach dem Einrichten von {% data variables.product.prodname_code_scanning %} für dein Repository kannst du die Ausgabe der Aktionen während der Ausführung überwachen.

{% data reusables.repositories.actions-tab %}

  Es wird eine Liste angezeigt, die einen Eintrag für die Ausführung des {% data variables.product.prodname_code_scanning %}-Workflows enthält. Der Text des Eintrags entspricht dem Titel deiner Commitnachricht.

  ![Liste der Aktionen mit {% data variables.product.prodname_code_scanning %}-Workflow](/assets/images/help/repository/code-scanning-actions-list.png)

1. Klicke auf den Eintrag für den {% data variables.product.prodname_code_scanning %}-Workflow.

2. Klicke auf den Namen des Auftrags auf der linken Seite. Beispiel: **Analyse (SPRACHE)** .

  ![Protokollausgabe des {% data variables.product.prodname_code_scanning %}-Workflows](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Überprüfe die Protokollausgabe der Aktionen in diesem Workflow während der Ausführung.

1. Sobald alle Aufträge abgeschlossen sind, kannst du die Details aller identifizierten {% data variables.product.prodname_code_scanning %}-Warnungen anzeigen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

{% note %}

**Hinweis**: Wenn du zum Hinzufügen des {% data variables.product.prodname_code_scanning %}-Workflows zu deinem Repository einen Pull Request ausgelöst hast, werden Warnungen aus diesem Pull Request erst direkt auf der Seite „{% data variables.product.prodname_code_scanning_capc %}“ angezeigt, wenn der Pull Request gemergt wurde. Wurden Warnungen gefunden, kannst du diese vor dem Merge des Pull Requests anzeigen. Klicke hierzu im Banner auf der Seite „{% data variables.product.prodname_code_scanning_capc %}“ auf den Link **_n_ Warnungen gefunden**.

![Klicke auf den Link „n Warnungen gefunden“.](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
