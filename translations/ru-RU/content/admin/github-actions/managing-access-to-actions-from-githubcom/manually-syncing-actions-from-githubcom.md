---
title: Синхронизация действий вручную из GitHub.com
intro: 'Для пользователей, которым требуется доступ к действиям из {% data variables.product.prodname_dotcom_the_website %}, можно синхронизировать конкретные действия с вашим предприятием.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107272'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

Чтобы включить доступ к действиям с сайта {% data variables.product.prodname_dotcom_the_website %}, рекомендуется включить автоматический доступ ко всем действиям. Это можно сделать с помощью {% data variables.product.prodname_github_connect %} для интеграции {% data variables.product.product_name %} с {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в статье "[Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Однако если требуется более строгий контроль над тем, какие действия разрешены в организации, вы{% else %}Вы{% endif %} можете выполнить инструкции в этом руководстве, чтобы использовать средство [`actions-sync`](https://github.com/actions/actions-sync) с открытым кодом {% data variables.product.company_short %} для синхронизации отдельных репозиториев действий с сайта {% data variables.product.prodname_dotcom_the_website %} с предприятием.

## Сведения о средстве `actions-sync`

Средство `actions-sync` должно быть запущено на компьютере, который может получить доступ к API {% data variables.product.prodname_dotcom_the_website %} и API экземпляра {% data variables.product.product_name %} экземпляра. Компьютер не должен быть подключен к обоим API одновременно.

Если компьютер имеет доступ к обеим системам одновременно, можно выполнить синхронизацию с помощью одной команды `actions-sync sync`. Если вы можете получить доступ только к одной системе за раз, можно использовать команды `actions-sync pull` и `push`.

Средство `actions-sync` может скачивать с сайта {% data variables.product.prodname_dotcom_the_website %} только действия, которые хранятся в общедоступных репозиториях.

{% note %}

**Примечание.** Средство `actions-sync` предназначено для использования в системах, где {% data variables.product.prodname_github_connect %} не включен. При запуске средства в системе с включенным {% data variables.product.prodname_github_connect %}, может появиться сообщение об ошибке `The repository <repo_name> has been retired and cannot be reused`. Это означает, что рабочий процесс использовал это действие непосредственно на {% данных variables.product.prodname_dotcom_the_website %}, а пространство имен отключено на {% данных variables.location.product_location %}. Дополнительные сведения см. в статье "[Автоматическое прекращение использования пространств имен для действий, доступных на сайте {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)". 

{% endnote %}

## Предварительные требования

* Прежде чем использовать средство`actions-sync`, убедитесь, что все целевые организации уже существуют на вашем предприятии. В следующем примере показано, как синхронизировать действия с организацией с именем `synced-actions`. Дополнительные сведения см. в статье "[Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
* Необходимо создать {% данных variables.product.pat_generic %} на предприятии, который может создавать и записывать в репозитории в целевых организациях. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)". {% ifversion ghes %}
* Если вы хотите синхронизировать объединенные действия в `actions` организации с {% данных variables.location.product_location %}, необходимо быть владельцем `actions` организации.

  {% note %}
  
  **Примечание.** По умолчанию даже администраторы сайта не являются владельцами объединенной организации `actions`.
  
  {% endnote %}

  Чтобы повысить уровень пользователя до владельца объединенной организации `actions`, администраторы сайта могут использовать команду `ghe-org-admin-promote` в административной оболочке. Дополнительные сведения см. в статье "[Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" и разделе "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)".

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   Приведенная выше команда использует следующие аргументы:

   * `--cache-dir`: каталог кэша на компьютере, на котором выполняется команда.
   * `--destination-token`: {% данных variables.product.pat_generic %} для целевого экземпляра предприятия.
   * `--destination-url`: URL-адрес целевого экземпляра предприятия.
   * `--repo-name`: репозиторий действий для синхронизации. Имеет формат `owner/repository:destination_owner/destination_repository`.
     
     * В приведенном выше примере репозиторий [`actions/stale`](https://github.com/actions/stale) синхронизируется с репозиторием `synced-actions/actions-stale` в целевом экземпляре предприятия. Перед выполнением приведенной выше команды на предприятии необходимо создать организацию с именем `synced-actions`.
     * Если `:destination_owner/destination_repository` не указан, средство использует исходное имя владельца и репозитория для предприятия. Перед выполнением команды на предприятии необходимо создать организацию, имя которой соответствует имени владельца действия. Для хранения синхронизированных действий на предприятии рекомендуется использовать центральную организацию, так как это означает, что при синхронизации действий разных владельцев вам не придется создавать несколько новых организаций.
     * Вы можете синхронизировать несколько действий, заменив параметр `--repo-name` на `--repo-name-list` или `--repo-name-list-file`. Дополнительные сведения см. в [файле сведений `actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. После создания репозитория действий на предприятии пользователи на предприятии могут использовать целевой репозиторий для ссылки на действие в рабочих процессах. Для примера действия, показанного выше:
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".
