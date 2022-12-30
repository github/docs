---
title: Sobre a pesquisa no GitHub
intro: 'Use nossas potentes ferramentas de pesquisa para encontrar o que está procurando entre os muitos repositórios, usuários e linhas de código no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159098'
---
{% ifversion github-code-search %} {% note %}

  **Observação:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- Para pesquisar globalmente em todo o {% data variables.product.product_name %}, digite o que está procurando no campo de pesquisa que fica na parte superior de qualquer página e escolha "All {% data variables.product.prodname_dotcom %}" (Em todo o GitHub) no menu suspenso da pesquisa.
- Para pesquisar em uma organização ou um repositório específico, navegue até a página da organização ou do repositório, digite o que está procurando no campo de pesquisa que fica na parte superior da página e pressione **Enter**.

{% note %}

**Observações:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Os sites do {% data variables.product.prodname_pages %} não são pesquisáveis no {% data variables.product.product_name %}. No entanto, você pode pesquisar o conteúdo da fonte, se ele existir no branch padrão de um repositório, usando a pesquisa de código. Para obter mais informações, confira "[Pesquisa de código](/search-github/searching-on-github/searching-code)". Para obter mais informações sobre {% data variables.product.prodname_pages %}, confira "[O que é o GitHub Pages?](/articles/what-is-github-pages/)"
- Atualmente, a nossa pesquisa não é compatível com correspondência exata.
- Sempre que você estiver pesquisando em arquivos de código, serão retornados apenas os dois primeiros resultados de cada arquivo.

{% endnote %}

Após a realização de uma pesquisa no {% data variables.product.product_name %}, é possível ordenar os resultados ou refiná-los ainda mais clicando em uma das linguagens na barra lateral. Para obter mais informações, confira "[Classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results)".

A pesquisa do {% data variables.product.product_name %} usa um cluster do ElasticSearch para indexar projetos toda vez que uma alteração é enviada por push ao {% data variables.product.product_name %}. Problemas e pull requests são indexados quando são criados ou modificados.

## Tipos de pesquisa no {% data variables.product.prodname_dotcom %}

Você pode pesquisar as seguintes informações em todos os repositórios que você pode acessar em {% data variables.location.product_location %}.

- [Repositórios](/search-github/searching-on-github/searching-for-repositories)
- [Tópicos](/search-github/searching-on-github/searching-topics)
- [Problemas e solicitações de pull](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Discussões](/search-github/searching-on-github/searching-discussions){% endif %}
- [Código](/search-github/searching-on-github/searching-code)
- [Confirmações](/search-github/searching-on-github/searching-commits)
- [Usuários](/search-github/searching-on-github/searching-users)
- [Pacotes](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Pesquisar usando uma interface visual

Você pode pesquisar {% data variables.product.product_name %} usando o {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. {% ifversion command-palette %}Como alternativa, você pode usar a pesquisa interativa no {% data variables.product.prodname_command_palette %} para pesquisar sua localização atual na interface do usuário, um usuário, um repositório ou uma organização específica e globalmente em todo o {% data variables.product.product_name %}, usando o teclado. Para obter mais informações, confira "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

A {% data variables.search.advanced_url %} fornece uma interface visual para construção de consultas de pesquisa. Você pode filtrar as pesquisas por diversos fatores, como o número de estrelas ou o número de bifurcações que um repositório tem. À medida que você preenche os campos de pesquisa avançada, sua consulta é automaticamente construída na barra de pesquisa superior.

![Pesquisa avançada](/assets/images/help/search/advanced_search_demo.gif)

## Pesquisando repositórios em {% data variables.product.prodname_dotcom_the_website %} a partir do seu ambiente corporativo privado

{% ifversion fpt or ghec %}

Se você usar {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}, e um proprietário de empresa tiver ativado {% data variables.enterprise.prodname_unified_search %}, você poderá pesquisar em ambos os ambientes ao mesmo tempo em {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira [a documentação {% data variables.product.prodname_ghe_server %} documentation](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) ou [the {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Se você usar {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.product_name %}, e um proprietário de empresa tiver ativado {% data variables.enterprise.prodname_unified_search %}, você poderá pesquisar em ambos os ambientes ao mesmo tempo de {% data variables.product.product_name %}. Para obter mais informações sobre como os proprietários de empresas podem habilitar {% data variables.enterprise.prodname_unified_search %}, confira "[Habilitar {% data variables.enterprise.prodname_unified_search %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)",

O proprietário da empresa em {% data variables.product.product_name %} pode habilitar separadamente {% data variables.enterprise.prodname_unified_search %} para todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %} e para repositórios privados de propriedade da organização ou empresa em {% data variables.product.prodname_dotcom_the_website %} que está conectada a {% data variables.product.product_name %} por meio de {% data variables.product.prodname_github_connect %}.

Antes de poder usar {% data variables.enterprise.prodname_unified_search %} para repositórios privados, você deve conectar suas contas pessoais em {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.product_name %}. Para obter mais informações, confira "[Como habilitar a pesquisa de repositório {% data variables.product.prodname_dotcom_the_website %} em seu ambiente de empresa privada](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

Ao pesquisar em {% data variables.product.product_name %}, apenas os repositórios privados aos quais você tem acesso e que são de propriedade da organização ou conta corporativa conectada serão incluídos nos resultados da pesquisa. Nem você nem ninguém poderá pesquisar repositórios privados pertencentes à sua conta pessoal em {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}.

Para limitar sua pesquisa a um ambiente, você pode usar uma opção de filtro em {% data variables.search.advanced_url %} ou pode usar o prefixo de pesquisa `environment:`. Para pesquisar apenas conteúdo em {% data variables.product.product_name %}, use a sintaxe de pesquisa `environment:local`. Para pesquisar apenas conteúdo em {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Leitura adicional

- "[Como entender a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Pesquisar no GitHub](/articles/searching-on-github)"
