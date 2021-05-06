---
title: Prepararse para migrar los datos a tu empresa
intro: 'Después de generar un archivo de migración, puedes importar los datos a tu instancia de destino del {% data variables.product.prodname_ghe_server %}. Podrás revisar los cambios para detectar posibles conflictos antes de aplicar de manera permanente los cambios a tu instancia de destino.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Preparar los datos migrados para importarlos a {% data variables.product.prodname_ghe_server %}

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

### Generar una lista de conflictos de migración

1. Con el comando `ghe-migrator conflicts` con el GUID de migración, genera un archivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Si no se reporta conflicto alguno, puedes importar los datos de forma segura siguiendo los pasos en la sección "[Migrar datos a tu empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Si hay conflictos, con el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp), copia *conflicts.csv* a tu computadora local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Continúa con "[Resolver conflictos de migración o crear asignaciones personalizadas](#resolving-migration-conflicts-or-setting-up-custom-mappings)".

### Revisar conflictos de migración

1. Con un editor de texto o [ un software de hoja de cálculo compatible con CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abre *conflicts.csv*.
2. Con la guía de los ejemplos y las tablas de referencia a continuación, revisa el archivo *conflicts.csv* para asegurarte de que se tomarán las medidas adecuadas al importar.

El archivo *conflicts.csv* contiene un *mapa de migración* de conflictos y acciones recomendadas. Un mapa de migración enumera tanto los datos que se migran desde el origen como la forma en que los datos se aplicarán al destino.

| `nombre_modelo` | `url_origen`                                           | `url_destino`                                          | `recommended_action` |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `usuario`       | `https://example-gh.source/octocatc`                   | `https://example-gh.target/octocat`                    | `map`                |
| `organization`  | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `repositorio`   | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename (renombrar)` |
| `equipo`        | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `fusionar`           |

Cada fila de *conflicts.csv* proporciona la siguiente información:

| Nombre               | Descripción                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `nombre_modelo`      | El tipo de datos que se están cambiando.                             |
| `url_origen`         | La URL fuente de los datos.                                          |
| `url_destino`        | La URL de destino esperada de los datos.                             |
| `recommended_action` | La acción preferida que tomará `ghe-migrator` al importar los datos. |

#### Asignaciones posibles para cada tipo de registro

Hay varias acciones de asignación diferentes que `ghe-migrator` puede realizar al transferir datos:

| `Acción`              | Descripción                                                                                  | Modelos aplicables                     |
| --------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------- |
| `importar`            | (predeterminado) Los datos del origen se importan al destino.                                | Todos los tipos de registro            |
| `map`                 | Los datos del origen se reemplazan por los datos existentes en el destino.                   | Usuarios, organizaciones, repositorios |
| `rename (renombrar)`  | Los datos del origen se renombran y luego se copian en el destino.                           | Usuarios, organizaciones, repositorios |
| `asignar_o_renombrar` | Si el destino existe, asignar a ese destino. De lo contrario, renombrar el modelo importado. | Usuarios                               |
| `fusionar`            | Los datos del origen se combinan con los datos existentes en el destino.                     | Equipos                                |

**Te recomendamos ampliamente que revises el archivo *conflicts.csv* y que utilices [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) para garantizar que se estén tomando las acciones adecuadas.** Si todo se ve bien, puedes continuar con las acciones para "[Migrar los datos a tu empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


### Resolver conflictos de migración o crear asignaciones personalizadas

Si crees que `ghe-migrator` realizará un cambio incorrecto, puedes hacer correcciones cambiando los datos en *conflicts.csv*. Puedes hacer cambios en cualquiera de las filas en *conflicts.csv*.

Por ejemplo, supongamos que observas que el usuario `octocat` del origen se está asignando a `octocat` en el destino:

| `nombre_modelo` | `url_origen`                         | `url_destino`                       | `recommended_action` |
| --------------- | ------------------------------------ | ----------------------------------- | -------------------- |
| `usuario`       | `https://example-gh.source/octocatc` | `https://example-gh.target/octocat` | `map`                |

Puedes optar por asignar el usuario a un usuario diferente en el destino. Supongamos que sabes que `octocat` en realidad debe ser `monalisa` en el destino. Puedes cambiar la columna `target_url` en *conflicts.csv* a `monalisa`:

| `nombre_modelo` | `url_origen`                         | `url_destino`                        | `recommended_action` |
| --------------- | ------------------------------------ | ------------------------------------ | -------------------- |
| `usuario`       | `https://example-gh.source/octocatc` | `https://example-gh.target/monalisa` | `map`                |

Como otro ejemplo, si deseas cambiar el nombre del repositorio `octo-org/widgets` a `octo-org/amazing-widgets` en la instancia de destino, cambia la `target_url` a `octo-org/amazing-widgets` y la `recommended_action` a `rename`:

| `nombre_modelo` | `url_origen`                                 | `url_destino`                                        | `recommended_action` |
| --------------- | -------------------------------------------- | ---------------------------------------------------- | -------------------- |
| `repositorio`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename (renombrar)` |

#### Agregar asignaciones personalizadas

Una situación común durante una migración es que los usuarios migrados tengan diferentes nombres de usuario en el destino que los que tienen en el origen.

Dada una lista de nombres de usuario en el origen y una lista de nombres de usuario en el destino, puedes crear un archivo CSV con asignaciones personalizadas y luego aplicarlo para garantizar que el nombre de usuario y el contenido de cada usuario se atribuyan correctamente al final de la migración.

Puedes generar rápidamente un CSV de usuarios que se migran en el formato CSV necesario para aplicar asignaciones personalizadas mediante el comando [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Ahora, puedes editar ese CSV e ingresar la nueva URL para cada usuario que quieras asignar o renombrar, y luego actualizar la cuarta columna para `asignar` o `renombrar` según corresponda.

Por ejemplo, para cambiar el nombre del usuario `octocat` a `monalisa` en el `https://example-gh.target` de destino, debes crear una fila con el siguiente contenido:

| `nombre_modelo` | `url_origen`                         | `url_destino`                        | `state`              |
| --------------- | ------------------------------------ | ------------------------------------ | -------------------- |
| `usuario`       | `https://example-gh.source/octocatc` | `https://example-gh.target/monalisa` | `rename (renombrar)` |

Se puede usar el mismo proceso para crear asignaciones para cada registro que admita asignaciones personalizadas. Para obtener más información, consulta [nuestra tabla sobre las posibles asignaciones de registro](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

#### Aplicar datos de migración modificados

1. Después de hacer los cambios, utiliza el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) para aplicar tu *conflicts.csv* modificado (o cualquier otro archivo de mapeo *.csv* en el formato correcto) a la instancia destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Vuelve a mapear los datos de la migración utilizando el comando `ghe-migrator map`, pasando la ruta a tu archivo *.csv* modificado y a la GUID de la migración:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Si el comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` informa que aún existen conflictos, ejecuta nuevamente el proceso de resolución de conflictos de migración.
