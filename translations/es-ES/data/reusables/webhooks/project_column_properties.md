| Clave                 | Type        | Descripción                                                                                                                         |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`              | `secuencia` | La acción que se realizó en la columna de proyecto. Puede ser una de entre `created`, `edited`, `moved` o `deleted`.                |
| `changes`             | `object`    | Los cambios a la columna del proyecto si la acción se puso como `edited`.                                                           |
| `changes[name][from]` | `secuencia` | La versión previa del nombre si la acción está como `edited`.                                                                       |
| `after_id`            | `número`    | La id de la columna a la cual sigue ahora esta coumna si la acción se "movió". Será `null` si es la primera columna en un proyecto. |
| `project_column`      | `object`    | La [columna de proyecto](/rest/reference/projects#columns) misma.                                                                   |
