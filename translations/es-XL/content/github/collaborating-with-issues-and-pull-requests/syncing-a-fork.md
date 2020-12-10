---
title: Sincronizar una bifurcación
intro: Sincronizar una bifurcación de un repositorio para mantenerla actualizada con el repositorio ascendente.
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Antes de sincronizar una bifurcación con un repositorio ascendente, debes [configurar un remoto que apunte al repositorio ascendente ](/articles/configuring-a-remote-for-a-fork) en Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Extrae las ramas y sus respectivas confirmaciones desde el repositorio ascendente. Las confirmaciones de `master` (principal) se almacenarán en una rama local, `upstream/master`.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remoto: Comprimiendo objetos: 100 % (53/53), realizado.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      master     -> upstream/master
  ```
4. Revisa tus ramas `master` (principales) locales de la bifurcación.
  ```shell
  $ git checkout master
  > Switched to branch 'master'
  ```
5. Fusiona los cambios desde `upstream/master` en tu rama `master` (principal) local. Esto trae la rama `master` (principal) de tu bifurcación en sincronización con el repositorio ascendente, sin perder tus cambios locales.
  ```shell
  $ git merge upstream/master
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/master
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**Sugerencia:**: sincronizar tu bifurcación únicamente actualiza tu copia local del repositorio. Para actualizar tu bifurcación en {% data variables.product.product_location %}, debes [subir tus cambios](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}
