| Clave                 | Tipo        | Descripción                                                                                                              |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `Acción`              | `secuencia` | La acción que se realizó en el proyecto. Puede ser uno de entre: `created`, `edited`, `closed`, `reopened`, o `deleted`. |
| `changes`             | `objeto`    | Los cambios al proyecto si la acción se puso como `edited`.                                                              |
| `changes[name][from]` | `secuencia` | La versión previa del nombre si la acción está como `edited`.                                                            |
| `changes[body][from]` | `secuencia` | La versión previa del cuerpo si la acción se puso como `edited`.                                                         |
| `project`             | `objeto`    | El [proyecto](/v3/projects/) mismo.                                                                                      |