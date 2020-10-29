---
title: Ein sicheres Passwort erstellen
intro: 'Schützen Sie Ihr {% data variables.product.product_name %}-Konto mit einem sicheren und eindeutigen Passwort mit einem Passwort-Manager.'
redirect_from:
  - /articles/what-is-a-strong-password/
  - /articles/creating-a-strong-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Sie müssen ein Passwort für Ihr {% data variables.product.product_name %}-Konto auswählen oder erstellen, das
- 8 Zeichen lang ist, wenn es eine Zahl und einen Kleinbuchstaben enthält, oder
- 16 Zeichen lang ist, bei einer beliebigen Kombination an Zeichen.

Für den Schutz Deines Kontos empfehlen wir Dir die folgenden Best Practices:
- Benutze einen Passwort-Manager wie zum Beispiel [LastPass](https://lastpass.com/) oder [1Password](https://1password.com/), um ein Passwort mit mehr als 16 Zeichen zu erstellen.
- Erzeugen Sie ein eindeutiges Passwort für {% data variables.product.product_name %}. Wenn Sie Ihr {% data variables.product.product_name %}-Passwort auch an anderer Stelle verwenden und dieser Dienst kompromittiert wird, könnten die Angreifer oder andere Personen mit böswilliger Absicht diese Informationen nutzen, um auf Ihr {% data variables.product.product_name %}-Konto zuzugreifen.
- Konfiguriere die Zwei-Faktor-Authentifizierung für Dein persönliches Konto. Weitere Informationen findest Du unter „[Informationen zur Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication).“
- Gib Dein Passwort niemals an andere weiter, auch nicht an potenzielle Mitarbeiter. Jede Person sollte ihr eigenes persönliches Konto bei {% data variables.product.product_name %} nutzen. Weitere Informationen zu Möglichkeiten der Zusammenarbeit findest Du unter „[Mitarbeiter in ein persönliches Repository einladen](/articles/inviting-collaborators-to-a-personal-repository)“, „[Informationen über gemeinschaftliche Entwicklungsmodelle](/articles/about-collaborative-development-models/)“ oder „[Mit Gruppen in Organisationen zusammenarbeiten](/articles/collaborating-with-groups-in-organizations/).“

{% data reusables.repositories.blocked-passwords %}

You can only use your password to log on to {% data variables.product.product_name %} using your browser. When you authenticate to {% data variables.product.product_name %} with other means, such as the command line or API, you should use other credentials. For more information, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)."

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### Weiterführende Informationen

- "[Caching your {% data variables.product.product_name %} credentials in Git](/github/using-git/caching-your-github-credentials-in-git/)"
- „[Dein Konto und Deine Daten schützen](/articles/keeping-your-account-and-data-secure/)“
