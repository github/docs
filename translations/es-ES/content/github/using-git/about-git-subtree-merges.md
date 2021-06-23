---
title: Acerca de las fusiones de subárbol de Git
redirect_from:
  - /articles/working-with-subtree-merge/
  - /subtree-merge/
  - /articles/about-git-subtree-merges
intro: 'Si necesitas gestionar múltiples proyectos dentro de un solo repositorio, puedes usar una "fusión de subárbol" para manejar todas las referencias.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Habitualmente, una fusión de subárbol se usa para contener un repositorio dentro de otro repositorio. El "subrepositorio" se almacena en una carpeta del repositorio principal.

La mejor manera de explicar las fusiones de subárbol es mostrar por ejemplo. Haremos lo siguiente:

- Crear un repositorio vacío llamado `test` que represente nuestro proyecto.
- Fusionar otro repositorio en él como un subárbol llamado `Spoon-Knife`.
- El proyecto `test` usará ese subproyecto como si fuera parte del mismo repositorio.
- Recuperar actualizaciones desde `Spoon-Knife` hacia el proyecto `test`.

### Configurar el repositorio vacío para una fusión de subárbol

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crear un directorio nuevo y navegar a él.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. Inicializar un repositorio de Git nuevo.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. Crear y confirmar un archivo nuevo.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

### Agregar un nuevo repositorio como subárbol

1. Agregar una URL remota nueva que apunte a un proyecto por separado en el que estemos interesados.
  ```shell
  $ git remote add -f spoon-knife git@github.com:octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From git://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Fusionar el proyecto `Spoon-Knife` en el proyecto de Git local. Esto no modifica ninguno de tus archivos localmente, pero prepara Git para el siguiente paso.

  Si estás usando Git 2.9 o superior:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Si estás usando Git 2.8 o inferior:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. Crear un nuevo directorio denominado **spoon-knife**, y copiar el historial de Git del proyecto `Spoon-Knife` en él.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Confirmar los cambios para mantenerlos seguros.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Aunque solo hemos agregado un subproyecto, se puede incorporar cualquier número de subproyectos en un repositorio de Git.

{% tip %}

**Sugerencia**: Si creas un clon nuevo del repositorio en el futuro, no se crearán los remotos que agregaste. Deberás volver a agregarlos mediante [el comando `git remote add`](/articles/adding-a-remote).

{% endtip %}

### Sincronizando con actualizaciones y cambios

Cuando se agrega un subproyecto, no se mantiene sincronizado automáticamente con los cambios ascendentes. Necesitarás actualizar el subproyecto con el siguiente comando:

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

Para el ejemplo de más arriba, esto sería:

```shell
$ git pull -s subtree spoon-knife main
```

### Leer más

- [El capítulo de "Fusión Avanzada" del libro de _Pro Git_](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- "[Cómo usar la estrategia de fusión de subárbol](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)"
