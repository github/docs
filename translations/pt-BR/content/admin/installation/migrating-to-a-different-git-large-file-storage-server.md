---
title: Migrar para outro servidor do Git Large File Storage
intro: 'Você pode migrar para um novo servidor do {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) usando o cliente do {% data variables.large_files.product_name_short %} para fazer fetch de ativos do servidor atual e fazer push deles para o novo local.'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
versions:
  enterprise-server: '*'
---

Antes de migrar para outro servidor do {% data variables.large_files.product_name_long %}, configure o {% data variables.large_files.product_name_short %} para usar um servidor de terceiros. Para obter mais informações, consulte "[Configurar o {% data variables.large_files.product_name_long %} para usar um servidor de terceiros](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-to-use-a-third-party-server)".

1. Configure o repositório com outro remote.
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

2. Faça fetch de todos os objetos do remote antigo.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 de 16 arquivos) 48.71 MB / 48.85 MB
  ```

3. Faça push de todos os objetos para o remote novo.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 de 16 arquivos) 48.00 MB / 48.85 MB, 879.10 KB ignorados
  ```
