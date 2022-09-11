---
ms.openlocfilehash: f65192b62cd5ac803761ffaf5e1e374c8aad502e
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147879290"
---
{% ifversion fpt or ghec %}Si estás utilizando tu aplicación de OAuth con GitHub Actions y quieres modificar tus archivos de flujo de trabajo, tu token de OAuth debe tener el alcance `workflow` y el usuario debe tener permisos de escritura o de lectura para el repositorio que contiene dichos archivos de flujo de trabajo. Para obtener más información, consulta "[Alcances para las Apps de OAuth](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".{% endif %}
