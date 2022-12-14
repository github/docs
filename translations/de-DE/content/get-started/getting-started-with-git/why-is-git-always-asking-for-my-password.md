---
title: 'Warum werde ich von Git immer aufgefordert, mein Passwort einzugeben?'
intro: 'Wenn Du durch Git jedes Mal zur Eingabe eines Benutzernamens und Passworts aufgefordert wirst, wenn Du versuchst, mit GitHub zu interagieren, verwendest Du wahrscheinlich die HTTPS-Klon-URL für Dein Repository.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131262'
---
Die Verwendung einer HTTPS-Remote-URL hat einige Vorteile gegenüber der Verwendung von SSH. Die URL ist einfacher einzurichten als SSH und funktioniert in der Regel auch über strenge Firewalls und Proxies hinweg. Du wirst jedoch auch aufgefordert, jedes Mal, wenn Du ein Repository abrufst oder pushst, Deine {% data variables.product.product_name %}-Anmeldeinformationen einzugeben. 

{% data reusables.user-settings.password-authentication-deprecation %}

Du kannst vermeiden, nach Deinem Kennwort gefragt zu werden, indem Du Git so konfigurierst, dass das [Kennwort für Dich zwischengespeichert](/github/getting-started-with-github/caching-your-github-credentials-in-git) wird. Nachdem du die Zwischenspeicherung von Anmeldeinformationen konfiguriert hast, verwendet Git automatisch Dein zwischengespeichertes persönliches Zugriffstoken, wenn Du ein Repository mithilfe von HTTPS abrufst oder pushst.

## Weiterführende Themen

- "[Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories)"
- [Informationen zur Authentifizierung in {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)
- "[Hinzufügen Deines SSH-Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
