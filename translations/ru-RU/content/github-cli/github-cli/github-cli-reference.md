---
title: Справочник по GitHub CLI
intro: 'Все команды {% data variables.product.prodname_cli %} можно просмотреть в терминале или в руководстве {% data variables.product.prodname_cli %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069792'
---
Просмотреть все высокоуровневые команды {% data variables.product.prodname_cli %} можно в [руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh) или путем вызова `gh` без аргументов.

```shell
gh
```

Чтобы получить список всех команд, относящихся к определенной группе, используйте команду верхнего уровня без аргументов. Например, так можно вывести список [команд для управления репозиториями](https://cli.github.com/manual/gh_repo):

```shell
gh repo
```

Чтобы просмотреть переменные среды, которые можно использовать с {% data variables.product.prodname_cli %}, см. [руководство по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_help_environment) или выполните команду `environment`.

```shell
gh environment
```

Чтобы просмотреть параметры конфигурации, которые можно использовать с {% data variables.product.prodname_cli %}, см. [руководство по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_config) или используйте команду `config`.

```shell
gh config
```
