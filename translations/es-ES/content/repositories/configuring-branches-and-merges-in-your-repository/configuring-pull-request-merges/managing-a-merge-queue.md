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

La cola de fusión crea ramas temporales con un prefijo especial para validad cambios de las solicitudes de cambios. The changes in the pull request are then grouped into a `merge_group` with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} fusionará todos estos cambios en la `base_branch` una vez que pasen las verificaciones que requieren las protecciones de rama de la `base_branch`.


Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de la fusión de solicitudes de extracción](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% note %}

**Nota:**

* Una cola de fusión no puede habilitarse con reglas de protección de rama que utilicen caracteres de comodín (`*`) en el patrón de nombre de rama.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Triggering merge group checks with {% data variables.product.prodname_actions %}

You can use the `merge_group` event to trigger your {% data variables.product.prodname_actions %} workflow when a pull request is added to a merge queue. Note that this is a different event from the `pull_request` and `push` events.

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Triggering merge group checks with other CI providers

With other CI providers, you may need to update your CI configuration to run when a branch that begins with the special prefix `gh-readonly-queue/{base_branch}` is created.

## Administrar una cola de fusión

Los administradores de repositorio pueden requerir una fusión habilitando el ajuste de protección de rama "Requerir cola de fusión" en las reglas de protección para la rama base.

Para obtener más información de cómo habilitar el ajuste de protección de cola de fusión, consulta la sección "[Administrar una regla de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

## Leer más

* "[Fusionar una solicitud de cambios con una cola de fusión](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
