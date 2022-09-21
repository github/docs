---
ms.openlocfilehash: 216386e3e7dc31df99a383af6a335681c72911c2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764197"
---
1. Haz clic en **Nuevo ejecutor** y, a continuación, haz clic en **{% octicon "mark-github" aria-label="New hosted runner" %} Nuevo ejecutor hospedado en Github**.
1. Completa los detalles necesarios para configurar el nuevo ejecutor:

    - **Nombre**: escribe un nombre para el nuevo ejecutor. Para facilitar la identificación, esto debe indicar su configuración de hardware y funcionamiento, como `ubuntu-20.04-16core`.
    - **Imagen del ejecutor**: elije un sistema operativo de las opciones disponibles. Una vez que hayas seleccionado un sistema operativo, podrás elegir una versión específica.
    - **Tamaño del ejecutor**: elije una configuración de hardware en la lista desplegable de opciones disponibles.
    - **Escalado automático**: elije el número máximo de ejecutores que pueden estar activos en cualquier momento.
    - **Grupo de ejecutores**: elije el grupo del que serás miembro el ejecutor. Este grupo hospedará varias instancias del ejecutor, ya que se escalan y reducen verticalmente para satisfacer la demanda.
    - **Redes**: solo para {% data variables.product.prodname_ghe_cloud %}: elije si se asignará un intervalo de direcciones IP estáticas a instancias de {% data variables.actions.hosted_runner %}. Puedes usar hasta 10 direcciones IP estáticas en total.

1. Haz clic en **Crear ejecutor**.