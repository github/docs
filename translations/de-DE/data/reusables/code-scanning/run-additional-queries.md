---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717645"
---
Wenn du {% data variables.product.prodname_codeql %} zum Überprüfen von Code verwendest, generiert die {% data variables.product.prodname_codeql %}-Analyse-Engine eine Datenbank anhand des Codes und führt Abfragen darin aus. Die {% data variables.product.prodname_codeql %}-Analyse verwendet einen standardmäßigen Abfragesatz, aber du kannst zusätzlich zu den Standardabfragen weitere auszuführende Abfragen angeben.

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

Du kannst außerdem die Abfragen angeben, die du von der Analyse ausschließen oder in die Analyse einbeziehen möchtest. Dies erfordert die Verwendung einer benutzerdefinierten Konfigurationsdatei. Weitere Informationen findest du unter [Verwenden einer benutzerdefinierten Konfigurationsdatei](#using-a-custom-configuration-file) und [Ausschließen bestimmter Abfragen aus der Analyse](#excluding-specific-queries-from-analysis) weiter unten.

{% endtip %} {% endif %}

{% ifversion codeql-packs %} Du kannst zusätzliche Abfragen ausführen, wenn sie Teil eines {% data variables.product.prodname_codeql %}-Pakets (Beta) sind, das in der {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} oder einem {% data variables.product.prodname_ql %}Paket veröffentlich wurde, das in einem Repository gespeichert ist. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Hier findest du die verfügbaren Optionen zum Angeben der zusätzlichen Abfragen, die du ausführen möchtest:

- `packs`, um ein oder mehrere {% data variables.product.prodname_codeql %}-Abfragepakete (Beta) zu installieren und die Standardabfragesammlung oder Abfragen für diese Pakete auszuführen.
- `queries`, um eine einzelne _.ql_-Datei, ein Verzeichnis mit mehreren _.ql_-Dateien, eine _.qls_-Definitionsdatei für eine Abfragesammlung oder eine beliebige Kombination anzugeben. Weitere Informationen zur Definition von Abfragesammlungen findest du unter [Erstellen von {% data variables.product.prodname_codeql %}-Abfragesammlungen](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/).

Du kannst sowohl `packs` als auch `queries` in demselben Workflow verwenden.
{% else %} Alle zusätzlichen Abfragen, die du ausführen möchtest, müssen zu einem {% data variables.product.prodname_ql %}-Paket in einem Repository gehören. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Du kannst eine einzelne _QL_-Datei, ein Verzeichnis mit mehreren _QL_-Dateien, eine _QLS_-Definitionsdatei für eine Abfragesammlung oder eine beliebige Kombination angeben. Weitere Informationen zur Definition von Abfragesammlungen findest du unter [Erstellen von {% data variables.product.prodname_codeql %}-Abfragesammlungen](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/).
{% endif %}

{% ifversion fpt or ghec %}Es wird nicht empfohlen, direkt aus dem Repository `github/codeql` auf Abfragesammlungen wie z. B. `github/codeql/cpp/ql/src@main` zu verweisen. Solche Abfragen müssten neu kompiliert werden und sind möglicherweise nicht mit der Version von {% data variables.product.prodname_codeql %} kompatibel, die derzeit auf {% data variables.product.prodname_actions %} aktiv ist, was zu Fehlern bei der Analyse führen kann.{% endif %}
