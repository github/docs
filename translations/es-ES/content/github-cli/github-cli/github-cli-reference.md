---
title: Referencia del CLI de GitHub
intro: 'Puedes ver todos los comandos de {% data variables.product.prodname_cli %} en tu terminal o en el manual del {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
ms.openlocfilehash: 1da9b2ffe79af2c432a4dfc79f944f8656663733
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069791'
---
Para ver todos los comandos de nivel superior de {% data variables.product.prodname_cli %}, consulta el [Manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh) o llama a `gh` sin argumentos.

```shell
gh
```

Para listar todos los comandos bajo un grupo específico, utiliza el comando de nivel superior sin argumentos. Por ejemplo, para enumerar [comandos para administrar repositorios](https://cli.github.com/manual/gh_repo):

```shell
gh repo
```

Para ver las variables de entorno que se pueden usar con {% data variables.product.prodname_cli %}, consulta el [Manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_help_environment) o usa el comando `environment`.

```shell
gh environment
```

Para ver las opciones de configuración que se pueden usar con {% data variables.product.prodname_cli %}, consulta el [Manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_config) o usa el comando `config`.

```shell
gh config
```
