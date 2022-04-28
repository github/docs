---
title: Pre-receive Hooks
intro: 'A API de hooks pre-receive permite que você crie, liste, atualize e apague hooks pre-receive.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Atributos do objeto

#### Hook pre-receive

| Nome                             | Tipo      | Descrição                                                                      |
| -------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `name`                           | `string`  | O nome do hook.                                                                |
| `script`                         | `string`  | O script que o hook executa.                                                   |
| `script_repository`              | `objeto`  | O repositório do GitHub onde o script é mantido.                               |
| `ambiente`                       | `objeto`  | O ambiente de pre-receive onde o script é executado.                           |
| `enforcement`                    | `string`  | O estado de aplicação para este hook.                                          |
| `allow_downstream_configuration` | `boolean` | Se a aplicação pode ser substituída no nível da organização ou do repositório. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um status diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.
