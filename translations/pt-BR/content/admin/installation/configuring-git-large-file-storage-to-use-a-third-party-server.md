---
title: Configurar o Git Large File Storage para uso em servidores de terceiros
intro: 'É possível usar o {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) em um servidor de terceiros desabilitando o {% data variables.large_files.product_name_short %} no appliance do {% data variables.product.prodname_ghe_server %} e configurando o cliente {% data variables.large_files.product_name_short %} com a URL do servidor em que você pretende armazenar os ativos de grande volume.'
redirect_from:
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
versions:
  enterprise-server: '*'
---

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

1. Desabilite o appliance do {% data variables.large_files.product_name_short %} no {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Configurar o {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)".

2. Crie um arquivo de configuração do {% data variables.large_files.product_name_short %} que aponte para o servidor de terceiros.
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

3. Para manter a mesma configuração do {% data variables.large_files.product_name_short %} em todos os usuários, faça commit de um arquivo `.lfsconfig` personalizado no repositório.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Migre qualquer ativo do {% data variables.large_files.product_name_short %}. Para obter mais informações, consulte "[Migrar para outro servidor do {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)".

### Further reading

- [Sobre o {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage/)
- [Configurar o {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage)
- [Migrar para outro servidor do {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)
- [Site de projeto do {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/)
