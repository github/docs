---
title: Funções da conta corporativa
intro: 'Para controlar o acesso às configurações e aos dados da conta corporativa, você pode atribuir diferentes funções para pessoas na conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obter mais informações sobre como incluir pessoas na conta corporativa, consulte "[Convidar pessoas para gerenciar a conta corporativa](/articles/inviting-people-to-manage-your-enterprise-account)."

### Sobre as funções da conta corporativa

As contas corporativas têm um conjunto de funções de administrador que podem ser atribuídas aos usuários da sua empresa. Cada função de administrador está associada a uma função empresarial e fornece permissão para a execução de tarefas específicas na conta corporativa.

{% data reusables.enterprise-accounts.enterprise-administrators %}

### Proprietário corporativo

Os proprietários corporativos têm controle total da conta corporativa e podem executar todas as ações, incluindo:
- Gerenciar os administradores
- Adicionar e remover organizações da empresa
- Gerenciar as configurações da empresa
- Aplicar a política nas organizações
- Gerenciar configurações de cobrança

Os proprietários corporativos não podem acessar as configurações ou o conteúdo da organização, a menos que sejam incluídos como proprietário da organização ou recebam acesso direto a um repositório de propriedade da organização. De forma similar, os proprietário das organizações na conta da empresa não têm acesso à conta corporativa, a menos que sejam incluídos como proprietários corporativos.

Você pode adicionar quantos proprietários corporativos desejar na conta corporativa. Os proprietários corporativos devem ter uma conta pessoal no {% data variables.product.prodname_dotcom %}. Como uma prática recomendada, inclua apenas algumas pessoas como proprietários corporativos para reduzir o risco para a empresa.

### Integrantes da empresa

Os integrantes das organizações de propriedade da conta corporativa são automaticamente integrantes da conta corporativa. Os integrantes podem colaborar em organizações e podem ser proprietários da organização, mas não podem acessar e definir as configurações da conta corporativa, incluindo as configurações de cobrança.

As pessoas na conta corporativa podem ter diferentes níveis de acesso às organizações de propriedade da conta corporativa e aos repositórios dessas organizações. Você pode ver os recursos aos quais cada pessoa tem acesso. Para obter mais informações, consulte "[Exibir pessoas na conta corporativa](/articles/viewing-people-in-your-enterprise-account)".

Para obter mais informações sobre as permissões da organização, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization)".

Embora estejam listadas na guia People (Pessoas) da conta corporativa, as pessoas com acesso de colaborador externo aos repositórios pertencentes à organização não são integrantes da empresa nem têm acesso à conta corporativa. Para obter mais informações sobre colaboradores externos, consulte "[Níveis de permissão da organização](/articles/permission-levels-for-an-organization#outside-collaborators)".

### Gerente de cobrança

Os gerentes de cobrança podem acessar somente as configurações de cobrança da conta corporativa. Os gerentes de cobrança da conta corporativa podem:
- Visualizar e gerenciar licenças de usuário, pacotes do {% data variables.large_files.product_name_short %} e outras configurações de cobrança
- Exibir uma lista dos gerentes de cobrança
- Adicionar ou remover outros gerentes de cobrança

Os gerentes de cobrança não têm acesso às organizações ou aos repositórios da conta corporativa, nem podem adicionar ou remover proprietários corporativos. Os gerentes de cobrança devem ter uma conta pessoal no {% data variables.product.prodname_dotcom %}.

### Leia mais

- "[Sobre contas corporativas](/articles/about-enterprise-accounts)"
