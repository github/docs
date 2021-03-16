---
title: GitHub für Mobilgeräte
intro: 'Du kannst Deine Arbeit auf {% data variables.product.product_name %} von Mobilgeräten her bewerten und verwalten und mit Personen zusammenarbeiten.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.mobile.ghes-release-phase %}

### Informationen zu {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} gibt dir die Möglichkeit, schnell und von überall her hochwertige Arbeit auf{% data variables.product.product_name %} zu leisten. {% data variables.product.prodname_mobile %} ist ein sicherer Weg für den Zugriff auf Deine {% data variables.product.product_name %}-Daten über eine vertrauenswürdige Client-Anwendung aus erster Hand.

Mit {% data variables.product.prodname_mobile %} kannst Du:
- Verwalten, bewerten und löschen von Benachrichtigungen
- Lesen, Überprüfen und Zusammenarbeiten an Issues und Pull Requests
- Suchen, durchsuchen und interagieren mit Benutzern, Repositorys und Organisationen
- Eine Push-Benachrichtigung erhalten, wenn jemand Deinen Benutzernamen erwähnt

Weitere Informationen über Benachrichtigungen für {% data variables.product.prodname_mobile %} findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

### {% data variables.product.prodname_mobile %} installieren

Für die Installation von {% data variables.product.prodname_mobile %} für Android oder iOS findest Du weitere Informationen auf [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

### Managing accounts

You can be simultaneously signed into mobile with one user account on {% data variables.product.prodname_dotcom_the_website %} and one user account on {% data variables.product.prodname_ghe_server %}.

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

#### Vorrausetzungen

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see "[Release notes](/enterprise-server/admin/release-notes)" and "[Managing {% data variables.product.prodname_mobile %} for your enterprise](/admin/configuration/managing-github-for-mobile-for-your-enterprise)."

During the beta for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a user account on {% data variables.product.prodname_dotcom_the_website %}.

#### Adding, switching, or signing out of accounts

You can sign into mobile with a user account on {% data variables.product.product_location %}. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account**. Follow the prompts to sign in.

After you sign into mobile with a user account on {% data variables.product.product_location %}, you can switch between the account and your account on  {% data variables.product.prodname_dotcom_the_website %}.  At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap the account you want to switch to.

If you no longer need to access data for your user account on {% data variables.product.product_location %} from {% data variables.product.prodname_mobile %}, you can sign out of the account. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

### Supported languages for {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} is available in the following languages.

- Englisch
- Japanisch
- Brazilian Portuguese
- Simplified Chinese
- Spanisch

If you configure the language on your device to a supported language, {% data variables.product.prodname_mobile %} will default to the language. You can change the language for {% data variables.product.prodname_mobile %} in {% data variables.product.prodname_mobile %}'s **Settings** menu.

### Universal Links für {% data variables.product.prodname_mobile %} auf iOS verwalten

{% data variables.product.prodname_mobile %} aktiviert automatisch Universal Links für iOS. Wenn Du auf einen {% data variables.product.product_name %}-Link tippst, wird die Ziel-URL in {% data variables.product.prodname_mobile %} anstatt in Safari geöffnet. Weitere Informationen findest Du unter [Universal Links](https://developer.apple.com/ios/universal-links/) auf der Apple Entwickler Website.

To disable Universal Links, long-press any {% data variables.product.product_name %} link, then tap **Open**. Ab jetzt wird jedes Mal, wenn Du auf einen {% data variables.product.product_name %}-Link tippst, die Ziel-URL in Safari geöffnet statt in {% data variables.product.prodname_mobile %}.

Um Universal Links wieder zu aktivieren, drücke lange auf einen {% data variables.product.product_name %}-Link und tippe dann auf **Öffnen in {% data variables.product.prodname_dotcom %}**.

### Feedback teilen

If you find a bug in {% data variables.product.prodname_mobile %}, you can email us at <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a>.

You can submit feature requests or other feedback for {% data variables.product.prodname_mobile %} [on GitHub Discussions](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22).

### Abmelden von Beta-Versionen für iOS

Wenn Du eine Beta-Version von {% data variables.product.prodname_mobile %} für iOS mit TestFlight testest, kannst Du den Beta-Test jederzeit verlassen.

1. Öffne auf Deinem iOS-Gerät die TestFlight-App.
2. Tippe unter "Apps" auf **{% data variables.product.prodname_dotcom %}**.
3. Tippe unten auf der Seite auf **Stop Testing** (Test stoppen).
