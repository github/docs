---
title: Escoger una confirmación minuciosamente
intro: Puedes escoger una confirmación específica en una rama y copiarla a otra rama.
versions:
  free-pro-team: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
---

### Acerca de la selección minuciosa de Git

Puedes elegir minuciosamente una confirmación en una rama para crear una copia de la confirmación con los mismos cambios en otra rama. Si tu confirmación cambia a la rama incorrecta o quiere hacer los mismos cambios en otra rama, puedes elegir minuciosamente la confirmación para aplicar los cambios en otra rama. También puedes utilizar la selección minuciosa para aplicar cambios específicos antes de que estés listo para crear o fusionar la solicitud de cambios,. Por ejemplo, si confirmas una corrección de error en una rama de característica, puedes seleccionar minuciosamente la confirmación con el arreglo del error en otras ramas de tu proyecto.

También puedes usar la selección minuciosa para colaborar con un equipo. Algunos proyectos incorporan colaboraciones por confirmaciones de selección minuciosa. Para obtener más información, consulta la sección [Git Distribuido - Mantener un Proyecto](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) en la documentación de Git.

### Escoger una confirmación minuciosamente

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, haz clic en aquella que tiene la confirmación que quieres seleccionar minuciosamente.
{% data reusables.desktop.history-tab %}
4. Arrastra la confirmación que quieres seleccionar minuciosamente al {% octicon "git-branch" aria-label="The branch icon" %} menú de **Rama Actual** y suelta la confirmación en la rama en la que quieres copiar la confirmación. ![Arrastrar una confirmación a otra rama en el menú de la rama actual](/assets/images/help/desktop/cherry-picking.png)

### Leer más
- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) en la documentación de Git
