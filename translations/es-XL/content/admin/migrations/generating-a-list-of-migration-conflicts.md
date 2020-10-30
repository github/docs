---
title: Generar una lista de conflictos de migración
intro: 'Si `ghe-migrator` informa que hay conflictos en la preparación de los datos para importación, debes generar una lista de esos conflictos antes de prepararte para resolverlos con asignaciones personalizadas.'
redirect_from:
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Con el comando `ghe-migrator conflicts` con el GUID de migración, genera un archivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Si no se informa de ningún conflicto, puedes importar de forma segura los datos siguiendo los pasos en "[Aplicar los datos importados en {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Si hay conflictos, con el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copia *conflicts.csv* a tu computadora local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Continúa con "[Resolver conflictos de migración o crear asignaciones personalizadas](/enterprise/admin/guides/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings/)".
