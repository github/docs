---
ms.openlocfilehash: 58fe7bc6f3568b066453ea1e2fa5b6defc7c5048
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068229"
---
Verwende `jobs.<job_id>.strategy.matrix.include`, um vorhandene Matrixkonfigurationen zu erweitern oder neue Konfigurationen hinzuzufügen. Der Wert von `include` ist eine Liste von Objekten.

Die Schlüssel-Wert-Paare im Objekt werden für jedes Objekt in der `include`-Liste zu jeder der Matrixkombinationen hinzugefügt, wenn keines der Schlüssel-Wert-Paare einen der ursprünglichen Matrixwerte überschreibt. Wenn das Objekt zu keiner der Matrixkombinationen hinzugefügt werden kann, wird stattdessen eine neue Matrixkombination erstellt. Beachte, dass die ursprünglichen Matrixwerte nicht überschrieben werden, hinzugefügte Matrixwerte jedoch überschrieben werden können.

Diese Matrix ergibt sechs Aufträge mit den folgenden Matrixkombinationen:

```yaml
strategy:
  matrix:
    fruit: [apple, pear]
    animal: [cat, dog]
    include:
      - color: green
      - color: pink
        animal: cat
      - fruit: apple
        shape: circle
      - fruit: banana
      - fruit: banana
        animal: cat
```

führt zu sechs Aufträgen mit den folgenden Matrixkombinationen:

- `{fruit: apple, animal: cat, color: pink, shape: circle}`
- `{fruit: apple, animal: dog, color: green, shape: circle}`
- `{fruit: pear, animal: cat, color: pink}`
- `{fruit: pear, animal: dog, color: green}`
- `{fruit: banana}`
- `{fruit: banana, animal: cat}`

Sie befolgen diese Logik:

- `{color: green}` wird allen ursprünglichen Matrixkombinationen hinzugefügt, da sie hinzugefügt werden kann, ohne einen Teil der ursprünglichen Kombinationen zu überschreiben.
- `{color: pink, animal: cat}` fügt `color:pink` nur den ursprünglichen Matrixkombinationen hinzu, die `animal: cat` enthalten. Dadurch wird die `color: green` überschrieben, die zuvor durch den vorherigen `include`-Eintrag hinzugefügt wurde.
- `{fruit: apple, shape: circle}` fügt `shape: circle` nur den ursprünglichen Matrixkombinationen hinzu, die `fruit: apple` enthalten.
- `{fruit: banana}` kann zu keiner ursprünglichen Matrixkombination hinzugefügt werden, ohne dass dabei ein Wert überschrieben wird. Daher wird sie als zusätzliche Matrixkombination hinzugefügt.
- `{fruit: banana, animal: cat}` kann zu keiner ursprünglichen Matrixkombination hinzugefügt werden, ohne dass dabei ein Wert überschrieben wird. Daher wird sie als zusätzliche Matrixkombination hinzugefügt. Die `{fruit: banana}`-Matrixkombination wird nicht hinzugefügt, da die Kombination keine der ursprünglichen Matrixkombinationen war.
