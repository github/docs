---
title: Informationen zur Zwei-Faktor-Authentifizierung
intro: 'Die Zwei-Faktor-Authentifizierung (oder 2FA) ist eine zusätzliche Sicherheitsebene, die bei der Anmeldung bei Websites oder Apps verwendet wird. Mit 2FA musst Du Dich mit Deinem Benutzernamen und Passwort anmelden und eine weitere Form der Authentifizierung bereitstellen, die nur Du kennst oder auf die nur Du Zugriff hast.'
redirect_from:
  - /articles/about-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bei {% data variables.product.product_name %} ist die zweite Form der Authentifizierung ein Code, der von einer Anwendung auf Deinem mobilen Gerät generiert{% if currentVersion == "free-pro-team@latest" %} oder Dir als Textnachricht (SMS) gesendet{% endif %} wird. Nachdem Du die 2FA aktiviert hast, generiert {% data variables.product.product_name %} jedes Mal einen Authentifizierungscode, wenn sich jemand bei Deinem {% data variables.product.product_name %}-Konto anmelden möchte. Eine Anmeldung bei Deinem Konto ist nur möglich, wenn jemand sowohl Dein Passwort kennt als auch Zugriff auf den Authentifizierungscode auf Deinem Telefon hat.

{% data reusables.two_fa.after-2fa-add-security-key %}

Du kannst auch zusätzliche Wiederherstellungsmethoden konfigurieren, falls Du den Zugriff auf Deine 2FA-Anmeldeinformationen verlierst. Weitere Informationen zur Einrichtung der Zwei-Faktor-Authentifizierung findest Du unter „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication)“ und „[Wiederherstellungsmethoden für die Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication-recovery-methods).“

We **strongly** urge you to enable 2FA for the safety of your account, not only on {% data variables.product.product_name %}, but on other websites and apps that support 2FA. You can enable 2FA to access {% data variables.product.product_name %} and {% data variables.product.prodname_desktop %}.

Weitere Informationen findest Du unter „[Mit Zwei-Faktor-Authentifizierung auf {% data variables.product.prodname_dotcom %} zugreifen](/articles/accessing-github-using-two-factor-authentication).“

### Wiederherstellungscode für die Zwei-Faktor-Authentifizierung

{% data reusables.two_fa.about-recovery-codes %} Weitere Informationen findest Du unter „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).“

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Warnung**: {% data reusables.two_fa.support-may-not-help %} Weitere Informationen findest Du unter „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).“

{% endwarning %}

{% endif %}

### Zwei-Faktor-Authentifizierung in Deiner Organisation erzwingen

Organisationsinhaber könnnen verlangen, dass Organisationsmitglieder{% if currentVersion == "free-pro-team@latest" %}, Abrechnungsmanager,{% endif %} und externe Mitarbeiter die Zwei-Faktor-Authentifizierung verwenden, um ihre persönlichen Konten zu schützen. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung in Ihrer Organisation erzwingen](/articles/requiring-two-factor-authentication-in-your-organization)“.

{% data reusables.two_fa.auth_methods_2fa %}
