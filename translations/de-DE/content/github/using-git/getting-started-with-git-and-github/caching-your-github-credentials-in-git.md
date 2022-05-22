---
title: Caching your GitHub credentials in Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
intro: 'If you''re [cloning {% data variables.product.product_name %} repositories using HTTPS](/github/using-git/which-remote-url-should-i-use), you can use a credential helper to tell Git to remember your credentials.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
If you clone {% data variables.product.product_name %} repositories using SSH, then you authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see "[Generating an SSH Key](/articles/generating-an-ssh-key)."

{% mac %}

{% tip %}

**Tipps:**

- Du benötigst Git **1.7.10** oder höher, um den Credential-Helfer osxkeychain zu verwenden.
- Wenn Du Git mit [Homebrew](http://brew.sh/) installiert hast, ist der `osxkeychain helper` bereits installiert.
- Wenn Du Mac OS X 10.7 oder höher ausführst und Git über das Xcode-Befehlszeilenwerkzeug von Apple installiert hast, ist `osxkeychain helper` automatisch in Deiner Git-Installation enthalten.

{% endtip %}

Installiere Git und den `osxkeychain helper`, und weise Git an, ihn zu verwenden.

1. Finde heraus, ob Git und der `osxkeychain helper` bereits installiert sind:
  ```shell
  $ git credential-osxkeychain
  # Test für den Credential Helper
  > Usage: git credential-osxkeychain &lt;get|store|erase>
  ```
2. Wenn der `osxkeychain helper` nicht installiert ist und Du OS X Version 10.9 oder höher ausführst, fordert Dein Computer Dich dazu auf, den Helfer als Teil des Xcode-Befehlszeilenwerkzeugs herunterzuladen:
  ```shell
  $ git credential-osxkeychain
  > xcode-select: note: no developer tools were found at '/Applications/Xcode.app',
  > requesting install. Choose an option in the dialog to download the command line developer tools.
  ```

 Alternativ kannst Du Git und den `osxkeychain helper` mit [Homebrew](http://brew.sh/) installieren:
  ```shell
  $ brew install git
  ```

4. Weise Git über die globale `credential.helper`-Konfiguration an, `osxkeychain helper` zu verwenden:
  ```shell
  $ git config --global credential.helper osxkeychain
  # Konfiguriere Git für den Einsatz des osxkeychain credential helper
  ```

The next time you clone an HTTPS URL that requires authentication, Git will prompt you for your username and password. {% data reusables.user_settings.password-authentication-deprecation %}

Once you've authenticated successfully, your credentials are stored in the macOS keychain and will be used every time you clone an HTTPS URL. You won't be required to type your credentials in to Git again unless you change your credentials.

{% endmac %}

{% windows %}

{% tip %}

**Tipp:** Du benötigst Git **1.7.10** oder höher, um den Credential-Helfer zu verwenden.

{% endtip %}

Du kannst auch eine native Git-Shell installieren, z. B. [Git für Windows](https://git-for-windows.github.io/). Führe bei Git für Windows den folgenden Befehl in der Befehlszeile aus, um Deine Anmeldeinformationen zu speichern:

```shell
$ git config --global credential.helper wincred
```

{% endwindows %}

{% linux %}

{% tip %}

**Tipp:** Du benötigst Git **1.7.10** oder höher, um den Credential-Helfer zu verwenden.

{% endtip %}

Aktivieren Sie den Credential-Helper, damit Git Ihr Passwort eine Zeitllang speichert. Standardmäßig behält Git Ihr Passwort 15 Minuten lang im Zwischenspeicher.

1. Gib im Terminal Folgendes ein:
  ```shell
  $ git config --global credential.helper cache
  # Konfiguriere Git für den Gebrauch des credential memory cache
  ```
2. Um die standardmäßige Zeitüberschreitung für den Passwort-Cache zu ändern, gib Folgendes ein:
  ```shell
  $ git config --global credential.helper 'cache --timeout=3600'
  # setzte den Cache timeout auf 1 Stunde (Angabe in Sekunden)
  ```

{% endlinux %}

### Weiterführende Informationen

- „[Anmeldeinformationen über OSX Keychain aktualisieren](/articles/updating-credentials-from-the-osx-keychain/)“
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
