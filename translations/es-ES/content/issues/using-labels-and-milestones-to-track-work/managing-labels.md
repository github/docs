---
title: Administrar las etiquetas
intro: 'Puedes clasificar {% if currentVersion == "free-pro-team@latest" %}propuestas, solicitudes de cambio y debates{% else %}propuestas y solicitudes de cambio{% endif %} si creas, editas, aplicas y borras las etiquetas.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
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
  - /github/managing-your-work-on-github/managing-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
  ### Acerca de las etiquetas

Puedes administrar tu trabajo en {% data variables.product.product_name %} si creas etiquetas para categorizar {% if currentVersion == "free-pro-team@latest" %}propuestas, solicitudes de cambio, y debates{% else %}propuestas y solicitudes de cambio{% endif %}. Puedes aplicar etiquetas en el repositorio en el que éstas se hayan creado. Una vez que exista una etiqueta, puedes utilizarla en cualquier {% if currentVersion == "free-pro-team@latest" %}propuesta, solicitud de cambio o debate{% else %}propuesta o solicitud de cambio{% endif %} dentro del repositorio.

Cualquiera con acceso de lectura a un repositorio puede ver y buscar las etiquetas del repositorio. Cualquiera con acceso de clasificación en un repositorio puede aplicar/descartar las etiquetas existentes. Para crear, editar, aplicar o eliminar una etiqueta, debes tener acceso de escritura al repositorio.

### Acerca de las etiquetas predeterminadas

{% data variables.product.product_name %} ofrece etiquetas predeterminadas en cada repositorio nuevo. Puedes usar estas etiquetas predeterminadas para ayudar a crear un flujo de trabajo estándar en un repositorio.

| Etiqueta                  | Descripción                                                                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                   | Indica un problema inesperado o un comportamiento no deseado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentación`           | Indica una necesidad de mejoras o adiciones a la documentación{% endif %}
| `duplicado`               | Indica {% if currentVersion == "free-pro-team@latest" %}propuestas, solicitudes de cambio o debates{% else %}propuestas o solicitudes de cambio{% endif %}similares.                      |
| `mejora`                  | Indica solicitudes de nueva función                                                                                                                                                       |
| `primera buena propuesta` | Indica una buena propuesta para los colaboradores por primera vez                                                                                                                         |
| `se busca ayuda`          | Indica que un mantenedor necesita ayuda en una propuesta o solicitud de extracción                                                                                                        |
| `no válida`               | Indica que ya no es relevante una {% if currentVersion == "free-pro-team@latest" %}propuesta, solicitud de cambios, o debate{% else %}propuesta o solicitud de cambios{% endif %}
| `pregunta`                | Sindica que una {% if currentVersion == "free-pro-team@latest" %}propuesta, solicitud de cambios o debate{% else %}propuesta o solicitud de cambios{% endif %} necesita más información   |
| `wontfix`                 | Indica que el trabajo no continuará en una {% if currentVersion == "free-pro-team@latest" %}propuesta, solicitud de cambios o debate{% else %}propuesta o solicitud de cambios{% endif %}

Las etiquetas predeterminadas se incluyen en todos los repositorios nuevos cuando se crea el repositorio, pero luego puedes editarlas o eliminarlas.

Las propuestas con la etiqueta `good first issue` se utilizan para llenar la página de `contribute` del repositorio. Para encontrar un ejemplo de página de `contribute`, consulta [github/docs/contribute](https://github.com/github/docs/contribute).

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

### Aplicar una etiqueta

1. Navega a la {% if currentVersion == "free-pro-team@latest" %}propuesta, solicitud de cambios o debate{% else %}propuesta o solicitud de cambios{% endif %}.
1. En la barra lateral derecha, a la derecha de "Etiquetas", haz clic en {% octicon "gear" aria-label="The gear icon" %} y luego en la etiqueta. ![Menú desplegable de "Labels"](/assets/images/help/issues/labels-drop-down.png)

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

### Leer más
- "[Filtrar propuestas y solicitudes de cambios por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Administrar las etiquetas predeterminadas para los repositorios de tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Fomentar las contribuciones sanas a tu proyecto con etiquetas](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
