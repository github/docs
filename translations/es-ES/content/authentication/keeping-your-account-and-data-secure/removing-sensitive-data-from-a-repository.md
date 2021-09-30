---
title: Eliminar datos confidenciales de un repositorio
intro: 'Si confirmas datos confidenciales, como una contraseña o clave SSH en un repositorio de Git, puedes eliminarlos del historial. To entirely remove unwanted files from a repository''s history you can use either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Eliminar los datos sensibles
---

The `git filter-repo` tool and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. Las SHA de confirmación modificadas pueden afectar las solicitudes de extracción abiertas de tu repositorio. Recomendamos fusionar o cerrar todas las solicitudes de extracción abiertas antes de eliminar archivos de tu repositorio.

Puedes eliminar el archivo desde la última confirmación con `git rm`. For information on removing a file that was added with the latest commit, see "[About large files on {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)."

{% warning %}

Este artículo te explica cómo hacer confirmaciones con datos confidenciales inaccesibles desde cualquier rama o etiqueta en tu {% data variables.product.product_name %} repositorio. Sin embargo, es importante tener en cuenta que esas confirmaciones pueden seguir siendo accesibles desde cualquier clon o bifurcación de tu repositorio, directamente por medio de sus hashes de SHA-1 en las visualizaciones cacheadas en {% data variables.product.product_name %} y a través de cualquier solicitud de extracción que las referencie. You cannot remove sensitive data from other users' clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on {% data variables.product.product_name %} by contacting {% data variables.contact.contact_support %}.

**Warning: Once you have pushed a commit to {% data variables.product.product_name %}, you should consider any sensitive data in the commit compromised.** If you committed a password, change it! Si confirmaste una clave, genera una nueva. Removing the compromised data doesn't resolve its initial exposure, especially in existing clones or forks of your repository. Consider these limitations in your decision to rewrite your repository's history.

{% endwarning %}

## Purgar un archivo del historial de tu repositorio

You can purge a file from your repository's history using either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

### Usar el BFG

El [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) es una herramienta construida y mantenida por la comunidad de código abierto. Proporciona una alternativa más rápida y simple que `git filter-branch` para eliminar datos no deseados.

Por ejemplo, para eliminar tu archivo con datos confidenciales y dejar intacta tu última confirmación, ejecuta lo siguiente:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para reemplazar todo el texto detallado en `passwords.txt` donde sea que se encuentre en el historial de tu repositorio, ejecuta lo siguiente:

```shell
$ bfg --replace-text passwords.txt
```

Después de que se eliminan los datos sensibles, debes subir forzadamente tus cambios a {% data variables.product.product_name %}.

```shell
$ git push --force
```

Consulta los documentos de [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) para obtener todas las indicaciones para el uso y la descarga.

### Using git filter-repo

{% warning %}

**Warning:** If you run `git filter-repo` after stashing changes, you won't be able to retrieve your changes with other stash commands. Before running `git filter-repo`, we recommend unstashing any changes you've made. Para dejar de acumular el último conjunto de cambios que hayas acumulado, ejecuta `git stash show -p | git apply -R`. For more information, see [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

To illustrate how `git filter-repo` works, we'll show you how to remove your file with sensitive data from the history of your repository and add it to `.gitignore` to ensure that it is not accidentally re-committed.

1. Install the latest release of the [git filter-repo](https://github.com/newren/git-filter-repo) tool. You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.
  ```
  brew install git-filter-repo
  ```
  For more information, see [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

2. Si aún no tienes una copia local de tu repositorio con datos confidenciales en el historial, [clona el repositorio](/articles/cloning-a-repository/) en tu computadora local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Navega hacia el directorio de trabajo del repositorio.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Ejecuta el siguiente comando, reemplazando `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` por la **ruta al archivo que quieres eliminar, no solo con su nombre de archivo**. Estos argumentos harán lo siguiente:
    - Forzar a Git a que procese, pero no revise, todo el historial de cada rama y etiqueta
    - Eliminar el archivo especificado y cualquier confirmación vacía generada como resultado
    - Remove some configurations, such as the remote URL, stored in the *.git/config* file. You may want to back up this file in advance for restoration later.
    - **Sobrescribir tus etiquetas existentes**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Nota:** Si se utilizó el archivo con datos confidenciales para que existiera en cualquier otra ruta (porque se movió o se renombró), debes ejecutar este comando en esas rutas también.

  {% endnote %}

5. Agrega tu archivo con datos confidenciales a `.gitignore` para asegurar que no lo volviste a confirmar por accidente.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Comprueba que hayas eliminado todo lo que querías del historial de tu repositorio y que todas tus ramas estén revisadas.
7. Una vez que estés conforme con el estado de tu repositorio, realiza un empuje forzado de tus cambios locales para sobrescribir tu {% data variables.product.product_name %} repositorio y todas las ramas que hayas subido:
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. Para eliminar el archivo confidencial de [tus lanzamientos etiquetados](/articles/about-releases), también deberás realizar un empuje forzado contra tus etiquetas de Git:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## Fully removing the data from {% data variables.product.prodname_dotcom %}

After using either the BFG tool or `git filter-repo` to remove the sensitive data and pushing your changes to {% data variables.product.product_name %}, you must take a few more steps to fully remove the data from {% data variables.product.product_name %}.

1. Contáctate con {% data variables.contact.contact_support %} y pregúntale cómo eliminar visualizaciones cacheadas y referencias a los datos confidenciales en las solicitudes de extracción en {% data variables.product.product_name %}. Please provide the name of the repository and/or a link to the commit you need removed.

2. Pídeles a tus colaboradores que [rebasen](https://git-scm.com/book/en/Git-Branching-Rebasing), *no* fusionen, cualquier rama que hayan creado fuera del historial de tu repositorio antiguo (contaminado). Una confirmación de fusión podría volver a introducir algo o todo el historial contaminado sobre el que acabas de tomarte el trabajo de purgar.

3. After some time has passed and you're confident that the BFG tool / `git filter-repo` had no unintended side effects, you can force all objects in your local repository to be dereferenced and garbage collected with the following commands (using Git 1.8.5 or newer):
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **Nota:** También puedes lograrlo subiendo tu historial filtrado a un repositorio nuevo o vacío para después hacer un nuevo clon desde {% data variables.product.product_name %}.

  {% endnote %}

## Evitar confirmaciones accidentales en el futuro

Existen algunos trucos sencillos para evitar confirmar cosas que no quieres confirmar:

- Utiliza un programa visual como [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) o [gitk](https://git-scm.com/docs/gitk) para confirmar los cambios. Los programas visuales suelen hacer que sea más sencillo ver exactamente qué archivos se agregarán, eliminarán y modificarán con cada confirmación.
- Evita los comandos para atrapar todo `git add .` y `git commit -a` de la línea de comando —en su lugar, utiliza `git add filename` y `git rm filename` para ordenar por etapas los archivos.
- Utiliza `git add --interactive` para revisar por separado y preparar los cambios de cada archivo.
- Utiliza `git diff --cached` para revisar los cambios que hayas preparado para la confirmación. Esta es la diferencia exacta que `git commit` generará siempre que no utilices la marca `-a`.

## Leer más

- [`git filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git Tools - Rewriting History](https://git-scm.com/book/en/Git-Tools-Rewriting-History){% ifversion fpt or ghae or ghes > 2.22 %}
- "[About Secret scanning](/code-security/secret-security/about-secret-scanning)"{% endif %}
