---
title: Informationen zur Authentifizierung für GitHub
intro: 'Du kannst sicher auf die Ressourcen deines Kontos zugreifen, indem du dich bei {% data variables.product.product_name %} authentifizierst und dabei je nachdem, wo du dich authentifizierst, unterschiedliche Anmeldeinformationen angibst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718093'
---
## Informationen zur Authentifizierung auf {% data variables.product.prodname_dotcom %}

Vor dem Zugriff auf{% ifversion not ghae %} bestimmte{% endif %} Ressourcen in {% data variables.product.product_name %} musst du dich authentifizieren. Diese Maßnahme dient dem Schutz deines Kontos. Bei der Authentifizierung gegenüber {% data variables.product.product_name %} gibst du eindeutige Anmeldeinformationen an bzw. bestätigst diese Informationen, um zu belegen, dass du tatsächlich die Person bist, die du vorgibst zu sein.

Du kannst über verschiedene Methoden auf deine Ressourcen in {% data variables.product.product_name %} zugreifen: über den Browser, über {% data variables.product.prodname_desktop %} oder eine andere Desktopanwendung, über die API oder über die Befehlszeile. Bei diesen Methoden für den Zugriff auf {% data variables.product.product_name %} werden unterschiedliche Authentifizierungsmodi unterstützt.
{%- ifversion not fpt %}
- Dein Identitätsanbieter (IdP){% endif %}{% ifversion not ghae %}
- Benutzername und Kennwort mit zweistufiger Authentifizierung{% endif %}
- Persönliches Zugriffstoken
- SSH-Schlüssel

## Authentifizieren über deinen Browser

{% ifversion ghae %}

Du kannst dich in deinem Browser über deinen IdP bei {% data variables.product.product_name %} authentifizieren. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on).

{% else %}

{% ifversion fpt or ghec %}

Wenn du Mitglied einer {% data variables.product.prodname_emu_enterprise %}-Installation bist, authentifizierst du dich über deinen Identitätsanbieter gegenüber {% data variables.product.product_name %}. Weitere Informationen findest du unter „[Authentifizieren als verwalteter Benutzer](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}“ in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}{% else %}."{% endif %} 

Wenn du kein Mitglied eines {% data variables.product.prodname_emu_enterprise %} bist, authentifiziere dich mit deinem {% data variables.product.prodname_dotcom_the_website %}-Benutzernamen und -Kennwort. Du kannst auch zweistufige Authentifizierung und SAML Single Sign-On verwenden, was von Organisations- und Unternehmensbesitzern verlangt werden kann.

{% else %}

Du kannst dich in deinem Browser auf verschiedene Weise bei {% data variables.product.product_name %} authentifizieren.

{% endif %}

- **Nur Benutzername und Kennwort**
    - Beim Erstellen deines Kontos in {% data variables.product.product_name %} legst du ein Kennwort fest. Es wird empfohlen, mithilfe eines Kennwort-Managers ein zufälliges, eindeutiges Kennwort zu generieren. Weitere Informationen findest du unter „[Erstellen eines starken Kennworts](/github/authenticating-to-github/creating-a-strong-password)“.{% ifversion fpt or ghec %}
  - Wenn du 2FA nicht aktiviert hast, verlangt {% data variables.product.product_name %} eine zusätzliche Überprüfung, wenn du dich erstmals über ein nicht erkanntes Gerät anmeldest (z. B. ein neues Browserprofil, ein Browser, in dem die Cookies gelöscht wurden, oder ein neuer Computer).

   Nachdem du deinen Benutzernamen und dein Kennwort angegeben hast, wirst du zur Eingabe eines Prüfcodes aufgefordert, den wir dir per E-Mail zusenden. Wenn du die App {% data variables.product.prodname_mobile %} installiert hast, geht stattdessen dort eine Benachrichtigung ein. Weitere Informationen findest du unter „[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)“. {% endif %}
- **Zweistufige Authentifizierung (Two-Factor Authentication, TFA)** (empfohlen)
    - Wenn du 2FA aktivierst, nachdem du deinen Benutzernamen und dein Kennwort erfolgreich eingegeben hast, wirst du ebenfalls zur Eingabe eines Codes aufgefordert. Dieser wird von einer TOTP-Anwendung (Time-Based One Time Password) auf deinem mobilen Gerät{% ifversion fpt or ghec %} generiert oder als Textnachricht (SMS){% endif %} gesendet. Weitere Informationen findest du unter [Zugreifen auf {% data variables.product.prodname_dotcom %} mit zweistufiger Authentifizierung](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website).
    - Zusätzlich zur Authentifizierung per TOTP-Anwendung{% ifversion fpt or ghec %} oder Textnachricht{% endif %} kannst du wahlweise eine alternative Authentifizierungsmethode mit {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} oder{% endif %} oder einem Sicherheitsschlüssel (über WebAuthn) hinzufügen. Weitere Informationen findest du unter {% ifversion fpt or ghec %}„[Konfigurieren der zweistufigen Authentifizierung mit {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)“ und {% endif %}„[Konfigurieren der zweistufigen Authentifizierung mithilfe eines Sicherheitsschlüssels](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)“.{% ifversion ghes %}
- **Externe Authentifizierung**
  - Dein Websiteadministrator kann {% data variables.product.product_location %} so konfigurieren, dass statt eines Benutzernamens und eines Kennworts die externe Authentifizierung verwendet wird. Weitere Informationen findest du unter „[Externe Authentifizierungsmethoden](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)“.{% endif %} {% ifversion fpt or ghec %}
- **SAML Single Sign-On**
  - Bevor du auf Ressourcen zugreifen kannst, die sich im Besitz eines Organisations- oder Unternehmenskontos befinden, das SAML Single Sign-On verwendet, musst du dich möglicherweise auch über einen IdP authentifizieren. Weitere Informationen findest du unter „[Informationen zu Authentifizierung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}“ in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}{% else %}.{% endif %}{% endif %}

{% endif %}

## Authentifizieren mit {% data variables.product.prodname_desktop %}
Du kannst dich mit {% data variables.product.prodname_desktop %} über deinen Browser authentifizieren. Weitere Informationen findest du unter [Authentifizieren auf {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).

## Authentifizieren mit der API

Du kannst dich über verschiedene Methoden mit der API authentifizieren.

- **Persönliche Zugriffstoken**
    - In einigen Situationen, z. B. beim Testen, kannst du ein persönliches Zugriffstoken verwenden, um auf die API zuzugreifen. Bei Verwendung eines persönlichen Zugriffstokens kannst du den Zugriff jederzeit widerrufen. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).
- **Webanwendungsfluss**
    - Bei OAuth-Apps in einer Produktionsumgebung sollte die Authentifizierung über den Webanwendungsfluss erfolgen. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).
- **GitHub Apps**
    - Bei GitHub-Apps in einer Produktionsumgebung sollte die Authentifizierung im Namen der App-Installation erfolgen. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/).

## Authentifizieren über die Befehlszeile

Du kannst über die Befehlszeile auf Repositorys in {% data variables.product.product_name %} zugreifen. Dieser Zugriff kann über HTTPS oder SSH erfolgen, wobei jeweils unterschiedliche Authentifizierungsmethoden verwendet werden. Die Authentifizierungsmethode wird abhängig davon gewählt, ob beim Klonen des Repositorys eine HTTPS- oder SSH-Remote-URL verwendet wird. Weitere Informationen über die verschiedenen Zugriffsmethoden findest du unter [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories).

### HTTPS

Du kannst selbst dann über HTTPS mit allen Repositorys in {% data variables.product.product_name %} arbeiten, wenn du dich hinter einer Firewall oder einem Proxy befindest.

Wenn du dich über {% data variables.product.prodname_cli %} authentifizierst, kannst du dich mit einem persönlichen Zugriffstoken oder über den Webbrowser authentifizieren. Weitere Informationen zur Authentifizierung mit {% data variables.product.prodname_cli %} findest du unter [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Wenn du dich ohne {% data variables.product.prodname_cli %} authentifizierst, musst du ein persönliches Zugriffstoken verwenden. {% data reusables.user-settings.password-authentication-deprecation %} Wenn du kein [Anmeldeinformationenhilfsprogramm](/github/getting-started-with-github/caching-your-github-credentials-in-git) zum Zwischenspeichern nutzt, wirst du bei jeder Verwendung von Git für die Authentifizierung bei {% data variables.product.product_name %} zur Eingabe deiner Anmeldeinformationen für die Authentifizierung bei {% data variables.product.product_name %} aufgefordert.

### SSH

Du kannst mit allen Repositorys in {% data variables.product.product_name %} über SSH arbeiten. Firewalls und Proxys lassen jedoch möglicherweise keine SSH-Verbindungen zu.

Wenn du {% data variables.product.prodname_cli %} für die Authentifizierung verwendest, ermittelt die CLI öffentliche SSH-Schlüssel auf deinem Computer und fordert dich zur Auswahl eines Schlüssels für den Upload auf. Wenn {% data variables.product.prodname_cli %} keinen öffentlichen SSH-Schlüssel für den Upload findet, kann das Tool ein neues Schlüsselpaar aus öffentlichem und privatem SSH-Schlüssel generieren und den öffentlichen Schlüssel in dein Konto in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hochladen. Anschließend kannst du dich entweder mit einem persönlichen Zugriffstoken oder über den Webbrowser authentifizieren. Weitere Informationen zur Authentifizierung mit {% data variables.product.prodname_cli %} findest du unter [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Wenn du dich ohne {% data variables.product.prodname_cli %} authentifizierst, musst du ein Schlüsselpaar aus öffentlichem und privatem SSH-Schlüssel auf deinem lokalen Computer generieren und den öffentlichen Schlüssel zu deinem Konto in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hinzufügen. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Sofern du [den Schlüssel nicht gespeichert hast](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent), wirst du bei jeder Verwendung von Git für die Authentifizierung bei {% data variables.product.product_name %} zur Eingabe deiner SSH-Schlüsselpassphrase aufgefordert.

{% ifversion fpt or ghec %}
### Autorisieren für SAML-SSO

Wenn du ein persönliches Zugriffstoken oder einen SSH-Schlüssel für den Zugriff auf Ressourcen verwenden möchtest, die sich im Besitz einer Organisation befinden, die SAML-SSO nutzt, musst du auch das persönliche Zugriffstoken oder den SSH-Schlüssel autorisieren. Weitere Informationen findest du unter [Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) oder [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}{% endif %}

## {% data variables.product.company_short %}-Tokenformate

{% data variables.product.company_short %} stellt Token mit einem Präfix aus, das den Tokentyp angibt.

| Tokentyp | Präfix | Weitere Informationen |
| :- | :- | :- |
| Persönliches Zugriffstoken | `ghp_` | [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token) |
| OAuth-Zugriffstoken | `gho_` | [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps) |
| Benutzer-zu-Server-Token für eine {% data variables.product.prodname_github_app %} | `ghu_` | [Identifizieren und Autorisieren von Benutzer*innen für {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps) |
| Server-zu-Server-Token für eine {% data variables.product.prodname_github_app %} | `ghs_` | [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation) |
| Aktualisieren eines Tokens für eine {% data variables.product.prodname_github_app %} | `ghr_` | [Aktualisieren von Benutzer-zu-Server-Token](/developers/apps/refreshing-user-to-server-access-tokens) |

