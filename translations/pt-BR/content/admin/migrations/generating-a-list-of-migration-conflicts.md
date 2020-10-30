---
title: Gerar uma lista de conflitos de migração
intro: 'Se houver conflitos nos relatórios `ghe-migrator` durante a preparação dos dados para importação, você deverá gerar uma lista dos conflitos antes de se preparar para resolvê-los com mapeamentos personalizados.'
redirect_from:
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Usando o comando `ghe-migrator conflicts` com o GUID de migração, gere um arquivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Se nenhum conflito for relatado, você poderá importar os dados com segurança conforme as etapas descritas em "[Aplicar os dados importados no {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Se houver conflitos, usando o comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copie *conflicts.csv* para o seu computador local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Continue em "[Resolver conflitos de migração ou configurar mapeamentos personalizados](/enterprise/admin/guides/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings/)".
