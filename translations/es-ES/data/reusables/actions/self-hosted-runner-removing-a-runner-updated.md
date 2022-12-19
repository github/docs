---
ms.openlocfilehash: cf95e20b26e8fb29fbae23c0a5e9a913aa73c8b0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069434"
---
1. Haga clic en **Quitar**.
1. Verás las instrucciones para eliminar el ejecutor auto-hospedado. Completa cualquiera de los siguientes pasos para eliminar el ejecutor, dependiendo de si aún se puede acceder a él:

    * **Si tiene acceso a la máquina del ejecutor:** siga las instrucciones en pantalla para que el sistema operativo de la máquina ejecute el comando de eliminación. Las instrucciones incluyen la URL solicitada y un token de tiempo limitado generado automáticamente.

        El comando de eliminación realiza las siguientes tareas:

        * Elimina el ejecutor de {% data variables.product.product_name %}.
        * Elimina cualquier archivo de configuración de la aplicación del ejecutor autoalojado en la máquina.
        * Elimina todos los servicios configurados si no se ejecuta en modo interactivo.

    * **Si no tiene acceso a la máquina:** haga clic en **Forzar la eliminación de este ejecutor** para forzar a {% data variables.product.product_name %} a que quite el ejecutor.
