---
title: Resolver fallas de carga de Git Large File Storage
intro: 'Si tus archivos {% data variables.large_files.product_name_short %} no se cargaron bien, puedes tomar varias medidas para solucionar los problemas de error de carga.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

La {% data variables.large_files.product_name_short %} comprobación de integridad asegura que todos los archivos {% data variables.large_files.product_name_short %} referenciados en una subida se hayan cargado bien. Si la comprobación detecta archivos referenciados que no se cargaron, recibirás un mensaje de error y se bloqueará la subida.

Para resolver el mensaje de error, debes reinstalar tu cliente local de {% data variables.large_files.product_name_short %} para garantizar que los archivos referenciados de {% data variables.large_files.product_name_short %} pueden subirse adecuadamente en ocasiones posteriores.

1. Abre Terminal.
2. Reinstala {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs install
  ```
3. Sube todos los archivos referenciados {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs push --all origin
  ```
