---
title: Rastrear cambios en un archivo
intro: Puedes rastrear cambios de líneas en un archivo y descubrir la manera en que las partes del archivo fueron evolucionando.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file/
  - /articles/tracing-changes-in-a-file/
  - /articles/tracking-changes-in-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

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
