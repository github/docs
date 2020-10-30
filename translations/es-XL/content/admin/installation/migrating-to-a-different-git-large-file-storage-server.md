---
title: Migrar a un servidor de Git Large File Storage diferente
intro: 'Puedes migrar a un nuevo servidor {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) al utilizar el cliente {% data variables.large_files.product_name_short %} para extraer activos desde el servidor existente y subirlos a la nueva ubicación.'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
versions:
  enterprise-server: '*'
---

Antes de migrar a un servidor {% data variables.large_files.product_name_long %} diferente, debes configurar {% data variables.large_files.product_name_short %} para usar un servidor de un tercero. Para obtener más información, consulta "[Configurar {% data variables.large_files.product_name_long %} para usar un servidor de un tercero](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-to-use-a-third-party-server)."

1. Configura un repositorio con un segundo remoto.
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

2. Extrae todos los objetos del remoto anterior.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 de 16 archivos) 48.71 MB / 48.85 MB
  ```

3. Extrae todos los objetos a un nuevo remoto.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 de 16 archivos) 48.00 MB / 48.85 MB, 879.10 KB pasados por alto
  ```
