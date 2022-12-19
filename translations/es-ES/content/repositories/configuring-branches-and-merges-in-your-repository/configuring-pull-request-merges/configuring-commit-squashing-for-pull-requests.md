---
title: Configurar combinación de confirmaciones para las solicitudes de extracción
intro: 'Puedes hacer cumplir, permitir o inhabilitar combinaciones de confirmación para todas las fusiones de las solicitudes de extracción en {% data variables.product.product_location %} en tu repositorio.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580715'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitudes de incorporación de cambios"{% else %}"Botón Combinar"{% endif %}, selecciona **Permitir fusión mediante combinación con "squash"** . Esto permite que los colaboradores fusionen una solicitud de extracción al combinar todas las confirmaciones en una confirmación única. El mensaje de confirmación predeterminado presentado a los colaboradores al combinar es el título de confirmación y el mensaje si la solicitud de incorporación de cambios contiene solo una confirmación, o el título de la solicitud de incorporación de cambios y la lista de confirmaciones si la solicitud de incorporación de cambios contiene dos o más confirmaciones. {% ifversion ghes = 3.6 %} Para usar siempre el título de la solicitud de incorporación de cambios, independientemente del número de confirmaciones de la solicitud de incorporación de cambios, selecciona **Valor predeterminado al título de solicitud de incorporación de cambios para confirmaciones de combinación de squash**.{% endif %} {% ifversion default-merge-squash-commit-message %} ![Confirmaciones con squash de solicitud de incorporación de cambios](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Captura de pantalla de la configuración de solicitud de incorporación de cambios con la casilla permitir confirmaciones de combinación resaltada](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Confirmaciones con squash de solicitud de incorporación de cambios](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, en **Permitir combinación de squash**, usa la lista desplegable para elegir el formato del mensaje de confirmación de squash predeterminado presentado a los colaboradores al combinar. El mensaje predeterminado usa el título de confirmación y el mensaje si la solicitud de incorporación de cambios contiene solo una confirmación, o el título de la solicitud de incorporación de cambios y la lista de confirmaciones si la solicitud de incorporación de cambios contiene dos o más confirmaciones. También puedes optar por usar solo el título de la solicitud de incorporación de cambios, el título de la solicitud de incorporación de cambios y los detalles de confirmación, o el título y la descripción de la solicitud de incorporación de cambios.
![Captura de pantalla de la lista desplegable de mensajes de squash predeterminados](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

Si seleccionas más de un método de fusión mediante combinación, los colaboradores pueden elegir qué tipo de confirmación de fusión mediante combinación usarán al combinar una solicitud de incorporación de cambios. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Información adicional

- "[Acerca de las combinaciones de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
