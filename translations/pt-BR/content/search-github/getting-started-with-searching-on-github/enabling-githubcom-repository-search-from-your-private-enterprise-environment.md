---
title: Habilitar a pesquisa de repositório GitHub.com no ambiente privado da sua empresa
shortTitle: Pesquisa a empresa no GitHub.com
intro: 'Você pode conectar suas contas pessoais em {% data variables.product.prodname_dotcom_the_website %} e seu ambiente privado de {% data variables.product.prodname_enterprise %} para pesquisar conteúdo em alguns repositórios de {% data variables.product.prodname_dotcom_the_website %} {% ifversion fpt or ghec %} do seu ambiente privado{% else %} de {% data variables.product.product_name %}{% endif %}.'
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

## Sobre a pesquisa de repositórios de {% data variables.product.prodname_dotcom_the_website %} a partir do {% ifversion fpt or ghec %}seu ambiente empresarial privado{% else %}{% data variables.product.product_name %}{% endif %}

Você pode pesquisar repositórios privados designados em {% data variables.product.prodname_ghe_cloud %} a partir do {% ifversion fpt or ghec %} seu {% data variables.product.prodname_enterprise %} ambiente{% else %}{% data variables.product.product_location %}{% ifversion ghae %} em {% data variables.product.prodname_ghe_managed %}{% endif %}{% endif %}. {% ifversion fpt or ghec %}, por exemplo, se você usar {% data variables.product.prodname_ghe_server %}, você pode pesquisar repositórios privados da sua empresa a partir de {% data variables.product.prodname_ghe_cloud %} na interface web por {% data variables.product.prodname_ghe_server %}.{% endif %}

## Pré-requisitos

- Um proprietário de empresa para {% ifversion fpt or ghec %}seu ambiente {% data variables.product.prodname_enterprise %} privado{% else %}{% data variables.product.product_name %}{% endif %} deve habilitar {% data variables.product.prodname_github_connect %} e {% data variables.product.prodname_unified_search %} para repositórios privados. Para obter mais informações, consulte o seguinte.{% ifversion fpt or ghes or ghec %}
  - "\[Enabling {% data variables.product.prodname_unified_search %} for your enterprise\](/{% ifversion not ghes %}enterprise-server@latest/{% endif %}admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise"{% ifversion fpt or ghec %} in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% endif %}{% ifversion fpt or ghec or ghae %}
  - "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise}](/github-ae@latest/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)"{% ifversion fpt or ghec %} in the {% data variables.product.prodname_ghe_managed %} documentation{% endif %}
{% endif %}

- Você já deve ter acesso aos repositórios privados e conectar sua conta {% ifversion fpt or ghec %}no seu ambiente privado de {% data variables.product.prodname_enterprise %}{% else %}em {% data variables.product.product_name %}{% endif %} com sua conta em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre os repositórios que você pode pesquisar, consulte "[Sobre pesquisa no GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)".

## Habilitar a pesquisa de repositório no GitHub.com a partir do {% ifversion fpt or ghec %}seu ambiente {% data variables.product.prodname_enterprise %} privado{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion fpt or ghec %}

Para obter mais informações, consulte o seguinte.

| Seu ambiente corporativo                            | Mais informações                                                                                                                                                                                                                                                                                                                                                      |
|:--------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_ghe_server %}  | "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-enterprise-server)" |
| {% data variables.product.prodname_ghe_managed %} | "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/github-ae@latest//search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-ae)"                       |

{% elsif ghes or ghae %}

1. Efetue o login em {% data variables.product.product_name %} e {% data variables.product.prodname_dotcom_the_website %}.
1. No canto superior direito de qualquer página do {% data variables.product.product_name %}, clique na sua foto do perfil e em **Configurações**. ![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}

{% endif %}
