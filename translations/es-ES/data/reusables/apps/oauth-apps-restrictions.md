---
ms.openlocfilehash: f65192b62cd5ac803761ffaf5e1e374c8aad502e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113857"
---
{% ifversion fpt or ghec %}Si estás utilizando tu aplicación de OAuth con GitHub Actions y quieres modificar tus archivos de flujo de trabajo, tu token de OAuth debe tener el alcance `workflow` y el usuario debe tener permisos de escritura o de lectura para el repositorio que contiene dichos archivos de flujo de trabajo. Para obtener más información, consulta "[Alcances para las Apps de OAuth](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".{% endif %}
