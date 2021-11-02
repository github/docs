---
title: Einen neuen SSH-Schlüssel zum GitHub-Konto hinzufügen
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) SSH key, you''ll also need to add the key to your account.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
---

Before adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you should have:
* [nach vorhandenen SSH-Schlüsseln gesucht haben](/articles/checking-for-existing-ssh-keys)
* [Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

After adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you can reconfigure any local repositories to use SSH. Weitere Informationen findest Du unter „[Remote-URLs von HTTPS auf SSH umstellen](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh).“

{% data reusables.ssh.key-type-support %}

{% mac %}

{% include tool-switcher %}
{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Tipp:** Wenn `pbcopy` nicht funktioniert, kannst Du den versteckten `.ssh`-Ordner suchen, die Datei mit Deinem bevorzugten Texteditor öffnen und den Inhalt in die Zwischenablage kopieren.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Klicke auf **New SSH key** (Neuer SSH-Schlüssel) oder **Add SSH key** (SSH-Schlüssel hinzufügen). ![Schaltfläche „SSH Key" (SSH-Schlüssel)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. Gib im Feld „Title“ (Titel) eine aussagekräftige Kennzeichnung für den neuen Schlüssel ein. Wenn Du beispielsweise ein Mac-Gerät verwendest, könntest Du diesen Schlüssel „Mein MacBook Air“ nennen.
6. Kopiere den Schlüssel in das Feld „Key“ (Schlüssel). ![Das Feld „Key“ (Schlüssel)](/assets/images/help/settings/ssh-key-paste.png)
7. Klicke auf **Add SSH key** (SSH-Schlüssel hinzufügen). ![Die Schaltfläche zum Hinzufügen eines Schlüssels](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% include tool-switcher %}

{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Tipp:** Wenn `clip` nicht funktioniert, kannst Du den versteckten `.ssh`-Ordner suchen, die Datei in Deinem bevorzugten Texteditor öffnen und den Inhalt in die Zwischenablage kopieren.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Klicke auf **New SSH key** (Neuer SSH-Schlüssel) oder **Add SSH key** (SSH-Schlüssel hinzufügen). ![Schaltfläche „SSH Key" (SSH-Schlüssel)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. Gib im Feld „Title“ (Titel) eine aussagekräftige Kennzeichnung für den neuen Schlüssel ein. Wenn Du beispielsweise ein Mac-Gerät verwendest, könntest Du diesen Schlüssel „Mein MacBook Air“ nennen.
6. Kopiere den Schlüssel in das Feld „Key“ (Schlüssel). ![Das Feld „Key“ (Schlüssel)](/assets/images/help/settings/ssh-key-paste.png)
7. Klicke auf **Add SSH key** (SSH-Schlüssel hinzufügen). ![Die Schaltfläche zum Hinzufügen eines Schlüssels](/assets/images/help/settings/ssh-add-key.png)
8. Wenn Du dazu aufgefordert wirst, bestätige Dein {% data variables.product.product_name %}-Passwort. ![Sudo-Modus-Dialog](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endwindows %}

{% linux %}

{% include tool-switcher %}
{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tip:** Alternatively, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Klicke auf **New SSH key** (Neuer SSH-Schlüssel) oder **Add SSH key** (SSH-Schlüssel hinzufügen). ![Schaltfläche „SSH Key" (SSH-Schlüssel)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. Gib im Feld „Title“ (Titel) eine aussagekräftige Kennzeichnung für den neuen Schlüssel ein. Wenn Du beispielsweise ein Mac-Gerät verwendest, könntest Du diesen Schlüssel „Mein MacBook Air“ nennen.
6. Kopiere den Schlüssel in das Feld „Key“ (Schlüssel). ![Das Feld „Key“ (Schlüssel)](/assets/images/help/settings/ssh-key-paste.png)
7. Klicke auf **Add SSH key** (SSH-Schlüssel hinzufügen). ![Die Schaltfläche zum Hinzufügen eines Schlüssels](/assets/images/help/settings/ssh-add-key.png)
8. Wenn Du dazu aufgefordert wirst, bestätige Dein {% data variables.product.product_name %}-Passwort. ![Sudo-Modus-Dialog](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key.

```shell
gh ssh-key add <em>key-file</em>
```

To include a title for the new key, use the `-t` or `--title` flag.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

{% endcli %}

{% ifversion fpt or ghec %}
## Weiterführende Informationen

- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{% endif %}
