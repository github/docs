---
title: Краткое руководство по GitHub CLI
intro: 'Можно использовать {% data variables.product.prodname_cli %} для работы с {% data variables.product.company_short %} в командной строке.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
ms.openlocfilehash: 4d944c10c03ab054032d9bd27834b507efa3826f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094260'
---
## Сведения о {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Начало работы

1. [Установите](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} в macOS, Windows или Linux.
1. В командной строке пройдите проверку подлинности в {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion не fpt или ghec %} Чтобы выполнить проверку подлинности в {% данных variables.location.product_location %}, используйте `--hostname` флаг.

  ```shell
  gh auth login --hostname HOSTNAME
  ```

  {% endif %}
1. Начните работу с {% data variables.product.company_short %} в командной строке. Например, найдите проблему с для обработки с помощью команды `gh issue status` или `gh issue list --assignee @me`. Создайте запрос на включение внесенных изменений с помощью команды `gh pr create`. Просмотрите запрос на включение внесенных изменений с помощью команд `gh pr checkout`, `gh pr diff` и `gh pr review`.

## Дальнейшие действия

- Укажите для {% data variables.product.prodname_cli %}, какой текстовый редактор нужно использовать для команд, открывающих текстовый редактор. Например, чтобы в качестве предпочтительного текстового редактора задать {% data variables.product.prodname_vscode %}, введите `gh config set editor "code -w"`. Дополнительные сведения см. на веб-сайте [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Определите псевдонимы для часто выполняемых команд. Например, если выполнить команду `gh alias set prd "pr create --draft"`, затем для быстрого открытия черновика запроса на включение внесенных изменений можно будет использовать команду `gh prd`. Дополнительные сведения см. на веб-сайте [`gh alias`](https://cli.github.com/manual/gh_alias).

- Создайте или добавьте пользовательские команды с помощью расширений {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе "[Использование расширений {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions) и "[Создание расширений {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

- Дополнительные сведения о всех командах, которые можно выполнять в {% data variables.product.prodname_cli %}, см. в [руководстве по {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference).
