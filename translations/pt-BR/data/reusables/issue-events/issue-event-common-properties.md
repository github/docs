| Nome         | Tipo      | Descrição                                                              |
| ------------ | --------- | ---------------------------------------------------------------------- |
| `id`         | `inteiro` | O identificador exclusivo do evento.                                   |
| `node_id`    | `string`  | O [ID de nó global](/v4/guides/using-global-node-ids) do evento.       |
| `url`        | `string`  | A URL da API REST para buscar o evento.                                |
| `actor`      | `objeto`  | A pessoa que gerou o evento.                                           |
| `event`      | `string`  | Identifica o tipo atual do evento que ocorreu.                         |
| `commit_id`  | `string`  | O SHA do commit que fez referência a esta issue.                       |
| `commit_url` | `string`  | O link da GitHub REST API para o commit que referenciou este problema. |
| `created_at` | `string`  | O timestamp indicando quando ocorreu o evento.                         |