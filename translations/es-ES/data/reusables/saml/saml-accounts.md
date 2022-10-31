---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111525"
---
Si configura el SSO de SAML, los miembros de su organización continuarán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acceda a la mayoría de los recursos de su organización, {% data variables.product.prodname_dotcom %} lo redireccionará a su IdP para autenticarse. Después de autenticarse correctamente, su IdP redirecciona a este miembro a {% data variables.product.prodname_dotcom %}. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Nota:** SAML SSO no reemplaza el proceso de inicio de sesión normal para {% data variables.product.prodname_dotcom %}. A menos que use {% data variables.product.prodname_emus %}, los miembros seguirán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} y cada cuenta personal se vinculará a una identidad externa en el IdP.

{% endnote %}
