| Clave                        | Type        | Descripción                                                                                             |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `Acción`                     | `secuencia` | La acción que se realizó. Puede ser uno de entre: `created`, `closed`, `opened`, `edited`, o `deleted`. |
| `milestone`                  | `object`    | El hito mismo.                                                                                          |
| `changes`                    | `object`    | Los cambios al hito si la acción se encuentra como `edited`.                                            |
| `changes[description][from]` | `secuencia` | La versión previa de la descripción si la acción está como `edited`.                                    |
| `changes[due_on][from]`      | `secuencia` | La versión previa de la fecha límite si la acción se puso como `edited`.                                |
| `changes[title][from]`       | `secuencia` | La versión previa del título si la acción se puso como `edited`.                                        |
