---
title: Revisar solicitudes de extracción localmente
intro: 'Cuando alguien te manda una solicitud de extracción desde una bifurcación o rama de tu repositorio, puedes fusionarla localmente para resolver un conflicto de fusión o para probar y verificar los cambios antes de fusionarlos en {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139570'
---
{% note %}

  **Nota:** Solo los creadores de solicitudes de incorporación de cambios pueden otorgar permisos a los mantenedores del repositorio ascendente, o a aquellos con acceso de inserción en ese repositorio, a fin de realizar confirmaciones en la rama de comparación de sus solicitudes de incorporación de cambios en una bifurcación propiedad de un usuario. Para más información, vea "[Permiso para realizar cambios en una rama de solicitud de incorporación de cambios creada a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

  {% endnote %}

## Modificar una solicitud de extracción activa localmente

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de incorporación de cambios, haga clic en la que quiera modificar.{% ifversion fpt or ghec %}
3. Para elegir dónde le gustaría abrir la solicitud de incorporación de cambios, seleccione el menú desplegable **Abrir con {% octicon "triangle-down" aria-label="The down triangle icon" %}** y haga clic en una de las pestañas.
  ![Vínculo para acceder a las instrucciones de solicitud de incorporación de cambios de la línea de comandos](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. En el cuadro de combinación, haga clic en **instrucciones de la línea de comandos**. Sigue la secuencia de pasos para disminuir la solicitud de extracción propuesta.
  ![Vínculo para acceder a las instrucciones de solicitud de incorporación de cambios de la línea de comandos](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. De manera opcional, para ver los cambios propuestos en {% data variables.product.prodname_desktop %}, haga clic en **abrir esto en {% data variables.product.prodname_desktop %}** .
  ![Vínculo para abrir una solicitud de incorporación de cambios localmente en el escritorio](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para extraer una solicitud de incorporación de cambios localmente, use el subcomando `gh pr checkout`. Reemplace `pull-request` por el número, la dirección URL o la rama principal de la solicitud de incorporación de cambios.

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## Modificar una solicitud de extracción inactiva localmente

Si algún autor de una solicitud de extracción no responde a las solicitudes o ha eliminado su bifurcación, dicha solicitud se fusionará de todos modos. Sin embargo, si deseas realizar cambios a una solicitud de extracción y el autor no responde, necesitarás realizar algunos pasos adicionales para actualizar la solicitud de extracción.

Una vez que se abre una solicitud de extracción, {% data variables.product.product_name %} almacena todos los cambios remotamente. Es decir, Los repositorios cuentan con confirmaciones de cambios en una solicitud de extracción aún antes de que esta solicitud se fusione. Puedes extraer una solicitud y recrearla como tuya.

Cualquier persona puede trabajar con una solicitud de extracción abierta anteriormente para seguir trabajando en ella, probarla o incluso abrir nuevas solicitud de extracción con cambios adicionales. Sin embargo, solo los colaboradores con acceso de escritura pueden fusionar las solicitudes de extracción.

{% data reusables.repositories.sidebar-issue-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas fusionar.
3. Busca el número de la ID de la solicitud de extracción inactiva. Esta es la secuencia de dígitos inmediatamente después del título de la solicitud de extracción.
  ![Número de id. de solicitudes de incorporación de cambios](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. Extrae la referencia de la solicitud de extracción en función de su número de ID, creando una nueva rama en el proceso.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Cambia a la rama nueva que está basada en esta solicitud de extracción:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. En este punto, puedes hacer lo que desees con esta rama. Puedes ejecutar algunas pruebas locales o fusionar otras ramas en esta rama.
8. Cuando estés listo, puedes subir la rama nueva:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Cree una solicitud de incorporación de cambios](/articles/creating-a-pull-request) con la nueva rama.

## Error: Error al subir algunas referencias

El espacio de nombres `refs/pull/` remoto es de *solo lectura*. Si intentas subir alguna confirmación allí, verás este error:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Sugerencia:** Al quitar o cambiar el nombre de una referencia remota, el espacio de nombres `refs/pull/origin/` local no se verá afectado por las llamadas a `git-remote`.

{% endtip %}
