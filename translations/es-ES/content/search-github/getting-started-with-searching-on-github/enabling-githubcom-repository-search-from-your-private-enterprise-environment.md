---
title: Habilitar la búsqueda en repositorios de GitHub.com desde tu ambiente empresarial privado
shortTitle: Search GitHub.com from enterprise
intro: 'Puedes conectar tus cuentas personales de {% data variables.product.prodname_dotcom_the_website %} y tu ambiente privado de {% data variables.product.prodname_enterprise %} para buscar contenido en repositorios específicos de {% data variables.product.prodname_dotcom_the_website %}{% ifversion fpt or ghec %} desde tu ambiente privado{% else %} desde {% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2c4ee57036ca2d0114e75a1acaeecec05be5ba3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062462'
---
## Acerca de la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} desde {% data variables.product.product_name %}

Puedes buscar repositorios privados designados en {% data variables.product.prodname_ghe_cloud %} de {% data variables.product.product_location %}{% ifversion ghae %} en {% data variables.product.prodname_ghe_managed %}{% endif %}. Para más información sobre la búsqueda en entornos, consulta "[Acerca de la búsqueda en GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)".

## Prerrequisitos

Un propietario de empresa de {% data variables.product.product_name %} debe habilitar {% data variables.product.prodname_github_connect %} y {% data variables.product.prodname_unified_search %} para los repositorios privados. Para más información, consulta "[Habilitación de {% data variables.product.prodname_unified_search %} para la empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)".

## Habilitación de la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} desde {% data variables.product.product_name %}

1. Inicia sesión en {% data variables.product.product_name %} y en {% data variables.product.prodname_dotcom_the_website %}.
1. En {% data variables.product.product_name %}, ela esquina superior derecha de cualquier página, haga clic en la fotografía de perfil y luego en **Configuración**.
![Icono de configuración de la barra de usuario](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
