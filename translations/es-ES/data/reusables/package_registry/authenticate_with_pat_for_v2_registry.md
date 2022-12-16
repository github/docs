---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192757"
---
Algunos registros de {% data variables.product.prodname_registry %} admiten permisos detallados. Esto significa que puedes elegir permitir que los paquetes sean propiedad de un usuario o de una organización, o bien que estén vinculados a un repositorio. Para obtener una lista de los registros que admiten permisos detallados, consulta "[Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)".

Para los registros que admiten permisos detallados, si en el flujo de trabajo se usa un {% data variables.product.pat_generic %} para autenticarse en un registro, se recomienda encarecidamente actualizar el flujo de trabajo para usar el `GITHUB_TOKEN`.

Para obtener instrucciones sobre cómo actualizar los flujos de trabajo que se autentican en un registro con un {% data variables.product.pat_generic %}, consulta "[Actualización de un flujo de trabajo que accede a un registro mediante un {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)".

Para más información sobre `GITHUB_TOKEN`, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obtener más información sobre los procedimientos recomendados al usar un registro en acciones, consulta "[Fortalecimiento de seguridad para Acciones de GitHub](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
