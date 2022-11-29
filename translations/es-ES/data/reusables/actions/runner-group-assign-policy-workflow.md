---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178611"
---
{%- ifversion restrict-groups-to-workflows %}
1. Asigne una directiva para el acceso al flujo de trabajo.

   Puede configurar un grupo de ejecutores a fin de que sea accesible para una lista específica de flujos de trabajo o para todos los flujos de trabajo. Este valor no se puede invalidar si configura un grupo de ejecutores de una organización que haya compartido una empresa. Si especifica qué flujo de trabajo puede acceder al grupo de ejecutores, debe usar la ruta completa del flujo de trabajo, incluido el nombre y el propietario del repositorio, y debe anclar el flujo de trabajo a una rama, etiqueta o SHA completo. Por ejemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`. 
   
   Solo los trabajos que se definan directamente dentro de los flujos de trabajo seleccionados tendrán acceso al grupo de ejecutores.{%- endif %}
