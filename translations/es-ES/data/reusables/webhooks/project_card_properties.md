| Clave                 | Type        | Descripción                                                                                                                          |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Acción`              | `secuencia` | La acción llevada a cabo en la tarjeta del proyecto. Puede ser `created`, `edited`, `moved`, `converted`, o `deleted`.               |
| `changes`             | `object`    | Los cambios a la tarjeta del proyecto si la acción se puso como `edited` o `converted`.                                              |
| `changes[note][from]` | `secuencia` | La versión previa de la nota si la acción se puso como `edited` o `converted`.                                                       |
| `after_id`            | `número`    | La id de la tarjeta a la cual sigue esta tarjeta ahora si la acción se "movió". Será `null` si es la primera tarjeta en una columna. |
| `project_card`        | `object`    | La [tarjeta de proyecto](/rest/reference/projects#cards) misma.                                                                      |
