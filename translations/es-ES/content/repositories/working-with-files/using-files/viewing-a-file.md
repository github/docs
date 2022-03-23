---
title: Viewing a file
intro: You can view raw file content or trace changes to lines in a file and discover how parts of the file evolved over time.
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
---

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

{% data reusables.repositories.navigate-to-repo %}
1. Click the file that you want to view.
2. In the upper-right corner of the file view, click **Raw**. ![Screenshot of the Raw button in the file header](/assets/images/help/repository/raw-file-button.png)
3. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="The copy icon" %}**.

## Viewing the line-by-line revision history for a file

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

{% if blame-ignore-revs %}

## Ignore commits in the blame view
{% note %}

**Note:** Ignoring commits in the blame view is currently in public beta and subject to change.

{% endnote %}

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
2. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Commit and push the changes.

Now when you visit the blame view, the listed revisions will not be included in the blame. You'll see an **Ignoring revisions in .git-blame-ignore-revs** banner indicating that some commits may be hidden:

![Screenshot of a banner on the blame view linking to the .git-blame-ignore-revs file](/assets/images/help/repository/blame-ignore-revs-file.png)

This can be useful when a few commits make extensive changes to your code. You can use the file when running `git blame` locally as well:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

{% endif %}
