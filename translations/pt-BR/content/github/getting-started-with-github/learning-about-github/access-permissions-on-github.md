---
title: Permissões de acesso no GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
intro: 'Embora você possa conceder acesso de leitura/gravação a colaboradores em um repositório pessoal, os integrantes de uma organização podem ter permissões de acesso mais granulares para os repositórios da organização.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Permissions
  - Accounts
---
### Contas de usuário pessoais

Um repositório pertencente a uma conta de usuário tem dois níveis de permissão: o *proprietário do repositório* e *colaboradores*. Para obter mais informações, consulte "[Níveis de permissão para um repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)".

### Contas da organização

Os integrantes da organização podem ter funções de *proprietário*{% if currentVersion == "free-pro-team@latest" %}, *gerente de cobrança*,{% endif %} ou *integrante*. Os proprietários têm acesso pleno à organização{% if currentVersion == "free-pro-team@latest" %}, enquanto os gerentes de cobrança podem gerenciar as configurações de cobrança{% endif %}. O integrante é a função padrão de todos os outros. Você pode gerenciar as permissões de acesso para vários integrantes por vez com equipes. Para obter mais informações, consulte:
- "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization)"
- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
- "[Sobre equipes](/articles/about-teams)"

{% if currentVersion == "free-pro-team@latest" %}

### Contas corporativas

Os *proprietários de empresa* têm poder absoluto sobre a conta corporativa e podem realizar todas as ações nela. Os *gerentes de cobrança* podem gerenciar as configurações de cobrança da sua conta corporativa. Os integrantes e colaboradores externos das organizações pertencentes à sua conta corporativa são automaticamente integrantes da conta corporativa, embora eles não tenham acesso à conta corporativa em si nem às configurações dela. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)".

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Leia mais

- "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
