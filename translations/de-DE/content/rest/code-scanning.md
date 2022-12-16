---
title: Codeüberprüfung
intro: 'Mit der {% data variables.product.prodname_code_scanning %}-API kannst du {% data variables.product.prodname_code_scanning %}-Warnungen aus einem Repository abrufen und aktualisieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061394'
---
{% data reusables.code-scanning.beta %}

## Informationen zur Codeüberprüfungs-API

Mit der {% data variables.product.prodname_code_scanning %}-API kannst du {% data variables.product.prodname_code_scanning %}-Warnungen aus einem Repository abrufen und aktualisieren. Du kannst die Endpunkte verwenden, um automatisierte Berichte für {% data variables.product.prodname_code_scanning %}-Warnungen in einer Organisation zu erstellen oder Analyseergebnisse hochzuladen, die mit Offline-{% data variables.product.prodname_code_scanning %}-Tools generiert wurden. Weitere Informationen findest du unter [Suchen von Sicherheitsrisiken und Fehlern in deinem Code](/github/finding-security-vulnerabilities-and-errors-in-your-code).

### Benutzerdefinierter Medientyp für die {% data variables.product.prodname_code_scanning %}

Es gibt einen unterstützten benutzerdefinierten Medientyp für die {% data variables.product.prodname_code_scanning %}-REST-API. 

    application/sarif+json

Du kannst diesen mit `GET`-Anforderungen an den `/analyses/{analysis_id}`-Endpunkt senden. Weitere Informationen zu diesem Vorgang findest du unter [Abrufen einer {% data variables.product.prodname_code_scanning %}-Analyse für ein Repository](#get-a-code-scanning-analysis-for-a-repository). Wenn du diesen Medientyp mit diesem Vorgang verwendest, enthält die Antwort eine Teilmenge der tatsächlichen Daten, die für die angegebene Analyse hochgeladen wurden, anstatt der Zusammenfassung der Analyse, die zurückgegeben wird, wenn du den Standardmedientyp verwendest. Die Antwort enthält auch zusätzliche Daten, z. B. die `github/alertNumber`- und `github/alertUrl`-Eigenschaften. Die Daten werden mit der [SARIF-Version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html) formatiert.

Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
