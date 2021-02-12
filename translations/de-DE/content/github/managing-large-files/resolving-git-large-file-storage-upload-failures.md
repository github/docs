---
title: Fehler beim Hochladen mit Git Large File Storage beheben
intro: 'Wenn Ihre {% data variables.large_files.product_name_short %}-Dateien nicht richtig hochgeladen werden, können Sie den Uploadfehler in mehreren Schritten beheben.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Der Integritätscheck von {% data variables.large_files.product_name_short %} überprüft, ob alle referenzierten {% data variables.large_files.product_name_short %}-Dateien eines Pushes korrekt hochgeladen wurden. Wird bei der Überprüfung festgestellt, dass dies nicht der Fall ist, erhältst Du eine Fehlermeldung und Dein Push wird blockiert.

Zur Behebung des Fehlers muss Du Deinen lokalen {% data variables.large_files.product_name_short %}-Client neu installieren, um sicherzustellen, dass die referenzierten {% data variables.large_files.product_name_short %}-Dateien künftig korrekt hochgeladen werden.

1. Öffne das Terminal.
2. Installiere {% data variables.large_files.product_name_short %} neu.
  ```shell
  $ git lfs install
  ```
3. Führe einen Push aller referenzierten {% data variables.large_files.product_name_short %}-Dateien durch.
  ```shell
  $ git lfs push --all origin
  ```
