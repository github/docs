---
title: Organization Pre-receive Hooks
intro: The Organization Pre-receive Hooks API allows you to view and modify enforcement of the pre-receive hooks that are available to an organization.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

### Atributos do objeto

| Nome                             | Tipo      | Descrição                                                      |
| -------------------------------- | --------- | -------------------------------------------------------------- |
| `name`                           | `string`  | O nome do hook.                                                |
| `enforcement`                    | `string`  | O estado de aplicação para o hook neste repositório.           |
| `allow_downstream_configuration` | `boolean` | Se os repositórios podem substituir a imposição.               |
| `configuration_url`              | `string`  | URL para o ponto de extremidade em que a aplicação é definida. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um estado diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` may be a link to this endpoint or this hook's global configuration. Apenas administradores do site podem acessar a configuração global.
