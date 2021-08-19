---
title: Funções em uma empresa
intro: 'Todas as pessoas em uma empresa são integrantes da empresa. Para controlar o acesso às configurações e dados da sua empresa, você pode atribuir diferentes funções aos integrantes da sua empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### Sobre funções em uma empresa

Todas as pessoas em uma empresa são integrantes da empresa. Você também pode atribuir funções administrativas aos integrantes da sua empresa. Cada função de administrador está associada a uma função empresarial e fornece permissão para a execução de tarefas específicas na empresa.

{% data reusables.enterprise-accounts.enterprise-administrators %}

Para mais informações sobre como adicionar pessoas à sua empresa, consulte "{% if currentVersion == "free-pro-team@latest" %}[Convidar pessoas para gerenciar a sua empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[Autenticação](/admin/authentication){% endif %}".

### Proprietário corporativo

Os proprietários corporativos têm controle total da empresa e podem executar todas as ações, incluindo:
- Gerenciar os administradores
- {% if currentVersion == "free-pro-team@latest" %}Adicionar e remover {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Managing{% endif %} organizações{% if currentVersion == "free-pro-team@latest" %}para e de {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} na{% endif %} empresa
- Gerenciar as configurações da empresa
- Aplicar a política nas organizações
{% if currentVersion == "free-pro-team@latest" %}- Managing billing settings{% endif %}

Os proprietários corporativos não podem acessar as configurações ou o conteúdo da organização, a menos que sejam incluídos como proprietário da organização ou recebam acesso direto a um repositório de propriedade da organização. Da mesma forma, os proprietários de organizações na sua empresa não têm acesso à empresa propriamente dita, a não ser que você os torne proprietários da empresa.

Um proprietário da empresa só consumirá uma licença se for um proprietário ou integrante de pelo menos uma organização dentro da empresa. {% if currentVersion == "free-pro-team@latest" %}Os proprietários de empresas devem ter uma conta pessoal em {% data variables.product.prodname_dotcom %}.{% endif %} Como prática recomendada, sugerimos que você converta apenas algumas pessoas da sua empresa em proprietários para reduzir o risco para a sua empresa.

### Integrantes da empresa

Os integrantes das organizações pertencentes à sua empresa também são automaticamente integrantes da empresa. Os integrantes podem colaborar em organizações e podem ser proprietários de organizações, mas os integrantes não podem acessar ou definir as configurações corporativas{% if currentVersion == "free-pro-team@latest" %}, incluindo as configurações de cobrança{% endif %}.

As pessoas na sua empresa podem ter diferentes níveis de acesso às várias organizações pertencentes à sua empresa e aos repositórios dessas organizações. Você pode ver os recursos aos quais cada pessoa tem acesso. Para obter mais informações, consulte "[Visualizar pessoas na sua empresa](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)".

Para obter mais informações sobre as permissões da organização, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization)".

Pessoas com acesso de colaborador externo aos repositórios pertencentes à sua organização também estão listadas na aba Pessoas da sua empresa, mas não são integrantes da empresa e não têm qualquer acesso à mesma. Para obter mais informações sobre colaboradores externos, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization#outside-collaborators)".

{% if currentVersion == "free-pro-team@latest" %}

### Gerente de cobrança

Os gerentes de cobrança só têm acesso às configurações de cobrança da sua empresa. Gerentes de cobrança para a sua empresa podem:
- Visualizar e gerenciar licenças de usuário, pacotes do {% data variables.large_files.product_name_short %} e outras configurações de cobrança
- Exibir uma lista dos gerentes de cobrança
- Adicionar ou remover outros gerentes de cobrança

Os gerentes de cobrança só consumirão uma licença se forem um proprietário ou integrante de pelo menos uma organização dentro da empresa. Os gerentes de cobrança não têm acesso a organizações ou repositórios na sua empresa e não podem adicionar ou remover os proprietários da empresa. Os gerentes de cobrança devem ter uma conta pessoal no {% data variables.product.prodname_dotcom %}.

### About support entitlements

{% data reusables.enterprise-accounts.support-entitlements %}

### Leia mais

- "[Sobre contas corporativas](/articles/about-enterprise-accounts)"

{% endif %}
