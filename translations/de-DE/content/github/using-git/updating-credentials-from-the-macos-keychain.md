---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your username, password, or personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Anmeldeinformationen über Keychain Access aktualisieren

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![ Suchleiste von Spotlight](/assets/images/help/setup/keychain-access.png)
2. Suche in Keychain Access nach **{% data variables.command_line.backticks %}**.
3. Suche den Eintrag „internet password“ (Internet-Passwort) für `{% data variables.command_line.backticks %}`. ![Eintrag des GitHub-Passworts in Keychain](/assets/images/help/setup/keychain-entry.png)
4. Bearbeite oder lösche den Eintrag je nach Bedarf.

### Anmeldeinformationen über die Befehlszeile löschen

In der Befehlszeile kannst Du den Keychain-Eintrag direkt über den Credential-Helfer löschen.

Gib hierzu den folgenden Befehl ein:

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Bei erfolgreicher Ausführung des Befehls erhältst Du keine Rückmeldung. Wenn Du testen möchtest, ob der Befehl funktioniert hat, klone ein Repository aus {% data variables.product.product_location %}. Wenn Du nach einem Passwort gefragt wirst, wurde der Keychain-Eintrag gelöscht.

### Weiterführende Informationen

- "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/using-git/caching-your-github-credentials-in-git/)"
