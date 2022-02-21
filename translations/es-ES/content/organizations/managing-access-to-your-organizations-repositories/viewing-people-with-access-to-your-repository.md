---
title: Ver personas con acceso a tu repositorio
intro: 'Los propietarios de la organización pueden ver el acceso de las personas a un repositorio dentro de una organización. Los propietario de organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} también pueden exportar una lista CSV de personas que tienen acceso a un repositorio.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Visualizar a las personas con acceso
---

Los administradores pueden utilizar esta información para ayudar a personas externas, reunir datos de cumplimiento y otras verificaciones generales de seguridad.
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![Resumen de gestión de accesos](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![Lista de permisos de personas a un repositorio](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## Ver personas con acceso a tu repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
You can see a combined overview of teams and people with access to your repository in your repository settings. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)".
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}
## Exportar una lista de personas con acceso a tu repositorio

Los propietario de organizaciones en {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} pueden exportar una lista CSV de personas que tienen acceso a un repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Haz clic en **Export CSV (Exportar CSV)**. ![Pestaña de personas en la barra lateral del repositorio](/assets/images/help/repository/export-repository-permissions.png)
