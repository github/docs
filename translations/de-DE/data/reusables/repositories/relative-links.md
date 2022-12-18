---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171861"
---
Du kannst relative Links und Bildpfade in deinen gerenderten Dateien definieren, um Leser dabei zu unterstützen, in deinem Repository zu anderen Dateien zu navigieren.

Ein relativer Link ist ein Verknüpfung, die relativ zur aktuellen Datei ist. Wenn sich beispielsweise eine README-Datei im Root deines Repositorys und eine andere Datei in _docs/CONTRIBUTING.md_ befindet, sieht der relative Link zu _CONTRIBUTING.md_ in deiner README-Datei wie folgt aus:

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} wandelt deinen relativen Link oder den Bildpfad automatisch anhand dessen um, auf welchem Branch du dich gerade befindest, damit der Link oder der Pfad immer funktioniert. Der Pfad des Links ist relativ zur aktuellen Datei. Links, die mit `/` beginnen, sind relativ zum Repositorystamm. Du kannst alle relativen Linkoperanden verwenden, z. B. `./` und `../`.

Relative Links sind für Benutzer, die dein Repository klonen, einfacher zu verwenden. Absolute Links funktionieren möglicherweise nicht in Klons deines Repositorys - wir empfehlen relative Links zu verwenden, um auf andere Dateien in deinem Repository zu verweisen.
