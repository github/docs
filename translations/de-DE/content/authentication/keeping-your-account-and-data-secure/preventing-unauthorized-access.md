---
title: Nicht autorisierten Zugriff verhindern
intro: "Du könntest durch die Medien auf einen Sicherheitsincident aufmerksam gemacht werden, z.\_B. auf die Entdeckung des [Heartbleed-Bugs](http://heartbleed.com/), oder dein Computer könnte gestohlen werden, während du bei {% data variables.product.product_location %} angemeldet bist. In solchen Fällen kannst du durch das Ändern deines Kennworts den unerwünschten zukünftigen Zugriff auf dein Konto und deine Projekte verhindern."
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086032'
---
{% data variables.product.product_name %} schreibt ein Passwort vor, um vertrauliche Aktionen durchzuführen, beispielsweise das Hinzufügen neuer SSH-Schlüssel, das Autorisieren von Anwendungen oder die Bearbeitung von Teammitgliedern.

Wenn du dein Passwort geändert hast, solltest du zum Schutz deines Kontos die folgenden Aktionen durchführen:

- [Aktiviere die zweistufige Authentifizierung](/articles/about-two-factor-authentication) auf deinem Konto, sodass der Zugriff mehr als nur ein Kennwort erfordert.
- [Überprüfe deine SSH-Schlüssel](/articles/reviewing-your-ssh-keys), [Bereitstellungsschlüssel](/articles/reviewing-your-deploy-keys) und [autorisierten Integrationen](/articles/reviewing-your-authorized-integrations), und widerrufe nicht autorisierten oder nicht vertrauten Zugriff in deinen SSH- und Anwendungseinstellungen.
{% ifversion fpt or ghec %}
- [Überprüfe alle deine E-Mail-Adressen](/articles/verifying-your-email-address). Wenn ein Angreifer seine E-Mail-Adresse zu deinem Konto hinzugefügt hat, könnte er damit eine unerwünschte Zurücksetzung des Passworts erzwingen.
{% endif %}
- [Überprüfe das Sicherheitsprotokoll deines Kontos](/github/authenticating-to-github/reviewing-your-security-log). So erhältst du einen Überblick über die verschiedenen Konfigurationen deiner Repositorys. Beispielsweise kannst du sicherstellen, dass keine privaten Repositorys in öffentliche Repositorys umgewandelt oder keine Repositorys übertragen wurden.
- [Überprüfe die Webhooks](/articles/creating-webhooks) in deinen Repositorys. Über Webhooks könnte ein Angreifer Pushes zu deinem Repository abfangen.
- [Stelle sicher, dass keine neuen Bereitstellungsschlüssel](/guides/managing-deploy-keys/#deploy-keys) erstellt wurden. Dadurch könnten externe Server auf deine Projekte zugreifen.
- Überprüfe Commits, die zuletzt zu deinen Repositorys durchgeführt wurden.
- Überprüfe die Liste der Mitarbeiter aller Repositorys.
