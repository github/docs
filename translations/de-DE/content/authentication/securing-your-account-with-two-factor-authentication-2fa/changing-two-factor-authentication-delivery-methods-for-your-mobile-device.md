---
title: Die Auslieferungsmethode für die Zwei-Faktor-Authentifizierung für Ihr Mobilgerät ändern
intro: Du kannst Authentifizierungscodes wahlweise über eine Textnachricht oder eine mobile Anwendung erhalten.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085944'
---
{% note %}

**Hinweis:** Wenn du deine primäre Methode für die zweistufige Authentifizierung änderst, wird dein aktuelles Setup für die zweistufige Authentifizierung einschließlich deiner Wiederherstellungscodes ungültig. Bewahre deine neuen Wiederherstellungscodes an einem sicheren Ort auf. Das Ändern der primären Methode für die zweistufige Authentifizierung wirkt sich nicht auf deine SMS-Ausweichkonfiguration aus (sofern konfiguriert). Weitere Informationen findest du unter [Wiederherstellungsmethoden bei der Zwei-Faktor-Authentifizierung konfigurieren](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Klicke neben „Primäre zweistufige Methode“ auf **Ändern**.
  ![Bearbeiten der primären Übermittlungsoptionen](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. Klicke unter „Übermittlungsoptionen“ auf **Zweistufige Authentifizierung neu konfigurieren**.
    ![Umstellen deiner Übermittlungsoptionen für die zweistufige Authentifizierung](/assets/images/help/2fa/2fa-switching-methods.png)
5. Lege fest, ob Du die Zwei-Faktor-Authentifizierung mit einer TOTP-Mobile-App oder einer Textnachricht einrichten möchtest. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication).
    - Wenn du die zweistufige Authentifizierung mit einer mobilen TOTP-App einrichten möchtest, klicke auf **Mit einer App einrichten**.
    - Wenn du die zweistufige Authentifizierung mit Textnachrichten (SMS) einrichten möchtest, klicke auf **Mit SMS einrichten**.

## Weiterführende Themen

- [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication)
- [Konfigurieren der Wiederherstellungsmethoden bei der Zwei-Faktor-Authentifizierung](/articles/configuring-two-factor-authentication-recovery-methods)
