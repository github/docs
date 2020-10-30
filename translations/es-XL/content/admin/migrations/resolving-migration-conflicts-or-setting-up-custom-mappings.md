---
title: Resolver conflictos de migración o crear asignaciones personalizadas
intro: 'Antes de importar datos de migración, puedes efectuar correcciones para resolver conflictos, renombrar registros entrantes o asignar registros entrantes a registros existentes.'
redirect_from:
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
versions:
  enterprise-server: '*'
---

Los pasos a continuación se pueden utilizar para resolver conflictos o agregar asignaciones personalizadas a tu migración.

### Resolver conflictos

Si crees que `ghe-migrator` realizará un cambio incorrecto, puedes hacer correcciones cambiando los datos en *conflicts.csv*. Puedes hacer cambios en cualquiera de las filas en *conflicts.csv*.

Por ejemplo, supongamos que observas que el usuario `octocat` del origen se está asignando a `octocat` en el destino:

| `model_name` | `source_url`                         | `target_url`                        | `recommended_action` |
| ------------ | ------------------------------------ | ----------------------------------- | -------------------- |
| `user`       | `https://example-gh.source/octocatc` | `https://example-gh.target/octocat` | `map`                |

Puedes optar por asignar el usuario a un usuario diferente en el destino. Supongamos que sabes que `octocat` en realidad debe ser `monalisa` en el destino. Puedes cambiar la columna `target_url` en *conflicts.csv* a `monalisa`:

| `model_name` | `source_url`                        | `target_url`                         | `recommended_action` |
| ------------ | ----------------------------------- | ------------------------------------ | -------------------- |
| `usuario`    | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`                |

Como otro ejemplo, si deseas cambiar el nombre del repositorio `octo-org/widgets` a `octo-org/amazing-widgets` en la instancia de destino, cambia la `target_url` a `octo-org/amazing-widgets` y la `recommended_action` a `rename`:

| `model_name` | `source_url`                                 | `target_url`                                         | `recommended_action` |
| ------------ | -------------------------------------------- | ---------------------------------------------------- | -------------------- |
| `repository` | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename (renombrar)` |

### Agregar asignaciones personalizadas

Una situación común durante una migración es que los usuarios migrados tengan diferentes nombres de usuario en el destino que los que tienen en el origen.

Dada una lista de nombres de usuario en el origen y una lista de nombres de usuario en el destino, puedes crear un archivo CSV con asignaciones personalizadas y luego aplicarlo para garantizar que el nombre de usuario y el contenido de cada usuario se atribuyan correctamente al final de la migración.

Puedes generar rápidamente un CSV de usuarios que se migran en el formato CSV necesario para aplicar asignaciones personalizadas mediante el comando [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Ahora, puedes editar ese CSV e ingresar la nueva URL para cada usuario que quieras asignar o renombrar, y luego actualizar la cuarta columna para `asignar` o `renombrar` según corresponda.

Por ejemplo, para cambiar el nombre del usuario `octocat` a `monalisa` en el `https://example-gh.target` de destino, debes crear una fila con el siguiente contenido:

| `model_name` | `source_url`                        | `url_destino`                        | `state`  |
| ------------ | ----------------------------------- | ------------------------------------ | -------- |
| `usuario`    | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename` |

Se puede usar el mismo proceso para crear asignaciones para cada registro que admita asignaciones personalizadas. Para obtener más información, consulta [nuestra tabla sobre las posibles asignaciones de registro](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Aplicar datos de migración modificados

1. Después de hacer cambios, usa el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) para aplicar el *conflicts.csv* modificado (o cualquier otro csv de asignación en el formato correcto) a la instancia de destino:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Vuelve a asignar los datos de migración con el comando `ghe-migrator map`, pasando la ruta al archivo csv modificado y al GUID de migración:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Si el comando `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` informa que aún existen conflictos, ejecuta nuevamente el proceso de resolución de conflictos de migración.
