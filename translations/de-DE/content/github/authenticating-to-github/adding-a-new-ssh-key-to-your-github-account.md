---
title: Einen neuen SSH-Schlüssel zum GitHub-Konto hinzufügen
intro: 'Um Ihr {% data variables.product.product_name %}-Konto für die Verwendung eines neuen (oder vorhandenen) SSH-Schlüssels zu konfigurieren, müssen Sie diesen Schlüssel auch zu Ihrem {% data variables.product.product_name %}-Konto hinzufügen.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bevor Sie einen neuen SSH-Schlüssel zu Ihrem {% data variables.product.product_name %}-Konto hinzufügen, sollten Sie
* [nach vorhandenen SSH-Schlüsseln gesucht haben](/articles/checking-for-existing-ssh-keys)
* [einen neuen SSH-Schlüssel erzeugt und ihn zum SSH-Agenten hinzugefügt haben](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Nachdem Sie einen neuen SSH-Schlüssel zu Ihrem {% data variables.product.product_name %}-Konto hinzugefügt haben, können Sie alle lokalen Repositorys für die Verwendung von SSH konfigurieren. Weitere Informationen findest Du unter „[Remote-URLs von HTTPS auf SSH umstellen](/articles/changing-a-remote-s-url/#switching-remote-urls-from-https-to-ssh).“

{% data reusables.ssh.dsa-support %}

{% mac %}

1. Kopiere den SSH-Schlüssel in die Zwischenablage.

  Wenn Deine SSH-Schlüsseldatei einen anderen Namen hat als die Datei im Beispielcode, passe den Dateinamen entsprechend an. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_rsa.pub
  # Kopiert den Inhalt der Datei id_rsa.pub in die Zwischenablage
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

{% endmac %}

{% windows %}

1. Kopiere den SSH-Schlüssel in die Zwischenablage.

  Wenn Deine SSH-Schlüsseldatei einen anderen Namen hat als die Datei im Beispielcode, passe den Dateinamen entsprechend an. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ clip &lt; ~/.ssh/id_rsa.pub
  # Kopiert den Inhalt der Datei id_rsa.pub in die Zwischenablage
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

{% endwindows %}

{% linux %}

1. Kopiere den SSH-Schlüssel in die Zwischenablage.

  Wenn Deine SSH-Schlüsseldatei einen anderen Namen hat als die Datei im Beispielcode, passe den Dateinamen entsprechend an. Achte beim Kopieren des Schlüssels darauf, keine neuen Zeilen oder Leerzeichen hinzuzufügen.

  ```shell
  $ sudo apt-get install xclip
  # Herunterladen und installieren von xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

  $ xclip -selection clipboard &lt; ~/.ssh/id_rsa.pub
  # Copies the contents of the id_rsa.pub file to your clipboard
  ```
  {% tip %}

  **Tipp:** Wenn `xclip` nicht funktioniert, kannst Du den versteckten `.ssh`-Ordner suchen, die Datei in Deinem bevorzugten Texteditor öffnen und den Inhalt in die Zwischenablage kopieren.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Klicke auf **New SSH key** (Neuer SSH-Schlüssel) oder **Add SSH key** (SSH-Schlüssel hinzufügen). ![Schaltfläche „SSH Key" (SSH-Schlüssel)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. Gib im Feld „Title“ (Titel) eine aussagekräftige Kennzeichnung für den neuen Schlüssel ein. Wenn Du beispielsweise ein Mac-Gerät verwendest, könntest Du diesen Schlüssel „Mein MacBook Air“ nennen.
6. Kopiere den Schlüssel in das Feld „Key“ (Schlüssel). ![Das Feld „Key“ (Schlüssel)](/assets/images/help/settings/ssh-key-paste.png)
7. Klicke auf **Add SSH key** (SSH-Schlüssel hinzufügen). ![Die Schaltfläche zum Hinzufügen eines Schlüssels](/assets/images/help/settings/ssh-add-key.png)
8. Wenn Du dazu aufgefordert wirst, bestätige Dein {% data variables.product.product_name %}-Passwort. ![Sudo-Modus-Dialog](/assets/images/help/settings/sudo_mode_popup.png)

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{% endif %}
