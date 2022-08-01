---
title: Ambientes pre-receive
intro: 'A API de Ambientes Pre-receive permite que você crie, liste, atualize e apague ambientes para hooks pre-receive.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Atributos do objeto

#### Ambiente pre-receive

| Nome                  | Tipo      | Descrição                                                                          |
| --------------------- | --------- | ---------------------------------------------------------------------------------- |
| `name`                | `string`  | O nome do ambiente conforme exibido na interface do usuário.                       |
| `image_url`           | `string`  | URL do tarball que será baixado e extraído.                                        |
| `default_environment` | `boolean` | Se este é o ambiente-padrão que vem com {% data variables.product.product_name %}. |
| `download`            | `objeto`  | Status do download deste ambiente.                                                 |
| `hooks_count`         | `inteiro` | O número de hooks de pre-receive que usam este ambiente.                           |

#### Download do ambiente pre-receive

| Nome            | Tipo     | Descrição                                             |
| --------------- | -------- | ----------------------------------------------------- |
| `estado`        | `string` | O estado do download mais recente.                    |
| `downloaded_at` | `string` | A hora em que o download mais recente começou.        |
| `mensagem`      | `string` | Em caso de falha, serão produzidas mensagens de erro. |

Os valores possíveis para o `estado` são `not_started,` `in_progress,` `sucesso` `falhado`.
