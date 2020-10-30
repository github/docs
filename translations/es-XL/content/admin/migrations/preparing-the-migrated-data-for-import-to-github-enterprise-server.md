---
title: Preparar los datos migrados para su importación a GitHub Enterprise Server
intro: 'Antes de aplicar los datos migrados a tu instancia de destino, deberás copiar el archivo de migración a tu instancia de destino y prepararlo para la importación.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
versions:
  enterprise-server: '*'
---

1. Con el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copia el archivo de migración generado desde tu instancia u organización de origen a tu {% data variables.product.prodname_ghe_server %} destino:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Usa el comando `ghe-migrator prepare` para preparar el archivo para importar en la instancia de destino y generar un nuevo GUID de Migración para que uses en los pasos subsiguientes:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Para comenzar un nuevo intento de importación, ejecuta `ghe-migrator prepare` nuevamente y obtén un nuevo GUID de migración.
    * {% data reusables.enterprise_migrations.specify-staging-path %}
