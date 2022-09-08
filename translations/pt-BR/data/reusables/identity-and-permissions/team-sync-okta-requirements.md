---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093278"
---
Antes de habilitar a sincronização da equipe para o Okta, você ou o administrador do IdP precisa:

- Configurar a integração do SAML, do SSO e do SCIM para sua organização usando o Okta. Para obter mais informações, confira "[Como configurar o logon único do SAML e o SCIM usando o Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".
- Fornecer a URL do locatário da instância do Okta.
- Gerar um token SSWS válido com permissões de administrador somente leitura para a instalação do Okta como usuário de serviço. Para obter mais informações, confira [Criar o token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) e [Atender aos usuários](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm) na documentação do Okta.
