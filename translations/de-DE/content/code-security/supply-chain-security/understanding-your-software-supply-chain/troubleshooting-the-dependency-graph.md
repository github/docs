---
title: Fehler beim Abhängigkeitsdiagramm beheben
intro: 'Wenn die Abhängigkeitsinformationen, die vom Abhängigkeitsdiagramm gemeldet werden, nicht deinen Erwartungen entsprechen, kannst du einige Punkte in Betracht ziehen und verschiedene Aspekte überprüfen.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 2a36a74f77e7dcf2366adfc581da25465a74b172
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108411'
---
{% data reusables.dependabot.result-discrepancy %}

## Ermittelt das Abhängigkeitsdiagramm nur Abhängigkeiten in Manifesten und Sperrdateien?

Das Abhängigkeitsdiagramm schließt {% ifversion dependency-submission-api %}automatisch{% endif %} Informationen zu Abhängigkeiten ein, die in deiner Umgebung explizit deklariert sind. Das heißt, Abhängigkeiten, die in einem Manifest oder einer Sperrdatei angegeben sind. Das Abhängigkeitsdiagramm enthält im Allgemeinen auch transitive Abhängigkeiten – selbst wenn sie nicht in einer Sperrdatei angegeben sind –, indem die Abhängigkeiten der Abhängigkeiten in einer Manifestdatei untersucht werden.

Das Abhängigkeitsdiagramm enthält nicht {% ifversion dependency-submission-api %}automatisch{% endif %} „lose“ Abhängigkeiten. Als „lose“ Abhängigkeiten werden einzelne Dateien bezeichnet, die aus einer anderen Quelle kopiert und direkt oder in ein Repository (z. B. eine ZIP- oder JAR-Datei) eingecheckt werden, anstatt in einem Manifest oder einer Sperrdatei des Paket-Managers referenziert zu werden. 

{% ifversion dependency-submission-api %} Du kannst jedoch die Abhängigkeitsübermittlungs-API (Beta) verwenden, um Abhängigkeiten zu einem Abhängigkeitsdiagramm eines Projekts hinzuzufügen, auch wenn die Abhängigkeiten nicht in einer Manifest- oder Sperrdatei deklariert sind, z. B. Abhängigkeiten, die beim Erstellen eines Projekts aufgelöst werden. Das Abhängigkeitsdiagramm zeigt die übermittelten Abhängigkeiten nach Ökosystemen gruppiert an, jedoch getrennt von den aus Manifest- oder Sperrdateien geparsten Abhängigkeiten. Weitere Informationen zur Abhängigkeitsübermittlungs-API findest du unter [Verwenden der Abhängigkeitsübermittlungs-API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).{% endif %}

**Überprüfung**: Handelt es sich um eine fehlende Abhängigkeit für eine Komponente, die nicht im Manifest oder in der Sperrdatei des Repositorys angegeben ist?

## Erkennt das Abhängigkeitsdiagramm Abhängigkeiten, die mithilfe von Variablen angegeben wurden?

Das Abhängigkeitsdiagramm analysiert Manifeste, während sie an {% data variables.product.prodname_dotcom %} gepusht werden. Das Abhängigkeitsdiagramm hat also keinen Zugriff auf die Buildumgebung des Projekts und kann daher die in den Manifesten verwendeten Variablen nicht auflösen. Wenn du in einem Manifest Variablen verwendest, um den Namen oder die Version einer Abhängigkeit anzugeben, wird diese Abhängigkeit nicht {% ifversion dependency-submission-api %}automatisch{% endif %} in das Abhängigkeitsdiagramm einbezogen.

{% ifversion dependency-submission-api %} Du kannst jedoch die Abhängigkeitsübermittlungs-API (Beta) verwenden, um Abhängigkeiten zu einem Abhängigkeitsdiagramm eines Projekts hinzuzufügen, auch wenn die Abhängigkeiten nur beim Erstellen eines Projekts aufgelöst werden. Weitere Informationen zur Abhängigkeitsübermittlungs-API findest du unter [Verwenden der Abhängigkeitsübermittlungs-API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).{% endif %}

**Überprüfung**: Ist die fehlende Abhängigkeit im Manifest deklariert, indem eine Variable für ihren Namen oder ihre Version verwendet wird?

## Gibt es Grenzwerte, die die Daten des Abhängigkeitsdiagramms beeinflussen?

Ja, für das Abhängigkeitsdiagramm gelten zwei Kategorien von Grenzwerten:

1. **Datenverarbeitungslimits**

    Diese wirken sich auf das Abhängigkeitsdiagramm aus, das in {% data variables.product.prodname_dotcom %} angezeigt wird, und verhindern außerdem die Erstellung von {% data variables.product.prodname_dependabot_alerts %}.

    Manifeste mit einer Größe von mehr als 0,5 MB werden nur für Unternehmenskonten verarbeitet. Bei anderen Konten werden Manifeste über 0,5 MB ignoriert und erzeugen keine {% data variables.product.prodname_dependabot_alerts %}.

    Standardmäßig verarbeitet {% data variables.product.prodname_dotcom %} nicht mehr als 20 Manifeste pro Repository. Für Manifeste, die diesen Grenzwert überschreiten, werden keine {% data variables.product.prodname_dependabot_alerts %} erstellt. Wenn du das Limit erhöhen musst, kontaktiere den {% data variables.contact.contact_support %}. 

2. **Visualisierungslimits**

    Diese beeinflussen, was im Abhängigkeitsdiagramm in {% data variables.product.prodname_dotcom %} angezeigt wird. Sie wirken sich jedoch nicht auf die erstellten {% data variables.product.prodname_dependabot_alerts %} aus.

    In der Ansicht „Abhängigkeiten“ des Abhängigkeitsdiagramms für ein Repository werden nur 100 Manifeste angezeigt. Dieser Wert ist in der Regel ausreichend, da er deutlich über dem oben beschriebenen Verarbeitungsgrenzwert liegt. In Situationen, in denen das Verarbeitungslimit über 100 liegt, werden dennoch {% data variables.product.prodname_dependabot_alerts %} für alle Manifeste erstellt, die nicht in {% data variables.product.prodname_dotcom %} angezeigt werden.

**Überprüfung**: Befindet sich die fehlende Abhängigkeit in einer Manifestdatei mit einer Größe von mehr als 0,5 MB oder in einem Repository mit einer großen Anzahl von Manifesten?

## Weitere Informationsquellen

- [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)
- [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
- [Problembehandlung bei der Erkennung anfälliger Abhängigkeiten](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies){% ifversion fpt or ghec or ghes %}
- [Problembehandlung bei {% data variables.product.prodname_dependabot %}-Fehlern](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors){% endif %}
