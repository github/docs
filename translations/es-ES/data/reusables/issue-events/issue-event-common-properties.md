| Nombre                   | Type        | Descripción                                                                                           |
| ------------------------ | ----------- | ----------------------------------------------------------------------------------------------------- |
| `id`                     | `número`    | El identificador único del evento.                                                                    |
| `node_id`                | `secuencia` | La [ID de Nodo Global](/graphql/guides/using-global-node-ids) del evento.                             |
| `url`                    | `secuencia` | La URL de la API de REST para recuperar el evento.                                                    |
| `actor (actor)`          | `objeto`    | La persona que generó el evento.                                                                      |
| `event`                  | `secuencia` | Identifica el tipo de evento real que ocurrió.                                                        |
| `commit_id`              | `secuencia` | EL SHA de la confirmación que referenció este informe de problemas.                                   |
| `commit_url`             | `secuencia` | El enlace a la API de REST de GitHub para la confirmación que referenció a este informe de problemas. |
| `created_at (creado en)` | `secuencia` | La marca de tiempo que indica cuándo ocurrió el evento.                                               |
