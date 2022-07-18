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
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

## Sobre pesquisa para repositórios de {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}

Você pode pesquisar por repositórios privados designados em {% data variables.product.prodname_ghe_cloud %} de {% data variables.product.product_location %}{% ifversion ghae %} em {% data variables.product.prodname_ghe_managed %}{% endif %}. Para obter mais informações sobre pesquisa entre ambientes, consulte "[Sobre pesquisar no GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)".

## Pré-requisitos

O proprietário de uma empresa para {% data variables.product.product_name %} deve habilitar {% data variables.product.prodname_github_connect %} e {% data variables.product.prodname_unified_search %} para repositórios privados. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_unified_search %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

## Habilitando a pesquisa de repositório de {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}

1. Efetue o login em {% data variables.product.product_name %} e {% data variables.product.prodname_dotcom_the_website %}.
1. No canto superior direito de qualquer página do {% data variables.product.product_name %}, clique na sua foto do perfil e em **Configurações**. ![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
