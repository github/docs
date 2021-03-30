---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% if currentVersion != "github-ae@latest" %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Anmeldeinformationen über Keychain Access aktualisieren

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![ Suchleiste von Spotlight](/assets/images/help/setup/keychain-access.png)
2. Suche in Keychain Access nach **{% data variables.command_line.backticks %}**.
3. Suchen Sie den Eintrag „internet password“ (Internetpasswort) für `{% data variables.command_line.backticks %}`.
4. Bearbeiten oder löschen Sie den Eintrag je nach Änderungssituation.

### Anmeldeinformationen über die Befehlszeile löschen

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Bei erfolgreicher Ausführung des Befehls erhältst Du keine Rückmeldung. To test that it works, try and clone a private repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

### Weiterführende Informationen

- "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
