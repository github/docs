---
title: Exportando as informações de integrante para a sua organização
intro: 'Você pode exportar informações sobre os integrantes da sua organização, diretamente da interface do usuário.'
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145093253'
---
Você pode exportar informações sobre os integrantes da sua organização. Isso é útil se você deseja realizar uma auditoria aos usuários dentro da organização.

As informações exportadas incluem:
- Detalhes do nome de usuário e exibição
- Se o usuário tem autenticação de dois fatores habilitada
- Se a associação é pública ou privada
- Se o usuário é um proprietário ou integrante da organização
- Datetime da última atividade do usuário (para ver a lista completa de atividades relevantes, confira "[Como gerenciar usuários inativos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)")
- O NameID do SAML do usuário, se disponível

Você pode obter informações dos membros diretamente da interface de usuário {% data variables.product.product_name %} ou usando APIs. Este artigo explica como obter informações dos membros de dentro de {% data variables.product.product_name %}.

Para obter mais informações sobre as APIs, confira nossa documentação da [API do GraphQL](/graphql/reference/objects#user) e da [API REST](/rest/reference/users) sobre os usuários.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
