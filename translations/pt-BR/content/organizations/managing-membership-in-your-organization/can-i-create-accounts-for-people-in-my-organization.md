---
title: Posso criar contas para as pessoas na minha organização?
intro: 'Embora você possa adicionar usuários a uma organização que criou, não é possível criar contas pessoais em nome de outra pessoa.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093255'
---
## Sobre contas pessoais

Como você acessa uma organização entrando em uma conta pessoal, cada um dos integrantes da equipe precisa criar a própria conta pessoal. Depois que você tiver nomes de usuário para cada pessoa que deseja adicionar à sua organização, você poderá adicionar os usuários às equipes.

{% ifversion fpt or ghec %} {% ifversion fpt %}As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem{% else %}Você pode{% endif %} usar o logon único do SAML para gerenciar centralmente o acesso que as contas pessoais têm aos recursos da organização por meio de um IdP (provedor de identidade). Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Você também pode considerar {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Adicionar usuários à organização

1. Forneça instruções a cada pessoa para [criar uma conta pessoal](/articles/signing-up-for-a-new-github-account).
2. Peça o nome de usuário de cada pessoa a quem deseja conceder associação à organização.
3. [Convide as novas contas pessoais para ingressar](/articles/inviting-users-to-join-your-organization) na sua organização. Use [funções da organização](/articles/permission-levels-for-an-organization) e [permissões do repositório](/articles/repository-permission-levels-for-an-organization) para limitar o acesso de cada conta.
