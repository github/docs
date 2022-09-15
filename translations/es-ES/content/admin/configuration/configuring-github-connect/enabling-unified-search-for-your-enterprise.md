---
title: Habilitar la búsqueda unificada para tu empresa
shortTitle: Unified search
intro: 'Puedes permitir que los usuarios incluyan repositorios de {% data variables.product.prodname_dotcom_the_website %} en sus resultados de búsqueda cuando buscan desde {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
ms.openlocfilehash: 0270600113cb3b341b38e6f55d7108798d523ebb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112961'
---
## Acerca de {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

Cuando habilitas la búsqueda unificada, los usuarios pueden ver los resultados de búsqueda desde el contenido de {% data variables.product.prodname_dotcom_the_website %} cuando buscan desde {% data variables.product.product_location %}{% ifversion ghae %} en {% data variables.product.prodname_ghe_managed %}{% endif %}. 

Puedes elegir permitir los resultados de búsqueda para los repositorios públicos de {% data variables.product.prodname_dotcom_the_website %} y puedes elegir por separado permitir los resultados de búsqueda para los repositorios privados en {% data variables.product.prodname_ghe_cloud %}. Si habilitas la búsqueda de empresas unificada para los repositorios privados, los usuarios solo podrán buscar los repositorios privados a los cuales tengan acceso y que pertenezcan a la cuenta de empresa u organización conectada. Para más información, vea "[Acerca de la investigación en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)".

Los usuarios jamás podrán buscar en {% data variables.product.product_location %} desde {% data variables.product.prodname_dotcom_the_website %}, incluso si tienen acceso a ambos ambientes.

Después de habilitar la búsqueda unificada para {% data variables.product.product_location %}, antes de que los usuarios individuales puedan ver los resultados de búsqueda de los repositorios privados de {% data variables.product.prodname_dotcom_the_website %} en {% data variables.product.product_location %}, cada uno de ellos también debe conectar su cuenta de usuario en {% data variables.product.product_name %} con una cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Habilitación de la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} en la cuenta de empresa privada](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

Buscar a través de las API REST y GraphQL no incluye {% data variables.product.prodname_dotcom_the_website %} los resultados de búsqueda. No están admitidas la búsqueda avanzada y buscar wikis en {% data variables.product.prodname_dotcom_the_website %}.

## Habilitación de {% data variables.product.prodname_unified_search %}

Antes de que habilites {% data variables.product.prodname_unified_search %}, deberás habilitar {% data variables.product.prodname_github_connect %}. Para más información, vea "[Administración de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Inicie sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "Los usuarios pueden buscar {% data variables.product.prodname_dotcom_the_website %}", use el menú desplegable y haga clic en **Habilitado**.
  ![Habilitación de la opción de búsqueda en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. De manera opcional, en "Los usuarios pueden buscar repositorios privados en {% data variables.product.prodname_dotcom_the_website %}", use el menú desplegable y haga clic en **Habilitado**.
    ![Habilitación de la opción de búsqueda de repositorios privados en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
