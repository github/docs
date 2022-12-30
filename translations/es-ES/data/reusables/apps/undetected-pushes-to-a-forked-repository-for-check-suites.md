---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881864"
---
{% note %}

**Nota:** Checks API solo busca inserciones en el repositorio donde se ha creado el conjunto de comprobaciones o la ejecución de comprobación. Las inserciones realizadas en una rama de un repositorio bifurcado No se detectan y devuelven una matriz `pull_requests` vacía y un valor `null` para `head_branch`.

{% endnote %}
