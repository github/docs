---
title: Ver personas con acceso a tu repositorio
intro: 'Los propietarios de la organización pueden ver el acceso de las personas a un repositorio dentro de una organización. Los propietario de organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} también pueden exportar una lista CSV de personas que tienen acceso a un repositorio.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Los administradores pueden utilizar esta información para ayudar a personas externas, reunir datos de cumplimiento y otras verificaciones generales de seguridad.

![Lista de permisos de personas a un repositorio](/assets/images/help/repository/repository-permissions-list.png)

### Ver personas con acceso a tu repositorio

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota**: También puedes tener una vista general combinada de los equipos y personas con acceso a tu repositorio. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}

### Exportar una lista de personas con acceso a tu repositorio

Los propietario de organizaciones en {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} pueden exportar una lista CSV de personas que tienen acceso a un repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Haz clic en **Export CSV (Exportar CSV)**. ![Pestaña de personas en la barra lateral del repositorio](/assets/images/help/repository/export-repository-permissions.png)
