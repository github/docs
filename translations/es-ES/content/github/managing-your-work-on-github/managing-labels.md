---
title: Administrar las etiquetas
intro: 'Puedes clasificar las propuestas y solicitudes de cambios si creas, editas, aplicas y borras etiquetas.'
redirect_from:
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de las etiquetas

Puedes administrar tu trabajo en {% data variables.product.product_name %} creando etiquetas para clasificar las propuestas y las solicitudes de extracción. Puedes aplicar etiquetas en el repositorio en el que éstas se hayan creado. Una vez que existe una etiqueta, puedes utilizarla en cualquier propuesta o solicitud de cambios dentro del repositorio en cuestión.

Cualquiera con acceso de lectura a un repositorio puede ver y buscar las etiquetas del repositorio. Anyone with triage access to a repository can apply/dismiss existing labels. Para crear, editar, aplicar o eliminar una etiqueta, debes tener acceso de escritura al repositorio.

### Acerca de las etiquetas predeterminadas

{% data variables.product.product_name %} ofrece etiquetas predeterminadas en cada repositorio nuevo. Puedes usar estas etiquetas predeterminadas para ayudar a crear un flujo de trabajo estándar en un repositorio.

| Etiqueta                  | Descripción                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                   | Indica un problema inesperado o un comportamiento no deseado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentación`           | Indica una necesidad de mejoras o adiciones a la documentación{% endif %}
| `duplicado`               | Indica propuestas o solicitudes de extracción similares                                                                                                         |
| `mejora`                  | Indica solicitudes de nueva función                                                                                                                             |
| `primera buena propuesta` | Indica una buena propuesta para los colaboradores por primera vez                                                                                               |
| `se busca ayuda`          | Indica que un mantenedor necesita ayuda en una propuesta o solicitud de extracción                                                                              |
| `no válida`               | Indica que una propuesta o solicitud de extracción ya no es relevante                                                                                           |
| `pregunta`                | Indica que una propuesta o solicitud de extracción necesita más información                                                                                     |
| `wontfix`                 | Indica que no continuará el trabajo en una propuesta o solicitud de extracción                                                                                  |

Las etiquetas predeterminadas se incluyen en todos los repositorios nuevos cuando se crea el repositorio, pero luego puedes editarlas o eliminarlas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Los propietarios de la organización pueden personalizar las etiquetas predeterminadas para los repositorios de la organización. Para obtener más información, consulta "[Administrar etiquetas predeterminadas para los repositorios en tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

### Crear una etiqueta


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. A la derecha del campo de búsqueda, haz clic en **Nueva etiqueta**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Aplicar etiquetas para propuestas y solicitudes de extracción


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. En el ángulo superior derecho, haz clic en **Label** (Etiqueta), luego comienza a escribir el nombre de una etiqueta existente. Haz clic en el nombre de la etiqueta para asociarla con los elementos seleccionados. ![Desplegable de la asignación de los hitos de propuestas](/assets/images/help/issues/issues_applying_labels_dropdown.png)

### Editar una etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Eliminar una etiqueta
El borrar una etiqueta la eliminará de las propuestas y soilcitudes de cambios.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Further reading
- "[Filtrar propuestas y solicitudes de cambios por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Administrar las etiquetas predeterminadas para los repositorios de tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Fomentar las contribuciones sanas a tu proyecto con etiquetas](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
