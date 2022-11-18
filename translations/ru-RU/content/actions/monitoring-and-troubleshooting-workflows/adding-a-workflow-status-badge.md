---
title: Добавление эмблемы состояния рабочего процесса
shortTitle: Add a status badge
intro: 'В репозитории можно отобразить эмблему состояния, чтобы обозначать состояние рабочих процессов.'
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 3c6fafea5be53c49e464cb65d0db3773873a843f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010028'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Примечание.** Индикаторы рабочих процессов в частном репозитории недоступны извне, поэтому вы не сможете внедрить их или указать ссылку на них с внешнего сайта.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Чтобы добавить индикатор состояния рабочего процесса в файл `README.md`, сначала найдите URL-адрес индикатора состояния, который нужно отобразить. После этого вы можете использовать Markdown для отображения индикатора в виде изображения в файле `README.md`. Дополнительные сведения о разметке изображения в Markdown см. в статье [Базовый синтаксис записи и форматирования](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

## Использование имени файла рабочего процесса

Вы можете создать URL-адрес для индикатора состояния рабочего процесса, используя имя файла рабочего процесса:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Чтобы отобразить индикатор состояния рабочего процесса в файле `README.md`, используйте разметку Markdown для внедрения изображений. Дополнительные сведения о разметке изображения в Markdown см. в статье [Базовый синтаксис записи и форматирования](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

Например, вставьте приведенный ниже код Markdown в файл `README.md`, чтобы добавить индикатор состояния для рабочего процесса с путем к файлу `.github/workflows/main.yml`. Владелец (`OWNER`) репозитория — организация `github`, а имя `REPOSITORY` — `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Использование параметра `branch`

Чтобы отобразить состояние выполнения рабочего процесса для определенной ветви, добавьте `?branch=<BRANCH_NAME>` в конец URL-адреса индикатора состояния.

Например, вставьте приведенный ниже код Markdown в файл `README.md`, чтобы добавить индикатор состояния для ветви с именем `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Использование параметра `event`

Чтобы отобразить состояние выполнения рабочего процесса, активированного событием `push`, добавьте `?event=push` в конец URL-адреса индикатора состояния.

Например, добавьте следующий код Markdown в файл `README.md`, чтобы отобразить индикатор с состоянием выполнения рабочего процесса, активированного событием `push`. В результате отобразится состояние сборки для текущего состояния этой ветви.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
