---
title: Combinación de una solicitud de incorporación de cambios con una cola de fusión mediante combinación
intro: 'Si la configuración de protección de rama requiere una cola de fusión mediante combinación para la rama, puedes agregar las solicitudes de incorporación de cambios a una cola de fusión mediante combinación y {% data variables.product.product_name %} combinará las solicitudes de incorporación de cambios una vez que se hayan pasado todas las comprobaciones necesarias.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614275'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Acerca de las colas de fusión mediante combinación

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## Adición de una solicitud de incorporación de cambios a una cola de fusión mediante combinación

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. En la lista de "Solicitudes de incorporación de cambios", haz clic en aquella que te gustaría agregar a una cola de fusión mediante combinación.

1. Haz clic en **Combinar cuando esté listo** para agregar la solicitud de incorporación de cambios a la cola de fusión mediante combinación. Como alternativa, si eres administrador, puedes hacer lo siguiente:
   -  Combinar directamente la solicitud de incorporación de cambios marcando **Combinar sin esperar a que se cumplan los requisitos ({% ifversion bypass-branch-protections %}bypass branch protections{% else %}solo administradores{% endif %})** , si la configuración de protección de rama lo permite, y seguir el flujo estándar.
   ![Fusionar las opciones de la cola](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Sugerencia:** Puedes hacer clic en **Combinar cuando esté listo** cada vez que estés listo para combinar los cambios propuestos. {% data variables.product.product_name %} agregará automáticamente la solicitud de incorporación de cambios a la cola de fusión mediante combinación una vez que se cumplan las condiciones de las comprobaciones de aprobación y estado requeridas.

  {% endtip %}

1. Confirma que quieres agregar la solicitud de incorporación de cambios a la cola de fusión mediante combinación haciendo clic en **Confirmar combinación cuando esté listo**.

## Eliminación de una solicitud de incorporación de cambios de una cola de fusión mediante combinación

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. En la lista de "Solicitudes de incorporación de cambios", haz clic en aquella que te gustaría quitar de una cola de fusión mediante combinación.

1. Para quitar la solicitud de incorporación de cambios de la cola, haz clic en **Quitar de la cola**.
  ![Quitar la solicitud de incorporación de cambios de la cola](/assets/images/help/pull_requests/remove-from-queue-button.png)

Como alternativa, puedes ir a la página Cola de fusión mediante combinación de la rama base, hacer clic en **...** junto a la solicitud de incorporación de cambios que quieres quitar y seleccionar **Quitar de la cola**. Para obtener información sobre cómo obtener la página Cola de fusión mediante combinación de la rama base, consulta la sección siguiente.

## Visualización de colas de fusión mediante combinación

Puedes ver la cola de fusión mediante combinación de una rama base en varios lugares de {% data variables.product.product_name %}.

- En la página **Ramas** del repositorio. Te recomendamos que utilices esta ruta si no tienes o no sabes si una solicitud de incorporación de cambios ya está en una cola y si quieres ver lo que hay en dicha cola. Para obtener más información, consulta "[Ver las ramas en tu repositorio](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Ver la cola de fusión en la página de las ramas](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- En la página **Solicitudes de incorporación de cambios** del repositorio, haz clic en {% octicon "clock" aria-label="The clock symbol" %} junto a cualquier solicitud de incorporación de cambios de la cola de fusión mediante combinación.

  ![Ver la cola de fusión en la página de solicitudes de cambio](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- En la página de la solicitud de incorporación de cambios, cuando se requiera la cola de fusión mediante combinación para la combinación, desplázate hasta la parte inferior de la escala de tiempo y haz clic en el vínculo de **cola de fusión mediante combinación**.

  ![Vínculo de cola de fusión mediante combinación de la solicitud de incorporación de cambios](/assets/images/help/pull_requests/merge-queue-link.png)

- La vista de cola de fusión muestra las solicitudes de cambios que están actualmente en cola, con tus solicitudes de cambios marcadas claramente.

  ![Vista de cola de fusión](/assets/images/help/pull_requests/merge-queue-view.png)

## Manejar las solicitudes de cambios eliminadas de la cola de fusión

{% data reusables.pull_requests.merge-queue-reject %}
