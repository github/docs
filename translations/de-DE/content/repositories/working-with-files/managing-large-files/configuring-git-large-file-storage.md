---
title: Git Large File Storage konfigurieren
intro: 'Sobald [{% data variables.large_files.product_name_short %} installiert ist](/articles/installing-git-large-file-storage/), musst du die Zuordnung zu einer großen Datei in deinem Repository vornehmen.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331760'
---
Wenn in deinem Repository bereits Dateien vorhanden sind, für die du {% data variables.product.product_name %} verwenden möchtest, musst du sie zunächst aus dem Repository entfernen und lokal zu {% data variables.large_files.product_name_short %} hinzufügen. Weitere Informationen findest du unter [Verschieben einer Datei im Repository zu {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage).

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Hinweis**: Bevor du versuchst, eine große Datei per Push an {% data variables.product.product_name %} zu übertragen, musst du sicherstellen, dass {% data variables.large_files.product_name_short %} im Unternehmen aktiviert ist. Weitere Informationen findest du unter [Git Large File Storage auf GitHub Enterprise Server konfigurieren](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/).

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in ein vorhandenes Repository, das du mit {% data variables.large_files.product_name_short %} verwenden möchten.
3. Um eine Datei in deinem Repository {% data variables.large_files.product_name_short %} zuzuordnen, gibst du `git {% data variables.large_files.command_name %} track` ein, gefolgt vom Namen der Dateierweiterung, die du automatisch in {% data variables.large_files.product_name_short %} hochladen möchtest.

  Um beispielsweise eine _.psd_-Datei zuzuordnen, gibst du den folgenden Befehl ein:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Jeder Dateityp, den du {% data variables.large_files.product_name_short %} zuordnen möchtest, muss mit `git {% data variables.large_files.command_name %} track` hinzugefügt werden. Dieser Befehl ändert die *.gitattributes*-Datei im Repository und ordnet große Dateien {% data variables.large_files.product_name_short %} zu.

  {% note %}

  **Hinweis:** Wir empfehlen dringend, die lokale *.gitattributes*-Datei in dein Repository zu committen.

    - Die Nutzung einer globalen *.gitattributes*-Datei, die {% data variables.large_files.product_name_short %} zugeordnet ist, kann bei der Mitarbeit an anderen Git-Projekten Konflikte verursachen.
    - Wenn sich die *.gitattributes*-Datei im Repository befindet, können Benutzer, die Forks oder frische Klone erstellen, einfacher mit {% data variables.large_files.product_name_short %} zusammenarbeiten.
    - Mit der *.gitattributes*-Datei im Repository ist es möglich, {% data variables.large_files.product_name_short %}-Objekte optional in ZIP-Dateien und TAR-Archive aufzunehmen.

  {% endnote %}

4. Füge eine Datei zum Repository hinzu, die mit der verknüpften Erweiterung übereinstimmt:
  ```shell
  $ git add path/to/file.psd
  ```
5. Gib die Datei frei und übertrage sie zu {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  Du solltest Diagnoseinformationen zum Hochladen der Datei sehen:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## Weiterführende Themen

- [Zusammenarbeit mit {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/){% ifversion fpt or ghec %}
- [Verwalten von {% data variables.large_files.product_name_short %}-Objekten in Archiven im eigenen Repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository){% endif %}
