---
title: Administrar etiquetas predeterminadas para los repositorios de tu organización
intro: Puedes personalizar las etiquetas que se incluirán en todos los repositorios nuevos de tu organización.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar las etiquetas predeterminadas
---

Los propietarios de la organización pueden administrar las etiquetas predeterminadas para los repositorios de la organización.

Las etiquetas predeterminadas se incluirán en todos los repositorios nuevos de tu organización, pero luego cualquier usuario con acceso de escritura al repositorio puede editar o eliminar las etiquetas de ese repositorio. Agregar, editar o eliminar una etiqueta predeterminada no agrega, edita o elimina la etiqueta de los repositorios existentes.

## Crear una etiqueta predeterminada

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

5. Debajo de "Repository labels" (Etiquetas del repositorio), haz clic en **New label** (Etiqueta nueva). ![Botón New update (Actualización nueva)](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

## Editar una etiqueta predeterminada

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

## Eliminar una etiqueta predeterminada

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

## Leer más

- "[Acerca de las etiquetas](/articles/about-labels)"
