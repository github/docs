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
---

{% data reusables.search.you-can-search-globally %}

- Para pesquisar globalmente em todo o {% data variables.product.product_name %}, digite o que está procurando no campo de pesquisa que fica na parte superior de qualquer página e escolha "All {% data variables.product.prodname_dotcom %}" (Em todo o GitHub) no menu suspenso da pesquisa.
- Para pesquisar em uma organização ou um repositório específico, navegue até a página da organização ou do repositório, digite o que está procurando no campo de pesquisa que fica na parte superior da página e pressione **Enter**.

{% note %}

**Notas:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Os sites do {% data variables.product.prodname_pages %} não são pesquisáveis no {% data variables.product.product_name %}. No entanto, você pode pesquisar o conteúdo da fonte, se ele existir no branch padrão de um repositório, usando a pesquisa de código. Para obter mais informações, consulte "[Pesquisar código](/search-github/searching-on-github/searching-code)". Para obter mais informações sobre o {% data variables.product.prodname_pages %}, consulte "[O que é o GitHub Pages?](/articles/what-is-github-pages/)"
- Atualmente, a nossa pesquisa não é compatível com correspondência exata.
- Sempre que você estiver pesquisando em arquivos de código, serão retornados apenas os dois primeiros resultados de cada arquivo.

{% endnote %}

Após a realização de uma pesquisa no {% data variables.product.product_name %}, é possível ordenar os resultados ou refiná-los ainda mais clicando em uma das linguagens na barra lateral. Para obter mais informações, consulte "[Ordenar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results)".

A pesquisa do {% data variables.product.product_name %} usa um cluster do ElasticSearch para indexar projetos toda vez que uma alteração é enviada por push ao {% data variables.product.product_name %}. Problemas e pull requests são indexados quando são criados ou modificados.

## Tipos de pesquisa no {% data variables.product.prodname_dotcom %}

Você pode pesquisar as seguintes informações em todos os repositórios que você pode acessar em {% data variables.product.product_location %}.

- [Repositórios](/search-github/searching-on-github/searching-for-repositories)
- [Tópicos](/search-github/searching-on-github/searching-topics)
- [Problemas e pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Discussões](/search-github/searching-on-github/searching-discussions){% endif %}
- [Código](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Usuários](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Pesquisar usando uma interface visual

Você pode pesquisar {% data variables.product.product_name %} usando o {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. {% if command-palette %}Como alternativa, você pode usar a pesquisa interativa no {% data variables.product.prodname_command_palette %} para pesquisar sua localização atual na interface do usuário, um usuário, repositório ou organização específico e globalmente em todo o {% data variables.product.product_name %}, sem deixar o teclado. Para obter mais informações, consulte "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

A {% data variables.search.advanced_url %} fornece uma interface visual para construção de consultas de pesquisa. Você pode filtrar as pesquisas por diversos fatores, como o número de estrelas ou o número de bifurcações que um repositório tem. À medida que você preenche os campos de pesquisa avançada, sua consulta é automaticamente construída na barra de pesquisa superior.

![Pesquisa avançada](/assets/images/help/search/advanced_search_demo.gif)

## Pesquisando repositórios em {% data variables.product.prodname_dotcom_the_website %} a partir do seu ambiente corporativo privado

{% ifversion fpt or ghec %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, and an enterprise owner has enabled {% data variables.product.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}. For more information, see [the {% data variables.product.prodname_ghe_server %} documentation](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) or [the {% data variables.product.prodname_ghe_managed %} documentation](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}, and an enterprise owner has enabled {% data variables.product.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.product_name %}. For more information about how enterprise owners can enable {% data variables.product.prodname_unified_search %}, see "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

Your enterprise owner on {% data variables.product.product_name %} can separately enable {% data variables.product.prodname_unified_search %} for all public repositories on {% data variables.product.prodname_dotcom_the_website %} and for private repositories owned by the organization or enterprise on {% data variables.product.prodname_dotcom_the_website %} that is connected to {% data variables.product.product_name %} through {% data variables.product.prodname_github_connect %}.

Before you can use {% data variables.product.prodname_unified_search %} for private repositories, you must connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}. Para obter mais informações, consulte "[Habilitando a pesquisa no repositório {% data variables.product.prodname_dotcom_the_website %} no ambiente privado da empresa](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

When you search from {% data variables.product.product_name %}, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Neither you nor anyone else will be able to search private repositories owned by your personal account on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.product_name %}.

To limit your search to one environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.product_name %}, use the search syntax `environment:local`. Para pesquisar apenas por conteúdo no {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Leia mais

- "[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Pesquisar no GitHub](/articles/searching-on-github)"
