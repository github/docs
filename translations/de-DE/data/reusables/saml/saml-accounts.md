---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111521"
---
Wenn du SAML-SSO konfigurierst, melden sich die Mitglieder deiner Organisation weiterhin bei ihren persönlichen Konten bei {% data variables.product.prodname_dotcom_the_website %} an. Wenn ein Mitglied auf Ressourcen deiner Organisation zugreift, wird es in den meisten Fällen von {% data variables.product.prodname_dotcom %} zur Authentifizierung an deinen IdP umgeleitet. Nach erfolgreicher Authentifizierung leitet dein IdP den Benutzer zurück zu {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on).

{% note %}

**Hinweis:** SAML SSO ersetzt nicht den normalen Anmeldevorgang für {% data variables.product.prodname_dotcom %}. Sofern du nicht {% data variables.product.prodname_emus %} verwendest, melden sich Mitglieder weiterhin bei ihren persönlichen Konten auf {% data variables.product.prodname_dotcom_the_website %} an, und jedes persönliche Konto wird mit einer externen Identität in deinem IdP verknüpft.

{% endnote %}
