| Clave           | Type        | Descripción                                                                                                                                               |
| --------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `secuencia` | El recurso de la [`git ref`](/rest/reference/git#get-a-reference).                                                                                        |
| `ref_type`      | `secuencia` | El tipo de objeto de Git ref que se creó en el repositorio. Puede ser `branch` o `tag`.                                                                   |
| `master_branch` | `secuencia` | El nombre de la rama predeterminada del repositorio (habitualmente {% ifversion fpt or ghes > 3.1 or ghae or ghec %}`main`{% else %}`master`{% endif %}). |
| `descripción`   | `secuencia` | La descripción actual del repositorio.                                                                                                                    |
