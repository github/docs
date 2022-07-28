---
title: Fusionar una solicitud de cambios con una cola de fusión
intro: 'Si el ajuste de protección de rama que tiene la rama requiere una cola de fusión, puedes agregar tus solicitudes de cambio a una cola de fusión y {% data variables.product.product_name %} las fusionará por ti una vez que pasen todas las verificaciones requeridas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Fusionar una solicitud de cambios con cola de fusión
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## Acerca de las colas de fusión

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-references %}

## Agregar una solicitud de cambios a una cola de fusión

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. En la lista de "Solicitudes de cambios", haz clic en la solicitud de cambios que te gustaría agregar a una cola de fusión.

1. Haz clic en **Fusionar cuando esté lista** para agregar la solicitud de cambios a la cola de fusión. Como alternativa, si eres un administrador, puedes:
   -  Fusionar la solicitud de cambios directamente seleccionando la opción **Fusionar sin esperar a que se cumplan los requisitos (solo administradores)**, si lo permiten los ajustes de protección de rama, y seguir el flujo estándar. ![Fusionar las opciones de la cola](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Tip:** Puedes hacer clic en **Fusionar cuando esté lista** cuando estés listo para fusionar tus cambios propuestos. {% data variables.product.product_name %} agregará la solicitud de cambios automáticamente a la cola de fusión una vez que se cumplan las condiciones de verificación de estado y las aprobaciones requeridas.

  {% endtip %}

1. Confirma que quieres agregar la solicitud de cambios a la cola de fusión haciendo clic en **Confirmar la fusión cuando esté lista**.

## Eliminar una solicitud de cambios de una cola de fusión

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. En la lista de "Solicitudes de cambios", haz clic en la solicitud de cambios que te gustaría eliminar de una cola de fusión.

1. Para eliminar la solicitud de cambios de la cola, haz clic en **Eliminar de la cola**. ![Eliminar la solicitud de cambios de la cola](/assets/images/help/pull_requests/remove-from-queue-button.png)

Como alternativa, puedes navegar para fusionar la página de la cola para la rama base, hacer clic en **...** junto a la solicitud de cambios que quieres eliminar y seleccionar **Eliminar de la cola**. Para obtener más información sobre cómo llegar a la página de la cola de fusión para la rama base, consulta la siguiente sección.

## Ver las colas de fusión

Puedes ver la cola de fusión para una rama base en varios lugares de {% data variables.product.product_name %}.

- En la página de **Ramas** del repositorio. Te recomendamos utilizar esta ruta si no tienes o no sabes si una solicitud de cambios ya está en una cola y si quieres ver lo que hay en dicha cola. Para obtener más información, consulta la sección "[Ver las ramas en tu repositorio](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Ver la cola de fusión en la página de las ramas](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- En la página de **Solicitudes de cambios** de tu repositorio, haz clic en {% octicon "clock" aria-label="The clock symbol" %} junto a cualquier solicitud de cambios en la cola de fusión.

  ![Ver la cola de fusión en la página de solicitudes de cambio](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- En la página de la solicitud de cambios cuando se requiere una cola de fusión para fusionar, desplázate hasta la parte inferior de la línea de tiempo y haz clic en el enlace **cola de fusión**.

  ![Enlace de cola de fusión en la solicitud de cambios](/assets/images/help/pull_requests/merge-queue-link.png)

- La vista de cola de fusión muestra las solicitudes de cambios que están actualmente en cola, con tus solicitudes de cambios marcadas claramente.

  ![Vista de cola de fusión](/assets/images/help/pull_requests/merge-queue-view.png)

## Manejar las solicitudes de cambios eliminadas de la cola de fusión

{% data reusables.pull_requests.merge-queue-reject %}
