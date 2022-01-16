---
title: Sobre a pesquisa no GitHub
intro: 'Use nossas potentes ferramentas de pesquisa para encontrar o que está procurando entre os muitos repositórios, usuários e linhas de código no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- Para pesquisar globalmente em todo o {% data variables.product.product_name %}, digite o que está procurando no campo de pesquisa que fica na parte superior de qualquer página e escolha "All {% data variables.product.prodname_dotcom %}" (Em todo o GitHub) no menu suspenso da pesquisa.
- Para pesquisar em uma organização ou um repositório específico, navegue até a página da organização ou do repositório, digite o que está procurando no campo de pesquisa que fica na parte superior da página e pressione **Enter**.

{% note %}

**Notas:**

{% ifversion fpt or ghes %}
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
- [Problemas e pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt %}
- [Discussões](/search-github/searching-on-github/searching-discussions){% endif %}
- [Código](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Usuários](/search-github/searching-on-github/searching-users)
- [Pacotes](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Pesquisar usando uma interface visual

Como alternativa, é possível pesquisar o {% data variables.product.product_name %} usando a {% data variables.search.search_page_url %} ou a {% data variables.search.advanced_url %}.

A {% data variables.search.advanced_url %} fornece uma interface visual para construção de consultas de pesquisa. Você pode filtrar as pesquisas por diversos fatores, como o número de estrelas ou o número de bifurcações que um repositório tem. À medida que você preenche os campos de pesquisa avançada, sua consulta é automaticamente construída na barra de pesquisa superior.

![Pesquisa avançada](/assets/images/help/search/advanced_search_demo.gif)

{% ifversion fpt or ghes or ghae-next %}

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

If you use {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, an enterprise owner for your {% data variables.product.prodname_enterprise %} environment can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time{% ifversion ghes or ghae %} from {% data variables.product.product_name %}{% endif %}. For more information, see the following.

{% ifversion fpt or ghes %}
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}github-enterprise@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag -->
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_managed %} documentation
{% endif %}

{% ifversion ghes or ghae-next %}

Para definir o escopo da pesquisa por ambiente, você pode usar uma opção de filtro na {% data variables.search.advanced_url %} ou pode usar o prefixo de pesquisa `environment:`. Para pesquisar apenas por conteúdo no {% data variables.product.product_name %}, use a sintaxe de pesquisa `environment:local`. Para pesquisar apenas por conteúdo no {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.

Your enterprise owner on {% data variables.product.product_name %} can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.

When you search from {% data variables.product.product_name %}, you can only search in the private repositories that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Enterprise owners for {% data variables.product.product_name %} and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account on {% data variables.product.prodname_dotcom_the_website %}. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

{% endif %}

{% endif %}

## Leia mais

- "[Entender a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Pesquisar no GitHub](/articles/searching-on-github)"
