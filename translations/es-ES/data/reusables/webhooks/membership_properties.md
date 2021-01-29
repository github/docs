| Clave    | Type        | Descripción                                                     |
| -------- | ----------- | --------------------------------------------------------------- |
| `Acción` | `secuencia` | La acción que se realizó. Puede ser `added` o `removed`.        |
| `scope`  | `secuencia` | El alcance de la membrecía. Acutalmente, solo puede ser `team`. |
| `member` | `object`    | El [usuario](/rest/reference/users) que se agregó o se eliminó. |
| `team`   | `object`    | El [equipo](/rest/reference/teams) para la membrecía.           |
