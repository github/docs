---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879396"
---
1. Para iniciar la replicación de los almacenes de datos, use el comando `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Advertencia:** `ghe-repl-start` produce una breve interrupción en el servidor principal, durante la cual los usuarios pueden experimentar errores internos del servidor. Para proporcionar un mensaje más descriptivo, ejecute `ghe-maintenance -s` en el nodo principal antes de ejecutar `ghe-repl-start` en el nodo de réplica para poner el dispositivo en modo de mantenimiento. Una vez que la comience la replicación, inhabilite el modo de mantenimiento con `ghe-maintenance -u`. La replicación de Git no progresará mientras el nodo primario esté en modo de mantenimiento.

    {% endwarning %}
