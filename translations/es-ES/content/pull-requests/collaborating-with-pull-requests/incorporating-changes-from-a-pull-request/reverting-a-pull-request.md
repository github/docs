---
title: Revertir una solicitud de extracción
intro: Puedes revertir una solicitud de extracción después de que se haya fusionado con la rama ascendente.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139661'
---
## Acerca de revertir una solicitud de extraccción

Al revertir una solicitud de incorporación de cambios en {% data variables.product.product_name %}, se genera una nueva solicitud de incorporación de cambios que contiene una reversión de la confirmación de combinación de la solicitud de incorporación de cambios combinada original. Para revertir las solicitudes de incorporación de cambios, debe tener [permisos de escritura](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) en el repositorio. 

## Revertir una solicitud de extracción

{% note %}

**Nota:** Es posible que tenga que revertir las confirmaciones individuales en la solicitud de incorporación de cambios si se cumple cualquiera de los casos siguientes.

- Revertir la solicitud de extracción provoca conflictos de fusión
- La solicitud de extracción original no se fusionó originalmente en {% data variables.product.product_name %}. Por ejemplo, alguien pudo haber fusionado la solicitud de extracción utilizando una fusión adelantada en la línea de comandos.

Para más información sobre el uso de Git para revertir manualmente las confirmaciones individuales, vea [Reversión de Git](https://git-scm.com/docs/git-revert.html) en la documentación de Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que quieras revertir.
3. Cerca de la parte inferior de la solicitud de incorporación de cambios, haga clic en **Revertir**. Si no se muestra la opción **Revertir**, tendrá que pedir permisos de escritura al administrador del repositorio.
  ![Vínculo Revertir solicitud de incorporación de cambios](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Fusionar la solicitud de extracción resultante. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
