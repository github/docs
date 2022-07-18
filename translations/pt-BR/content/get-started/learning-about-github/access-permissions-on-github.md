---
title: Permissões de acesso no GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Com as funções, você pode controlar quem tem acesso às suas contas e recursos em {% data variables.product.product_name %} bem como o nível de acesso de cada pessoa.'
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

## Sobre as permissões de acesso em {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %}

As funções funcionam de forma diferente para diferentes tipos de contas. Para obter mais informações sobre as contas, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

## Contas pessoais

Um repositório pertencente a uma conta pessoal tem dois níveis de permissão: o *proprietário do repositório* e *colaboradores*. Para obter mais informações, consulte "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository)".

## Contas da organização

Os integrantes da organização podem ter funções de *proprietário*{% ifversion fpt or ghec %}, *gerente de cobrança*{% endif %} ou *integrante*. Os proprietários têm acesso administrativo completo à sua organização{% ifversion fpt or ghec %}, enquanto os gerentes de cobrança podem gerenciar configurações de cobrança{% endif %}. O integrante é a função padrão de todos os outros. Você pode gerenciar as permissões de acesso para vários integrantes por vez com equipes. Para obter mais informações, consulte:
- "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Sobre equipes](/articles/about-teams)"

## Contas corporativas

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %}

Para obter mais informações sobre as permissões das contas corporativas, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Os proprietários de empresas* tem poder definitivo sobre a conta corporativa e pode tomar todas as ações na conta corporativa.{% ifversion ghec or ghes %} *Os gerentes de cobrança* podem gerenciar as configurações de cobrança da conta corporativa.{% endif %} Os integrantes e colaboradores externos de organizações pertencentes à conta da empresa são automaticamente integrantes da conta corporativa, embora não tenham acesso à conta corporativa propriamente dita ou às suas configurações. Para obter mais informações, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghec %}
Se uma empresa usar {% data variables.product.prodname_emus %}, serão fornecidos novos os integrantes como novas contas pessoais em {% data variables.product.prodname_dotcom %} e serão totalmente gerenciados pelo provedor de identidade. O {% data variables.product.prodname_managed_users %} tem acesso somente leitura a repositórios que não fazem parte da sua empresa e não podem interagir com usuários que não são também integrantes da empresa. Nas organizações pertencentes à empresa, é possível conceder ao {% data variables.product.prodname_managed_users %} os mesmos níveis de acesso granular disponíveis para organizações regulares. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}
{% endif %}

## Leia mais

- "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
