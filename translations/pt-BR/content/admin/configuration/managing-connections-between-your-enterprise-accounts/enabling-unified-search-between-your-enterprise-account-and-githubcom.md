---
title: Habilitar a pesquisa unificada entre a sua conta corporativa e o GitHub.com
shortTitle: Habilitar pesquisa unificada
intro: 'Após habilitar a opção {% data variables.product.prodname_github_connect %}, você poderá permitir a pesquisa de {% data variables.product.prodname_dotcom_the_website %} para os integrantes da sua sua empresa em {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

{% data reusables.github-connect.beta %}

Ao habilitar a pesquisa unificada, os usuários poderão visualizar os resultados da pesquisa de conteúdo público e privado em {% data variables.product.prodname_dotcom_the_website %} ao pesquisar em {% data variables.product.product_location %}{% ifversion ghae %} em {% data variables.product.prodname_ghe_managed %}{% endif %}.

Os usuários não conseguirão pesquisar na {% data variables.product.product_location %} pelo {% data variables.product.prodname_dotcom_the_website %}, mesmo se tiverem acesso aos dois ambientes. Eles só poderão pesquisar nos repositórios privados em que você habilitou a {% data variables.product.prodname_unified_search %} e não terão acesso às organizações conectadas do {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Sobre a pesquisa em {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" e "[Habilitando uma pesquisa de repositório privado de {% data variables.product.prodname_dotcom_the_website %} na sua conta corporativa](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

A pesquisa via APIs REST e GraphQL não inclui resultados do {% data variables.product.prodname_dotcom_the_website %}. Não há suporte para a pesquisa avançada e a pesquisa de wikis no {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "Users can search {% data variables.product.prodname_dotcom_the_website %}" (Usuários podem pesquisar no {% data variables.product.prodname_dotcom_the_website %}), use o menu suspenso e clique em **Enabled** (Habilitado). ![Habilitar a opção de pesquisa no menu suspenso de pesquisa do GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Em "Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}" (Usuários podem pesquisar em repositórios privados no {% data variables.product.prodname_dotcom_the_website %}), use o menu suspenso e clique em **Enabled** (Habilitado). ![Habilitar a opção de pesquisa em repositórios privados no menu suspenso de pesquisa do GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## Leia mais

- "[Conectando a sua conta corporativa a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

