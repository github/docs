---
ms.openlocfilehash: 39b050df26b1192db1f0d539b2bd789f90c022d1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764120"
---
Se recomienda usar solo {% data variables.actions.hosted_runner %} con repositorios privados:
- Las bifurcaciones de tu repositorio pueden ejecutar código potencialmente peligroso en tu {% data variables.actions.hosted_runner %} creando una solicitud de extracción que ejecute el código en un flujo de trabajo.
- Podría incurrir en costos inesperados si permites que los repositorios bifurcados ejecuten trabajos en {% data variables.actions.hosted_runner %}.