---
title: Git-Benutzername festlegen
intro: 'Git verknüpft Commits über den Benutzernamen mit einer Identität. Der Git-Benutzername ist nicht identisch mit Deinem {% data variables.product.product_name %}-Benutzernamen.'
redirect_from:
  - /articles/setting-your-username-in-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Den Namen, der mit Deinen Git-Commits verbunden ist, kannst Du mit dem Befehl `git config` ändern. Der neue Name wird bei allen zukünftigen Commits angezeigt, die Du über die Befehlszeile per Push an {% data variables.product.product_name %} überträgst. Als Git-Benutzernamen kannst Du einen beliebigen Text verwenden, um Deinen echten Namen privat zu halten.

Eine Änderung Deines Namens für Git-Commits mit dem Befehl `git config` wirkt sich nur auf zukünftige Commits aus. Der für frühere Commits verwendete Name wird hierdurch nicht geändert.

### Git-Benutzername für *alle* Repositorys auf Deinem Computer festlegen

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
  ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
  ```

### Git-Benutzername für ein einzelnes Repository festlegen

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Repository, für das Du den Benutzernamen für Deine Git-Commits festlegen möchtest.

3. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
  ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
  ```

### Weiterführende Informationen

- „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address)“
- [„Git-Konfiguration“ im _Pro Git_-Buch](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
