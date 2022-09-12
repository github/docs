---
title: Eliminación de datos confidenciales de un repositorio
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
shortTitle: Remove sensitive data
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091817'
---
La herramienta `git filter-repo` y BFG Repo-Cleaner reescriben el historial del repositorio, lo que cambia los SHA para las confirmaciones existentes que se modifican y las confirmaciones dependientes. Los SHA de confirmación modificados pueden afectar a las solicitudes de incorporación de cambios abiertas en el repositorio. Se recomienda combinar o cerrar todas las solicitudes de incorporación de cambios abiertas antes de quitar archivos del repositorio.

Puede quitar el archivo de la confirmación más reciente con `git rm`. Para obtener información sobre cómo quitar un archivo que se ha agregado con la confirmación más reciente, vea "[Acerca de los archivos grandes en {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)".

{% warning %}

**Advertencia**: en este artículo se indica cómo realizar confirmaciones con datos confidenciales inaccesibles desde cualquier rama o etiqueta del repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Sin embargo, esas confirmaciones pueden seguir siendo accesibles en los clones o bifurcaciones del repositorio, directamente a través de sus hash SHA-1 en vistas almacenadas en caché en las vistas almacenadas en caché en {% data variables.product.product_name %}, y a través de las solicitudes de incorporación de cambios que hagan referencia a ellas. No puedes eliminar los datos sensibles desde los clones o bifurcaciones de tu repositorio que tengan otros usuarios, pero puedes eliminar las vistas almacenadas en caché permanentemente, así como las referencias a los datos sensibles en las solicitudes de cambios en {% data variables.product.product_name %} si contactas al {% data variables.contact.contact_support %}. 

**Una vez que hayas insertado una confirmación en {% data variables.product.product_name %}, debes considerar cualquier dato confidencial en la confirmación comprometida.** Si ha confirmado una contraseña, cámbiela. Si confirmaste una clave, genera una nueva. El eliminar los datos puestos en riesgo no resuelve su exposición inicial, especialmente en clones o bifurcaciones de tu repositorio existentes. Considera estas limitaciones en tu decisión para reescribir el historial de tu repositorio.

{% endwarning %}

## Purgar un archivo del historial de tu repositorio

Puede purgar un archivo del historial del repositorio mediante la herramienta `git filter-repo` o la herramienta de código abierto BFG Repo-Cleaner.

### Usar el BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) es una herramienta creada y mantenida por la comunidad de código abierto. Proporciona una alternativa más rápida y sencilla a `git filter-branch` para la eliminación de datos no deseados. 

Por ejemplo, para eliminar tu archivo con datos confidenciales y dejar intacta tu última confirmación, ejecuta lo siguiente:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Para reemplazar todo el texto que aparece en `passwords.txt` dondequiera que se pueda encontrar en el historial del repositorio, ejecute lo siguiente:

```shell
$ bfg --replace-text passwords.txt
```

Después de que se eliminan los datos sensibles, debes subir forzadamente tus cambios a {% data variables.product.product_name %}. El forzar las subidas reescribirá el historial de los repositorios, lo cual eliminará los datos sensibles del historial de confirmaciones. Si haces subidas forzadas, esto podría sobreescribir las confirmaciones en las cuales otros hayan basado su trabajo.

```shell
$ git push --force
```

Vea la documentación de [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) para obtener instrucciones completas de uso y descarga.

### Utilizar git filter-repo

{% warning %}

**Advertencia:** Si ejecuta `git filter-repo` después del guardado provisional de los cambios, no podrá recuperarlos con otros comandos de guardado provisional. Antes de ejecutar `git filter-repo`, se recomienda no modificar los cambios realizados. Para deshacer el último conjunto de cambios que ha guardado de forma provisional, ejecute `git stash show -p | git apply -R`. Para más información, vea [Herramientas de Git: Almacenamiento provisional y limpieza](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Para ilustrar cómo funciona `git filter-repo`, le mostraremos cómo quitar el archivo con datos confidenciales del historial del repositorio y cómo agregarlo a `.gitignore` para asegurarse de que no se vuelva a confirmar accidentalmente.

1. Instale la versión más reciente de la herramienta [git filter-repo](https://github.com/newren/git-filter-repo). Puede instalar `git-filter-repo` manualmente o mediante un administrador de paquetes. Por ejemplo, para instalar la herramienta con HomeBrew, use el comando `brew install`.
  ```
  brew install git-filter-repo
  ```
  Para más información, vea [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) en el repositorio `newren/git-filter-repo`.

2. Si aún no tiene una copia local del repositorio con datos confidenciales en su historial, [clone el repositorio](/articles/cloning-a-repository/) en el equipo local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Vaya al directorio de trabajo del repositorio.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Ejecute el comando siguiente y reemplace `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` por la **ruta al archivo que quiere quitar, no solo su nombre de archivo**. Estos argumentos harán lo siguiente:
    - Forzar a Git a procesar, sin extraer del repositorio, todo el historial de cada rama y etiqueta.
    - Quitar el archivo especificado, así como las confirmaciones vacías generadas como resultado.
    - Quite algunas configuraciones, como la dirección URL remota, almacenadas en el archivo *.git/config*. Es posible que quiera hacer una copia de seguridad de este archivo de antemano para una posterior restauración.
    - **Sobrescribir las etiquetas existentes.**
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

  **Nota:** Si el archivo con datos confidenciales ha existido en cualquier otra ruta (porque se ha movido o cambiado de nombre), también debe ejecutar este comando en esas rutas.

  {% endnote %}

5. Agregue el archivo con datos confidenciales a `.gitignore` para asegurarse de que no vuelva a confirmarlo por accidente.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Vuelva a comprobar que ha quitado todo lo que quería del historial del repositorio y que todas las ramas están extraídas del repositorio.
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
8. Para quitar el archivo confidencial de [las versiones etiquetadas](/articles/about-releases), también deberá forzar la inserción en las etiquetas de Git:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## Eliminar los datos de {% data variables.product.prodname_dotcom %} por completo

Después de usar la herramienta de BFG o `git filter-repo` para quitar los datos confidenciales e insertar los cambios en {% data variables.product.product_name %}, debe realizar algunos pasos adicionales para eliminar totalmente los datos de {% data variables.product.product_name %}.

1. Contáctate con {% data variables.contact.contact_support %} y pregúntale cómo eliminar visualizaciones cacheadas y referencias a los datos confidenciales en las solicitudes de extracción en {% data variables.product.product_name %}. Proporciona el nombre del repositorio o un vínculo a la confirmación que necesitas quitar.{% ifversion ghes %} Para obtener más información sobre cómo los administradores del sitio pueden quitar objetos Git inaccesibles, consulta «[Utilidades de la línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)».{% endif %}

2. Indique a los colaboradores que [fusionen mediante cambio de base](https://git-scm.com/book/en/Git-Branching-Rebasing), *no* que combinen, las ramas que hayan creado fuera del historial de repositorios antiguos (contaminado). Una confirmación de fusión podría volver a introducir algo o todo el historial contaminado sobre el que acabas de tomarte el trabajo de purgar.

3. Después de que haya transcurrido un tiempo y esté seguro de que la herramienta BFG o `git filter-repo` no han provocado efectos secundarios inesperados, puede forzar la desreferenciación de todos los objetos del repositorio local y recolectar los elementos no utilizados con los siguientes comandos (con Git 1.8.5 o una versión posterior):
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

   **Nota:** También puede lograr esto si confirma el historial filtrado en un repositorio nuevo o vacío, y después crea un clon de {% data variables.product.product_name %}.

  {% endnote %}

## Evitar confirmaciones accidentales en el futuro

Existen algunos trucos sencillos para evitar confirmar cosas que no quieres confirmar:

- Use un programa visual como [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) o [gitk](https://git-scm.com/docs/gitk) para confirmar los cambios. Los programas visuales suelen hacer que sea más sencillo ver exactamente qué archivos se agregarán, eliminarán y modificarán con cada confirmación.
- Evite los comandos generales `git add .` y `git commit -a` en la línea de comandos; en su lugar use `git add filename` y `git rm filename` para agregar al "stage" los archivos de manera individual.
- Use `git add --interactive` para revisar y agregar al "stage" los cambios en cada archivo.
- Use `git diff --cached` a fin de revisar los cambios que ha agregado al "stage" para la confirmación. Esta es la diferencia exacta que producirá `git commit` siempre que no use la marca `-a`.

## Información adicional

- [Página man de `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Herramientas de Git - Reescritura del historial](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- "[Acerca del examen de secretos](/code-security/secret-security/about-secret-scanning)"
