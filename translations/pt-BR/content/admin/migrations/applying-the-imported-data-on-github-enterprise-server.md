---
title: Aplicar dados importados no GitHub Enterprise Server
intro: 'Depois de concluir a revisão dos dados de migração, você poderá aplicar permanentemente as alterações à instância de destino.'
redirect_from:
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Usando o comando `ghe-migrator import`, comece o processo de importação. Você precisará do seguinte:
    * Seu Migration GUID.
    * Seu token de acesso pessoal para autenticação. O token de acesso pessoal que você usa é apenas para autenticação como administrador do site e não requer nenhum escopo específico. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}
