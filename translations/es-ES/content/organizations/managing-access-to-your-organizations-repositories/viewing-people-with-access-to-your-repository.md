---
title: Ver personas con acceso a tu repositorio
intro: 'Puedes ver{% ifversion ghec or ghes or ghae %} y exportar{% endif %} una lista de personas con acceso a los repositorios dentro de una organización.'
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
permissions: Organization owners can view people with access to a repository.
---

## Acerca de la lista de personas con acceso a tu repositorio

Puedes utilizar esta información para ayudar a desintegrar a las personas, obtener datos de cumplimiento y otras verificaciones de seguridad generales.

{% ifversion fpt %}
Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden exportar una lista de CSV de las personas quienes tienen acceso a un repositorio. Para obtener más información, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![Resumen de gestión de accesos](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![Lista de permisos de personas a un repositorio](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## Ver personas con acceso a tu repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
Puedes ver un resumen combinado de los equipos y personas con acceso a tu repositorio en los ajustes de este. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)".
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}

{% ifversion ghec or ghes or ghae %}
## Exportar una lista de personas con acceso a tu repositorio

{% ifversion ghec %}
{% note %}

**Nota:** Solo las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden exportar una lista de personas con acceso a un repositorio. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Haz clic en **Export CSV (Exportar CSV)**. ![Pestaña de personas en la barra lateral del repositorio](/assets/images/help/repository/export-repository-permissions.png)
{% endif %}
