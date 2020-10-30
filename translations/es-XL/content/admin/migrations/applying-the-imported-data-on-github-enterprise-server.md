---
title: Aplicar los datos importados en GitHub Enterprise Server
intro: 'Una vez finalizada la revisión de los datos de migración, puedes aplicar los cambios de forma permanente a tu instancia de destino.'
redirect_from:
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Con el comando `ghe-migrator import`, inicia el proceso de importación. Necesitarás:
    * Tu GUID de migración.
    * Tu token de acceso personal para autenticación. El token de acceso personal que utilices es solo para autenticación como administrador de sitio, y no requiere ningún alcance específico. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Comenzando con GitHub::Migrador
    > Importación 100 % completa /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}
