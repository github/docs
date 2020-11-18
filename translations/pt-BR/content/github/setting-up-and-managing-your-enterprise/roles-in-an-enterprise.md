---
title: Roles in an enterprise
intro: 'Everyone in an enterprise is a member of the enterprise. To control access to your enterprise''s settings and data, you can assign different roles to members of your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About roles in an enterprise

Everyone in an enterprise is a member of the enterprise. You can also assign administrative roles to members of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

For more information about adding people to your enterprise, see "{% if currentVersion == "free-pro-team@latest" %}[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[Authentication](/admin/authentication){% endif %}".

### Proprietário corporativo

Enterprise owners have complete control over the enterprise and can take every action, including:
- Gerenciar os administradores
- {% if currentVersion == "free-pro-team@latest" %}Adding and removing {% elsif currentVersion == "github-ae@latest" %}Managing{% endif %} organizations {% if currentVersion == "free-pro-team@latest" %}to and from {% elsif currentVersion == "github-ae@latest" %} in{% endif %} the enterprise
- Gerenciar as configurações da empresa
- Aplicar a política nas organizações
{% if currentVersion == "free-pro-team@latest" %}- Managing billing settings{% endif %}

Os proprietários corporativos não podem acessar as configurações ou o conteúdo da organização, a menos que sejam incluídos como proprietário da organização ou recebam acesso direto a um repositório de propriedade da organização. Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.

You can add as many enterprise owners as you'd like to your enterprise. {% if currentVersion == "free-pro-team@latest" %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

### Integrantes da empresa

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% if currentVersion == "free-pro-team@latest" %}, including billing settings{% endif %}.

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. Você pode ver os recursos aos quais cada pessoa tem acesso. For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)."

Para obter mais informações sobre as permissões da organização, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization)".

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's People tab, but are not enterprise members and do not have any access to the enterprise. Para obter mais informações sobre colaboradores externos, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization#outside-collaborators)".

{% if currentVersion == "free-pro-team@latest" %}

### Gerente de cobrança

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- Visualizar e gerenciar licenças de usuário, pacotes do {% data variables.large_files.product_name_short %} e outras configurações de cobrança
- Exibir uma lista dos gerentes de cobrança
- Adicionar ou remover outros gerentes de cobrança

Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. Os gerentes de cobrança devem ter uma conta pessoal no {% data variables.product.prodname_dotcom %}.

### Leia mais

- "[Sobre contas corporativas](/articles/about-enterprise-accounts)"

{% endif %}
