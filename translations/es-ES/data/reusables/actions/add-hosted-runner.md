---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111300"
---
1. Haz clic en **Nuevo ejecutor** y, después, en **{% octicon "mark-github" aria-label="New hosted runner" %} Nuevo ejecutor hospedado en {% data variables.product.prodname_dotcom %}** .
1. Completa los detalles necesarios para configurar el nuevo ejecutor:

    - **Nombre**: escribe un nombre para el nuevo ejecutor. Para facilitar la identificación, esto debe indicar su configuración de hardware y funcionamiento, como `ubuntu-20.04-16core`.
    - **Imagen del ejecutor**: elije un sistema operativo de las opciones disponibles. Una vez que hayas seleccionado un sistema operativo, podrás elegir una versión específica.
    - **Tamaño del ejecutor**: elije una configuración de hardware en la lista desplegable de opciones disponibles.
    - **Escalado automático**: elije el número máximo de ejecutores que pueden estar activos en cualquier momento.
    - **Grupo de ejecutores**: elije el grupo del que serás miembro el ejecutor. Este grupo hospedará varias instancias del ejecutor, ya que se escalan y reducen verticalmente para satisfacer la demanda.
    - **Redes**: solo para {% data variables.product.prodname_ghe_cloud %}: elije si se asignará un intervalo de direcciones IP estáticas a instancias de {% data variables.actions.hosted_runner %}. Puedes usar hasta 10 direcciones IP estáticas en total.

1. Haz clic en **Crear ejecutor**.
