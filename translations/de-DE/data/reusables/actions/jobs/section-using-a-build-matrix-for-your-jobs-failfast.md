---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089483"
---
Du kannst steuern, wie Auftragsfehler mit `jobs.<job_id>.strategy.fail-fast` und `jobs.<job_id>.continue-on-error` verarbeitet werden.

`jobs.<job_id>.strategy.fail-fast` gilt für die gesamte Matrix. Wenn `jobs.<job_id>.strategy.fail-fast` auf `true` festgelegt ist, bricht {% data variables.product.product_name %} alle in Verarbeitung oder in der Warteschlange befindlichen Aufträge in der Matrix ab, wenn bei einem Auftrag in der Matrix ein Fehler auftritt. Der Standardwert dieser Eigenschaft ist `true`.

`jobs.<job_id>.continue-on-error` gilt für einen einzelnen Auftrag. Wenn `jobs.<job_id>.continue-on-error` auf `true` festgelegt ist, werden andere Aufträge in der Matrix weiterhin ausgeführt, auch wenn bei dem Auftrag mit `jobs.<job_id>.continue-on-error: true` ein Fehler auftritt.

Du kannst `jobs.<job_id>.strategy.fail-fast` und `jobs.<job_id>.continue-on-error` gemeinsam einsetzen. Der folgende Workflow startet beispielsweise vier Aufträge. Für jeden Auftrag wird `continue-on-error` durch den Wert von `matrix.experimental` bestimmt. Wenn bei einem der Aufträge mit `continue-on-error: false` ein Fehler auftritt, werden alle in Verarbeitung oder in der Warteschlange befindlichen Aufträge abgebrochen. Wenn beim Auftrag mit `continue-on-error: true` ein Fehler auftritt, sind die anderen Aufträge nicht betroffen.


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
