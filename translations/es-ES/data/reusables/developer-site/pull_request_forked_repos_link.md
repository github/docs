---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138069"
---
#### Flujos de trabajo en repositorios bifurcados

Los flujos de trabajo no se ejecutan predeterminadamente en los repositorios bifurcados. Debe habilitar Acciones de GitHub en la pestaña **Acciones** del repositorio bifurcado.

{% data reusables.actions.forked-secrets %} `GITHUB_TOKEN` tiene permisos de solo lectura en los repositorios bifurcados. Para más información, vea "[Autenticación con GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

#### Eventos de solicitud de extracción para repositorios bifurcados

Para las solicitudes de incorporación de cambios de un repositorio bifurcado al repositorio base, {% data variables.product.product_name %} envía los eventos `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`y `pull_request_target` al repositorio base. No existirán eventos de solicitudes de cambio en el repositorio bifurcado.

{% ifversion fpt or ghec %} Cuando un colaborador primerizo envía una solicitud de incorporación de cambios a un repositorio público, es posible que un mantenedor con acceso de escritura tenga que aprobar los flujos de trabajo en ejecución en la solicitud de incorporación de cambios. Para más información, vea "[Aprobación de ejecuciones de flujo de trabajo desde bifurcaciones públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{% endif %}

{% note %}

**Nota:** Los flujos de trabajo no se ejecutan en repositorios base privados cuando se abre una solicitud de incorporación de cambios desde un repositorio bifurcado.

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo que se desencadenan mediante solicitudes de incorporación de cambios de {% data variables.product.prodname_dependabot %} se tratan como si procedieran de un repositorio bifurcado y también están sujetos a estas restricciones.

{% endnote %}
