---
title: Eliminar un colaborador externo de un repositorio de la organización
intro: Los propietarios y los administradores del repositorio pueden eliminar el acceso a un repositorio de un colaborador externo.
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Advertencia:**
- Cuando se elimina un colaborador externo de un repositorio privado, el conteo de licencias pagadas no baja de categoría automáticamente. Para pagar por menos licencias después de eliminar usuarios de tu organización, sigue los pasos de la sección "[Bajar el cupo límite de plazas pagadas en tu organización](/articles/downgrading-your-organization-s-paid-seats)".

- Eres responsable de asegurar que las personas que perdieron el acceso a un repositorio borren cualquier información confidencial o propiedad intelectual.

{% endwarning %}

{% endif %}

Aunque se borren las bifurcaciones de los repositorios privados cuando se elimina un colaborador, la persona seguirá teniendo todos los clones locales de tu repositorio.

### Eliminar colaboradores externos de todos los repositorios de una organización

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. Selecciona el colaborador externo o los colaboradores externos que quieres eliminar de la organización. ![Lista de colaboradores externos con dos colaboradores externos seleccionados](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Arriba de la lista de colaboradores externos, usa el menú desplegable y haz clic en **Remove from all repositories** (Eliminar de todos los repositorios). ![Menú desplegable con la opción para eliminar colaboradores externos ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Revisa el colaborador externo o los colaboradores externos que se eliminarán de la organización, luego haz clic en **Remove outside collaborators** (Eliminar colaboradores externos). ![Lista de colaboradores externos que se eliminarán y botón Remove outside collaborators (Eliminar colaboradores externos)](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

### Eliminar un colaborador externo de un repositorio particular de una organización

Si solo quieres eliminar un colaborador externo de determinados repositorios de tu organización, puedes eliminar el acceso de esa persona a un repositorio específico por vez.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. A la derecha del nombre de usuario de la persona que quieres eliminar, utiliza el menú desplegable {% octicon "gear" aria-label="The Settings gear" %} y haz clic en **Manage** (Administrar). ![Botón Manage access (Administrar acceso)](/assets/images/help/organizations/member-manage-access.png)
6. A la derecha del repositorio del que quieres eliminar al colaborador externo, haz clic en **Manage access** (Administrar acceso). ![Selecciona el botón Manage access (Administrar acceso) al lado del repositorio al que tiene acceso el colaborador externo](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Para eliminar por completo el acceso del colaborador externo al repositorio, en la esquina superior derecha, haz clic en **Remove access to this repository** (Eliminar acceso a este repositorio). ![Botón Remove access to this repository (Eliminar acceso a este repositorio)](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Para confirmar, haz clic en **Remove access** (Eliminar acceso). ![Confirmar el colaborador externo que se eliminará del repositorio](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

### Leer más

- "[Agregar colaboradores externos a repositorios de tu organización](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
