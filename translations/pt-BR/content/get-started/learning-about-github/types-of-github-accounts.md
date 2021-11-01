---
title: Tipos de contas do GitHub
intro: 'Sua conta de usuário é o que identifica você no {% data variables.product.product_location %}. Your user account can be a member of any number of organizations.{% ifversion fpt or ghec %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% ifversion fpt or ghec %}
Para uma lista completa de recursos para cada {% data variables.product.product_name %} produto, consulte produtos do "[{% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)."
{% endif %}

## Contas de usuário pessoais

Cada pessoa que utiliza {% data variables.product.product_location %} tem sua própria conta de usuário, que inclui:

{% ifversion fpt or ghec %}

- Repositórios públicos e privados ilimitados com o {% data variables.product.prodname_free_user %}
- Colaboradores ilimitados com {% data variables.product.prodname_free_user %}
- Recursos adicionais para repositórios privados com o {% data variables.product.prodname_pro %}
- Capacidade de [convidar colaboradores do repositório](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- [Colaboradores](/articles/permission-levels-for-a-user-account-repository) e repositórios ilimitados
- Capacidade de [adicionar colaboradores do repositório ilimitados](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% ifversion fpt or ghec %}

{% tip %}

**Dicas**:

- Você pode usar uma conta para várias finalidades, como uso pessoal e uso profissional. Não é recomendável criar mais de uma conta. Para obter mais informações, consulte "[Fazer merge de várias contas de usuário](/articles/merging-multiple-user-accounts)".
- Embora as contas de usuário sejam destinadas a seres humanos, você pode conceder uma a um robô, como um bot de integração contínua, se necessário.

{% endtip %}

{% else %}

{% tip %}

**Dica**: embora as contas de usuário sejam destinadas a seres humanos, você pode conceder uma a um robô, como um bot de integração contínua, se necessário.

{% endtip %}

{% endif %}

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, em vez de usar sua conta pessoal, os integrantes de um {% data variables.product.prodname_emu_enterprise %} são contas fornecidas que usam o provedor de identidade da empresa (IdP). {% data variables.product.prodname_managed_users_caps %} efetua a autenticação usando seu IdP ao invés de um usuário e senha de {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_managed_users_caps %} só pode interagir com usuários, repositórios e organizações que fazem parte das suas empresas. {% data variables.product.prodname_managed_users_caps %} tem acesso somente leitura ao restante de {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
{% endif %}

## Contas da organização

As organizações são contas compartilhadas, onde grupos de pessoas podem colaborar em vários projetos de uma vez. Os proprietários e administradores podem gerenciar o acesso de integrantes aos dados e projetos da organização com recursos avançados administrativos e de segurança.

{% data reusables.organizations.organizations_include %}

{% ifversion fpt or ghec %}

## Contas corporativas

Com contas corporativas, é possível gerenciar centralmente a política e a cobrança referentes a várias organizações do {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Leia mais

{% ifversion fpt or ghec %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- "[Criar uma conta de organização](/articles/creating-a-new-organization-account)"
