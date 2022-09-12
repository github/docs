---
title: Fusionar una solicitud de cambios automáticamente
intro: Puedes incrementar la velocidad de desarrollo si habilitas la fusión automática para una solicitud de cambios para que ésta se fusione automáticamente cuando todos los requisitos de fusión se cumplan.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147770917'
---
## Acerca de la fusión automática

Si habilitas la fusión automática para una solicitud de cambios, ésta se fusionará automáticamente cuando se cumplan todas las revisiones requeridas y cuando todas las verificaciones de estado hayan pasado. La fusión automática te evita el esperar a que los requisitos se cumplan para que puedas continuar con otras tareas.

Antes de que utilices la fusión automática con una solicitud de cambios, esta característica se debe habilitar en el repositorio. Para más información, consulta "[Administración de la fusión mediante combinación automática para las solicitudes de incorporación de cambios en el repositorio](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)".

Después de que habilitas la fusión automática para una solicitud de cambios, si alguien que no tiene permisos de escritura en el repositorio sube cambios nuevos a la rama principal o cambia la rama base de la solicitud de cambios, esta se inhabilitará. Por ejemplo, si un mantenedor habilita la fusión mediante combinación automática para una solicitud de incorporación de cambios desde una bifurcación, esta se inhabilitará después de que el contribuyente inserte cambios nuevos en la solicitud de incorporación de cambios.

Puedes proporcionar comentarios sobre la combinación automática mediante un [debate de {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/pull-requests).

## Habilitar la fusión automática

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Las personas con permisos de escritura en un repositorio pueden habilitar la fusión automática para una solicitud de cambios.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. En la lista de "Solicitudes de cambios", da clic en aquella que quieras fusionar automáticamente.
1. Opcionalmente, para elegir un método de combinación, seleccione el menú desplegable **Enable auto-merge** (Habilitar combinación automática) y luego haga clic en el método de combinación. Para más información, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".
  ![Menú desplegable "Enable auto-merge" (Habilitar la combinación automática)](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Haga clic en **Enable auto-merge** (Habilitar combinación automática).
  ![Botón para habilitar la combinación automática](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. Si eliges los métodos de fusión o de fusión y combinación, teclea un mensaje de confirmación y descripción, y elige la dirección de correo electrónico con la que quieres hacer la confirmación de fusión.
  ![Campos para introducir el mensaje de confirmación y descripción, y elegir el correo electrónico para hacer la confirmación](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **Nota**: El menú desplegable de correo electrónico no está disponible si tiene habilitada la privacidad de correo electrónico o si solo tiene una dirección de correo electrónico verificada y visible asociada con su cuenta de {% data variables.product.company_short %}.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. Si eliges los métodos de fusión o de combinación y fusión, escribe un mensaje y descripción de la confirmación.
   ![Campos para introducir el mensaje y descripción de la confirmación](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. Haga clic en **Confirm auto-merge** (Confirmar combinación automática).

## Inhabilitar la fusión automática

Las personas con permisos de escritura en un repositorio y los autores de la solicitud de cambios pueden inhabilitar la fusión automática en estas solicitudes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. En la lista de "Solicitudes de cambios", da clic en aquella en la que quieras inhabilitar la fusión automática.
1. En el cuadro de combinación, haga clic en **Disable auto-merge** (Deshabilitar combinación automática).
  ![Botón para deshabilitar la combinación automática](/assets/images/help/pull_requests/disable-auto-merge-button.png)
