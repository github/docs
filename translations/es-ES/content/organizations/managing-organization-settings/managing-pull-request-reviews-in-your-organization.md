---
title: Administración de revisiones de solicitudes de incorporación de cambios en la organización
intro: Puedes limitar qué usuarios pueden aprobar o solicitar cambios en las solicitudes de incorporación de cambios en la organización.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126220'
---
## Acerca de los límites de revisión de código

Predeterminadamente, en los repositorios públicos, cualquier usuario puede emitir revisiones que aprueben o soliciten cambios a una solicitud de cambios.

Puede limitar quién puede aprobar o solicitar cambios en las solicitudes de incorporación de cambios en repositorios públicos propiedad de su organización. Después de habilitar los límites de revisión del código, cualquier usuario puede comentar las solicitudes de incorporación de cambios en los repositorios públicos, pero solo las personas con acceso explícito a un repositorio pueden aprobar una solicitud de incorporación de cambios o solicitar cambios.

También puede habilitar los límites de revisión del código para repositorios individuales. Si habilita a la organización o establece límites, invalidará los límites de repositorios individuales propiedad de la organización. Para obtener más información, vea "[Administración de revisiones de solicitudes de incorporación de cambios en el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)".

## Habilitar los límites de revisión de código

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección "Access" de la barra lateral, haga clic en **({% octicon "report" aria-label="The report icon" %} Moderación)** .
1. En "{% octicon "report" aria-label="The report icon" %} Moderación), haga clic en **Code review limits** (Límites de revisión del código).
![Captura de pantalla del elemento de la barra lateral para los límites de revisión del código para las organizaciones](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Revise la información de la pantalla. Haga clic en **Limit review on all repositories** (Limitar revisión en todos los repositorios) para limitar las revisiones a las personas con acceso explícito o en **Remove review limits from all repositories** (Quitar límites de revisión de todos los repositorios) para quitar los límites de todos los repositorios públicos de la organización.
![Captura de pantalla de la configuración de límites de revisión del código para organizaciones](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
