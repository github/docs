---
title: Habilitar la búsqueda en repositorios de GitHub.com desde tu ambiente empresarial privado
shortTitle: Buscar en GitHub.com desde una empresa
intro: 'Puedes conectar tus cuentas personales de {% data variables.product.prodname_dotcom_the_website %} y tu ambiente privado de {% data variables.product.prodname_enterprise %} para buscar contenido en repositorios específicos de {% data variables.product.prodname_dotcom_the_website %}{% ifversion fpt or ghec %} desde tu ambiente privado{% else %} desde {% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

## Acerca de cómo buscar repositorios de {% data variables.product.prodname_dotcom_the_website %} desde {% ifversion fpt or ghec %}tu ambiente empresarial privado{% else %}{% data variables.product.product_name %}{% endif %}

Puedes buscar repositorios privados designados en {% data variables.product.prodname_ghe_cloud %} desde {% ifversion fpt or ghec %}tu ambiente privado de {% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_location %}{% ifversion ghae %} en {% data variables.product.prodname_ghe_managed %}{% endif %}{% endif %}. {% ifversion fpt or ghec %}Por ejemplo, si utilizas {% data variables.product.prodname_ghe_server %}, puedes buscar repositorios privados desde tu empresa en {% data variables.product.prodname_ghe_cloud %} en la interfaz web de {% data variables.product.prodname_ghe_server %}.{% endif %}

## Prerrequisitos

- Un propietario de empresa de {% ifversion fpt or ghec %}tu ambiente privado de {% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} debe habilitar {% data variables.product.prodname_github_connect %} y {% data variables.product.prodname_unified_search %}. Para obtener más información, consulta lo siguiente.{% ifversion fpt or ghes or ghec %}
  - "[Habilitar la {% data variables.product.prodname_unified_search %} entre tu cuenta empresarial y {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}enterprise-server@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)"{% ifversion fpt or ghec %} en la documentación de {% data variables.product.prodname_ghe_server %}{% endif %}{% endif %}{% ifversion fpt or ghec or ghae %}
  - "[Habilitar la {% data variables.product.prodname_unified_search %} entre tu cuenta empresarial y {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)"{% ifversion fpt or ghec %} en la documentación de {% data variables.product.prodname_ghe_managed %}{% endif %}
{% endif %}

- Ya debes tener acceso a los repositorios privados y conectar tu cuenta {% ifversion fpt or ghec %}en tu ambiente privado de {% data variables.product.prodname_enterprise %}{% else %} en {% data variables.product.product_name %}{% endif %} con tu cuenta en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información sobre los repositorios en los que puedes buscar, consulta la sección "[Acerca de cómo buscar en GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)".

## Habilitar la búsqueda de repositorios de GitHub.com desde {% ifversion fpt or ghec %}tu ambiente privado de {% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion fpt or ghec %}

Para obtener más información, consulta lo siguiente.

| Tue ambiente empresarial                            | Más información                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_ghe_server %}  | "[Habilitar la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente empresarial privado](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-enterprise-server)" |
| {% data variables.product.prodname_ghe_managed %} | "[Habilitar la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente empresarial privado](/github-ae@latest//search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-ae)"                       |

{% elsif ghes or ghae %}

1. Inicia sesión en {% data variables.product.product_name %} y en {% data variables.product.prodname_dotcom_the_website %}.
1. En {% data variables.product.product_name %}, en la esquina superior derecha de cualquier página, haz clic en tu foto de perfil y luego haz clic en **Ajustes**. ![Icono Settings (Parámetros) en la barra de usuario](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}

{% endif %}
