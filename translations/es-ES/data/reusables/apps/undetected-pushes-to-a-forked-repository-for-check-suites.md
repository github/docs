---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113802"
---
{% note %}

**Nota:** Checks API solo busca inserciones en el repositorio donde se ha creado el conjunto de comprobaciones o la ejecución de comprobación. Las inserciones realizadas en una rama de un repositorio bifurcado No se detectan y devuelven una matriz `pull_requests` vacía y un valor `null` para `head_branch`.

{% endnote %}
