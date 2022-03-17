---
title: Ver personas con acceso a tu repositorio
intro: 'You can view{% ifversion ghec or ghes or ghae %} and export{% endif %} a list of people with access to a repository within an organization.'
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

## About the list of people with access to your repository

You can use this information to help off-board people, gather data for compliance, and other general security checkups.

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can also export a CSV list of people who have access to a repository. Para obtener más información, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
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

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can export a list of people with access to a repository. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Haz clic en **Export CSV (Exportar CSV)**. ![Pestaña de personas en la barra lateral del repositorio](/assets/images/help/repository/export-repository-permissions.png)
{% endif %}
