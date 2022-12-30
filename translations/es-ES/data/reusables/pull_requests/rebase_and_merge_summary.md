---
ms.openlocfilehash: 371057b7fbe8e92b564e8729b11442bdbf2c1a56
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882799"
---
Al seleccionar la opción **Rebase and merge** en una solicitud de incorporación de cambios en {% data variables.product.product_location %}, todas las confirmaciones de la rama de tema (o rama de encabezado) se agregan a la rama base por separado sin una confirmación de fusión. De este modo, el comportamiento de fusionar mediante cambio de base y combinar es similar a una [combinación de avance rápido](https://git-scm.com/docs/git-merge#_fast_forward_merge), ya que mantiene un historial de proyectos lineal. Sin embargo, el rebase lo logra al rescribir el historial de confirmaciones en la rama base con confirmaciones nuevas.

El comportamiento de fusión mediante cambio de base y combinación en {% data variables.product.product_name %} varía ligeramente con respecto a `git rebase`. La fusión mediante cambio de base y combinación en {% data variables.product.prodname_dotcom %} siempre actualizará la información de la persona que confirma el cambio y creará SHA de confirmación, mientras que `git rebase` fuera de {% data variables.product.prodname_dotcom %} no cambia la información de la persona que confirma el cambio cuando se produce la fusión mediante cambio de base sobre una confirmación anterior. Para más información sobre `git rebase`, vea [git-rebase](https://git-scm.com/docs/git-rebase) en la documentación de Git.

Para fusionar mediante cambio de base y combinar solicitudes de incorporación de cambios, debe tener [permisos de escritura](/articles/repository-permission-levels-for-an-organization/) en el repositorio y el repositorio debe [permitir la combinación de fusión mediante cambio de base](/articles/configuring-commit-rebasing-for-pull-requests/).

Para obtener una representación visual de `git rebase`, vea [el capítulo "Git Branching - Rebasing" (Creación de ramas en Git: fusión mediante cambio de base) del libro _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing).
