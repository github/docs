---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109230"
---
Diese Konfigurationsdatei fügt die Abfragesammlung `security-and-quality` zur Liste der Abfragen hinzu, die von {% data variables.product.prodname_codeql %} beim Scannen deines Codes ausgeführt werden. Weitere Informationen zu den verfügbaren Abfragesammlungen findest du unter [Ausführen zusätzlicher Abfragen](#running-additional-queries).

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

Die folgende Konfigurationsdatei deaktiviert die Standardabfragen und gibt stattdessen eine Reihe von benutzerdefinierten Abfragen an, die ausgeführt werden sollen. Außerdem wird {% data variables.product.prodname_codeql %} so konfiguriert, dass Dateien im Verzeichnis _src_ (relativ zum Stammverzeichnis) überprüft werden. Ausgenommen davon sind das Verzeichnis _src/node_modules_ und Dateien, deren Name auf _.test.js_ endet. Dateien in _src/node_modules_ und Dateien mit Namen, die auf _.test.js_ enden, werden daher von der Analyse ausgeschlossen.

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

disable-default-queries: true

queries:
  - name: Use an in-repository {% data variables.product.prodname_ql %} pack (run queries in the my-queries directory)
    uses: ./my-queries
  - name: Use an external JavaScript {% data variables.product.prodname_ql %} pack (run queries from an external repo)
    uses: octo-org/javascript-qlpack@main
  - name: Use an external query (run a single query from an external {% data variables.product.prodname_ql %} pack)
    uses: octo-org/python-qlpack/show_ifs.ql@main
  - name: Use a query suite file (run queries from a query suite in this repo)
    uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls

paths:
  - src 
paths-ignore: 
  - src/node_modules
  - '**/*.test.js'
```

{% ifversion code-scanning-exclude-queries-from-analysis %}

Die folgende Konfigurationsdatei führt nur Abfragen aus, die Warnungen mit dem Schweregrad „Fehler“ generieren. Die Konfiguration wählt zunächst alle Standardabfragen, alle Abfragen in `./my-queries` sowie die Standardsammlung in `codeql/java-queries` aus und schließt dann alle Abfragen aus, die Warnungen oder Empfehlungen generieren. 

``` yaml
queries:
  - name: Use an in-repository QL pack (run queries in the my-queries directory)
    uses: ./my-queries
packs:
  - codeql/java-queries
query-filters:
- exclude:
    problem.severity:
      - warning
      - recommendation
```

{% endif %}
