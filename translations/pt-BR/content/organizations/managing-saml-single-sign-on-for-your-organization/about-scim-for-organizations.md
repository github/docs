---
title: Sobre o SCIM para organizações
intro: 'Com o Sistema para gerenciamento de identidades entre domínios (SCIM, System for Cross-domain Identity Management), os administradores podem automatizar a troca de informações de identidade do usuário entre sistemas.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065449'
---
## Sobre o SCIM para organizações

Se sua organização usa o [SSO do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on), você pode implementar o SCIM para adicionar, gerenciar e remover o acesso dos membros da organização ao {% data variables.product.product_name %}. Por exemplo, um administrador pode desprovisionar um integrante da organização usando SCIM e remover automaticamente o integrante da organização.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Se você usar o SSO do SAML sem implementar o SCIM, não terá o desprovisionamento automático. Quando as sessões dos membros da organização expiram depois que o acesso é removido do IdP, eles não são automaticamente removidos da organização. Os tokens autorizados permitem acesso à organização mesmo depois que as sessões expiram. Se o SCIM não for usado, e um usuário quiser remover totalmente o acesso de um membro, ele deverá remover o acesso do membro no IdP e remover manualmente o membro da organização no {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Provedores de identidade compatíveis

Estes IdPs (provedores de identidade) são compatíveis com a API do SCIM do {% data variables.product.product_name %} para organizações. Para obter mais informações, confira [SCIM](/rest/scim) na documentação da API do {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- AD do Azure
- Okta
- OneLogin

## Sobre a configuração do SCIM para organizações

{% data reusables.scim.dedicated-configuration-account %}

Para autorizar o {% data variables.product.prodname_oauth_app %}, você deve ter uma sessão de SAML ativa. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".

{% note %}

**Observação:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Leitura adicional

- "[Como ver e gerenciar o acesso do SAML de um membro à sua organização](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
