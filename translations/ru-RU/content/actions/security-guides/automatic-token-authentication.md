---
title: Автоматическая проверка подлинности токенов
intro: '{% data variables.product.prodname_dotcom %} предоставляет маркер, который можно использовать для проверки подлинности от имени {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107040'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о секрете `GITHUB_TOKEN`

В начале запуска каждого рабочего процесса {% data variables.product.prodname_dotcom %} автоматически создает уникальный секрет `GITHUB_TOKEN` для использования в рабочем процессе. `GITHUB_TOKEN` можно использовать для проверки подлинности при выполнении рабочего процесса.

При включении {% data variables.product.prodname_actions %} {% data variables.product.prodname_dotcom %} устанавливает {% data variables.product.prodname_github_app %} в репозитории. Секрет `GITHUB_TOKEN` — это маркер доступа установки {% data variables.product.prodname_github_app %}. Маркер доступа установки можно использовать для проверки подлинности от имени установленного в репозитории {% data variables.product.prodname_github_app %}. Разрешения маркера ограничены репозиторием, содержащим рабочий процесс. Дополнительные сведения см. в разделе «[Разрешения для`GITHUB_TOKEN`](#permissions-for-the-github_token)».

Перед началом выполнения каждого задания {% data variables.product.prodname_dotcom %} получает маркер доступа установки для задания. {% data reusables.actions.github-token-expiration %}

Маркер также доступен в контексте `github.token`. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts#github-context)».

## Использование `GITHUB_TOKEN` в рабочем процессе

`GITHUB_TOKEN` можно использовать со стандартным синтаксисом для ссылки на секреты: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. К примерам использования `GITHUB_TOKEN` относятся передача маркера в качестве входных данных для действия или его использование для выполнения прошедшего проверку подлинности {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} запроса API.

{% note %}

**Важно!** Действие может получить доступ к `GITHUB_TOKEN` через контекст `github.token`, даже если рабочий процесс явно не передает `GITHUB_TOKEN` действию. Из соображений безопасности рекомендуется всегда предоставлять действиям минимальный необходимый доступ путем ограничения разрешений, предоставленных `GITHUB_TOKEN`. Дополнительные сведения см. в разделе «[Разрешения для`GITHUB_TOKEN`](#permissions-for-the-github_token)».

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### Пример 1. Передача `GITHUB_TOKEN` в качестве входных данных

{% data reusables.actions.github_token-input-example %}

### Пример 2. Вызов REST API

`GITHUB_TOKEN` можно использовать для выполнения вызовов API, прошедших проверку подлинности. В этом примере рабочего процесса создается проблема с помощью REST API {% data variables.product.prodname_dotcom %}:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Разрешения для `GITHUB_TOKEN`

Сведения о конечных точках API, доступ к которым может получать {% data variables.product.prodname_github_apps %} с помощью каждого разрешения, см. в разделе «[Разрешения % data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps)».

В следующей таблице показаны разрешения, предоставленные для `GITHUB_TOKEN` по умолчанию. Пользователи с разрешениями администратора для {% ifversion not ghes %}корпорации, организации или репозитория{% else %}организации или репозитория{% endif %} могут задавать разрешения по умолчанию в качестве разрешительных или ограничительных. Сведения о задании разрешений по умолчанию для `GITHUB_TOKEN` для корпорации, организации или репозитория см. в разделах «[Применение политик для {% data variables.product.prodname_actions %} в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)», «[Отключение или ограничение {% data variables.product.prodname_actions %} для организации](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)» и «[Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)».

| Область         | Стандартный доступ<br>(разрешительное) | Стандартный доступ<br>(ограничительное) | Максимальный доступ<br>по разветвленным репозиториям |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | чтение/запись  | нет | read |
| checks        | чтение/запись  | нет | read |
| содержимое      | чтение/запись  | read | read |
| deployments   | чтение/запись  | нет | read |{% ifversion fpt or ghec %}
| id-token      | нет        | нет | read |{% endif %}
| issues        | чтение/запись  | нет | read |
| метаданные      | read        | read | read |
| Пакеты      | чтение/запись  | нет | read |
| страницы         | чтение/запись  | нет | read |
| pull-requests | чтение/запись  | нет | read |
| repository-projects | чтение/запись | нет | read |
| security-events     | чтение/запись | нет | read |
| statuses      | чтение/запись  | нет | read |

{% data reusables.actions.workflow-runs-dependabot-note %}

### Изменение разрешений для `GITHUB_TOKEN`

Разрешения для `GITHUB_TOKEN` можно изменить в отдельных файлах рабочего процесса. Если разрешения по умолчанию для `GITHUB_TOKEN` являются ограничительными, возможно, для успешного выполнения некоторых действий и команд потребуется повысить уровень разрешений. Если разрешения по умолчанию носят разрешительный характер, можно изменить файл рабочего процесса, удалив некоторые из разрешений для `GITHUB_TOKEN`. Из соображений безопасности рекомендуется предоставлять `GITHUB_TOKEN` минимальный необходимый доступ.

Посмотреть разрешения, выданные `GITHUB_TOKEN` для выполнения определенного задания, можно в разделе «Настройка задания» журнала выполнения рабочего процесса. Дополнительные сведения см. в разделе «[Использование журналов выполнения рабочего процесса](/actions/managing-workflow-runs/using-workflow-run-logs)».

Ключ `permissions` в файле рабочего процесса можно использовать для изменения разрешений `GITHUB_TOKEN` для всего рабочего процесса или отдельных заданий. Это позволяет настроить минимально необходимые разрешения для рабочего процесса или задания. При использовании ключа `permissions` для всех неуказанных разрешений доступ запрещен. Исключение составляет область `metadata`, которая всегда получает доступ на чтение.

{% data reusables.actions.forked-write-permission %}

В двух примерах рабочих процессов, приведенных выше в этой статье, показано использование ключа `permissions` на уровне рабочего процесса и на уровне задания. В [примере 1](#example-1-passing-the-github_token-as-an-input) для всего рабочего процесса указаны два разрешения. В [примере 2](#example-2-calling-the-rest-api) доступ на запись предоставляется для одной области для одного задания.

Полные сведения о ключе `permissions` см. в разделе «[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)».

#### Расчет разрешений для задания рабочего процесса

Изначально в качестве разрешений для `GITHUB_TOKEN` задаются параметры по умолчанию для предприятия, организации или репозитория. Если на любом из этих уровней по умолчанию заданы ограниченные разрешения, они будут применяться к соответствующим репозиториям. Например, если выбрать в качестве значения по умолчанию на уровне организации ограниченные разрешения, все репозитории в этой организации будут использовать в качестве значения по умолчанию ограниченные разрешения. Затем разрешения корректируются на основе любой конфигурации в файле рабочего процесса: сначала на уровне рабочего процесса, а затем на уровне задания. Наконец, если рабочий процесс был активирован запросом на вытягивание из разветвленного репозитория, а параметр **Отправлять маркеры записи отправлять в рабочие процессы из запросов на вытягивание** не выбран, разрешения корректируются, чтобы изменить любые разрешения на запись на разрешения только на чтение.

### Предоставление дополнительных разрешений

Если вам нужен маркер, которому требуются разрешения, недоступные в `GITHUB_TOKEN`нем, можно создать {% данных variables.product.pat_generic %} и задать его в качестве секрета в репозитории:

1. Используйте или создайте маркер с соответствующими разрешениями для этого репозитория. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
1. Добавьте маркер в качестве секрета в репозитории рабочего процесса и ссылайтесь на него с помощью синтаксиса {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

### Дополнительные материалы

- «[Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)»
