---
title: Permissões de acesso no GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Embora você possa conceder acesso de leitura/gravação a colaboradores em um repositório pessoal, os integrantes de uma organização podem ter permissões de acesso mais granulares para os repositórios da organização.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Permissões de acesso
---

## Contas de usuário pessoais

Um repositório pertencente a uma conta de usuário tem dois níveis de permissão: o *proprietário do repositório* e *colaboradores*. Para obter mais informações, consulte "[Níveis de permissão para um repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)".

## Contas da organização

Os integrantes da organização podem ter funções de *proprietário*{% ifversion fpt or ghec %}, *gerente de cobrança*{% endif %} ou *integrante*. Os proprietários têm acesso administrativo completo à sua organização{% ifversion fpt or ghec %}, enquanto os gerentes de cobrança podem gerenciar configurações de cobrança{% endif %}. O integrante é a função padrão de todos os outros. Você pode gerenciar as permissões de acesso para vários integrantes por vez com equipes. Para obter mais informações, consulte:
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Sobre equipes](/articles/about-teams)"

{% ifversion fpt or ghec %}

## Contas corporativas

Os *proprietários de empresa* têm poder absoluto sobre a conta corporativa e podem realizar todas as ações nela. Os *gerentes de cobrança* podem gerenciar as configurações de cobrança da sua conta corporativa. Os integrantes e colaboradores externos das organizações pertencentes à sua conta corporativa são automaticamente integrantes da conta corporativa, embora eles não tenham acesso à conta corporativa em si nem às configurações dela. Para obter mais informações, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Se uma empresa usar {% data variables.product.prodname_emus %}, serão fornecidos novos os integrantes como novas contas de usuário em {% data variables.product.prodname_dotcom %} e serão totalmente gerenciados pelo provedor de identidade. O {% data variables.product.prodname_managed_users %} tem acesso somente leitura a repositórios que não fazem parte da sua empresa e não podem interagir com usuários que não são também integrantes da empresa. Nas organizações pertencentes à empresa, é possível conceder ao {% data variables.product.prodname_managed_users %} os mesmos níveis de acesso granular disponíveis para organizações regulares. For more information, see "[About {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation{% else %}."{% endif %}

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Leia mais

- "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
