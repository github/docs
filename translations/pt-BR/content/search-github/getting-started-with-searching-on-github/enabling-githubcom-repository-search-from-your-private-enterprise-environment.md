---
title: Habilitar a pesquisa de repositório GitHub.com no ambiente privado da sua empresa
shortTitle: Search GitHub.com from enterprise
intro: 'Você pode conectar suas contas pessoais no {% data variables.product.prodname_dotcom_the_website %} e o ambiente privado do {% data variables.product.prodname_enterprise %} para procurar conteúdo em alguns repositórios do {% data variables.product.prodname_dotcom_the_website %} {% ifversion fpt or ghec %} do ambiente privado{% else %} do {% data variables.product.product_name %}{% endif %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062455'
---
## Sobre a pesquisa de repositórios de {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}

Você pode pesquisar repositórios privados designados em {% data variables.product.prodname_ghe_cloud %} de {% data variables.product.product_location %}{% ifversion ghae %} em {% data variables.product.prodname_ghe_managed %}{% endif %}. Para obter mais informações sobre a pesquisa em ambientes, confira "[Sobre a pesquisa em GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)".

## Pré-requisitos

Um proprietário da empresa para {% data variables.product.product_name %} deve habilitar {% data variables.product.prodname_github_connect %} e {% data variables.product.prodname_unified_search %} para repositórios privados. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_unified_search %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)".

## Habilitando a pesquisa de repositório do {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}

1. Efetue o login em {% data variables.product.product_name %} e {% data variables.product.prodname_dotcom_the_website %}.
1. No canto superior direito de qualquer página do {% data variables.product.product_name %}, clique na foto do seu perfil e clique em **Configurações**.
![Ícone Configurações na barra de usuário](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
