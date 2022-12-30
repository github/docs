---
title: Повторный запуск рабочих процессов и заданий
shortTitle: Re-run workflows and jobs
intro: 'Вы можете повторно запустить рабочий процесс{% ifversion re-run-jobs %}, все неудачные задания в выполнении рабочего процесса или определенные задания в рабочем процессе, выполняемые{% endif %} до 30 дней после первоначального запуска.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 49928ed03ba17e77bdef88644d3039bc9bdf5462
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045717'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о повторном запуске рабочих процессов и заданий

При повторном запуске рабочего процесса{% ifversion re-run-jobs %} или заданий в рабочем процессе{% endif %} используются те же `GITHUB_SHA` (commit SHA) и `GITHUB_REF` (Git ref) исходного события, активировавшего запуск рабочего процесса. {% ifversion actions-stable-actor-ids %}В рабочем процессе будут использоваться привилегии субъекта, который изначально его активировал, вместо привилегий субъекта, который инициировал повторный запуск рабочего процесса. {% endif %}Можно повторно запустить рабочий процесс{% ifversion re-run-jobs %} или задания в рабочем процессе{% endif %} в течение 30 дней после начального запуска.{% ifversion re-run-jobs %} Повторно запускать задания в рабочем процессе можно только в течение периода хранения его журналов. Дополнительные сведения см. в разделе [Ограничения использования, выставление счетов и администрирование](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy).{% endif %}{% ifversion debug-reruns %} При повторном запуске рабочего процесса или заданий в рабочем процессе можно включить ведение журнала отладки для повторного выполнения. Это позволит включить ведение журнала диагностики средства выполнения и ведение журнала отладки шага для повторного выполнения. Дополнительные сведения о ведении журнала отладки см. в статье [Включение ведения журнала отладки](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).{% endif %}

## Повторный запуск всех заданий в рабочем процессе

{% webui %}

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.actions-tab %} {% данных reusables.repositories.navigate-to-workflow %} {% данных reusables.repositories.view-run %} {% ifversion fpt или ghes > 3.4 или ghae или ghec -%}
1. В правом верхнем углу рабочего процесса используйте раскрывающееся меню **{% octicon "sync" aria-label="Значок синхронизации" %} Повторное выполнение заданий** и выберите **"Повторно выполнить все задания**".

   Если не удалось выполнить задания, вы не увидите раскрывающееся меню **{% octicon "sync" aria-label="Значок синхронизации" %} Повторное выполнение заданий** . Вместо этого щелкните **Повторно запустить все задания**.

   ![Повторное выполнение проверок раскрывающегося меню](/assets/images/help/repository/rerun-checks-drop-down.png) {%- endif %} {% ifversion ghes < 3.5 или ghae -%}
1. В правом верхнем углу рабочего процесса откройте раскрывающееся меню **Повторный запуск заданий** и выберите **Повторно запустить все задания**.

   ![Повторное выполнение проверок раскрывающегося меню](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {%- endif %} {% данных reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы повторно запустить неудачно завершившийся рабочий процесс, используйте подкоманду `run rerun`. Замените `run-id` идентификатором неудачного запуска, который вы хотите запустить повторно.  Если не указать `run-id`, {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора последнего неудачного запуска.

```shell
gh run rerun RUN_ID
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --debug
```

{% endif %}

Чтобы просмотреть ход выполнения рабочего процесса, используйте подкоманду `run watch` и выберите нужное выполнение в интерактивном списке.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Повторное выполнение неудачно завершившихся заданий в рабочем процессе

Если какие-либо задания в рабочем процессе завершились неудачно, можно повторно запустить только те задания, которые не удалось выполнить. При повторном запуске заданий, которые завершились неудачно, для всех таких заданий и зависимых от них объектов запускается новый рабочий процесс. Все выходные данные для всех успешных заданий в предыдущем запуске рабочего процесса будут использоваться для повторного запуска. Все артефакты, созданные при первоначальном запуске, будут доступны в повторном запуске. Все правила защиты среды, переданные в предыдущий запуск, будут автоматически передаваться в повторный запуск.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. В правом верхнем углу рабочего процесса используйте раскрывающееся меню **{% octicon "sync" aria-label="Значок синхронизации" %} Повторное выполнение заданий** и выберите **"Повторно выполнить невыполненые задания**".

   ![Повторный запуск проверок раскрывающегося меню](/assets/images/help/repository/rerun-checks-drop-down.png) {% данных, которые можно использовать повторно.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Чтобы повторно запустить неудачные задания в рабочем процессе, используйте подкоманду `run rerun` с флагом `--failed`. Замените `run-id` идентификатором запуска, для которого вы хотите повторно запустить неудачные задания. Если не указать `run-id`, {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора последнего неудачного запуска.

```shell
gh run rerun RUN_ID --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --failed --debug
```

{% endif %} {% endcli %}

## Повторный запуск определенного задания в рабочем процессе

При повторном запуске определенного задания в рабочем процессе для этого задания и всех зависимых от него объектов запускается новый рабочий процесс. Все выходные данные для всех остальных заданий в предыдущем запуске рабочего процесса будут использоваться для повторного запуска. Все артефакты, созданные при первоначальном запуске, будут доступны в повторном запуске. Все правила защиты среды, переданные в предыдущий запуск, будут автоматически передаваться в повторный запуск.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Рядом с заданием, которое требуется повторно запустить, щелкните {% octicon "sync" aria-label="The re-run icon" %}.
   ![Повторный запуск выбранного задания](/assets/images/help/repository/re-run-selected-job.png)

   Вы также можете щелкнуть задание, чтобы открыть журнал. В журнале щелкните {% octicon "sync" aria-label="The re-run icon" %}.
   ![Повторное выполнение выбранного задания](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Чтобы повторно запустить определенное задание в рабочем процессе, используйте подкоманду `run rerun` с флагом `--job`. Замените `job-id` идентификатором задания, которое вы хотите запустить повторно.

```shell
gh run rerun --job JOB_ID
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job JOB_ID --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Повторное выполнение рабочих процессов и заданий с помощью повторно используемых рабочих процессов

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt или ghes > 3.4 или ghae или ghec %}
## Проверка предыдущих запусков рабочего процесса

Вы можете просмотреть результаты предыдущих попыток выполнения рабочего процесса. Вы также можете просмотреть предыдущие запуски рабочего процесса с помощью API. Дополнительные сведения см. в разделе [Получение сведений о выполнении рабочего процесса](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. Все предыдущие попытки выполнения отображаются в раскрывающемся меню **Последние**.
   ![Предыдущие попытки выполнения](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. Все предыдущие попытки выполнения отображаются в левой панели.
    ![Повторный запуск рабочего процесса](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. Щелкните запись, чтобы просмотреть результаты.

{% endif %}
