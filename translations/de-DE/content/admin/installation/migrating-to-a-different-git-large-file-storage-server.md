---
title: Zu einem anderen Git Large File Storage-Server migrieren
intro: 'Sie können zu einem neuen {% data variables.large_files.product_name_long %}-Server ({% data variables.large_files.product_name_short %}) migrieren. Verwenden Sie dazu den {% data variables.large_files.product_name_short %}-Client, um Assets vom bestehenden Server abzurufen und sie per Push-Vorgang an den neuen Speicherort zu übertragen.'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
versions:
  enterprise-server: '*'
---

Bevor Sie eine Migration zu einem anderen {% data variables.large_files.product_name_long %}-Server durchführen, müssen Sie {% data variables.large_files.product_name_short %} für die Verwendung eines Drittanbieterservers konfigurieren. Weitere Informationen finden Sie unter „[{% data variables.large_files.product_name_long %} zur Verwendung eines Drittanbieterservers konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-to-use-a-third-party-server)“.

1. Konfigurieren Sie das Repository mit einer zweiten Remote-Instanz.
  ```shell
  $ git remote add <em>NEW-REMOTE</em> https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo
  &nbsp;
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  > Endpoint (<em>NEW-REMOTE</em>)=https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo/info/lfs (auth=none)
  ```

2. Rufen Sie alle Objekte von der alten Remote-Instanz ab.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. Übertragen Sie alle Objekte per Push-Vorgang auf die neue Remote-Instanz.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
