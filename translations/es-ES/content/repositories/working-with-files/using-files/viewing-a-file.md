---
title: Visualización de un archivo
intro: Puedes ver el contenido del archivo sin procesar o realizar un seguimiento de los cambios en las líneas de un archivo y descubrir cómo evolucionaron las partes del archivo a lo largo del tiempo.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179866'
---
## Visualización o copia del contenido del archivo sin formato

Con la vista sin formato, puede ver o copiar el contenido sin formato de un archivo sin ningún estilo.

{% data reusables.repositories.navigate-to-repo %}
1. Haga clic en el archivo que quiera ver.
2. En la esquina superior derecha de la vista de archivo, haga clic en **Raw**.
![Captura de pantalla del botón Raw en el encabezado de archivo](/assets/images/help/repository/raw-file-button.png)
3. Opcionalmente, para copiar el contenido del archivo sin procesar, en la esquina superior derecha de la vista de archivos, haga clic en **{% octicon "copy" aria-label="The copy icon" %}** .

## Visualización del historial de revisiones línea a línea de un archivo

Con la vista de último responsable, puede ver el historial de revisión línea por línea para todo un archivo, o bien el historial de revisión de una única línea dentro de un archivo si hace clic en {% octicon "versions" aria-label="The prior blame icon" %}. Cada vez que haga clic en {% octicon "versions" aria-label="The prior blame icon" %}, verá la información de revisión anterior para esa línea, incluido quién ha confirmado el cambio y cuándo.

![Vista de último responsable de Git](/assets/images/help/repository/git_blame.png)

En un archivo o una solicitud de incorporación de cambios, también puede usar el menú {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} para ver el último responsable de Git para una línea o rango de líneas seleccionado.

![Menú Kebab con opciones para ver el último responsable de Git para una línea seleccionada](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Sugerencia:** En la línea de comandos, también puede usar `git blame` para ver el historial de revisiones de líneas dentro de un archivo. Para más información, vea la [documentación de `git blame` de Git](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Haz clic para abrir el archivo cuyo historial de líneas quieres ver.
3. En la esquina superior derecha de la vista del archivo, haga clic en **Blame** para abrir la vista del último responsable.
![Botón de último responsable](/assets/images/help/repository/blame-button.png)
4. Para ver versiones anteriores de una línea concreta, o bien el último responsable siguiente, haga clic en {% octicon "versions" aria-label="The prior blame icon" %} hasta que encuentre los cambios que quiera ver.
![Botón de último responsable anterior](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Omisión de las confirmaciones en la vista de último responsable

Todas las revisiones especificadas en el archivo `.git-blame-ignore-revs`, que debe estar en el directorio raíz del repositorio, se ocultan de la vista de último responsable mediante el valor de configuración `git blame --ignore-revs-file` de Git. Para más información, vea [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) en la documentación de Git.

1. En el directorio raíz del repositorio, cree un archivo con el nombre `.git-blame-ignore-revs`.
2. Agregue a ese archivo los hash de confirmación que quiera excluir de la vista de último responsable. Se recomienda estructurar el archivo de la siguiente manera, incluidos los comentarios:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Confirme e inserte los cambios.

Ahora, cuando visite la vista de último responsable, las revisiones enumeradas no se incluirán. Verá un banner **Ignoring revisions in .git-blame-ignore-revs** (Omitir revisiones en .git-blame-ignore-revs) que indica que algunas confirmaciones pueden estar ocultas:

![Captura de pantalla de un banner en la vista de último responsable vinculado al archivo .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Este archivo puede ser útil cuando algunas confirmaciones realizan cambios exhaustivos en el código. También puede usar el archivo al ejecutar `git blame` localmente:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

También puedes configurar el repositorio Git local para que siempre omita las revisiones de ese archivo:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## Omisión de `.git-blame-ignore-revs` en la vista de último responsable

Si la vista de último responsable de un archivo muestra **Ignorando revisiones de .git-blame-ignore-revs**, todavía puedes omitir `.git-blame-ignore-revs` y ver la vista de último responsable normal. En la dirección URL, anexa `~` al SHA para que desaparezca el mensaje **Ignorando revisiones de .git-blame-ignore-revs**.
