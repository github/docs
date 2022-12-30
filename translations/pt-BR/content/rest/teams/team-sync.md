---
title: Sincronização de equipe
intro: 'A API de Sincronização da Equipe permite que você gerencie as conexões entre equipes de {% data variables.product.product_name %} e grupos de provedor de identidade externo (IdP).'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067159'
---
## Sobre a API de Sincronização de Equipe

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe. O token que você usa para efetuar a autenticação também deverá ser autorizado para uso com o provedor de IdP (SSO). Para obter mais informações, confira "[Como autorizar um token de acesso pessoal para uso com uma organização de logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

Você pode gerenciar os integrantes da equipe do GitHub através do seu IdP com a sincronização de equipe. A sincronização de equipe deve estar habilitada para usar a API de sincronização de equipe. Para obter mais informações, confira "[Como sincronizar equipes entre o seu provedor de identidade e o GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% note %}

**Observação:** a API de Sincronização da Equipe não pode ser usada com os {% data variables.product.prodname_emus %}. Para saber mais sobre como gerenciar uma {% data variables.product.prodname_emu_org %}, confira "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
