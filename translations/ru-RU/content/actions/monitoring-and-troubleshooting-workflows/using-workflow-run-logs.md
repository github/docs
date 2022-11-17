---
title: Использование журналов выполнения рабочих процессов
shortTitle: Workflow run logs
intro: 'Вы можете просматривать, искать и скачивать журналы для каждого задания в выполнении рабочего процесса.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: d0e5aadc46cbd89895abe51f83f15fd10708b09e
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010035'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

На странице выполнения рабочего процесса можно посмотреть состояние рабочего процесса, выполняется он или завершен. Для просмотра сведений о выполнении рабочего процесса, включая общедоступные репозитории, необходимо войти в учетную запись {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Права доступа к GitHub](/articles/access-permissions-on-github).

Если выполнение завершилось, вы можете узнать, был ли результат успешным, неудачным, отмененным или нейтральным. Если выполнение завершилось неудачно, можно просмотреть журналы сборки и выполнить по ним поиск, чтобы диагностировать сбой и повторно запустить рабочий процесс. Вы также можете просматривать оплачиваемые минуты выполнения задания, а также скачивать журналы и артефакты сборки.

{% data variables.product.prodname_actions %} использует API проверок для вывода состояний, результатов и журналов рабочего процесса. {% data variables.product.prodname_dotcom %} создает новый набор проверок для каждого запуска рабочего процесса. Набор проверок содержит контрольный прогон для каждого задания в рабочем процессе, и каждое задание включает шаги. {% data variables.product.prodname_actions %} выполняются как шаг в рабочем процессе. Дополнительные сведения об API проверок см. в разделе [Проверки](/rest/reference/checks).

{% data reusables.actions.invalid-workflow-files %}

## Просмотр журналов для диагностики сбоев

Если выполнение рабочего процесса завершается неудачно, вы можете увидеть, какой шаг вызвал сбой, и проверить журналы сборки неудачного шага, чтобы устранить неполадки. Вы можете увидеть время, необходимое для выполнения каждого шага. Вы также можете скопировать постоянную ссылку на определенную строку в файле журнала, чтобы поделиться со своей командой. {% data reusables.repositories.permissions-statement-read %}

Помимо шагов, настроенных в файле рабочего процесса, {% data variables.product.prodname_dotcom %} добавляет в каждое задание два дополнительных шага для настройки и завершения выполнения задания. Эти шаги регистрируются в рабочем процессе с именами "Настройка задания" и "Завершение задания".

Для заданий, выполняемых в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}, шаг "Настройка задания" записывает сведения об образе средства выполнения и включает ссылку на список предустановленных средств, которые имелись на компьютере средства выполнения.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## Поиск по журналам

Вы можете выполнять поиск определенного шага в журналах сборки. При поиске в журналах в результаты включаются только развернутые шаги. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. В правом верхнем углу выходных данных журнала в поле **поиска по журналам** введите поисковый запрос.
![Поле поиска по журналам](/assets/images/help/repository/search-log-box-updated-2.png)

## Скачивание журналов

Вы можете скачивать файлы журналов из запуска рабочего процесса. Вы также можете скачать артефакты рабочего процесса. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts). {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. В правом верхнем углу щелкните {% octicon "gear" aria-label="The gear icon" %} и выберите **Скачать архив журналов**.
  
  ![Раскрывающееся меню скачивания журналов](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **Примечание.** При скачивании архива журналов для рабочего процесса, который был частично выполнен повторно, архив включает только задания, которые были повторно запущены. Чтобы получить полный набор журналов для заданий, который выполнялись из рабочего процесса, необходимо скачать архивы журналов для предыдущих попыток запуска, в которых выполнялись другие задания.

  {% endnote %}

  {% endif %}

## Удаление журналов

Вы можете удалять файлы журналов из запуска рабочего процесса. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. В правом верхнем углу заметок щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    
    ![Значок горизонтального многоточия](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. Чтобы удалить файлы журналов, нажмите кнопку **Удалить все журналы** и просмотрите запрос подтверждения. 
  
  ![Удаление всех журналов](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
После удаления журналов кнопка **Удалить все журналы** исчезает. Это указывает, что ы рабочем процессе больше не осталось файлов журналов.

## Просмотр журналов с помощью {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы просмотреть журнал для определенного задания, используйте подкоманду `run view`. Замените `run-id` идентификатором запуска, для которого вы хотите просмотреть журналы. {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора задания из запуска. Если вы не укажете `run-id`, {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора последнего запуска, а затем другое интерактивное меню для выбора задания из этого запуска.

```shell
gh run view RUN_ID --log
```

Вы также можете указать идентификатор задания с помощью флага `--job`. Замените `job-id` идентификатором задания, для которого вы хотите просмотреть журналы.

```shell
gh run view --job JOB_ID --log
```

Вы можете использовать `grep` для поиска в журнале. Например, следующая команда вернет все записи журнала, содержащие слово `error`.

```shell
gh run view --job JOB_ID --log | grep error
```

Чтобы отфильтровать журналы для вывода всех неудачных шагов, используйте `--log-failed` вместо `--log`.

```shell
gh run view --job JOB_ID --log-failed
```
