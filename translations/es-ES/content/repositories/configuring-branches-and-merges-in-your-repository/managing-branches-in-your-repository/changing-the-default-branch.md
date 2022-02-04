---
title: Cambiar la rama predeterminada
intro: 'Si tienes màs de una rama en tu repositorio, puedes configurar cualquiera de ellas como la predeterminada.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Cambia la rama predeterminada
---

## Acerca de cambiar la rama predeterminada

Puedes elegir la rama predeterminada para un repositorio. Èsta es la rama base para las solicitudes de cambios y confirmaciones de còdigo. Para obtener màs informaciòn sobre la rama predeterminada, consulta la secciòn "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% ifversion not ghae %}
{% note %}

**Nota**: Si utilizas el puente de Git-Subversion, el cambiar la rama predeterminada afectarà al contenido de tu rama `trunk` y al `HEAD` que ves cuando listas las referencias para el repositorio remoto. Para obtener màs informaciòn, consulta la secciòn "[Soporte para los clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)" y a [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) en la documentaciòn de Git.

{% endnote %}
{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}

También puedes renombrar la rama predeterminada. Para obtener más información, consulta la sección "[Renombrar una rama](/github/administering-a-repository/renaming-a-branch)".

{% endif %}

{% data reusables.branches.set-default-branch %}

## Prerrequisitos

Para cambiar la rama predeterminada, tu repositorio debe tener màs de una rama. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)".

## Cambiar la rama predeterminada

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. Debajo de "Rama predeterminada", a la derecha del nombre de rama predeterminado, da clic en el {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}. ![Cambiar el icono con dos flechas hacia la derecha del nombre de la rama predeterminada actual](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Utiliza el menù desplegable y luego da clic en el nombre de una rama. ![Menù desplegable para elegir una rama predeterminada nueva](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Da clic en **Actualizar**. ![Botòn de "Update" despuès de elegir una rama predeterminada nueva](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Lee la advertencia y luego da clic en **Entiendo, actualizar la rama predeterminada.** ![Botón de "Entiendo, actualizar la rama predeterminada." para realizar la actualización](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

