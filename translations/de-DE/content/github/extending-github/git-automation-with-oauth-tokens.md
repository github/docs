---
title: Git-Automatisierung mit OAuth-Token
redirect_from:
  - /articles/git-over-https-using-oauth-token/
  - /articles/git-over-http-using-oauth-token/
  - /articles/git-automation-with-oauth-tokens
intro: 'Du kannst OAuth-Tokens einsetzen, um über automatisierte Skripts mit {% data variables.product.product_name %} zu interagieren.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Schritt 1: Ein OAuth-Token erhalten

Erstelle ein persönliches Zugriffstoken auf der Einstellungsseite Deiner Anwendung. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**Tipps:**
- Du musst Deine E-Mail-Adresse verifizieren, bevor Du ein persönliches Zugriffstoken erstellen kannst. Weitere Informationen findest Du unter „[Eigene E-Mail-Adresse verifizieren](/articles/verifying-your-email-address).“
- {% data reusables.user_settings.review_oauth_tokens_tip %}
{% else %}
**Tipp:**{% data reusables.user_settings.review_oauth_tokens_tip %}
{% endif %}

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Schritt 2: Ein Repository klonen

{% data reusables.command_line.providing-token-as-password %}

Um diese Aufforderungen zu vermeiden, kannst Du die Passwort-Zwischenspeicherung von Git verwenden. For information, see "[Caching your GitHub credentials in Git](/github/using-git/caching-your-github-credentials-in-git)."

{% warning %}

**Warnung:** Token haben Lese- und Schreibzugriff und sollten wie Passwörter behandelt werden. Wenn Du beim Klonen oder Hinzufügen eines Remote-Repositorys Dein Token in die Klon-URL eingibst, schreibt Git das Token in Klartext in die Datei _.git/config_, was ein Sicherheitsrisiko darstellt.

{% endwarning %}

### Weiterführende Informationen

- "[Authorizing OAuth Apps](/v3/oauth/)"
