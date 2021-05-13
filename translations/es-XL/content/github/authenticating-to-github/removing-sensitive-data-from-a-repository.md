---
title: Eliminar datos confidenciales de un repositorio
intro: 'Si confirmas datos confidenciales, como una contraseña o clave SSH en un repositorio de Git, puedes eliminarlos del historial. Para eliminar por completo los archivos no deseados del historial de un repositorio, puedes utilizar el comando `git filter-branch` o la herramienta de código abierto BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

El comando `git filter-branch` y el BFG Repo-Cleaner reescriben el historial de tu repositorio, lo cual cambia las SHA de las confirmaciones existentes que modificas y cualquier confirmación de las dependencias. Las SHA de confirmación modificadas pueden afectar las solicitudes de extracción abiertas de tu repositorio. Recomendamos fusionar o cerrar todas las solicitudes de extracción abiertas antes de eliminar archivos de tu repositorio.

Puedes eliminar el archivo desde la última confirmación con `git rm`. Para obtener información acerca de eliminar un archivo que se agregó con la última confirmación, consulta "[Eliminar archivos del historial de un repositorio](/articles/removing-files-from-a-repository-s-history)".

{% warning %}

**Advertencia: Una vez que hayas subido una confirmación en {% data variables.product.product_name %}, debes tener en cuenta cualquier dato que contenga que pueda ser riesgoso.** Si confirmaste una contraseña, ¡cámbiala! Si confirmaste una clave, genera una nueva.

Este artículo te explica cómo hacer confirmaciones con datos confidenciales inaccesibles desde cualquier rama o etiqueta en tu {% data variables.product.product_name %} repositorio. Sin embargo, es importante tener en cuenta que esas confirmaciones pueden seguir siendo accesibles desde cualquier clon o bifurcación de tu repositorio, directamente por medio de sus hashes de SHA-1 en las visualizaciones cacheadas en {% data variables.product.product_name %} y a través de cualquier solicitud de extracción que las referencie. No puedes hacer nada con los clones o bifurcaciones existentes de tu repositorio, pero puedes eliminar de manera permanente las visualizaciones cacheadas y las referencias a los datos confidenciales en las solicitudes de extracción en {% data variables.product.product_name %} contactándote con {% data variables.contact.contact_support %}.

{% endwarning %}

### Purgar un archivo del historial de tu repositorio

#### Usar el BFG

El [BFG Repo-Cleaner](http://rtyley.github.io/bfg-repo-cleaner/) es una herramienta construida y mantenida por la comunidad de código abierto. Proporciona una alternativa más rápida y simple que `git filter-branch` para eliminar datos no deseados. Por ejemplo, para eliminar tu archivo con datos confidenciales y dejar intacta tu última confirmación, ejecuta lo siguiente:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para reemplazar todo el texto detallado en `passwords.txt` donde sea que se encuentre en el historial de tu repositorio, ejecuta lo siguiente:

```shell
$ bfg --replace-text passwords.txt
```

Consulta los documentos de [BFG Repo-Cleaner](http://rtyley.github.io/bfg-repo-cleaner/) para obtener todas las indicaciones para el uso y la descarga.

#### Utilizar filter-branch

{% warning %}

**Advertencia:** Si ejecutas `git filter-branch` después de acumular cambios, no podrás recuperar tus cambios con otros comandos de acumulación. Antes de ejecutar `git filter-branch`, recomendamos anular la acumulación de cualquier cambio que hayas hecho. Para dejar de acumular el último conjunto de cambios que hayas acumulado, ejecuta `git stash show -p | git apply -R`. Para obtener más información, consulta [Herramientas de Git Acumulación](https://git-scm.com/book/en/v1/Git-Tools-Stashing).

{% endwarning %}

Para ilustrar cómo funciona `git filter-branch`, te mostraremos cómo eliminar tu archivo con datos confidenciales del historial de tu repositorio y agregarlo a `.gitignore` para asegurar que no se reconfirmó de manera accidental.

1. Si aún no tienes una copia local de tu repositorio con datos confidenciales en el historial, [clona el repositorio](/articles/cloning-a-repository/) en tu computadora local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
2. Navega hacia el directorio de trabajo del repositorio.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
3. Ejecuta el siguiente comando, reemplazando `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` por la **ruta al archivo que quieres eliminar, no solo con su nombre de archivo**. Estos argumentos harán lo siguiente:
    - Forzar a Git a que procese, pero no revise, todo el historial de cada rama y etiqueta
    - Eliminar el archivo especificado y cualquier confirmación vacía generada como resultado
    - **Sobrescribir tus etiquetas existentes**
        ```shell
        $ git filter-branch --force --index-filter \
        "git rm --cached --ignore-unmatch <em>PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA</em>" \
        --prune-empty --tag-name-filter cat -- --all
        > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (266/266)
        > Ref 'refs/heads/master' was rewritten
        ```

  {% note %}

  **Nota:** Si se utilizó el archivo con datos confidenciales para que existiera en cualquier otra ruta (porque se movió o se renombró), debes ejecutar este comando en esas rutas también.

  {% endnote %}

4. Agrega tu archivo con datos confidenciales a `.gitignore` para asegurar que no lo volviste a confirmar por accidente.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [master 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
5. Comprueba que hayas eliminado todo lo que querías del historial de tu repositorio y que todas tus ramas estén revisadas.
6. Una vez que estés conforme con el estado de tu repositorio, realiza un empuje forzado de tus cambios locales para sobrescribir tu {% data variables.product.product_name %} repositorio y todas las ramas que hayas subido:
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f master -> master (forced update)
  ```
7. Para eliminar el archivo confidencial de [tus lanzamientos etiquetados](/articles/about-releases), también deberás realizar un empuje forzado contra tus etiquetas de Git:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f master -> master (forced update)
  ```
8. Contáctate con {% data variables.contact.contact_support %} y pregúntale cómo eliminar visualizaciones cacheadas y referencias a los datos confidenciales en las solicitudes de extracción en {% data variables.product.product_name %}.
9. Pídeles a tus colaboradores que [rebasen](https://git-scm.com/book/en/Git-Branching-Rebasing), *no* fusionen, cualquier rama que hayan creado fuera del historial de tu repositorio antiguo (contaminado). Una confirmación de fusión podría volver a introducir algo o todo el historial contaminado sobre el que acabas de tomarte el trabajo de purgar.
10. Después de que haya transcurrido un tiempo y estés seguro de que `git filter-branch` no tuvo efectos secundarios inesperados, puedes forzar a todos los objetos de tu repositorio local a desreferenciarse y recolectar la basura con los siguientes comandos (usando Git 1.8.5 o posterior):
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

### Leer más

- [Página principal `git filter-branch`](https://git-scm.com/docs/git-filter-branch)
- [Pro Git: Herramientas de Git - Rescribir historial](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
