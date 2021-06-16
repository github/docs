---
title: Die Auslieferungsmethode für die Zwei-Faktor-Authentifizierung für Dein Mobilgerät ändern
intro: Du kannst Authentifizierungscodes wahlweise über eine Textnachricht oder eine mobile Anwendung erhalten.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods/
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  free-pro-team: '*'
topics:
  - 2FA
---

{% note %}

**Hinweis:** Durch das Ändern der Zwei-Faktor-Authentifizierungsmethode wird die aktuelle Konfiguration der Zwei-Faktor-Methode ungültig. Deine Wiederherstellungscodes oder die Fallback-SMS-Konfiguration sind davon jedoch nicht betroffen. Du kannst Deine Wiederherstellungscodes oder die Fallback-SMS-Konfiguration bei Bedarf in den Sicherheitseinstellungen Deines persönlichen Kontos aktualisieren.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Klicke neben „SMS delivery“ (SMS-Auslieferung) auf **Edit**. ![SMS-Auslieferungsoptionen bearbeiten](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. Klicke unter „Delivery options“ (Auslieferungsoptionen) auf **Reconfigure two-factor authentication** (Zwei-Faktor-Authentifizierung neu konfigurieren). ![Umstellen der 2FA-Auslieferungsoptionen](/assets/images/help/2fa/2fa-switching-methods.png)
5. Lege fest, ob Du die Zwei-Faktor-Authentifizierung mit einer TOTP-Mobile-App oder einer Textnachricht einrichten möchtest. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication)“.
    - Um die Zwei-Faktor-Authentifizierung mit einer TOTP-Mobile-App einzurichten, klicke auf **Set up using an app** (Mit einer App einrichten).
    - Um die Zwei-Faktor-Authentifizierung mit einer Textnachricht (SMS) einzurichten, klicke auf **Set up using SMS** (Mit einer SMS einrichten).

### Weiterführende Informationen

- „[Informationen zur Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication)“
- „[Wiederherstellungsmethoden für die Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication-recovery-methods)“
