---
title: Ein sicheres Passwort erstellen
intro: 'Sichere dein Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} mit einem Kennwort-Manager mit einem starken und eindeutigen Kennwort.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 97473f9b04c8d033471f89cac9a0b0d08bebcba3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086040'
---
Du musst ein Kennwort für dein Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auswählen oder generieren, das mindestens die folgenden Anforderungen erfüllt:
- {% ifversion ghes %}Sieben{% else %}Acht{% endif %} Zeichen lang, wenn es eine Zahl und einen Kleinbuchstaben enthält, oder
- 15 Zeichen lang ist, bei einer beliebigen Kombination an Zeichen.

Für den Schutz deines Kontos empfehlen wir Dir die folgenden Best Practices:
- Verwende einen Kennwort-Manager, z. B. [LastPass](https://lastpass.com/) oder [1Password](https://1password.com/), um ein Kennwort von mindestens 15 Zeichen zu generieren.
- Erzeuge ein eindeutiges Passwort für {% data variables.product.product_name %}. Wenn du dein {% data variables.product.product_name %}-Kennwort auch an anderer Stelle verwendest und dieser Dienst kompromittiert wird, könnten Angreifer oder andere Personen mit böswilliger Absicht diese Informationen nutzen, um auf dein Konto bei {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zuzugreifen.

- Konfiguriere die Zwei-Faktor-Authentifizierung für dein persönliches Konto. Weitere Informationen findest du unter [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication).
- Gib dein Passwort niemals an andere weiter, auch nicht an potenzielle Mitarbeiter. Jede Person sollte ihr eigenes persönliches Konto bei {% data variables.product.product_name %} nutzen. Weitere Informationen zur Zusammenarbeit findest du unter [Einladen von Mitarbeiter*innen zu einem persönlichen Repository](/articles/inviting-collaborators-to-a-personal-repository), [Informationen zu gemeinschaftlichen Entwicklungsmodellen](/articles/about-collaborative-development-models/) oder [Zusammenarbeit mit Gruppen in Organisationen](/organizations/collaborating-with-groups-in-organizations/).

{% data reusables.repositories.blocked-passwords %}

Du kannst dein Kennwort nur verwenden, um dich mit deinem Browser bei {% data variables.product.product_name %} anzumelden. Wenn du dich auf anderem Wege bei {% data variables.product.product_name %} authentifizierst, z. B. über die Befehlszeile oder mit einer API, solltest du andere Anmeldeinformationen verwenden. Weitere Informationen findest du unter [Informationen über die Authentifizierung bei {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github). 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Weiterführende Themen

- "[Zwischenspeichern von {% data variables.product.product_name %}-Anmeldeinformationen in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- [Schützen deines Kontos und deiner Daten](/articles/keeping-your-account-and-data-secure/)
