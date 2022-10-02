---
title: Sincronizar una bifurcación
intro: Sincronizar una bifurcación de un repositorio para mantenerla actualizada con el repositorio ascendente.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 7c4c97c271e6e151c509a33e53c126190e8e5feb
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147540838'
---
## Sincronización de una bifurcación desde la IU web

{% ifversion syncing-fork-web-ui %}
1. En {% data variables.product.product_name %}, navega a la página principal del repositorio bifurcado que quieras sincronizar en el repositorio de nivel superior.
2. Seleccione la lista desplegable **Sincronizar bifurcación**.
    ![Lista desplegable "Sincronizar bifurcación" resaltada](/assets/images/help/repository/sync-fork-dropdown.png)
3. Revisa los detalles sobre las confirmaciones del repositorio ascendente y, a continuación, haz clic en **Actualizar rama**.
    ![Sincronización modal de bifurcación con el botón "Actualizar rama" resaltado](/assets/images/help/repository/update-branch-button.png) {% else %}
1. En {% data variables.product.product_name %}, navega a la página principal del repositorio bifurcado que quieras sincronizar en el repositorio de nivel superior.
2. Seleccione la lista desplegable **Fetch upstream**.
    ![Lista desplegable "Fetch upstream"](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Revise los detalles sobre las confirmaciones del repositorio ascendente y, a continuación, haga clic en **Fetch and merge**.
    ![Botón "Fetch and merge"](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

Si los cambios del repositorio de nivel superior ocasionan conflictos, {% data variables.product.company_short %} te pedirá crear una solicitud de cambios para resolver los conflictos.

## Sincronización de una bifurcación de rama con {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para más información sobre la {% data variables.product.prodname_cli %}, vea "[Acerca de la {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Para actualizar la bifurcación remota desde su elemento primario, usa el subcomando `gh repo sync -b BRANCHNAME` y proporciona el nombre de la bifurcación y la rama como argumentos.

```shell
$ gh repo sync owner/cli-fork -b BRANCHNAME
```

Si los cambios del repositorio ascendente provocan un conflicto, la {% data variables.product.prodname_cli %} no se podrá sincronizar. Puede establecer la marca `-force` para sobrescribir la rama de destino.

## Sincronización de una bifurcación de rama desde la línea de comandos

Para poder sincronizar la bifurcación con un repositorio ascendente, debes [configurar un repositorio remoto que apunte al repositorio ascendente](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork) en Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Extrae las ramas y sus respectivas confirmaciones desde el repositorio ascendente. Las confirmaciones en `BRANCHNAME` se almacenarán en la rama local `upstream/BRANCHNAME`.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```

4. Revise la rama predeterminada local de la bifurcación; en este caso, utilizamos `main`.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. Combine los cambios de la rama predeterminada ascendente (en este caso, `upstream/main`) en la rama predeterminada local. Esto hace que la rama predeterminada de tu bifurcación se sincronice con el repositorio ascendente sin perder tus cambios locales.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  Si la rama local no tiene ninguna confirmación única, Git realizará un avance rápido. Para obtener más información, consulta [Bifurcación y combinación básicas](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) en la documentación de Git.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  Si la rama local tenía confirmaciones únicas, es posible que tengas que resolver conflictos. Para más información, vea "[Solución de conflictos de combinación](/github/collaborating-with-pull-requests/addressing-merge-conflicts)".

{% tip %}

**Sugerencia**: Con la sincronización de la bifurcación solo se actualiza la copia local del repositorio. Para actualizar la bifurcación en {% data variables.product.product_location %}, debe [enviar los cambios](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
