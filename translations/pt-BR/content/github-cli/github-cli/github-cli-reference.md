---
title: Referência da CLI do GitHub
intro: 'Você pode visualizar todos os comandos de {% data variables.product.prodname_cli %} no seu terminal ou no manual de {% data variables.product.prodname_cli %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065533'
---
Para exibir todos os comandos de nível superior da {% data variables.product.prodname_cli %}, veja o [manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh) ou chame `gh` sem argumentos.

```shell
gh
```

Para listar todos os comandos sob um grupo específico, use o comando de nível superior sem argumentos. Por exemplo, para listar [comandos para gerenciar repositórios](https://cli.github.com/manual/gh_repo):

```shell
gh repo
```

Para exibir as variáveis de ambiente que podem ser usadas com a {% data variables.product.prodname_cli %}, veja o [manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_help_environment) ou use o comando `environment`.

```shell
gh environment
```

Para ver as definições de configuração que podem ser usadas com a {% data variables.product.prodname_cli %}, confira o [manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_config) ou use o comando `config`.

```shell
gh config
```
