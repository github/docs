---
title: Autoreninformationen ändern
redirect_from:
  - /change-author-info/
  - /changing-author-info/
  - /articles/changing-author-info
intro: 'Um den Namen und/oder die E-Mail-Adresse zu ändern, der/die in vorhandenen Commits angegeben ist, musst Du den gesamten Verlauf Deines Git-Repositorys neu schreiben.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Warnung:** Diese Aktion nimmt irreversible Änderungen am Verlauf Deines Repositorys vor. Wenn Du mit anderen zusammen an einem Repository arbeitest, gilt es als unerwünscht, einen veröffentlichten Verlauf umzuschreiben. Du solltest dies nur im Notfall tun.

{% endwarning %}

### Den Git-Verlauf eines Repositorys mit einem Skript ändern

Wir haben ein Skript erstellt, das in allen Commits die alte E-Mail-Adresse in den Autoren- oder Beitragender-Feldern durch den korrekten Namen und die richtige E-Mail-Adresse ersetzt.

{% tip %}

**Hinweis:** Durch die Ausführung dieses Skripts wird der Verlauf für alle Repository-Mitarbeiter neu geschrieben. Wenn diese Schritte ausgeführt wurden, müssen alle Personen mit Forks oder Klonen den geänderten Verlauf abrufen und alle lokalen Änderungen in den neuen Verlauf übergeben.

{% endtip %}

Für die Ausführung dieses Skripts benötigst Du Folgendes:

* Die alte E-Mail-Adresse, die in den Autoren-/Freigebenden-Feldern steht und die Du ändern möchtest
* Den richtigen Namen und die richtige E-Mail-Adresse, die mit diesen Commits verknüpft werden sollen

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen neuen, leeren Klon Deines Repositorys:
  ```shell
  git clone --bare https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
  cd <em>repo</em>.git
  ```
3. Kopiere das Skript in das Terminal. Ersetze dabei die folgenden Variablen entsprechend den vorliegenden Informationen:
    * `OLD_EMAIL (Alte E-Mail-Adresse)`
    * `CORRECT_NAME (richtiger Name)`
    * `CORRECT_EMAIL (richtige E-Mail-Adresse)`

  ```shell
  #!/bin/sh

  git filter-branch --env-filter '

  OLD_EMAIL="your-old-email@example.com"
  CORRECT_NAME="Your Correct Name"
  CORRECT_EMAIL="your-correct-email@example.com"

  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags
  ```

4. Drücke die **Eingabetaste**, um das Skript auszuführen.
5. Überprüfe den neuen Git-Verlauf auf Fehler.
6. Überführe den korrigierten Verlauf zu {% data variables.product.product_name %}:
  ```shell
  git push --force --tags origin 'refs/heads/*'
  ```
7. Entferne den temporären Klon:
  ```shell
  cd ..
  rm -rf <em>repo</em>.git
  ```
