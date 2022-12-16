---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145122002"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

Para autenticarse en {% data variables.product.prodname_container_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, use `GITHUB_TOKEN` para obtener la mejor experiencia y seguridad. Si en el flujo de trabajo se usa un token de acceso personal (PAT) para autenticarse en `{% data reusables.package_registry.container-registry-hostname %}`, se recomienda encarecidamente actualizar el flujo de trabajo para que use el `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Para obtener instrucciones sobre cómo actualizar los flujos de trabajo que se autentican en `{% data reusables.package_registry.container-registry-hostname %}` con un token de acceso personal, consulta "[Actualización de un flujo de trabajo al que accede `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)".{% endif %}

Para más información sobre `GITHUB_TOKEN`, vea "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Si usa {% data variables.product.prodname_container_registry %} en acciones, siga nuestros procedimientos recomendados de seguridad en "[Protección de seguridad para Acciones de GitHub](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
