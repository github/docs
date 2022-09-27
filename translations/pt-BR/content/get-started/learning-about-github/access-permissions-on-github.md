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
shortTitle: Access permissions
ms.openlocfilehash: 32db1949cbc110559023f719682caed0319aae9e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126695'
---
## Sobre as permissões de acesso em {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

As funções funcionam de forma diferente para diferentes tipos de contas. Para obter mais informações sobre contas, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

## Contas pessoais

Um repositório pertencente a uma conta pessoal tem dois níveis de permissão: *proprietário do repositório* e *colaboradores*. Para obter mais informações, confira "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository)".

## Contas da organização

Os membros da organização podem ter as funções *proprietário*{% ifversion fpt or ghec %}, *gerente de cobrança* {% endif %} ou *membro*. Os proprietários têm acesso administrativo completo à sua organização{% ifversion fpt or ghec %}, enquanto os gerentes de cobrança podem gerenciar as configurações de cobrança{% endif %}. O integrante é a função padrão de todos os outros. Você pode gerenciar as permissões de acesso para vários integrantes por vez com equipes. Para obter mais informações, consulte:
- "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Permissões de quadro de projetos para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Sobre as equipes](/articles/about-teams)"

## Conta corporativa

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Para obter mais informações sobre as permissões para contas corporativas, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %} Os *proprietários da empresa* têm poder final sobre a conta corporativa e podem executar todas as ações na conta corporativa.{% ifversion ghec or ghes %} Os *gerentes de cobrança* podem gerenciar as configurações de cobrança da sua conta corporativa.{% endif %} Os membros e os colaboradores externos de organizações pertencentes à sua conta corporativa são automaticamente membros da conta corporativa, embora não tenham acesso à própria conta corporativa ou às configurações dela. Para obter mais informações, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghec %} Se uma empresa usar os {% data variables.product.prodname_emus %}, os membros serão provisionados como novas contas pessoais no {% data variables.product.prodname_dotcom %} e serão totalmente gerenciados pelo provedor de identidade. O {% data variables.product.prodname_managed_users %} tem acesso somente leitura a repositórios que não fazem parte da sua empresa e não podem interagir com usuários que não são também integrantes da empresa. Nas organizações pertencentes à empresa, é possível conceder ao {% data variables.product.prodname_managed_users %} os mesmos níveis de acesso granular disponíveis para organizações regulares. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
{% endif %} {% endif %}

## Leitura adicional

- "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
