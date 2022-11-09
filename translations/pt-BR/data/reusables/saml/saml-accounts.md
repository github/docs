---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111518"
---
Se você configurar o SSO do SAML, os membros de sua organização continuarão fazendo logon nas respectivas contas pessoais do {% data variables.product.prodname_dotcom_the_website %}. Quando um membro acessa a maioria dos recursos na sua organização, o {% data variables.product.prodname_dotcom %} o redireciona para seu IdP a fim de realizar a autenticação. Após a autenticação bem-sucedida, seu IdP redireciona o membro novamente para o {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Nota:** o SSO do SAML não substitui o processo de entrada normal do {% data variables.product.prodname_dotcom %}. A menos que você use {% data variables.product.prodname_emus %}, os membros continuarão a entrar em suas contas pessoais no {% data variables.product.prodname_dotcom_the_website %} e cada conta será vinculada a uma identidade externa em seu IdP.

{% endnote %}
