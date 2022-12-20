---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145092032"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} para flujos de trabajo reutilizables en repositorios públicos {% ifversion ghes or ghec or ghae %}o internos{% endif %}.
* `./.github/workflows/{filename}` para flujos de trabajo reutilizables en el mismo repositorio.{% endif %}

`{ref}` puede ser un SHA, una etiqueta de versión o un nombre de rama. Utilizar el SHA de la confirmación es lo más seguro para la estabilidad y seguridad. Para más información, vea "[Refuerzo de la seguridad para Acciones de GitHub](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)". {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Si usa la segunda opción de sintaxis (sin `{owner}/{repo}` y `@{ref}`), el flujo de trabajo que se llama procede de la misma confirmación que el flujo de trabajo autor de la llamada.{% endif %}
