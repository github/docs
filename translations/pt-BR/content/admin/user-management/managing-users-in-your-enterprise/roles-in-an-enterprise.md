---
title: Funções em uma empresa
intro: 'Todas as pessoas em uma empresa são integrantes da empresa. Para controlar o acesso às configurações e dados da sua empresa, você pode atribuir diferentes funções aos integrantes da sua empresa.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178452'
---
## Sobre funções em uma empresa

Todas as pessoas em uma empresa são integrantes da empresa. Você também pode atribuir funções administrativas aos integrantes da sua empresa. Cada função de administrador está associada a uma função empresarial e fornece permissão para a execução de tarefas específicas na empresa.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} Se a sua empresa não usar os {% data variables.product.prodname_emus %}, você poderá convidar uma pessoa para uma função administrativa por meio de uma conta de usuário do {% data variables.product.product_name %} controlada por ela. Para obter mais informações, confira "[Como convidar pessoas para gerenciar sua empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

Em uma empresa que usa {% data variables.product.prodname_emus %}, novos proprietários e integrantes devem ser fornecidos por meio de seu provedor de identidade. Os proprietários corporativos e proprietários da organização não podem adicionar novos integrantes ou proprietários à empresa usando {% data variables.product.prodname_dotcom %}. É possível selecionar a função corporativa do integrante usando seu IdP e este não pode ser alterado em {% data variables.product.prodname_dotcom %}. Você pode selecionar a função de um integrante em uma organização em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
{% else %} Para obter mais informações sobre como adicionar pessoas à sua empresa, confira "[Autenticação](/admin/authentication)".

{% endif %}

## Proprietários de empresas

Os proprietários corporativos têm controle total da empresa e podem executar todas as ações, incluindo:
- Gerenciar os administradores
- {% ifversion ghec %}Como adicionar e remover {% elsif ghae or ghes %}Como gerenciar{% endif %} organizações {% ifversion ghec %}de/para {% elsif ghae or ghes %} na{% endif %} empresa{% ifversion remove-enterprise-members %}
- Removendo integrantes da empresa de todas as organizações pertencentes à empresa{% endif %}
- Gerenciar as configurações da empresa
- Como impor uma política entre organizações {% ifversion ghec %}– Como gerenciar configurações de cobrança{% endif %}

{% ifversion enterprise-owner-join-org %} Por padrão, os proprietários da empresa não têm acesso às configurações nem ao conteúdo da organização. Para obter acesso, os proprietários das empresas podem se juntar a qualquer organização pertencente à sua empresa. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".

Os proprietários de organizações na sua empresa não têm acesso à empresa propriamente dita, a não ser que você os torne proprietários da empresa.
{% else %} Os proprietários da empresa não podem acessar as configurações nem o conteúdo da organização, a menos que sejam incluídos como proprietário da organização ou recebam acesso direto a um repositório pertencente à organização. Da mesma forma, os proprietários de organizações na sua empresa não têm acesso à empresa propriamente dita, a não ser que você os torne proprietários da empresa.
{% endif %}

Um proprietário da empresa só consumirá uma licença se for um proprietário ou integrante de pelo menos uma organização dentro da empresa. Mesmo que o proprietário de uma empresa tenha uma função em várias organizações, ele consumirá uma única licença. {% ifversion ghec %}Os proprietários da empresa precisam ter uma conta pessoal no {% data variables.product.prodname_dotcom %}.{% endif %} Como melhor prática, sugerimos que você converta apenas algumas pessoas da sua empresa em proprietários, a fim de reduzir o risco para a sua empresa.

## Integrantes da empresa

Os integrantes das organizações pertencentes à sua empresa também são automaticamente integrantes da empresa. Os membros podem colaborar em organizações e podem ser proprietários da organização, mas não podem acessar nem definir as configurações da empresa{% ifversion ghec %}, incluindo as configurações de cobrança{% endif %}.

As pessoas na sua empresa podem ter diferentes níveis de acesso às várias organizações pertencentes à sua empresa e aos repositórios dessas organizações. Você pode ver os recursos aos quais cada pessoa tem acesso. Para obter mais informações, confira "[Como ver os funcionários da sua empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)".

Para obter mais informações sobre as permissões no nível da organização, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Pessoas com acesso de colaborador externo aos repositórios pertencentes à sua organização também estão listadas na aba Pessoas da sua empresa, mas não são integrantes da empresa e não têm qualquer acesso à mesma. Para obter mais informações sobre colaboradores externos, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% ifversion ghec %}

## Gerentes de cobrança

Os gerentes de cobrança só têm acesso às configurações de cobrança da sua empresa. Gerentes de cobrança para a sua empresa podem:
- Visualizar e gerenciar licenças de usuário, pacotes do {% data variables.large_files.product_name_short %} e outras configurações de cobrança
- Exibir uma lista dos gerentes de cobrança
- Adicionar ou remover outros gerentes de cobrança

Os gerentes de cobrança só consumirão uma licença se forem um proprietário ou integrante de pelo menos uma organização dentro da empresa. Os gerentes de cobrança não têm acesso a organizações ou repositórios na sua empresa e não podem adicionar ou remover os proprietários da empresa. Os gerentes de cobrança devem ter uma conta pessoal no {% data variables.product.prodname_dotcom %}.

## Sobre titularidades de suporte

{% data reusables.enterprise-accounts.support-entitlements %}

## Leitura adicional

- "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)"

{% endif %}
