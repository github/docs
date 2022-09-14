---
ms.openlocfilehash: b5c33a751c34b9a3e0e804c6c5153fbcdc96a7f6
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147705073"
---
Si en el flujo de trabajo se usa un token de acceso personal (PAT) para autenticarse en un registro, se recomienda encarecidamente actualizar el flujo de trabajo para que use el `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Para obtener instrucciones sobre cómo actualizar los flujos de trabajo que se autentican en un registro con un token de acceso personal, consulta "[Actualización de un flujo de trabajo al que accede un registro usando un PAT](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-pat)".{% endif %}

Para más información sobre `GITHUB_TOKEN`, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obtener más información sobre las prácticas recomendadas al usar un registro en acciones, consulta "[Fortalecimiento de seguridad para GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
