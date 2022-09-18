---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061302"
---
1. En "Ejecutores", busca el ejecutor en la lista. Si el ejecutor está en un grupo, haga clic en {% octicon "chevron-down" aria-label="The downwards chevron" %} para expandir la lista.
1. Haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} junto al ejecutor que quiera eliminar y después en **Eliminar**.

    ![Eliminar una configuración de ejecutor autoalojado](/assets/images/help/settings/actions-runner-remove.png)
1. Verás las instrucciones para eliminar el ejecutor auto-hospedado. Completa cualquiera de los siguientes pasos para eliminar el ejecutor, dependiendo de si aún se puede acceder a él:

    * **Si tiene acceso a la máquina del ejecutor:** siga las instrucciones en pantalla para que el sistema operativo de la máquina ejecute el comando de eliminación. Las instrucciones incluyen la URL solicitada y un token de tiempo limitado generado automáticamente.

        El comando de eliminación realiza las siguientes tareas:

        * Elimina el ejecutor de {% data variables.product.product_name %}.
        * Elimina cualquier archivo de configuración de la aplicación del ejecutor autoalojado en la máquina.
        * Elimina todos los servicios configurados si no se ejecuta en modo interactivo.

    * **Si no tiene acceso a la máquina:** haga clic en **Sí, forzar la eliminación de este ejecutor** para forzar a {% data variables.product.product_name %} a que elimine el ejecutor.
