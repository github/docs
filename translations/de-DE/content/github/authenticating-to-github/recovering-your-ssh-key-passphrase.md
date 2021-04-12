---
title: SSH-Schlüssel-Passphrase wiederherstellen
intro: 'Wenn Du Deine SSH-Schlüssel-Passphrase verloren hast, kannst Du sie je nach verwendetem Betriebssystem entweder wiederherstellen oder musst eine neue SSH-Schlüssel-Passphrase generieren.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase/
  - /articles/how-do-i-recover-my-ssh-key-passphrase/
  - /articles/recovering-your-ssh-key-passphrase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

{% mac %}

Wenn Du [Deine SSH-Passphrase mit der OS X Keychain konfiguriert hast](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), kannst Du sie vielleicht wiederherstellen.

1. Suche im Finder die App **Keychain Access**. ![ Suchleiste von Spotlight](/assets/images/help/setup/keychain-access.png)
2. Suche in Keychain Access nach **SSH**.
3. Doppelklicke auf den Eintrag für Deinen SSH-Schlüssel, um ein neues Dialogfeld zu öffnen.
4. Wähle in der unteren linken Ecke **Show password** (Passwort anzeigen). ![Dialogfenster in Keychain Access](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Du wirst nach Deinem Administrator-Passwort gefragt. Gib es im Dialogfeld „Keychain Access“ (Keychain Zugriff) ein.
6. Dein Passwort wird angezeigt.

{% endmac %}

{% windows %}

Wenn Du Deine SSH-Schlüssel-Passphrase verlierst, kannst Du sie nicht wiederherstellen. Du musst [ein ganz neues SSH-Schlüsselpaar erzeugen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) oder [auf HTTPS-Klone umstellen](/github/getting-started-with-github/managing-remote-repositories), um stattdessen Dein GitHub-Passwort zu verwenden.

{% endwindows %}

{% linux %}

Wenn Du Deine SSH-Schlüssel-Passphrase verlierst, kannst Du sie nicht wiederherstellen. Du musst [ein ganz neues SSH-Schlüsselpaar erzeugen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) oder [auf HTTPS-Klone umstellen](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), um stattdessen Dein GitHub-Passwort zu verwenden.

{% endlinux %}
