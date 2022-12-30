---
title: Слияние вышестоящего репозитория с вилкой
intro: If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.
redirect_from:
- /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
- /articles/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Pull requests
shortTitle: Merge an upstream repo
ms.openlocfilehash: 7622e4865efc444a253cbbedf04ede0e47535967
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145139497"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный проект.
3. Извлеките ветвь, с которой нужно выполнить слияние. Как правило, слияние выполняется с ветвью по умолчанию.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Вытяните нужную ветвь из вышестоящего репозитория. При таком методе журнал фиксаций сохраняется без изменений.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. При наличии конфликтов устраните их. Дополнительные сведения см. в разделе [Устранение конфликтов слияния](/github/collaborating-with-pull-requests/addressing-merge-conflicts).
6. Зафиксируйте слияние.
7. Просмотрите изменения и убедитесь в том, что они вас устраивают.
8. Отправьте слияние в репозиторий GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
