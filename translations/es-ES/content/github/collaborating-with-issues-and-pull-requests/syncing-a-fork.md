---
title: Sincronizar una bifurcación
intro: Sincronizar una bifurcación de un repositorio para mantenerla actualizada con el repositorio ascendente.
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Antes de sincronizar una bifurcación con un repositorio ascendente, debes [configurar un remoto que apunte al repositorio ascendente ](/articles/configuring-a-remote-for-a-fork) en Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Extrae las ramas y sus respectivas confirmaciones desde el repositorio ascendente. Las confirmaciones a `BRANCHNAME` se almacenarán en la rama local `upstream/BRANCHNAME`.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```
4. Revisa la rama predeterminada local de tu bifurcación - en este caso, utilizamos `main`.
  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```
5. Fusiona los cambios de la rama predeterminada ascendente - en este caso, `upstream/main` - en tu rama predeterminada local. Esto hace que la rama predeterminada de tu bifurcación se sincronice con el repositorio ascendente sin perder tus cambios locales.
  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**Sugerencia:**: sincronizar tu bifurcación únicamente actualiza tu copia local del repositorio. Para actualizar tu bifurcación en {% data variables.product.product_location %}, debes [subir tus cambios](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}
