---
ms.openlocfilehash: 3e11d726bb45f2a291ea7fbae4d10770cd505eaf
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764107"
---
Los grupos de ejecutores se utilizan para controlar el acceso a los ejecutores a nivel de empresas y organizaciones. Los propietarios de la empresa pueden configurar directivas de acceso que controlen qué organizaciones {% ifversion restrict-groups-to-workflows %}y flujos de trabajo {% endif %}de una empresa tienen acceso al grupo de ejecutores. Los propietarios de las organizaciones pueden configurar directivas de acceso que controlen qué repositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} de una organización tienen acceso al grupo de ejecutores.

Cuando un propietario de empresa otorga un acceso a un grupo de ejecutores, los propietarios de organizaciones pueden verlo listado en los ajustes del ejecutor auto-hospedado de la organización. Los propietarios de la organización pueden entonces asignar directivas de acceso adicionales y detalladas para los repositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} al grupo de ejecutores de la empresa.