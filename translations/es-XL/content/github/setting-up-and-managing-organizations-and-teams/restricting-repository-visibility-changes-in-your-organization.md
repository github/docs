---
title: Restringir cambios en la visibilidad de los repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para cambiar la visibilidad de los repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes restringir la capacidad de cambiar la visibilidad de los repositorios para los propietarios de la organización únicamente o permitir que los miembros con privilegios de administrador para un repositorio también cambien la visibilidad de privado a público o de público a privado.

{% warning %}

**Advertencia**: En caso de habilitarse, este ajuste permite a las personas con permisos administrativos cambiar un repositorio existente a cualquier visibilidad, aún si no permites que se cree este tipo de repositorio. Para obtener más información acerca de cómo restringir la visibilidad de los repositorios durante su creación, consulta la sección "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository visibility change" (Cambio en la visibilidad de los repositorios), anula la selección de **Allow members to change repository visibilities for this organization** (Permitir que los miembros cambien las visibilidades de los repositorios para esta organización). ![Casilla para permitir que los miembros cambien la visibilidad de los repositorios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Haz clic en **Save (Guardar)**.
