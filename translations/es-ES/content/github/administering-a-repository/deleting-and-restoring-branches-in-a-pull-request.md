---
title: Eliminar y restaurar ramas en una solicitud de extracción
intro: 'Si tienes acceso de escritura en un repositorio, puedes eliminar las ramas asociadas con solicitudes de extracción cerradas o fusionadas. No puedes eliminar las ramas asociadas con solicitudes de extracción abiertas.'
redirect_from:
  - /articles/tidying-up-pull-requests/
  - /articles/restoring-branches-in-a-pull-request/
  - /articles/deleting-unused-branches/
  - /articles/deleting-and-restoring-branches-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### Borrar la rama utilizada para una solicitud de extracción

Puedes borrar la rama que se asocia con una solicitud de extracción si la han fusionado o cerrado y no hay ninguna otra solicitud de extracción abierta que haga referencia a dicha rama. Para obtener información sobre cerrar ramas que no están asociadas con solicitudes de extracción, consulta la sección "[Crear y borrar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que se asocie con la rama que deseas eliminar.
5. Junto a la parte inferior de la solicitud de extracción, haz clic en **Eliminar rama**. ![Botón Eliminar rama](/assets/images/help/pull_requests/delete_branch_button.png)

   Este botón no se muestra si hay alguna solicitud de extracción abierta para esta rama actualmente.

### Restaurar una rama eliminada

Puedes restaurar la rama de encabezado de una solicitud de extracción cerrada.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que se asocie con la rama que deseas restaurar.
5. Junto a la parte inferior de la solicitud de extracción, haz clic en **Restaurar rama**. ![Botón Restaurar rama eliminada](/assets/images/help/branches/branches-restore-deleted.png)

### Leer más

- "[Crear y borrar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Administrar el borrado automático de ramas](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"
