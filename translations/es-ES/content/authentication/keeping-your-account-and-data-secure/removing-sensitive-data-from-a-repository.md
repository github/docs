---
title: Eliminar datos confidenciales de un repositorio
intro: 'Si confirmas datos confidenciales, como una contraseña o clave SSH en un repositorio de Git, puedes eliminarlos del historial. Para eliminar archivos no deseados por completo del historial de un repositorio, puedes utilizar ya sea la herramienta `git filter-repo` o la herramienta de código abierto BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Eliminar los datos sensibles
---

La herramienta `git filter-repo` y el BFG Repo-Cleaner reescriben el historial de tu repositorio, el cual cambia los SHA para las confirmaciones existentes que alteras y cualquier confirmación dependiente. Las SHA de confirmación modificadas pueden afectar las solicitudes de extracción abiertas de tu repositorio. Recomendamos fusionar o cerrar todas las solicitudes de extracción abiertas antes de eliminar archivos de tu repositorio.

Puedes eliminar el archivo desde la última confirmación con `git rm`. Para obtener más información sobre cómo eliminar un archivo que se agregó con la última confirmación, consulta la sección "[Acerca de los archivos grandes en {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)".

{% warning %}

Este artículo te dice cómo hacer que las confirmaciones con datos sensibles sean inalcanzables para las personas que intenten violar la seguridad o para las etiquetas de tu repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Sin embargo, es importante tener en cuenta que esas confirmaciones pueden seguir siendo accesibles desde cualquier clon o bifurcación de tu repositorio, directamente por medio de sus hashes de SHA-1 en las visualizaciones cacheadas en {% data variables.product.product_name %} y a través de cualquier solicitud de extracción que las referencie. No puedes eliminar los datos sensibles desde los clones o bifurcaciones de tu repositorio que tengan otros usuarios, pero puedes eliminar las vistas almacenadas en caché permanentemente, así como las referencias a los datos sensibles en las solicitudes de cambios en {% data variables.product.product_name %} si contactas al {% data variables.contact.contact_support %}.

**Advertencia: Una vez que hayas subido una confirmación a {% data variables.product.product_name %}, deberías considerar cualquier dato sensible en la confirmación como puesto en riesgo.** Si confirmaste una contraseña, ¡cámbiala! Si confirmaste una clave, genera una nueva. El eliminar los datos puestos en riesgo no resuelve su exposición inicial, especialmente en clones o bifurcaciones de tu repositorio existentes. Considera estas limitaciones en tu decisión para reescribir el historial de tu repositorio.

{% endwarning %}

## Purgar un archivo del historial de tu repositorio

Puedes purgar un archivo del historial de tu repositorio utilizando ya sea la herramienta `git filter-repo` o la herramienta de código abierto BFG Repo-Cleaner.

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

Después de que se eliminan los datos sensibles, debes subir forzadamente tus cambios a {% data variables.product.product_name %}. El forzar las subidas reescribirá el historial de los repositorios, lo cual eliminará los datos sensibles del historial de confirmaciones. Si haces subidas forzadas, esto podría sobreescribir las confirmaciones en las cuales otros hayan basado su trabajo.

```shell
$ git push --force
```

Consulta los documentos de [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) para obtener todas las indicaciones para el uso y la descarga.

### Utilizar git filter-repo

{% warning %}

**Advertencia:** si ejecutas `git filter-repo` después de haber acumulado cambios, no podrás retribuir tus cambios con otros comandos acumulados. Antes de ejecutar `git filter-repo`, te recomendamos anular la acumulación de cualquier cambio que hayas hecho. Para dejar de acumular el último conjunto de cambios que hayas acumulado, ejecuta `git stash show -p | git apply -R`. Para obtener más información, consulta la sección [Herramientas - Almacenar y Limpiar](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Para ilustrar cómo funciona `git filter-repo`, te mostraremos cómo eliminar tu archivo con datos confidenciales del historial de tu repositorio y agregarlo a `.gitignore` para asegurar que no se reconfirmó de manera accidental.

1. Instala el último lanzamiento de la herramienta [git filter-repo](https://github.com/newren/git-filter-repo). Puedes instalar `git-filter-repo` manualmente o utilizando un administrador de paquete. Por ejemplo, para instalar la herramienta con HomeBrew, utiliza el comando `brew install`.
  ```
  brew install git-filter-repo
  ```
  Para obtener más información, consulta el archivo [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) en el repositorio `newren/git-filter-repo`.

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
    - Elimina algunas configuraciones, tales como la URL remota almacenada en el archivo *.git/config*. Podrías necesitar respaldar este archivo con anticipación para restaurarlo posteriormente.
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
7. Una vez que estés satisfecho con el estado de tu repositorio, haz una subida forzada de tus cambios locales para sobreescribir tu repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, así como las ramas que hayas subido. Se requiere una subida forzada para eliminar los datos sensibles de tu historial de confirmaciones.
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

## Eliminar los datos de {% data variables.product.prodname_dotcom %} por completo

Después de utilizar ya sea la herramienta de BFG o `git filter-repo` para eliminar los datos sensibles y subir tus cambios a {% data variables.product.product_name %}, debes tomar algunos pasos adicionales para eliminar los datos de {% data variables.product.product_name %} completamente.

1. Contáctate con {% data variables.contact.contact_support %} y pregúntale cómo eliminar visualizaciones cacheadas y referencias a los datos confidenciales en las solicitudes de extracción en {% data variables.product.product_name %}. Por favor, proporciona el nombre del repositorio o un enlace a la confirmación que necesitas eliminar.

2. Pídeles a tus colaboradores que [rebasen](https://git-scm.com/book/en/Git-Branching-Rebasing), *no* fusionen, cualquier rama que hayan creado fuera del historial de tu repositorio antiguo (contaminado). Una confirmación de fusión podría volver a introducir algo o todo el historial contaminado sobre el que acabas de tomarte el trabajo de purgar.

3. Después de que haya transcurrido un tiempo y estés seguro de que la herramienta BFG / `git filter-repo` no tuvo efectos secundarios inesperados, puedes forzar a todos los objetos de tu repositorio local a desreferenciarse y recolectar la basura con los siguientes comandos (usando Git 1.8.5 o posterior):
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

- [página man de `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Herramientas de Git - Rescribir historial](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[Acerca del escaneo de secretos](/code-security/secret-security/about-secret-scanning)"
