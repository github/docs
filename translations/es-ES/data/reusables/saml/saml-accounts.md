---
ms.openlocfilehash: 41c1afacc9dbebc6722e5b60cbd5a52b5786df5d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526826"
---
Si configura el SSO de SAML, los miembros de su organización continuarán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acceda a los recursos que no sean públicos dentro de su organización, {% data variables.product.prodname_dotcom %} lo redireccionará a tu IdP para autenticarse. Después de autenticarse correctamente, su IdP redirecciona a este miembro a {% data variables.product.prodname_dotcom %}. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Nota:** SAML SSO no reemplaza el proceso de inicio de sesión normal para {% data variables.product.prodname_dotcom %}. A menos que use {% data variables.product.prodname_emus %}, los miembros seguirán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} y cada cuenta personal se vinculará a una identidad externa en el IdP.

{% endnote %}