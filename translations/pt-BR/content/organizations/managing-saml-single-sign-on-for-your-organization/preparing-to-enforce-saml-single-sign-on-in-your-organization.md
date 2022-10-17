---
title: Preparar para exigir o logon único SAML na organização
intro: 'Antes de exigir o logon único SAML na organização, você deve verificar a associação da organização e configurar as definições de conexão para seu provedor de identidade.'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to enforce SAML SSO
ms.openlocfilehash: 6457b44f5a5debd005b8878b2f31f81c4341ab15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097240'
---
{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} antes de aplicar o SAML SSO na sua organização, você deverá revisar a associação da organização, habilitar o SAML SSO e revisar o acesso SAML dos integrantes da organização. Para obter mais informações, consulte o seguinte.

| Tarefa | Mais informações |
| :- | :- |
| Adicionar ou remover integrantes da sua organização | <ul><li>"[Como convidar usuários para ingressar na sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[Como remover um membro da organização](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| Conecte seu IdP à sua organização habilitando o SAML SSO | <ul><li>"[Como conectar o provedor de identidade à sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[Como habilitar e testar o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| Verificar se os membros da organização se conectaram e vincularam as respectivas contas ao IdP | <ul><li>"[Como ver e gerenciar o acesso do SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

Após concluir estas tarefas, você pode aplicar o SAML SSO SAML para a sua organização. Para obter mais informações, confira "[Como impor o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}
