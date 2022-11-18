---
title: Экспорт данных миграции из GitHub.com
intro: 'Данные миграции можно экспортировать из организации на {% data variables.product.prodname_dotcom_the_website %}. Для этого выберите нужные репозитории с помощью API, а затем создайте архив миграции, который можно импортировать в экземпляр {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: f39ec628f3b1b59767b30ef35689a63f3e57da4f
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008958'
---
## Подготовка исходной организации к {% data variables.product.prodname_dotcom %}

1. Убедитесь, что у вас есть [разрешения владельца](/articles/permission-levels-for-an-organization/) в репозиториях исходной организации.

2. {% data reusables.enterprise_migrations.token-generation %} в {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Экспорт репозиториев организации

{% data reusables.enterprise_migrations.fork-persistence %}

Чтобы экспортировать данные репозитория из {% data variables.product.prodname_dotcom_the_website %}, используйте [API миграций](/free-pro-team@latest/rest/migrations).

API миграций в настоящее время доступен в предварительной версии. Это означает, что конечные точки и параметры могут быть изменены в будущем.
## Создание архива миграции

{% data reusables.enterprise_migrations.locking-repositories %}

1. Уведомите членов вашей организации о том, что вы планируете выполнять миграцию. Экспорт может занять несколько минут в зависимости от количества экспортируемых репозиториев. Полная миграция, включая импорт, может занять несколько часов, поэтому рекомендуется выполнить пробный запуск, чтобы определить, сколько времени займет весь процесс. Дополнительные сведения см. в статье об [Сведения о миграции](/enterprise/admin/migrations/about-migrations#types-of-migrations).

2. Запустите миграцию, отправив запрос `POST` к [конечной точке миграции](/free-pro-team@latest/rest/migrations#start-an-organization-migration). Что вам понадобится:
    * Маркер доступа для проверки подлинности
    * [Список репозиториев](/free-pro-team@latest/rest/repos#list-organization-repositories), которые требуется перенести:
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["ORG_NAME</em>/REPO_NAME", "ORG_NAME/REPO_NAME"]}' \
      https://api.github.com/orgs/ORG_NAME/migrations
      ```
    *  Если вы хотите заблокировать репозитории перед их переносом, убедитесь, что для параметра `lock_repositories` задано значение `true`. Настоятельно рекомендуется сделать это.
    * Вы можете исключить вложения файлов, передав `exclude_attachments: true` в конечную точку. {% data reusables.enterprise_migrations.exclude-file-attachments %} Окончательный размер архива должен быть меньше 20 ГБ.

  Этот запрос возвращает уникальный объект `id`, представляющий миграцию. Он потребуется для последующих вызовов API миграций.

3. Отправьте запрос `GET` в [конечную точку статуса миграции](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status), чтобы получить статус миграции. Что вам понадобится:
    * Маркер доступа для проверки подлинности
    * Уникальный `id` миграции:
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/ORG_NAME/migrations/ID
      ```

  Миграция может находиться в одном из указанных ниже состояний.
    * `pending` — это означает, что миграция еще не запущена.
    * `exporting` — это означает, что миграция находится в процессе выполнения.
    * `exported` — это означает, что миграция успешно завершена.
    * `failed` — это означает, что миграция завершилась сбоем.

4. После экспорта миграции скачайте архив миграции, отправив запрос `GET` к [конечной точке загрузки миграции](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive). Что вам понадобится:
    * Маркер доступа для проверки подлинности
    * Уникальный `id` миграции:
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/ORG_NAME/migrations/ID/archive
      ```

5. Архив миграции автоматически удаляется через семь дней. Если вы предпочитаете удалить его раньше, можно отправить запрос `DELETE` в [конечную точку удаления архива миграции](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive). Что вам понадобится:
    * Маркер доступа для проверки подлинности
    * Уникальный `id` миграции:
      ```shell
      curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/ORG_NAME/migrations/ID/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
