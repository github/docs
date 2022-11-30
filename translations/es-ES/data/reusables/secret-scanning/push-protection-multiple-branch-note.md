---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578743"
---
{% note %}

**Notas**: 

* Si la configuración de Git admite inserciones en varias ramas y no solo en la actual, es posible que se bloquee la inserción debido a que se insertan referencias adicionales y no deseadas. Para obtener más información, consulta las [opciones `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) en la documentación de Git.
* Si se agota el tiempo de espera de {% data variables.product.prodname_secret_scanning %} tras una inserción, {% data variables.product.prodname_dotcom %} todavía examinará las confirmaciones en busca de secretos después de la inserción.

{% endnote %}
