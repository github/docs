---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145104343"
---
{% note %}

**Hinweise:** 
- Der SARIF-Upload unterstützt maximal 5.000 Ergebnisse pro Upload. Alle Ergebnisse, die diesen Grenzwert überschreiten, werden ignoriert. Wenn ein Tool zu viele Ergebnisse generiert, solltest du die Konfiguration aktualisieren, um sich auf die Ergebnisse für die wichtigsten Regeln oder Abfragen zu konzentrieren.

 - Für jeden Upload unterstützt der SARIF-Upload eine maximale Größe von 10 MB für die mit `gzip` komprimierte SARIF-Datei. Uploads, die diesen Grenzwert überschreiten, werden abgelehnt. Wenn deine SARIF-Datei zu groß ist, weil sie zu viele Ergebnisse enthält, solltest du die Konfiguration aktualisieren, um sich auf die Ergebnisse für die wichtigsten Regeln oder Abfragen zu konzentrieren.

{% endnote %}
