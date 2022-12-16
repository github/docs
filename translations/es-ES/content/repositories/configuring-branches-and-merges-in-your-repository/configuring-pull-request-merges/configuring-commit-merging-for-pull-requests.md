---
title: Configuración de la combinación de confirmaciones para solicitudes de incorporación de cambios
intro: 'Puedes hacer cumplir, permitir o deshabilitar combinaciones con una confirmación de combinación para todas las combinaciones de solicitudes de incorporación de cambios en {% data variables.product.product_location %} en tu repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580765'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitudes de incorporación de cambios"{% else %}"Botón Combinar"{% endif %}, selecciona **Permitir confirmaciones de combinación**. Esto permite a los colaboradores combinar una solicitud de incorporación de cambios con un historial completo de confirmaciones. {% ifversion default-merge-squash-commit-message %} ![Captura de pantalla de la configuración de solicitud de incorporación de cambios con la casilla permitir confirmaciones de combinación resaltada](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Captura de pantalla de la configuración de solicitud de incorporación de cambios con la casilla permitir confirmaciones de combinación resaltada](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, en **Permitir confirmaciones de combinación**, usa la lista desplegable para elegir el formato del mensaje de confirmación que se presenta a los colaboradores al combinar. El mensaje predeterminado incluye el número de solicitud de incorporación de cambios y el título. Por ejemplo, `Merge pull request #123 from patch-1`. También puedes optar por usar solo el título de la solicitud de incorporación de cambios o el título y la descripción de la solicitud de incorporación de cambios. 
![Captura de pantalla de la lista desplegable de mensajes de confirmación predeterminada](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

Si seleccionas más de un método de fusión mediante combinación, los colaboradores pueden elegir qué tipo de confirmación de fusión mediante combinación usarán al combinar una solicitud de incorporación de cambios. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Información adicional

- "[Acerca de las combinaciones de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
