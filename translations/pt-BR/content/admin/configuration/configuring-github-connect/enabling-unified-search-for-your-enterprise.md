---
title: Habilitando a pesquisa unificada para a sua empresa
shortTitle: Pesquisa unificada
intro: 'Você pode permitir que os usuários incluam repositórios em {% data variables.product.prodname_dotcom_the_website %} nos resultados de pesquisa quando pesquisarem em {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

## Sobre o {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

Ao habilitar a pesquisa unificada, os usuários podem ver os resultados de pesquisa de conteúdo em {% data variables.product.prodname_dotcom_the_website %} quando pesquisarem em {% data variables.product.product_location %}{% ifversion ghae %} em {% data variables.product.prodname_ghe_managed %}{% endif %}.

Você pode optar por permitir resultados de pesquisa para repositórios públicos em {% data variables.product.prodname_dotcom_the_website %} e você pode optar separadamente por permitir resultados de pesquisa para repositórios privados em {% data variables.product.prodname_ghe_cloud %}. Se você habilitar a pesquisa unificada para repositórios privados, os usuários só poderão pesquisar repositórios privados aos quais eles têm acesso e que são propriedade da organização conectada ou da conta corporativa. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)".

Os usuários nunca poderão pesquisar em {% data variables.product.product_location %} a partir de {% data variables.product.prodname_dotcom_the_website %}, mesmo se tiverem acesso aos dois ambientes.

Após habilitar a pesquisa unificada de {% data variables.product.product_location %}, antes que os usuários individuais possam ver os resultados da pesquida de repositórios privados em {% data variables.product.prodname_dotcom_the_website %} em {% data variables.product.product_location %}, cada usuário também deve conectar sua conta de usuário em {% data variables.product.product_name %} a uma conta de usuário em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Habilitando a pesquisa de repositório {% data variables.product.prodname_dotcom_the_website %} na sua conta corporativa privada](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

A pesquisa via APIs REST e GraphQL não inclui resultados do {% data variables.product.prodname_dotcom_the_website %}. Não há suporte para a pesquisa avançada e a pesquisa de wikis no {% data variables.product.prodname_dotcom_the_website %}.

## Habilitar o {% data variables.product.prodname_unified_search %}

Antes de você poder habilitar {% data variables.product.prodname_unified_search %}, você deverá habilitar {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Gerenciando {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Efetue o login em {% data variables.product.product_location %} e {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "Usuários podem pesquisarh {% data variables.product.prodname_dotcom_the_website %}", use the menu suspenso e clique em **Habilitado**. ![Habilitar a opção de pesquisa no menu suspenso de pesquisa do GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Como alternativa, em "Os usuários podem pesquisar repositórios privados em {% data variables.product.prodname_dotcom_the_website %}", use o menu suspenso e clique em **Habilitado**. ![Habilitar a opção de pesquisa em repositórios privados no menu suspenso de pesquisa do GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
