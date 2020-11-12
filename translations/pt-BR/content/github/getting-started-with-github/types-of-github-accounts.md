---
title: Tipos de contas do GitHub
intro: 'Sua conta de usuário é o que identifica você no {% data variables.product.product_location %}. A sua conta de usuário pode ser integrante de qualquer quantidade de organizações{% if currentVersion == "free-pro-team@latest" %} As organizações podem pertencer às contas corporativas.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
Para obter uma lista completa de recursos para cada
produto de {% data variables.product.product_name %}, consulte "[ produtos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)."
{% endif %}

### Contas de usuário pessoais

Cada pessoa que utiliza {% data variables.product.product_location %} tem sua própria conta de usuário, que inclui:

{% if currentVersion == "free-pro-team@latest" %}

- Repositórios públicos e privados ilimitados com o {% data variables.product.prodname_free_user %}
- Colaboradores ilimitados com {% data variables.product.prodname_free_user %}
- Recursos adicionais para repositórios privados com o {% data variables.product.prodname_pro %}
- Capacidade de [convidar colaboradores do repositório](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- [Colaboradores](/articles/permission-levels-for-a-user-account-repository) e repositórios ilimitados
- Capacidade de [adicionar colaboradores do repositório ilimitados](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

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

### Contas da organização

As organizações são contas compartilhadas, onde grupos de pessoas podem colaborar em vários projetos de uma vez. Os proprietários e administradores podem gerenciar o acesso de integrantes aos dados e projetos da organização com recursos avançados administrativos e de segurança.

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Contas corporativas

Com contas corporativas, é possível gerenciar centralmente a política e a cobrança referentes a várias organizações do {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Inscrevendo-se em uma nova conta {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)"
- "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- "[Criar uma conta de organização](/articles/creating-a-new-organization-account)"
