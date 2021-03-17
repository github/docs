---
title: Crear y eliminar ramas en tu repositorio
intro: 'Puedes crear o eliminar ramas directamente en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Cómo crear una rama

{% data reusables.repositories.navigate-to-repo %}

1. Opcionalmente, si quieres crear tu nueva rama desde una rama diferente a la predeterminada para el repositorio, da clic en {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches** y luego elige otra rama: ![Vínculo de ramas en página de resumen](/assets/images/help/branches/branches-link.png)
1. Haz clic en el menú del selector de ramas. ![menú del selector de ramas](/assets/images/help/branch/branch-selection-dropdown.png)
1. Escribe un nombre único para tu nueva rama y luego selecciona **Crear rama**. ![cuadro de texto de creación de ramas](/assets/images/help/branch/branch-creation-text-box.png)

### Cómo eliminar una rama

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Nota:** Si la rama que quieres borrar es la rama predeterminada del repositorio, debes elegir una rama predeterminada nueva antes de borrarla. Para obtener màs informaciòn, consulta la secciòn "[Cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

{% endnote %}

Si la rama que quieres borrar está asociada con una solicitud de cambios abierta, debes fusionar o cerrar dicha solicitud antes de borrar la rama. Para obtener más información, consulta la sección "[Fusionar una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)" o la sección "[Cerrar una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Desplázate hasta la rama que deseas eliminar y luego haz clic en {% octicon "trashcan" aria-label="The trashcan icon to delete the branch" %}. ![eliminar la rama](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
Para obtener más información, consulta "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

### Leer más

- "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)"
- "[Ver las ramas en tu repositorio](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Borrar y restaurar ramas en una solicitud de extracción](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
