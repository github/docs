---
title: Prepararse para migrar los datos a tu empresa
intro: 'Después de generar un archivo de migración, puedes importar los datos a tu instancia de destino del {% data variables.product.prodname_ghe_server %}. Podrás revisar los cambios para detectar posibles conflictos antes de aplicar de manera permanente los cambios a tu instancia de destino.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 7b552f2bc0d79eb1a70a09d61b8384983b0908fc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116194'
---
## Preparar los datos migrados para importarlos a {% data variables.product.prodname_ghe_server %}

1. Con el comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copie el archivo de migración generado desde la instancia de origen o la organización en el destino de {% data variables.product.prodname_ghe_server %}:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Usa el comando `ghe-migrator prepare` a fin de preparar el archivo para importar en la instancia de destino y generar un nuevo GUID de migración para usarlo en los pasos siguientes:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Para comenzar un nuevo intento de importación, vuelva a ejecutar `ghe-migrator prepare` y obtenga un GUID de migración nuevo.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Generar una lista de conflictos de migración

1. Mediante el comando `ghe-migrator conflicts` con el GUID de migración, genere un archivo *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Si no se notifica ningún conflicto, puede importar los datos de forma segura si sigue los pasos descritos en "[Migración de datos a la empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Si hay conflictos, con el comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copie *conflicts.csv* en el equipo local:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Continúe a "[Resolución de conflictos de migración o configuración de asignaciones personalizadas](#resolving-migration-conflicts-or-setting-up-custom-mappings)".

## Revisar conflictos de migración

1. Con un editor de texto o un [ software de hoja de cálculo compatible con CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abra *conflicts.csv*.
2. Con las instrucciones de los ejemplos y las tablas de referencia siguientes, revise el archivo *conflicts.csv* para asegurarse de que al realizar la importación se tomarán las medidas adecuadas.

El archivo *conflicts.csv* contiene un *mapa de migración* de conflictos y acciones recomendadas. Un mapa de migración enumera tanto los datos que se migran desde el origen como la forma en que los datos se aplicarán al destino.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

Cada fila de *conflicts.csv* proporciona la información siguiente:

|    Nombre      | Descripción   |
|--------------|---------------|
| `model_name` | El tipo de datos que se están cambiando. |
| `source_url` | La URL fuente de los datos. |
| `target_url` | La URL de destino esperada de los datos.  |
| `recommended_action` | La acción `ghe-migrator` preferida se realizará al importar los datos.  |

### Asignaciones posibles para cada tipo de registro

Hay varias acciones de asignación diferentes que `ghe-migrator` puede realizar al transferir datos:

| `action`      | Descripción | Modelos aplicables |
|------------------------|-------------|-------------------|
| `import`      | (predeterminado) Los datos del origen se importan al destino. | Todos los tipos de registro
| `map`         | Los datos del origen se reemplazan por los datos existentes en el destino. | Usuarios, organizaciones, repositorios
| `rename`      | Los datos del origen se renombran y luego se copian en el destino. | Usuarios, organizaciones, repositorios
| `map_or_rename` | Si el destino existe, asignar a ese destino. De lo contrario, renombrar el modelo importado. | Usuarios
| `merge`       | Los datos del origen se combinan con los datos existentes en el destino. | Teams

**Se recomienda encarecidamente que revise el archivo *conflicts.csv* y use [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) para asegurarse de que se realizan las acciones adecuadas.** Si todo parece correcto, puede continuar con "[Migración de datos a la empresa](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


## Resolver conflictos de migración o crear asignaciones personalizadas

Si cree que `ghe-migrator` realizará un cambio incorrecto, puede hacer correcciones y cambiar los datos en *conflicts.csv*. Puede realizar cambios en cualquiera de las filas de *conflicts.csv*.

Por ejemplo, imagine que observa que el usuario `octocat` del origen se asigna a `octocat` en el destino:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

Puedes optar por asignar el usuario a un usuario diferente en el destino. Imagine que sabe que `octocat` realmente debería ser `monalisa` en el destino. Puede cambiar la columna `target_url` de *conflicts.csv* para que haga referencia a `monalisa`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

Como otro ejemplo, si quiere cambiar el nombre del repositorio `octo-org/widgets` a `octo-org/amazing-widgets` en la instancia de destino, cambie `target_url` a `octo-org/amazing-widgets` y `recommend_action` a `rename`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### Agregar asignaciones personalizadas

Una situación común durante una migración es que los usuarios migrados tengan diferentes nombres de usuario en el destino que los que tienen en el origen.

Dada una lista de nombres de usuario en el origen y una lista de nombres de usuario en el destino, puedes crear un archivo CSV con asignaciones personalizadas y luego aplicarlo para garantizar que el nombre de usuario y el contenido de cada usuario se atribuyan correctamente al final de la migración.

Puede generar rápidamente un CSV de usuarios que se migran en el formato CSV necesario para aplicar asignaciones personalizadas mediante el comando [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Ahora, puede editar ese CSV y escribir la nueva URL para cada usuario que le gustaría asignar o renombrar, y luego actualizar la cuarta columna para tener `map` o `rename` según corresponda.

Por ejemplo, para cambiar el nombre del usuario `octocat` por `monalisa` en el elemento `https://example-gh.target` de destino, tendría que crear una fila con el siguiente contenido:

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

Se puede usar el mismo proceso para crear asignaciones para cada registro que admita asignaciones personalizadas. Para más información, vea [nuestra tabla sobre las posibles asignaciones de registros](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Aplicar datos de migración modificados

1. Después de realizar cambios, use el comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) para aplicar el archivo *conflicts.csv* modificado (o cualquier otro archivo *.csv* de asignación en el formato correcto) a la instancia de destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Vuelva a asignar los datos de migración con el comando `ghe-migrator map`, y pase la ruta al archivo *.csv* modificado y al GUID de migración:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Si el comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` notifica que sigue habiendo conflictos, vuelva a ejecutar el proceso de resolución de conflictos de migración.
