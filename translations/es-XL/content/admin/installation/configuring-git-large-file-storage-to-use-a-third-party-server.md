---
title: Configurar Almacenamiento de archivos de gran tamaño Git para usar un servidor de terceros
intro: 'Puedes utilizar {{ site.data.variables.large_files.product_name_long }} ({{ site.data.variables.large_files.product_name_short }}) en un servidor de terceros inhabilitando {{ site.data.variables.large_files.product_name_short }} en el aparato del {{ site.data.variables.product.prodname_ghe_server }} y configurando el cliente {{ site.data.variables.large_files.product_name_short }} con la URL del servidor en el que quieras almacenar los activos grandes.'
redirect_from:
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.large_files.storage_assets_location }}
{{ site.data.reusables.large_files.rejected_pushes }}

1. Inhabilita {{ site.data.variables.large_files.product_name_short }} en el aparato del {{ site.data.variables.product.prodname_ghe_server }}. Para obtener más información, consulta "[Configurar {{ site.data.variables.large_files.product_name_long }}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)."

2. Crea un archivo de configuración {{ site.data.variables.large_files.product_name_short }} que apunte al servidor de terceros.
  ```shell
  # Show default configuration
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  &nbsp;
  # Create .lfsconfig that points to third party server.
  $ git config -f .lfsconfig remote.origin.lfsurl https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo/info/lfs (auth=none)
  &nbsp;
  # Show the contents of .lfsconfig
  $ cat .lfsconfig
  [remote "origin"]
  lfsurl = https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  ```

3. Para mantener la misma configuración {{ site.data.variables.large_files.product_name_short }} para cada usuario, confirma un archivo `.lfsconfig` personalizado para el repositorio.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Migra cualquier activo {{ site.data.variables.large_files.product_name_short }} existente. Para obtener más información, consulta "[Migrar a un servidor diferente {{ site.data.variables.large_files.product_name_long }} ](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)."

### Leer más

- "[Acerca de {{ site.data.variables.large_files.product_name_long }}](/articles/about-git-large-file-storage/)"
- "[Configurar {{ site.data.variables.large_files.product_name_long }}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage)"
- "[Migrar a un servidor {{ site.data.variables.large_files.product_name_long }} diferente](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)"
- [Sitio del proyecto {{ site.data.variables.large_files.product_name_long }}](https://git-lfs.github.com/)
