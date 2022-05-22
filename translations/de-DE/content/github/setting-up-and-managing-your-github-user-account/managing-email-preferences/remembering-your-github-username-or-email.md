---
title: Erinnerung für Deinen GitHub-Benutzernamen oder Deine GitHub-E-Mail-Adresse
intro: 'Meldest Du Dich seit langem einmal wieder bei {% data variables.product.product_location %} an? Herzlich willkommen! Wenn Sie sich nicht mehr an den Namen Ihres {% data variables.product.product_name %}-Benutzerkontos erinnern können, versuchen Sie ihn mit den folgenden Methoden zu finden.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email/
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email/
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---
{% mac %}

### {% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im **GitHub Desktop**-Menü auf **Preferences** (Einstellungen).
2. Überprüfe im Einstellungsfenster Folgendes:
    - Klicke auf **Accounts** (Konten), um Deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um Deine Git-E-Mail-Adresse anzuzeigen. Eventuell ist diese Adresse jedoch nicht Ihre [primäre {% data variables.product.product_name %}-E-Mail-Adresse](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

### {% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im Menü **File** (Datei) auf **Options** (Optionen).
2. Überprüfe im Optionsfenster Folgendes:
    - Klicke auf **Accounts** (Konten), um Deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um Deine Git-E-Mail-Adresse anzuzeigen. Eventuell ist diese Adresse jedoch nicht Ihre [primäre {% data variables.product.product_name %}-E-Mail-Adresse](/articles/changing-your-primary-email-address).

{% endwindows %}

### Eigenen Benutzernamen in Deiner `user.name`-Konfiguration finden

Bei der Einrichtung hast Du vermutlich [Deinen Benutzernamen in Git festgelegt](/github/getting-started-with-github/setting-your-username-in-git). Wenn dies der Fall ist, kannst Du den Wert dieser Konfigurationseinstellung wie folgt abrufen:

```shell
$ git config user.name
# Zeigt die Einstellung an
<em>YOUR_USERNAME</em>
```

### Eigenen Benutzernamen in der URL von Remote-Repositorys finden

Wenn Dir lokale Kopien persönlicher Repositorys vorliegen, die Du erstellt oder geforkt hast, kannst Du die URL des Remote-Repositorys überprüfen.

{% tip %}

**Tipp**: Diese Methode funktioniert nur, wenn Dir das Originalrepository oder Dein eigener Fork eines fremden Repositorys vorliegt. Wenn Du das Repository einer anderen Person geklont hast, wird deren Benutzername statt Deinem angezeigt. Ebenso wird bei Organisationsrepositorys in der Remote-URL statt eines bestimmten Benutzers der Name der Organisation angezeigt.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Wechselt das Verzeichnis zum initialisierten Git-Repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Ihr Benutzername folgt unmittelbar auf `https://{% data variables.command_line.backticks %}/`.

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Eigene E-Mail-Adresse überprüfen](/articles/verifying-your-email-address)“
{% endif %}
