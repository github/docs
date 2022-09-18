---
title: Configurar rebase de confirmación para las solicitudes de extracción
intro: 'Puedes hacer cumplir, permitir o inhabilitar rebases de confirmación para todas las fusiones de las solicitudes de extracción en {% data variables.product.product_location %} en tu repositorio.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: e2614349b5baab9be33d1fe6d80a99a78811d8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580531'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitud de incorporación de cambios"{% else %}"Botón Combinar"{% endif %}, selecciona **Permitir fusionar mediante cambio de base**. Esto permite que los colaboradores fusionen una solicitud de extracción al rebasar sus confirmaciones individuales en la rama base. 
{% ifversion default-merge-squash-commit-message %} ![ Captura de pantalla de la configuración de solicitud de incorporación de cambios con la casilla Permitir fusionar mediante cambio de base resaltada](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Captura de pantalla de la configuración de solicitud de incorporación de cambios con la casilla Permitir fusionar mediante cambio de base resaltada](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Confirmaciones de fusión mediante cambio de base de solicitud de incorporación de cambios](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

Si también seleccionas otro método de fusión, los colaboradores podrán elegir el tipo de confirmación de fusión al fusionar una solicitud de extracción. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
