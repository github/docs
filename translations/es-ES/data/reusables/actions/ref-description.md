---
ms.openlocfilehash: 298bcacbb02a443ae929ddcd48d9d9cd4bebd41a
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179650"
---
Referencia de formato completo de la rama o etiqueta que desencadenó la ejecución del flujo de trabajo. En el caso de los flujos de trabajo desencadenados por `push`, se trata de la rama o la etiqueta ref que se insertó. En el caso de los flujos de trabajo desencadenados por `pull_request`, se trata de la rama de combinación de solicitudes de incorporación de cambios. En el caso de los flujos de trabajo desencadenados por `release`, se trata de la etiqueta de versión creada. Para otros desencadenadores, se trata de la rama o la etiqueta ref que desencadenó la ejecución del flujo de trabajo. Esto solo se configura si una rama o etiqueta se encuentra disponible para el tipo de evento. La etiqueta ref especificada tiene el formato completo, lo que significa que para las ramas el formato es `refs/heads/<branch_name>`, para las solicitudes de incorporación de cambios es `refs/pull/<pr_number>/merge`y para las etiquetas es `refs/tags/<tag_name>`. Por ejemplo, `refs/heads/feature-branch-1`.