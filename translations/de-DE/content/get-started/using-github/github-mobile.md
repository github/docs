---
title: GitHub Mobile
intro: 'Du kannst deine Arbeit auf {% data variables.product.product_name %} auf Mobilgeräten verwalten, selektieren und mit Personen zusammenarbeiten.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: a9af0848fdc26c5efd3dfb2d00076e3af5fb00bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508448'
---
## Informationen zu {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} gibt dir die Möglichkeit, schnell und von überall aus hochwertige Arbeit auf {% data variables.product.product_name %} zu leisten. {% data variables.product.prodname_mobile %} ist ein sicherer Weg für den Zugriff auf deine {% data variables.product.product_name %}-Daten über eine vertrauenswürdige Clientanwendung aus erster Hand.

Mit {% data variables.product.prodname_mobile %} kannst Du:

- Verwalten, bewerten und löschen von Benachrichtigungen
- Lesen, Überprüfen und Zusammenarbeiten an Issues und Pull Requests
- Suchen, durchsuchen und interagieren mit Benutzern, Repositorys und Organisationen
- Eine Pushbenachrichtigung erhalten, wenn jemand deinen Benutzernamen erwähnt {% ifversion fpt or ghec %}- Dein GitHub.com-Konto mit zweistufiger Authentifizierung schützen
- Deine Anmeldeversuche auf unbekannten Geräten verifizieren{% endif %}

Weitere Informationen zu Benachrichtigungen für {% data variables.product.prodname_mobile %} findest du unter [Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile).

{% ifversion fpt or ghec %}- Weitere Informationen zur zweistufigen Authentifizierung mit {% data variables.product.prodname_mobile %} findest du unter [Konfigurieren von {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) sowie unter [Authentifizieren mit {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile). {% endif %}

## Installieren von {% data variables.product.prodname_mobile %}

Informationen zur Installation von {% data variables.product.prodname_mobile %} für Android oder iOS findest du unter [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Verwalten von Konten

Du kannst bei der mobilen Version gleichzeitig mit einem persönlichen Konto auf {% data variables.product.prodname_dotcom_the_website %} und mit einem persönlichen Konto für {% data variables.product.prodname_ghe_server %} angemeldet sein. Weitere Informationen zu unseren verschiedenen Produkten findest du unter [Produkte von {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products).

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} funktioniert möglicherweise nicht für dein Unternehmen, wenn der Zugriff auf das Unternehmen per VPN erfolgen muss.

### Voraussetzungen

Du musst auf deinem Gerät mindestens {% data variables.product.prodname_mobile %} 1.4 installieren, um {% data variables.product.prodname_mobile %} mit {% data variables.product.prodname_ghe_server %} verwenden zu können.

Für die Verwendung von {% data variables.product.prodname_mobile %} mit {% data variables.product.prodname_ghe_server %} muss {% data variables.product.product_location %} mindestens die Version 3.0 haben, und der Unternehmensbesitzer muss die mobile Unterstützung für dein Unternehmen aktivieren. Weitere Informationen findest du unter {% ifversion ghes %}[Versionshinweise](/enterprise-server/admin/release-notes) sowie unter {% endif %}[Verwalten von {% data variables.product.prodname_mobile %} für dein Unternehmen]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% else %}.{% endif %}

Während der Betaphase von {% data variables.product.prodname_mobile %} mit {% data variables.product.prodname_ghe_server %} musst du mit einem persönlichen Konto auf {% data variables.product.prodname_dotcom_the_website %} angemeldet sein.

### Hinzufügen, Wechseln oder Abmelden von Konten

Du kannst dich bei der mobilen Version mit einem persönlichen Konto für {% data variables.product.prodname_ghe_server %} anmelden. Halte am unteren Rand der App {% octicon "person" aria-label="The person icon" %} **Profil** länger gedrückt, und tippe anschließend auf {% octicon "plus" aria-label="The plus icon" %} **Enterprise-Konto hinzufügen**. Folge den Anweisungen, um sich anzumelden.

Nachdem du dich mit einem persönlichen Konto in {% data variables.product.prodname_ghe_server %} bei der mobilen Version angemeldet hast, kannst du zwischen diesem Konto und deinem Konto auf {% data variables.product.prodname_dotcom_the_website %} wechseln. Halte am unteren Rand der App {% octicon "person" aria-label="The person icon" %} **Profil** länger gedrückt, und tippe anschließend auf das Konto, zu dem du wechseln möchtest.

Wenn du von {% data variables.product.prodname_mobile %} aus nicht mehr auf Daten für dein persönliches Konto für {% data variables.product.prodname_ghe_server %} zugreifen musst, kannst du dich von dem Konto abmelden. Halte am unteren Rand der App {% octicon "person" aria-label="The person icon" %} **Profil** länger gedrückt, wische für das Konto, von dem du dich abmelden möchtest, nach links, und tippe anschließend auf **Abmelden**.

## Unterstützte Sprachen für {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} ist in folgenden Sprachen verfügbar:

- Englisch
- Japanisch
- Portugiesisch (Brasilien)
- Chinesisch (vereinfacht)
- Spanisch

Wenn du auf deinem Gerät eine unterstützte Sprache konfigurierst, wird von {% data variables.product.prodname_mobile %} standardmäßig diese Sprache verwendet. Du kannst die Sprache für {% data variables.product.prodname_mobile %} im Menü **Einstellungen** von {% data variables.product.prodname_mobile %} ändern.

## Universal Links für {% data variables.product.prodname_mobile %} auf iOS verwalten

{% data variables.product.prodname_mobile %} aktiviert automatisch Universal Links für iOS. Wenn du auf einen {% data variables.product.product_name %}-Link tippst, wird die Ziel-URL in {% data variables.product.prodname_mobile %} anstatt in Safari geöffnet. Weitere Informationen findest du auf der Apple-Website für Entwickler unter [Universelle Links für Entwickler](https://developer.apple.com/ios/universal-links/).

Wenn du universelle Links deaktivieren möchtest, halte einen beliebigen {% data variables.product.product_name %}-Link länger gedrückt, und tippe anschließend auf **Öffnen**. Ab jetzt wird jedes Mal, wenn du auf einen {% data variables.product.product_name %}-Link tippst, die Ziel-URL in Safari geöffnet statt in {% data variables.product.prodname_mobile %}.

Wenn du universelle Links wieder aktivieren möchtest, halte einen {% data variables.product.product_name %}-Link länger gedrückt, und tippe anschließend auf **Öffnen in {% data variables.product.prodname_dotcom %}**.

## Feedback teilen

Du kannst Featureanforderungen oder anderes Feedback für {% data variables.product.prodname_mobile %} auf [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile) übermitteln.

## Abmelden von Beta-Versionen für iOS

Wenn du eine Beta-Version von {% data variables.product.prodname_mobile %} für iOS mit TestFlight testest, kannst du den Beta-Test jederzeit verlassen.

1. Öffne auf deinem iOS-Gerät die TestFlight-App.
2. Tippe unter „Apps“ auf **{% data variables.product.prodname_dotcom %}**.
3. Tippe unten auf der Seite auf **Testen beenden**.
