---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080455"
---
La rama o ref de etiqueta que activó la ejecución del flujo de trabajo. En el caso de los flujos de trabajo desencadenados por `push`, se trata de la rama o la etiqueta ref que se insertó. En el caso de los flujos de trabajo desencadenados por `pull_request`, se trata de la rama de combinación de solicitudes de incorporación de cambios. En el caso de los flujos de trabajo desencadenados por `release`, se trata de la etiqueta de versión creada. Para otros desencadenadores, se trata de la rama o la etiqueta ref que desencadenó la ejecución del flujo de trabajo. Esto solo se configura si una rama o etiqueta se encuentra disponible para el tipo de evento. La etiqueta ref especificada tiene el formato completo, lo que significa que para las ramas el formato es `refs/heads/<branch_name>`, para las solicitudes de incorporación de cambios es `refs/pull/<pr_number>/merge`y para las etiquetas es `refs/tags/<tag_name>`. Por ejemplo, `refs/heads/feature-branch-1`.
