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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode pesquisar globalmente em todo o {% data variables.product.product_name %} ou definir o escopo da sua pesquisa para uma organização ou um repositório específico.

- Para pesquisar globalmente em todo o {% data variables.product.product_name %}, digite o que está procurando no campo de pesquisa que fica na parte superior de qualquer página e escolha "All {% data variables.product.prodname_dotcom %}" (Em todo o GitHub) no menu suspenso da pesquisa.
- Para pesquisar em uma organização ou um repositório específico, navegue até a página da organização ou do repositório, digite o que está procurando no campo de pesquisa que fica na parte superior da página e pressione **Enter**.

{% note %}

**Notas:**

- {% data reusables.search.required_login %}
- Os sites do {% data variables.product.prodname_pages %} não são pesquisáveis no {% data variables.product.product_name %}. No entanto, você pode pesquisar o conteúdo da fonte, se ele existir no branch padrão de um repositório, usando a pesquisa de código. Para obter mais informações, consulte "[Pesquisar código](/articles/searching-code)". Para obter mais informações sobre o {% data variables.product.prodname_pages %}, consulte "[O que é o GitHub Pages?](/articles/what-is-github-pages/)"
- Atualmente, a nossa pesquisa não é compatível com correspondência exata.
- Sempre que você estiver pesquisando em arquivos de código, serão retornados apenas os dois primeiros resultados de cada arquivo.

{% endnote %}

Após a realização de uma pesquisa no {% data variables.product.product_name %}, é possível ordenar os resultados ou refiná-los ainda mais clicando em uma das linguagens na barra lateral. Para obter mais informações, consulte "[Ordenar os resultados da pesquisa](/articles/sorting-search-results)".

A pesquisa do {% data variables.product.product_name %} usa um cluster do ElasticSearch para indexar projetos toda vez que uma alteração é enviada por push ao {% data variables.product.product_name %}. Problemas e pull requests são indexados quando são criados ou modificados.

### Tipos de pesquisa no {% data variables.product.prodname_dotcom %}

Você pode pesquisar os seguintes tipos de informação em todos os repositórios públicos do {% data variables.product.product_name %} e em todos os repositórios privados do {% data variables.product.product_name %} aos quais você tem acesso:

- [Repositórios](/articles/searching-for-repositories)
- [Tópicos](/articles/searching-topics)
- [Problemas e pull requests](/articles/searching-issues-and-pull-requests)
- [Código](/articles/searching-code)
- [Commits](/articles/searching-commits)
- [Usuários](/articles/searching-users){% if currentVersion == "free-pro-team@latest" %}
- [Pacotes](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### Pesquisar usando uma interface visual

Como alternativa, é possível pesquisar o {% data variables.product.product_name %} usando a {% data variables.search.search_page_url %} ou a {% data variables.search.advanced_url %}.

A {% data variables.search.advanced_url %} fornece uma interface visual para construção de consultas de pesquisa. Você pode filtrar as pesquisas por diversos fatores, como o número de estrelas ou o número de bifurcações que um repositório tem. À medida que você preenche os campos de pesquisa avançada, sua consulta é automaticamente construída na barra de pesquisa superior.

![Pesquisa avançada](/assets/images/help/search/advanced_search_demo.gif)

### Pesquisar no {% data variables.product.prodname_enterprise %} e {% data variables.product.prodname_dotcom_the_website %} simultaneamente

Se você usar o {% data variables.product.prodname_enterprise %} e for integrante de uma organização do {% data variables.product.prodname_dotcom_the_website %} que usa o {% data variables.product.prodname_ghe_cloud %}, o administrador do site do {% data variables.product.prodname_enterprise %} pode habilitar o {% data variables.product.prodname_github_connect %} para que você possa pesquisar em ambos os ambientes ao mesmo tempo. Para obter mais informações, consulte "[Habilitar a {% data variables.product.prodname_unified_search %} entre o {% data variables.product.prodname_enterprise %} e o {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com)".

É possível pesquisar em ambos os ambientes apenas no {% data variables.product.prodname_enterprise %}. Para definir o escopo da pesquisa por ambiente, você pode usar uma opção de filtro na {% data variables.search.advanced_url %} ou pode usar o prefixo de pesquisa `environment:`. Para pesquisar apenas por conteúdo no {% data variables.product.prodname_enterprise %}, use a sintaxe de pesquisa `environment:local`. Para pesquisar apenas por conteúdo no {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.

O administrador do site do {% data variables.product.prodname_enterprise %} pode habilitar a {% data variables.product.prodname_unified_search %} para todos os repositórios públicos, todos os repositórios privados ou apenas determinados repositórios privados na organização do {% data variables.product.prodname_ghe_cloud %} conectado.

Se o administrador do site habilitar a {% data variables.product.prodname_unified_search %} em repositórios privados, você poderá pesquisar apenas em repositórios privados em que o administrador habilitou a {% data variables.product.prodname_unified_search %} e aos quais você tem acesso na organização do {% data variables.product.prodname_dotcom_the_website %} conectado. Os administradores do {% data variables.product.prodname_enterprise %} e os proprietários da organização no {% data variables.product.prodname_dotcom_the_website %} não podem pesquisar repositórios privados que pertencem à sua conta. Para pesquisar repositórios privados aplicáveis, você deve habilitar a pesquisa de repositório privado para suas contas pessoais no {% data variables.product.prodname_dotcom_the_website %} e no {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte "[Habilitar pesquisa de repositório privado do {% data variables.product.prodname_dotcom_the_website %} na sua conta do {% data variables.product.prodname_enterprise %}](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)".

### Leia mais

- "[Entender a sintaxe de pesquisa](/articles/understanding-the-search-syntax)"
- "[Pesquisar no GitHub](/articles/searching-on-github)"
