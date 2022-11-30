---
title: Запуск рабочего процесса вручную
intro: 'Если рабочий процесс настроен для запуска в событии `workflow_dispatch`, можно запустить рабочий процесс с помощью вкладки "Действия" в {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %} или REST API.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: efee0122375b04b6790f630685766312dcad28bc
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045709'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Настройка рабочего процесса для запуска вручную

Чтобы запустить рабочий процесс вручную, необходимо настроить его на запуск с использованием события `workflow_dispatch`. Для активации события `workflow_dispatch` рабочий процесс должен находиться в ветви по умолчанию. Дополнительные сведения о настройке события `workflow_dispatch` см. в описании [событий, активирующих рабочие процессы](/actions/reference/events-that-trigger-workflows#workflow_dispatch).

{% data reusables.repositories.permissions-statement-write %}

## Запуск рабочего процесса

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. На левой боковой панели щелкните рабочий процесс, который хотите запустить.

   {% ifversion workflow-nav-2022 -%} ![ Действия выбора рабочего процесса](/assets/images/help/repository/actions-select-workflow-2022.png) {%- else -%} ![Действия выбирают рабочий процесс](/assets/images/help/repository/actions-select-workflow.png) {%- endif %}
1. Над списком запусков рабочего процесса выберите **Запуск рабочего процесса**.
![Назначение рабочего процесса в действиях](/assets/images/actions-workflow-dispatch.png)
1. В раскрывающемся меню **Ветвь** выберите ветвь рабочего процесса и введите входные параметры. Щелкните **Запустить рабочий процесс**.
![Запуск рабочего процесса вручную в действиях](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы запустить рабочий процесс, используйте подкоманду `workflow run`. Замените параметр `workflow` на имя, идентификатор или название файла рабочего процесса, который нужно запустить. Например, `"Link Checker"`, `1234567` или `"link-check-test.yml"`. Если не указать рабочий процесс, {% data variables.product.prodname_cli %} выведет интерактивное меню для его выбора.

```shell
gh workflow run WORKFLOW
```

Если рабочий процесс принимает входные данные, {% data variables.product.prodname_cli %} выведет запрос для их ввода. Кроме того, можно использовать `-f` или `-F` для добавления входных данных в формате `key=value`. Используйте `-F` для чтения из файла.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

Входные данные также можно передавать в формате JSON, используя стандартный ввод.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Чтобы запустить рабочий процесс не в ветви репозитория по умолчанию, используйте флаг `--ref`.

```shell
gh workflow run WORKFLOW --ref BRANCH
```

Чтобы просмотреть ход выполнения рабочего процесса, используйте подкоманду `run watch` и выберите нужное выполнение в интерактивном списке.

```shell
gh run watch
```

{% endcli %}

## Запуск рабочего процесса с помощью REST API

При использовании REST API вы настраиваете `inputs` и `ref` в качестве параметров текста запроса. Если не указывать входные данные, используются значения по умолчанию, определенные в файле рабочего процесса.

{% note %}

**Примечание.** Можно определить до 10 параметров `inputs` для события `workflow_dispatch`.

{% endnote %}

Дополнительные сведения об использовании REST API см. в разделе [Создание события назначения рабочего процесса](/rest/reference/actions/#create-a-workflow-dispatch-event).
