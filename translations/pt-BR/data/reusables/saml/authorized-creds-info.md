---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573374"
---
Para autorizar um token de acesso pessoal ou uma chave SSH, você precisa ter uma identidade vinculada do SAML. Se você for membro de uma organização em que o SSO do SAML está habilitado, você pode criar uma identidade vinculada autenticando-se na sua organização com o IdP pelo menos uma vez. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

Depois de autorizar um token de acesso pessoal ou chave SSH, o token ou chave permanecerá autorizado até que seja revogado de uma das maneiras a seguir.
- Um proprietário da empresa ou da organização revoga a autorização.
- Você é removido da organização.
- Os escopos em um token de acesso pessoal são editados ou o token é regenerado.
- O token de acesso pessoal venceu, conforme definido durante a criação.
