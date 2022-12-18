---
title: Tokenablauf und Sperrung
intro: 'Deine Token können ablaufen und auch von dir, Anwendungen, die du autorisiert hast, sowie {% data variables.product.product_name %} selbst widerrufen werden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106997'
---
Wenn ein Token abgelaufen ist oder widerrufen wurde, kann es nicht mehr verwendet werden, um Git- und API-Anforderungen zu authentifizieren. Es ist nicht möglich, ein abgelaufenes oder widerrufenes Token wiederherzustellen. Es muss ein neues Token durch dich oder die Anwendung erstellt werden.

In diesem Artikel werden die möglichen Gründe erläutert, warum deine {% data variables.product.product_name %}-Token widerrufen wurden oder ablaufen.

{% note %}

**Hinweis:** Wenn ein {% data variables.product.pat_generic %} oder OAuth-Token abläuft oder widerrufen wird, wird möglicherweise die Aktion `oauth_authorization.destroy` im Sicherheitsprotokoll angezeigt. Weitere Informationen findest du unter [Überprüfen deines Sicherheitsprotokolls](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% endnote %}

## Token widerrufen, nachdem das Ablaufdatum erreicht wurde

Wenn du ein {% data variables.product.pat_generic %} erstellst, ist es ratsam, ein Ablaufdatum für das Token festzulegen. Beim Erreichen des Ablaufdatums wird das Token automatisch widerrufen. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% ifversion fpt or ghec %}
## Token widerrufen, wenn in ein öffentliches Repository oder einen öffentlichen Gist gepusht

Wenn ein gültiges OAuth-Token, {% data variables.product.prodname_github_app %}-Token oder {% data variables.product.pat_generic %} in ein öffentliches Repository oder einen öffentlichen Gist gepusht wird, wird das Token automatisch widerrufen. 

{% endif %}

{% ifversion fpt or ghec %}
## Wegen mangelnder Verwendung abgelaufenes Token

{% data variables.product.product_name %} widerruft automatisch ein OAuth-Token oder {% data variables.product.pat_generic %}, wenn das Token ein Jahr lang nicht verwendet wurde.
{% endif %}

## Vom Benutzer widerrufenes Token

Du kannst die Autorisierung einer {% data variables.product.prodname_github_app %} oder {% data variables.product.prodname_oauth_app %} über deine Kontoeinstellungen widerrufen, wodurch alle Token widerrufen werden, die der App zugeordnet sind. Weitere Informationen findest du unter [Überprüfen deiner autorisierten Integrationen](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations) und [Überprüfen deiner autorisierten Anwendungen (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth).

Sobald eine Autorisierung widerrufen wurde, werden auch alle Token, die der Autorisierung zugeordnet sind, widerrufen. Um eine Anwendung erneut zu autorisieren, befolgst du die Anweisungen aus der Anwendung oder Website von Drittanbietern, um dein Konto mit {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} erneut zu verbinden.

## Von der {% data variables.product.prodname_oauth_app %} widerrufenes Token

Der Besitzer einer {% data variables.product.prodname_oauth_app %} kann die Autorisierung eines Kontos ihrer App widerrufen, wodurch auch alle Token widerrufen werden, die der Autorisierung zugeordnet sind. Weitere Informationen zum Widerrufen von Autorisierungen für deine OAuth-App findest du unter [Löschen einer App-Autorisierung](/rest/reference/apps#delete-an-app-authorization).

{% data variables.product.prodname_oauth_app %}-Besitzer können auch einzelne Token widerrufen, die einer Autorisierung zugeordnet sind. Weitere Informationen zum Widerrufen einzelner Token für deine OAuth-App findest du unter [Löschen von App-Token](/rest/apps/oauth-applications#delete-an-app-token).

## Wegen Tokenüberschuss mit demselben Geltungsbereich für eine {% data variables.product.prodname_oauth_app %} widerrufenes Token

{% data reusables.apps.oauth-token-limit %}

## Wegen {% data variables.product.prodname_github_app %}-Konfiguration widerrufenes Benutzertoken

Benutzer-zu-Server-Token, die von einer {% data variables.product.prodname_github_app %} erstellt wurden, laufen standardmäßig nach acht Stunden ab. Besitzer von {% data variables.product.prodname_github_apps %} können ihre Apps so konfigurieren, dass Benutzer-zu-Server-Token nicht ablaufen. Weitere Informationen zum Ändern von Benutzer-zu-Server-Token in deiner {% data variables.product.prodname_dotcom %} App findest du unter [Aktivieren optionaler Features für Apps](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps).
