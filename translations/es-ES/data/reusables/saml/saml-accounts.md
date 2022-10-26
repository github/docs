---
ms.openlocfilehash: b5ea320db35c6a770853644bcdb50117d3da578d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109810"
---
Si configura el SSO de SAML, los miembros de su organización continuarán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acceda a los recursos que no sean públicos dentro de su organización, {% data variables.product.prodname_dotcom %} lo redireccionará a tu IdP para autenticarse. Después de autenticarse correctamente, su IdP redirecciona a este miembro a {% data variables.product.prodname_dotcom %}. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Nota:** SAML SSO no reemplaza el proceso de inicio de sesión normal para {% data variables.product.prodname_dotcom %}. A menos que use {% data variables.product.prodname_emus %}, los miembros seguirán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} y cada cuenta personal se vinculará a una identidad externa en el IdP.

{% endnote %}
