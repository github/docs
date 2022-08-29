---
title: Ver un archivo
intro: Puedes ver el contenido sin procesar de los archivos o rastrear cambios en las líneas de un archivo y descubrir cómo evolucionaron las partes de este con el tiempo.
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
shortTitle: Ver los archivos y rastrear los cambios en ellos
---

## Ver o copiar el contenido sin procesar de los archivos

Con la vista de contenido sin procesar, puedes ver o copiar el contenido sin procesar de un archivo sin ningún tipo de formato.

{% data reusables.repositories.navigate-to-repo %}
1. Haz clic en el archivo que quieras ver.
2. En la esquina superior derecha de la vista de archivo, haz clic en**Sin procesar**. ![Captura de pantalla del botón "sin procesar" en el encabezado del archivo](/assets/images/help/repository/raw-file-button.png)
3. Opcionalmente, para copiar el contenido sin procesar del archivo, en la esquina superior derecha de la vista de archivo, haz clic en **{% octicon "copy" aria-label="The copy icon" %}**.

## Ver el historial de revisión línea por línea de un archivo

Con la vista de último responsable, puedes ver el historial de revisión línea por línea para todo un archivo o ver el historial de revisión de una única línea dentro de un archivo haciendo clic en {% octicon "versions" aria-label="The prior blame icon" %}. Cada vez que hagas clic en {% octicon "versions" aria-label="The prior blame icon" %}, verás la información de revisión anterior para esa línea, incluido quién y cuándo confirmó el cambio.

![Vista de último responsable de Git](/assets/images/help/repository/git_blame.png)

En un archivo o solicitud de extracción, también puedes utilizar el menú {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} para ver el último responsable de Git para una línea o rango de líneas seleccionado.

![Menú Kebab con opciones para ver el último responsable de Git para una línea seleccionada](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Sugerencia:** En la línea de comando, también puedes utilizar `git blame` para ver el historial de revisión de líneas dentro de un archivo. Para obtener más información, consulta la documentación de [ `git blame`](https://git-scm.com/docs/git-blame) de Git.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Haz clic para abrir el archivo cuyo historial de líneas quieres ver.
3. En la esquina superior derecha de la vista del archivo, haz clic en **Blame** (Último responsable) para abrir la vista del último responsable. ![Botón Blame (Último responsable)](/assets/images/help/repository/blame-button.png)
4. Para ver versiones anteriores de una línea específica, o el siguiente último responsable, haz clic en {% octicon "versions" aria-label="The prior blame icon" %} hasta que hayas encontrado los cambios que quieres ver. ![Botón Prior blame (Último responsable anterior)](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Ignorar las confirmaciones en la vista de último responsable

Todas las revisiones que se especifican en el archivo `.git-blame-ignore-revs`, el cual debe estar en el directorio raíz de tu repositorio, se ocultan de la vista de último responsable utilizando el ajuste de configuración `git blame --ignore-revs-file` de Git. Para obtener más información, consulta [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) en la documentación de Git.

1. En el directorio de tu repositorio, crea un archivo llamado `.git-blame-ignore-revs`.
2. Agrega los hashes de confirmación que quieras excluir de la vista de último responsable a ese archivo. Te recomendamos que el archivo se estructure de la siguiente forma, incluyendo los comentarios:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Confirma y sube los cambios.

Ahora, cuando visites la vista de último responsable, las revisiones listadas no se incluirán en ella. Verás un letrero de **ignorando las revisiones en .git-blame-ignore-revs** indicando que algunas confirmaciones podrían estar ocultas:

![Captura de pantalla de un letrero con la vista de último responsable que enlaza al archivo .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Esto puede ser útil cuando algunas cuantas confirmaciones hacen cambios extensos a tu código. Puedes utilizar el archivo al ejecutar `git blame` localmente también:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

También puedes configurar tu git local para que siempre ignore las revs en ese archivo:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}
