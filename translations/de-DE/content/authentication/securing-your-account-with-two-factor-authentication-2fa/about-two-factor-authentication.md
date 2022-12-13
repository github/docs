---
title: Informationen zur Zwei-Faktor-Authentifizierung
intro: '{% data reusables.two_fa.about-2fa %} Bei der zweistufigen Authentifizierung meldest du dich mit deinem Benutzernamen und deinem Kennwort an und gibst außerdem eine weitere Authentifizierungsform an, die nur du kennst oder auf die nur du Zugriff hast.'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: f4b15aeeece76ce5e5afe915e0e0bc4893c4dbb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085955'
---
Bei {% data variables.product.product_name %} wird als zweite Form der Authentifizierung ein Code genutzt, der von einer Anwendung auf deinem mobilen Gerät generiert{% ifversion fpt or ghec %} oder dir als SMS gesendet wird{% endif %}. Nachdem du die Zwei-Faktor-Authentifizierung (2FA) aktiviert hast, generiert {% data variables.product.product_name %} jedes Mal einen Authentifizierungscode, wenn jemand versucht, sich bei deinem Konto unter {% data variables.product.product_location %} anzumelden. Eine andere Person kann sich nur dann bei deinem Konto anzumelden, wenn sie sowohl dein Kennwort kennt als auch auf den Authentifizierungscode auf deinem Smartphone zugreifen kann.

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} Zusätzlich zu den Sicherheitsschlüsseln kannst du auch {% data variables.product.prodname_mobile %} für 2FA verwenden, nachdem du eine mobile TOTP-App oder Textnachrichten konfiguriert hast. {% data variables.product.prodname_mobile %} verwendet Kryptografie für öffentliche Schlüssel, um dein Konto zu sichern, sodass du jedes mobile Gerät verwenden kannst, das du zum Anmelden bei {% data variables.product.prodname_mobile %} als zweiten Faktor verwendet hast.
{% endif %}

Du kannst auch zusätzliche Wiederherstellungsmethoden konfigurieren, falls du den Zugriff auf deine 2FA-Anmeldeinformationen verlierst. Weitere Informationen zum Einrichten der 2FA findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication) und [Konfigurieren der Wiederherstellungsmethoden der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication-recovery-methods).

Zum Schutz deines Kontos wird **dringend** empfohlen, die 2FA nicht nur auf {% data variables.product.product_name %} zu aktivieren, sondern auch auf anderen Websites und in Apps, die 2FA unterstützen. Du kannst die 2FA zum Zugreifen auf {% data variables.product.product_name %} und {% data variables.product.prodname_desktop %} aktivieren.

Weitere Informationen findest du unter [Zugreifen auf {% data variables.product.prodname_dotcom %} mit zweistufiger Authentifizierung](/articles/accessing-github-using-two-factor-authentication).

## Wiederherstellungscode für die Zwei-Faktor-Authentifizierung

{% data reusables.two_fa.about-recovery-codes %} Weitere Informationen findest du unter „[Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“.

{% ifversion fpt or ghec %}

{% warning %}

**Warnung**: {% data reusables.two_fa.support-may-not-help %} Weitere Informationen findest du unter „[Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“.

{% endwarning %}

{% endif %}

## Voraussetzen der zweistufigen Authentifizierung in deiner Organisation

Organisationsinhaber können verlangen, dass Organisationsmitglieder{% ifversion fpt or ghec %}, Abrechnungsmanager,{% endif %} und externe Mitarbeiter die Zwei-Faktor-Authentifizierung verwenden, um ihre persönlichen Konten zu schützen. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/articles/requiring-two-factor-authentication-in-your-organization).

{% data reusables.two_fa.auth_methods_2fa %}
