---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113869"
---
Si en el flujo de trabajo se usa un {% data variables.product.pat_generic %} para autenticarse en un registro, se recomienda encarecidamente actualizar el flujo de trabajo para usar el `GITHUB_TOKEN`.

{% ifversion fpt or ghec %} Para instrucciones sobre cómo actualizar los flujos de trabajo que se autentican en un registro con un {% data variables.product.pat_generic %}, consulta "[Actualización de un flujo de trabajo que accede a un registro mediante un {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)". {% endif %}

Para más información sobre `GITHUB_TOKEN`, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obtener más información sobre los procedimientos recomendados al usar un registro en acciones, consulta "[Fortalecimiento de seguridad para Acciones de GitHub](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
