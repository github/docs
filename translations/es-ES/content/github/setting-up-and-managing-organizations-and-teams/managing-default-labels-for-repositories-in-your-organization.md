---
title: Administrar etiquetas predeterminadas para los repositorios de tu organización
intro: Puedes personalizar las etiquetas que se incluirán en todos los repositorios nuevos de tu organización.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

Los propietarios de la organización pueden administrar las etiquetas predeterminadas para los repositorios de la organización.

Las etiquetas predeterminadas se incluirán en todos los repositorios nuevos de tu organización, pero luego cualquier usuario con acceso de escritura al repositorio puede editar o eliminar las etiquetas de ese repositorio. Agregar, editar o eliminar una etiqueta predeterminada no agrega, edita o elimina la etiqueta de los repositorios existentes.

### Crear una etiqueta predeterminada

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
5. Debajo de "Repository labels" (Etiquetas del repositorio), haz clic en **New label** (Etiqueta nueva). ![Botón New update (Actualización nueva)](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Editar una etiqueta predeterminada

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Eliminar una etiqueta predeterminada

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

### Leer más

- "[Acerca de las etiquetas](/articles/about-labels)"
