---
title: Миграция данных на предприятие
intro: 'После создания архива миграции данные можно импортировать в целевой экземпляр {% data variables.product.prodname_ghe_server %}. Вы сможете просмотреть изменения для потенциальных конфликтов, прежде чем окончательно применить изменения к целевому экземпляру.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import to your enterprise
ms.openlocfilehash: 9c8e31f1b20eb6c71ab6a31c5d202100e345e82d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093676'
---
## Применение импортированных данных к {% data variables.product.prodname_ghe_server %}

Перед миграцией данных на предприятие необходимо подготовить данные и устранить любые конфликты. Дополнительные сведения см. в разделе [Подготовка к переносу данных в ваше предприятие](/admin/user-management/preparing-to-migrate-data-to-your-enterprise).

После подготовки данных и разрешения конфликтов можно применить импортированные данные к {% data variables.product.product_name %}.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. С помощью команды `ghe-migrator import` запустите процесс импорта. Что вам понадобится:
    * GUID миграции. Дополнительные сведения см. в разделе [Подготовка к переносу данных в ваше предприятие](/admin/user-management/preparing-to-migrate-data-to-your-enterprise).
    * Данные {% variables.product.pat_generic %} для проверки подлинности. Используемые данные {% variables.product.pat_generic %} используются только для проверки подлинности в качестве администратора сайта и не требуют какой-либо конкретной области{% ifversion pat-v2 %} или разрешений{% endif %}. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

    ```shell
    $ ghe-migrator import /home/admin/MIGRATION-GUID.tar.gz -g MIGRATION-GUID -u USERNAME -p TOKEN

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Проверка данных миграции

По умолчанию `ghe-migrator audit` возвращает каждую запись. Кроме того, это позволяет фильтровать записи по следующим критериям:

  * Типы записей.
  * Состояние записей.

Типы записей соответствуют тем, которые находятся в [перенесенных данных](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

## Фильтры типов записей

|      Тип записи      | Имя фильтра  |
|-----------------------|--------|
| Пользователи           | `user`
| Организации   | `organization`
| Репозитории    | `repository`
| Teams           | `team`
| Вехи      | `milestone`
| Панели проектов  | `project`
| Проблемы          | `issue`
| Комментарии к проблеме  | `issue_comment`
| Запросы на вытягивание   | `pull_request`
| Проверки запросов на включение изменений | `pull_request_review`
| Комментарии фиксации | `commit_comment`
| Комментарии к проверке запроса на вытягивание | `pull_request_review_comment`
| Выпуски | `release`
| Действия, выполняемые для запросов на вытягивание или проблем | `issue_event`
| Защищенные ветви | `protected_branch`

## Фильтры состояния записи

| Состояние записи    | Описание    |
|-----------------|----------------|
| `export`        | Запись будет экспортирована. |
| `import`        | Запись будет импортирована. |
| `map`           | Запись будет сопоставлена. |
| `rename`        | Запись будет сопоставлена. |
| `merge`         | Запись будет объединена. |
| `exported`      | Запись экспортирована успешно. |
| `imported`      | Запись импортирована успешно. |
| `mapped`        | Запись сопоставлена успешно. |
| `renamed`       | Запись переименована успешно. |
| `merged`        | Запись объединена успешно. |
| `failed_export` | Не удалось экспортировать запись. |
| `failed_import` | Не удалось импортировать запись. |
| `failed_map`    | Не удалось сопоставить запись. |
| `failed_rename` | Не удалось переименовать запись. |
| `failed_merge`  | Не удалось объединить запись. |

## Фильтрация записей аудита

С помощью команды `ghe-migrator audit` можно отфильтровать данные по типу записи с помощью флага `-m`. Аналогичным образом можно отфильтровать состояние импорта с помощью флага `-s`. Эта команда выглядит следующим образом:

```shell
$ ghe-migrator audit -m RECORD_TYPE -s STATE -g MIGRATION-GUID
```

Например, чтобы просмотреть каждую успешно импортированную организацию и команду, необходимо ввести следующее:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g MIGRATION-GUID
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Настоятельно рекомендуется проводить аудит каждой операции импорта, завершившейся сбоем.** Для этого введите:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g MIGRATION-GUID
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Если у вас возникли проблемы с ошибками импорта, обратитесь к {% data variables.contact.contact_ent_support %}.

## Завершение импорта в {% data variables.product.prodname_ghe_server %}

После применения миграции к целевому экземпляру и проверки миграции следует разблокировать репозитории и удалить их из источника. Перед удалением исходных данных рекомендуется подождать около двух недель, чтобы убедиться, что все работает должным образом.

## Разблокировка репозиториев на целевом экземпляре

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## Разблокировка репозиториев в источнике

### Разблокировка репозиториев из организации в {% data variables.product.prodname_dotcom_the_website %}

Чтобы разблокировать репозитории в организации {% data variables.product.prodname_dotcom_the_website %}, отправьте запрос `DELETE` в [конечную точку разблокировки миграции](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). Что вам понадобится:
  * Маркер доступа для проверки подлинности
  * Уникальный `id` миграции
  * Имя репозитория для разблокировки

```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/ORG-NAME/migrations/ID/repos/REPO_NAME/lock
```

### Удаление репозиториев из организации в {% data variables.product.prodname_dotcom_the_website %}

После разблокировки репозиториев организации {% data variables.product.prodname_dotcom_the_website %} следует удалить каждый репозиторий, перенесенный ранее с помощью [конечной точки удаления репозитория](/rest/repos/#delete-a-repository). Вам потребуется маркер доступа для проверки подлинности
```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  https://api.github.com/repos/ORG-NAME/REPO_NAME
```

### Разблокировка репозиториев из экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
