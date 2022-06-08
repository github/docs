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

Você pode pesquisar {% data variables.product.product_name %} usando o {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. {% ifversion command-palette %}Como alternativa, você pode usar a pesquisa interativa no {% data variables.product.prodname_command_palette %} para pesquisar sua localização atual na interface do usuário, um usuário, repositório ou organização específico e globalmente em todo o {% data variables.product.product_name %}, sem deixar o teclado. Para obter mais informações, consulte "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

A {% data variables.search.advanced_url %} fornece uma interface visual para construção de consultas de pesquisa. Você pode filtrar as pesquisas por diversos fatores, como o número de estrelas ou o número de bifurcações que um repositório tem. À medida que você preenche os campos de pesquisa avançada, sua consulta é automaticamente construída na barra de pesquisa superior.

![Pesquisa avançada](/assets/images/help/search/advanced_search_demo.gif)

## Pesquisando repositórios em {% data variables.product.prodname_dotcom_the_website %} a partir do seu ambiente corporativo privado

{% ifversion fpt or ghec %}

Se você usar {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}, e o proprietário da empresa habilitou {% data variables.product.prodname_unified_search %}, você poderá pesquisar em ambos os ambientes ao mesmo tempo a partir de {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) ou [a documentação de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Se você usar {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.product_name %}, e um proprietário corporativo habilitou {% data variables.product.prodname_unified_search %}, você poderá pesquisar em ambos os ambientes ao mesmo tempo a partir de {% data variables.product.product_name %}. Para obter mais informações sobre como proprietários corporativos podem habilitar {% data variables.product.prodname_unified_search %}, consulte "[Habilitando {% data variables.product.prodname_unified_search %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise). "

O proprietário da sua empresa em {% data variables.product.product_name %} pode habilitar separadamente {% data variables.product.prodname_unified_search %} para todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %} e para repositórios privados pertencentes à organização ou empresa em {% data variables.product.prodname_dotcom_the_website %} que estão conectados a {% data variables.product.product_name %} por meio de {% data variables.product.prodname_github_connect %}.

Antes de usar {% data variables.product.prodname_unified_search %} para repositórios privados, você deve conectar suas contas pessoais em {% data variables.product.prodname_dotcom_the_website %} e {% data variables.product.product_name %}. Para obter mais informações, consulte "[Habilitando a pesquisa no repositório {% data variables.product.prodname_dotcom_the_website %} no ambiente privado da empresa](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

Ao pesquisar {% data variables.product.product_name %}, somente repositórios privados aos quais você tem acesso e que são propriedade da organização conectada ou da conta corporativa serão incluídos nos resultados de pesquisa. Nem você nem ninguém poderá pesquisar repositórios privados pertencentes à sua conta pessoal no {% data variables.product.prodname_dotcom_the_website %} de {% data variables.product.product_name %}.

Para limitar a sua pesquisa para um ambiente, você pode usar uma opção de filtro na {% data variables.search.advanced_url %} ou pode usar o prefixo de pesquisa `environment:`. Para pesquisar apenas por conteúdo no {% data variables.product.product_name %}, use a sintaxe de pesquisa `environment:local`. Para pesquisar apenas por conteúdo no {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Leia mais

- "[Entender a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Pesquisar no GitHub](/articles/searching-on-github)"
