---
title: Preparar os dados migrados para a importação no GitHub Enterprise Server
intro: 'Antes de aplicar os dados migrados à sua instância de destino, você terá que copiar o arquivo de migração para a instância de destino e prepará-lo para importação.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
versions:
  enterprise-server: '*'
---

1. Usando o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copie o arquivo de migração gerado na organização ou instância de origem para o destino no {% data variables.product.prodname_ghe_server %}:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Use o comando `ghe-migrator prepare` para preparar o arquivo para importação na instância de destino e gerar um novo GUID de Migração para uso nas etapas subsequentes:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Para começar uma nova tentativa de importação, execute o comando `ghe-migrator` novamente e obtenha um novo GUID de Migração.
    * {% data reusables.enterprise_migrations.specify-staging-path %}
