---
ms.openlocfilehash: e7dd0182fdc70186e5b3d137ac99cebd2ff562ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147093156"
---
## Os usuários são redirecionados repetidamente à autenticação

Se os usuários forem redirecionados repetidamente ao prompt de autenticação do SAML em loop, poderá ser necessário aumentar a duração da sessão do SAML nas configurações do IdP. 

O valor de `SessionNotOnOrAfter` enviado em uma resposta do SAML determina quando um usuário será redirecionado ao IdP para se autenticar. Se a duração de sessão do SAML estiver configurada como duas horas ou menos, o {% data variables.product.prodname_dotcom_the_website %} atualizará a sessão do SAML cinco minutos antes da expiração. Se a duração da sessão estiver configurada como cinco minutos ou menos, os usuários poderão ficar presos em um loop de autenticação do SAML. 

Para corrigir esse problema, recomendamos configurar a duração mínima da sessão do SAML como quatro horas. Para obter mais informações, confira "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout)".