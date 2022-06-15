---
title: Hooks pre-receive da organização
intro: A API de hooks pre-receive da organização permite que você veja e modifique a aplicação dos hooks pre-receive disponíveis para uma organização.
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

`configuration_url` pode ser um link para este ponto de extremidade ou a configuração global deste hook. Apenas administradores do site podem acessar a configuração global.
