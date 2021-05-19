---
title: Restringir cambios en la visibilidad de los repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para cambiar la visibilidad de los repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

Puedes restringir la habilidad de cambiar la visibilidad de un repositorio para solo los propietarios de la organización o permitir que los miembros con privilegios administrativos en éste también cambien la visibilidad.

{% warning %}

**Advertencia**: En caso de habilitarse, este ajuste permite a las personas con permisos administrativos cambiar un repositorio existente a cualquier visibilidad, aún si no permites que se cree este tipo de repositorio. Para obtener más información acerca de cómo restringir la visibilidad de los repositorios durante su creación, consulta la sección "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository visibility change" (Cambio en la visibilidad de los repositorios), anula la selección de **Allow members to change repository visibilities for this organization** (Permitir que los miembros cambien las visibilidades de los repositorios para esta organización). ![Casilla para permitir que los miembros cambien la visibilidad de los repositorios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Haz clic en **Save ** (guardar).

### Leer más

- "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
