---
title: Informationen zur Integration mit Codeüberprüfung
shortTitle: About integration
intro: 'Du kannst die {% data variables.product.prodname_code_scanning %} extern durchführen und die Ergebnisse dann auf {% data variables.product.prodname_dotcom %} anzeigen. Alternativ kannst du Webhooks einrichten, die an der Aktivität der {% data variables.product.prodname_code_scanning %} in deinem Repository lauschen.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105008'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

Alternativ zur Ausführung von {% data variables.product.prodname_code_scanning %} innerhalb von {% data variables.product.prodname_dotcom %} kannst du die Analyse auch an anderer Stelle durchführen und die Ergebnisse dann hochladen. Warnungen für {% data variables.product.prodname_code_scanning %}, die du extern ausführst, werden auf die gleiche Weise angezeigt wie die für {% data variables.product.prodname_code_scanning %}, die du innerhalb von {% data variables.product.prodname_dotcom %} ausführst. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Wenn du ein statisches Analysetool eines Drittanbieters verwendest, das Ergebnisse als Static Analysis Results Interchange Format (SARIF) 2.1.0 Daten erzeugen kann, kannst du diese in {% data variables.product.prodname_dotcom %} hochladen. Weitere Informationen findest du unter [Hochladen einer SARIF-Datei in GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## Integrationen mit WebHooks

Du kannst {% data variables.product.prodname_code_scanning %}-Webhooks verwenden, um Integrationen zu erstellen oder einzurichten, wie z.B.[ {% data variables.product.prodname_github_apps %} ](/apps/building-github-apps/) oder [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), die sich auf {% data variables.product.prodname_code_scanning %} Ereignisse in deinem Repository abonnieren. Du könntest zum Beispiel eine Integration erstellen, die eine Meldung zu {% data variables.product.product_name %} erstellt oder dir eine Slack-Benachrichtigung schickt, wenn eine neue {% data variables.product.prodname_code_scanning %} Meldung in deinem Repository hinzugefügt wird. Weitere Informationen findest du unter "[WebHooks erstellen](/developers/webhooks-and-events/creating-webhooks)" und "[WebHook-Ereignisse und Nutzdaten](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)."

## Weiterführende Themen

* "[Informationen über {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)"
* "[Verwenden von {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} mit deinem vorhandenen CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[SARIF-Support für {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)"
