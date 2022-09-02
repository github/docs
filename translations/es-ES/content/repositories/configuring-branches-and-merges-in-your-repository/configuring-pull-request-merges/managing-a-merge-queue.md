---
title: Administrar una cola de fusión
intro: Puedes aumentar la velocidad de desarrollo con una cola de fusión para las solicitudes de cambio de tu repositorio.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Administrar la cola de fusión
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## Acerca de las colas de fusión

{% data reusables.pull_requests.merge-queue-overview %}

La cola de fusión crea ramas temporales con un prefijo especial para validad cambios de las solicitudes de cambios. Los cambios en la solicitud de cambios se agrupan entonces en `merge_group` con la última versión de `base_branch` así como los cambios frente a esta en la cola. {% data variables.product.product_name %} fusionará todos estos cambios en la `base_branch` una vez que pasen las verificaciones que requieren las protecciones de rama de la `base_branch`.


Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de la fusión de solicitudes de extracción](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% note %}

**Nota:**

* Una cola de fusión no puede habilitarse con reglas de protección de rama que utilicen caracteres de comodín (`*`) en el patrón de nombre de rama.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Activar las verificaciones de grupo de fusión con {% data variables.product.prodname_actions %}

Puedes utilizar el evento `merge_group` para activar tu flujo de trabajo de {% data variables.product.prodname_actions %} cuando se agrega una solicitud de cambios a una cola de fusión. Toma en cuenta que este es un evento diferente de los de `pull_request` y `push`.

Un flujo de trabajo que reporta una verificación requerida por las protecciones de la rama destino se vería así:

```yaml
on:
  pull_request:
  merge_group:
```

Para obtener más información, consulta la sección "[Eventos que activan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Activar las verificaciones del grupo de fusión con otros proveedores de IC

Con otros proveedores de IC, podrías necesitar actualizar tu configuración de IC para que se ejecute cuando se cree una rama que comienza con el prefijo especial `gh-readonly-queue/{base_branch}`.

## Administrar una cola de fusión

Los administradores de repositorio pueden requerir una fusión habilitando el ajuste de protección de rama "Requerir cola de fusión" en las reglas de protección para la rama base.

Para obtener más información de cómo habilitar el ajuste de protección de cola de fusión, consulta la sección "[Administrar una regla de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

## Leer más

* "[Fusionar una solicitud de cambios con una cola de fusión](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
