---
ms.openlocfilehash: 592835351230fe7a5587c0212811899ab496e84d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092831"
---
Cuando hace clic en la opción predeterminada **Merge pull request** (Combinar solicitud de incorporación de cambios) en una solicitud de incorporación de cambios en {% data variables.product.product_location %}, todas las confirmaciones de la rama de características se agregan a la rama base en una confirmación de fusión. La solicitud de incorporación de cambios se combina mediante [la opción`--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Para combinar las solicitudes de incorporación de cambios, debe tener [permisos de escritura](/articles/repository-permission-levels-for-an-organization/) en el repositorio.

![standard-merge-commit-diagram](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)
