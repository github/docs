---
title: Git Large File Storage (Git Große Dateien Speicher) konfigurieren
intro: 'Sobald [{% data variables.large_files.product_name_short %} installiert wurde](/articles/installing-git-large-file-storage/), musst Du es mit einer großen Datei in Deinem Repository verknüpfen.'
redirect_from:
  - /articles/configuring-large-file-storage/
  - /articles/configuring-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn in Deinem Repository bereits Dateien vorhanden sind, für die Du {% data variables.product.product_name %} verwenden möchtest, musst Du sie zuerst aus dem Repository entfernen und sie dann lokal zu {% data variables.large_files.product_name_short %} hinzufügen. Weitere Informationen findest Du unter „[Eine Datei in Deinem Repository zu {% data variables.large_files.product_name_short %} verschieben](/articles/moving-a-file-in-your-repository-to-git-large-file-storage).“

{% data reusables.large_files.resolving-upload-failures %}

{% if currentVersion != "free-pro-team@latest" %}

{% tip %}

**Hinweis:** Bevor Du versuchst, eine große Datei zu {% data variables.product.product_name %} zu übertragen, stelle sicher, dass Du {% data variables.large_files.product_name_short %} auf Deiner Appliance aktiviert hast. Weitere Informationen findest Du unter „[Git Large File Storage auf GitHub Enterprise Server konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/).“

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in ein vorhandenes Repository, das Du mit {% data variables.large_files.product_name_short %} verwenden möchtest.
3. Um eine Datei in Deinem Repository mit {% data variables.large_files.product_name_short %} zu verknüpfen, gib `git {% data variables.large_files.command_name %} track` ein, gefolgt vom Namen der Dateierweiterung, die Du automatisch zu {% data variables.large_files.product_name_short %} hochladen möchtest.

  Um beispielsweise eine _.psd_-Datei zu verknüpfen, gib den folgenden Befehl ein:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Du musst jeden Dateityp, den Du mit {% data variables.large_files.product_name_short %} verknüpfen möchtest, mit `git {% data variables.large_files.command_name %} track` hinzufügen. Dieser Befehl ergänzt die Datei *.gitattributes* Deines Repositorys und verknüpft große Dateien mit {% data variables.large_files.product_name_short %}.

  {% tip %}

  **Tipp:** Wir empfehlen dringend, die lokale Datei *.gitattributes* in Dein Repository freizugeben. Die Nutzung einer globalen *.gitattributes*-Datei, die mit {% data variables.large_files.product_name_short %} verknüpft ist, kann bei der Mitarbeit an anderen Git-Projekten Konflikte verursachen.

  {% endtip %}

4. Füge eine Datei zum Repository hinzu, die mit der verknüpften Erweiterung übereinstimmt:
  ```shell
  $ git add path/to/file.psd
  ```
5. Gib die Datei frei und übertrage sie zu {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push origin master
  ```
  Du solltest Diagnoseinformationen zum Hochladen der Datei sehen:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

### Weiterführende Informationen

- "[Collaboration with {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
