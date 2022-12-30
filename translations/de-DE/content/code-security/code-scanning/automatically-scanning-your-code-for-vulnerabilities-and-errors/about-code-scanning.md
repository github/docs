---
title: Informationen zu Codescans
intro: 'Du kannst die {% data variables.product.prodname_code_scanning %} nutzen, um Sicherheitsrisiken und Fehler im Code deines Projekts auf {% data variables.product.prodname_dotcom %} zu finden.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085564'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zu {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Mit der {% data variables.product.prodname_code_scanning %} kannst du in deinem Code Probleme suchen, selektieren und deren Behandlung priorisieren. {% data variables.product.prodname_code_scanning_capc %} verhindert auch, dass Entwickler neue Probleme schaffen. Du kannst Überprüfungen für bestimmte Tage und Uhrzeiten planen oder Überprüfungen durchführen, wenn im Repository ein bestimmtes Ereignis auftritt, z. B. ein Push.

Wenn die {% data variables.product.prodname_code_scanning %} ein mögliches Sicherheitsrisiko oder einen Fehler in deinem Code findet, zeigt {% data variables.product.prodname_dotcom %} eine Warnung im Repository an. Nachdem du den Code korrigiert hast, der die Meldung ausgelöst hat, schließt {% data variables.product.prodname_dotcom %} die Meldung. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Um die Ergebnisse der {% data variables.product.prodname_code_scanning %} in deinen Repositorys oder deiner Organisation zu überwachen, kannst du Webhooks und die {% data variables.product.prodname_code_scanning %}-API verwenden. Informationen zu den Webhooks für die {% data variables.product.prodname_code_scanning %} findest du unter [Webhookereignisse und Nutzlasten](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert). Informationen zu API-Endpunkten findest du unter [{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning). 

Erste Schritte mit der {% data variables.product.prodname_code_scanning %} findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% ifversion fpt or ghec %}

## Informationen zur Abrechnung für die {% data variables.product.prodname_code_scanning %}

Die {% data variables.product.prodname_code_scanning_capc %} verwendet {% data variables.product.prodname_actions %}, und jede Ausführung eines {% data variables.product.prodname_code_scanning %}-Workflows verbraucht Minuten für {% data variables.product.prodname_actions %}. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% endif %}

## Informationen zu Tools für die {% data variables.product.prodname_code_scanning %}

Du kannst die {% data variables.product.prodname_code_scanning %} einrichten, um das {% data variables.product.prodname_codeql %}-Produkt zu verwenden, das von {% data variables.product.company_short%} oder einem {% data variables.product.prodname_code_scanning %}-Tool von Drittanbietern verwaltet wird. 

### Informationen zur {% data variables.product.prodname_codeql %}-Analyse

{% data reusables.code-scanning.about-codeql-analysis %} Weitere Informationen zu {% data variables.product.prodname_codeql %} findest du unter [Informationen zum Codescannen mit CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql).

### Informationen zu {% data variables.product.prodname_code_scanning %}-Tools von Drittanbietern

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Du kannst Analysetools von Drittanbietern innerhalb von {% data variables.product.product_name %} mithilfe von Aktionen oder innerhalb eines externen CI-Systems ausführen. Weitere Informationen findest du unter [Einrichten der Codeüberprüfung für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) oder [Hochladen einer SARIF-Datei in GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).
