---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573377"
---
Bevor du ein persönliches Zugriffstoken oder einen SSH-Schlüssel autorisieren kannst, musst du über eine verknüpfte SAML-Identität verfügen. Wenn du Mitglied einer Organisation bist, in der SAML-SSO aktiviert ist, kannst du eine verknüpfte Identität erstellen, indem du dich mindestens einmal mit deinem IdP bei deiner Organisation authentifizierst. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on).

Nachdem du ein persönliches Zugriffstoken oder einen SSH-Schlüssel autorisiert hast, bleibt das Token oder der Schlüssel autorisiert, bis die Autorisierung auf eine der folgenden Weisen widerrufen wird.
- Ein Organisations- oder Unternehmensbesitzer widerruft die Autorisierung.
- Du wirst aus der Organisation entfernt.
- Die Bereiche in einem persönlichen Zugriffstoken werden bearbeitet, oder das Token wird neu generiert.
- Das persönliche Zugriffstoken ist gemäß der Definition bei der Erstellung abgelaufen.
