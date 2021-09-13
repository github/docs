---
title: Auf vorhandene SSH-Schlüssel prüfen
intro: 'Bevor Du einen SSH-Schlüssel erstellst, kannst Du überprüfen, ob für Dich bereits SSH-Schlüssel vorhanden sind.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Gib `ls -al ~/.ssh` ein, um zu prüfen, ob SSH-Schlüssel vorhanden sind:

  ```shell
  $ ls -al ~/.ssh
  # zeigt die Dateien in Deinem .ssh Verzeichnis, falls vorhanden
  ```
3. Überprüfe die Verzeichnisliste, um zu ermitteln, ob Du bereits einen öffentlichen SSH-Schlüssel besitzen. Standardmäßig lauten die Dateinamen der öffentlichen Schlüssel:
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*

Wenn Du kein öffentliches und privates Schlüsselpaar besitzt oder wenn Du kein vorhandenes Schlüsselpaar für die Verbindung zu {% data variables.product.product_name %} verwenden möchtest, dann [erzeuge einen neuen SSH-Schlüssel](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Wenn Du ein bestehendes öffentliches und privates Schlüsselpaar aufgeführt siehst (beispielsweise *id_rsa.pub* und *id_rsa*), das Du für die Verbindung zu {% data variables.product.product_name %} verwenden möchtest, dann [füge Deinen SSH-Schlüssel zum SSH-Agenten hinzu](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

{% tip %}

**Tipp:** Wenn eine Fehlermeldung angezeigt wird, dass *~/.ssh* nicht vorhanden ist, musst Du Dir keine Gedanken machen! Es wird beim [Erzeugen eines neuen SSH-Schlüssels](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) erstellt.

{% endtip %}
