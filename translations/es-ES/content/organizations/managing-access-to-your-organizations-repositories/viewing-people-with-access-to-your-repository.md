---
title: Ver personas con acceso a tu repositorio
intro: Puedes ver{% ifversion ghec or ghes or ghae %} y exportar{% endif %} una lista de personas con acceso a los repositorios dentro de una organización.
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
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066641"
---
## Acerca de la lista de personas con acceso a tu repositorio

Puedes utilizar esta información para ayudar a desintegrar a las personas, obtener datos de cumplimiento y otras verificaciones de seguridad generales. 

{% ifversion fpt %} Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden exportar una lista de archivos .csv de las personas que tienen acceso a un repositorio. Para obtener más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![Información general sobre la administración de acceso](/assets/images/help/repository/manage-access-overview.png) {% else %} ![Lista de permisos de los usuarios del repositorio](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## Ver personas con acceso a tu repositorio

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Puede ver una introducción combinada de equipos y personas con acceso al repositorio en la configuración del repositorio. Para obtener más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)". {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## Exportar una lista de personas con acceso a tu repositorio

{% ifversion ghec %} {% note %}

**Nota**: Solo las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden exportar una lista de personas con acceso a un repositorio. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. Haga clic en **Export CSV** (Exportar archivo .csv).
  ![Pestaña de personas en la barra lateral del repositorio](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
