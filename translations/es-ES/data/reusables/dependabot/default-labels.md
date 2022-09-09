---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138826"
---
De manera predeterminada, {% data variables.product.prodname_dependabot %} genera todas las solicitudes de incorporación de cambios con la etiqueta `dependencies`. Si se define más de un administrador de paquetes, {% data variables.product.prodname_dependabot %} incluye una etiqueta adicional en cada una de las solicitudes de incorporación de cambios. Esto indica qué lenguaje o ecosistema actualizará la solicitud de incorporación de cambios, por ejemplo: `java` para las actualizaciones de Gradle y `submodules` para las actualizaciones de los submódulos de Git. El {% data variables.product.prodname_dependabot %} crea estas etiquetas predeterminadas automáticamente, de acuerdo lo necesite tu repositorio.
