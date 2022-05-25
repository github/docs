---
title: Hooks pre-receive do repositório
intro: A API de hooks pre-receive do Repositório permite que você veja e modifique a aplicação dos hooks de pre-receive que estão disponíveis em um repositório.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

### Atributos do objeto

| Nome                | Tipo     | Descrição                                                      |
| ------------------- | -------- | -------------------------------------------------------------- |
| `name`              | `string` | O nome do hook.                                                |
| `enforcement`       | `string` | O estado de aplicação para o hook neste repositório.           |
| `configuration_url` | `string` | URL para o ponto de extremidade em que a aplicação é definida. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um estado diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` pode ser um link para este repositório, seu proprietário da organização ou configuração global. A autorização para acessar o ponto de extremidade no `configuration_url` é determinada no nível de proprietário ou administrador do site.
