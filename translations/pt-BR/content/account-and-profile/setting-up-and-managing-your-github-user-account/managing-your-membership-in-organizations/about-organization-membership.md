---
title: Sobre associação à organização
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083727"
---
Um proprietário da organização pode convidar você para ingressar na organização dele como um integrante, gerente de cobrança ou proprietário. Um proprietário da organização ou integrante com privilégios administrativos para um repositório pode convidar você para colaborar em um ou mais repositórios como um colaborador externo. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

É possível acessar organizações das quais você é integrante em sua página de perfil. Para obter mais informações, confira "[Como acessar uma organização](/articles/accessing-an-organization)".

Quando você aceita um convite para ingressar em uma organização, os proprietários da organização podem ver:

- Suas informações públicas de perfil
- Seu endereço de email
- Se você tem a autorização de dois fatores habilitada
- Os repositórios aos quais você tem acesso dentro da organização e seu nível de acesso
- Determinadas atividades dentro da organização
- País de origem da solicitação
- Seu endereço IP

Para obter mais informações, confira a <a href="/articles/github-privacy-statement/" class="dotcom-only">política de privacidade do {% data variables.product.prodname_dotcom %}</a>.

  {% note %}

  **Observação:** os proprietários não podem ver os endereços IP dos membros no log de auditoria da organização. No caso de um incidente de segurança, como comprometimento de uma conta ou compartilhamento acidental de dados confidenciais, os proprietários da organização podem solicitar detalhes de acesso a repositórios privados. As informações que retornamos podem incluir seu endereço IP.

  {% endnote %}

Por padrão, a visibilidade de sua associação à organização é definida como privada. Você pode optar por divulgar associações individuais à organização no seu perfil. Para obter mais informações, confira "[Como divulgar ou ocultar a associação à organização](/articles/publicizing-or-hiding-organization-membership)".

{% ifversion fpt or ghec %}

Se sua organização pertence a uma conta corporativa, você automaticamente é um integrante da conta corporativa e está visível aos proprietários da conta corporativa. Para obter mais informações, confira "[Sobre as contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% endif %}

É possível ter uma organização a qualquer momento. Para obter mais informações, confira "[Como remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization)".

## <a name="further-reading"></a>Leitura adicional

- "[Sobre as organizações](/articles/about-organizations)"
- "[Como gerenciar sua associação em organizações](/articles/managing-your-membership-in-organizations)"
