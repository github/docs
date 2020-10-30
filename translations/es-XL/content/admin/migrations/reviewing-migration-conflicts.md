---
title: Revisar conflictos de migración
intro: 'Después de generar una lista de conflictos de migración, debes revisarlos para asegurarte de que estás de acuerdo con las acciones predeterminadas que ''ghe-migrator` tomará cuando los resuelva.'
redirect_from:
  - /enterprise/admin/migrations/reviewing-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Con un editor de texto o [ un software de hoja de cálculo compatible con CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), abre *conflicts.csv*.
2. Con la guía de los ejemplos y las tablas de referencia a continuación, revisa el archivo *conflicts.csv* para asegurarte de que se tomarán las medidas adecuadas al importar.

El archivo *conflicts.csv* contiene un *mapa de migración* de conflictos y acciones recomendadas. Un mapa de migración enumera tanto los datos que se migran desde el origen como la forma en que los datos se aplicarán al destino.

| `model_name`   | `source_url`                                           | `target_url`                                           | `recommended_action` |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `usuario`      | `https://example-gh.source/octocatc`                   | `https://example-gh.target/octocat`                    | `map`                |
| `organización` | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `repositorio`  | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename (renombrar)` |
| `equipo`       | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `fusionar`           |

Cada fila de *conflicts.csv* proporciona la siguiente información:

| Nombre               | Descripción                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `nombre_modelo`      | El tipo de datos que se están cambiando.                             |
| `url_origen`         | La URL fuente de los datos.                                          |
| `url_destino`        | La URL de destino esperada de los datos.                             |
| `recommended_action` | La acción preferida que tomará `ghe-migrator` al importar los datos. |

### Asignaciones posibles para cada tipo de registro

Hay varias acciones de asignación diferentes que `ghe-migrator` puede realizar al transferir datos:

| `Acción`              | Descripción                                                                                  | Modelos aplicables                     |
| --------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------- |
| `importar`            | (predeterminado) Los datos del origen se importan al destino.                                | Todos los tipos de registro            |
| `map`                 | Los datos del origen se reemplazan por los datos existentes en el destino.                   | Usuarios, organizaciones, repositorios |
| `rename (renombrar)`  | Los datos del origen se renombran y luego se copian en el destino.                           | Usuarios, organizaciones, repositorios |
| `asignar_o_renombrar` | Si el destino existe, asignar a ese destino. De lo contrario, renombrar el modelo importado. | Usuarios                               |
| `fusionar`            | Los datos del origen se combinan con los datos existentes en el destino.                     | Equipos                                |

**Recomendamos firmemente que revises el archivo *conflicts.csv* y uses [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) para asegurarte que se estén realizando las acciones correctas.** Si todo luce bien, puedes continuar a "[Aplicar los datos importados en {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".
