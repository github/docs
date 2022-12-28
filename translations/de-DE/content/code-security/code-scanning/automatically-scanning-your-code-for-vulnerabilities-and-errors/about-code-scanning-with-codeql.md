---
title: Informationen zu Codescans mit CodeQL
shortTitle: Code scanning with CodeQL
intro: 'Du kannst {% data variables.product.prodname_codeql %} verwenden, um Sicherheitsrisiken und Fehler in deinem Code zu identifizieren. Die Ergebnisse werden als {% data variables.product.prodname_code_scanning %}-Warnungen auf {% data variables.product.prodname_dotcom %} angezeigt.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052176'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Es gibt zwei Hauptmethoden, um die Analyse von {% data variables.product.prodname_codeql %} für {% data variables.product.prodname_code_scanning %} zu verwenden:

- Füge deinem Repository den Workflow von {% data variables.product.prodname_codeql %} hinzu. Dabei wird die Aktion [github/codeql-action](https://github.com/github/codeql-action/) zum Ausführen der {% data variables.product.prodname_codeql_cli %} verwendet. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions).
- Führe die {% data variables.product.prodname_codeql %}-CLI direkt in einem externen CI-System aus, und lade die Ergebnisse auf {% data variables.product.prodname_dotcom %} hoch. Weitere Informationen findest du unter [Informationen zum Scannen von {% data variables.product.prodname_codeql %}-Code in deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system).

{% ifversion ghes or ghae %}

{% note %} In {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }}{% endif %} verwendet die {% data variables.product.prodname_codeql %}-Aktion standardmäßig die {% data variables.product.prodname_codeql_cli %}-Version {% data variables.product.codeql_cli_ghes_recommended_version %}. Es wird empfohlen, die gleiche Version der {% data variables.product.prodname_codeql_cli %} zu verwenden, wenn du die Analyse in einem externen CI-System ausführst.
{% endnote %}

{% endif %}


## Informationen zu {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} behandelt code wie Daten, sodass du mögliche Sicherheitsrisiken in deinem Code zuverlässiger findest als mit herkömmlichen statischen Analysetools.

1. Du generierst eine {% data variables.product.prodname_codeql %}-Datenbank zum Darstellen deiner Codebasis.
2. Danach führst du {% data variables.product.prodname_codeql %}-Abfragen von dieser Datenbank aus, um Probleme in der Codebasis zu ermitteln.
3. Die Abfrageergebnisse werden als {% data variables.product.prodname_code_scanning %}-Warnungen in {% data variables.product.product_name %} angezeigt, wenn du {% data variables.product.prodname_codeql %} mit {% data variables.product.prodname_code_scanning %} verwendest.

{% data variables.product.prodname_codeql %} unterstützt sowohl kompilierte als auch interpretierte Sprachen und kann Sicherheitsrisiken und Fehler in Code finden, der in den unterstützten Sprachen geschrieben wurde.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Informationen zu {% data variables.product.prodname_codeql %}-Abfragen

Expert*innen, Sicherheitsforscher*innen und Mitwirkende der Community von {% data variables.product.company_short %} schreiben und verwalten die Standardabfragen in {% data variables.product.prodname_codeql %}, die für {% data variables.product.prodname_code_scanning %} verwendet werden. Die Abfragen werden regelmäßig aktualisiert, um die Analyse zu verbessern und falsch positive Ergebnisse zu verringern. Bei den Abfragen handelt es sich um Open-Source-Abfragen, sodass du sie im [`github/codeql`](https://github.com/github/codeql)-Repository anzeigen und zu ihnen beitragen kannst. Weitere Informationen findest du unter [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) auf der {% data variables.product.prodname_codeql %}-Website. Du kannst auch eigene Abfragen schreiben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_codeql %}-Abfragen](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/) in der Dokumentation zu {% data variables.product.prodname_codeql %}.

Du kannst zusätzliche Abfragen als Teil deiner Codescananalyse ausführen. 

{%- ifversion codeql-packs %} Diese Abfragen müssen zu einem veröffentlichten {% data variables.product.prodname_codeql %}-Abfragepaket (Beta) oder einem QL-Paket in einem Repository gehören. {% data variables.product.prodname_codeql %}-Pakete (Beta) bieten gegenüber herkömmlichen QL-Paketen die folgenden Vorteile:

- Wenn ein {% data variables.product.prodname_codeql %}-Abfragepaket (Beta) im {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} veröffentlicht wird, sind alle von den Abfragen benötigten transitiven Abhängigkeiten und ein Kompilierungscache im Paket enthalten. So wird die Leistung verbessert und sichergestellt, dass das Ausführen der Abfragen im Paket jedes Mal zu identischen Ergebnisse führt, bis du ein Upgrade auf eine neue Version des Pakets oder der CLI durchführst. 
- QL-Pakete enthalten keine transitiven Abhängigkeiten, sodass Abfragen in diesen Paketen nur von den Standardbibliotheken (d. h. den Bibliotheken, auf die eine `import LANGUAGE`-Anweisung in deiner Abfrage verweist) oder Bibliotheken im gleichen QL-Paket wie die Abfrage abhängig sein können.

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_codeql %}-Paketen](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/) und [Informationen zu {% data variables.product.prodname_ql %}-Paketen](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) in der Dokumentation zu {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} Die Abfragen, die du ausführen möchtest, müssen zu einem QL-Paket in einem Repository gehören. Abfragen dürfen nur von den Standardbibliotheken (d. h. den Bibliotheken, auf die eine `import LANGUAGE`-Anweisung in deiner Abfrage verweist) oder Bibliotheken im gleichen QL-Paket wie die Abfrage abhängig sein. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ql %}-Paketen](https://codeql.github.com/docs/codeql-cli/about-ql-packs/).
{% endif %}
