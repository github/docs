---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113802"
---
{% note %}

**Nota:** Checks API solo busca inserciones en el repositorio donde se ha creado el conjunto de comprobaciones o la ejecución de comprobación. Las inserciones realizadas en una rama de un repositorio bifurcado No se detectan y devuelven una matriz `pull_requests` vacía y un valor `null` para `head_branch`.

{% endnote %}
