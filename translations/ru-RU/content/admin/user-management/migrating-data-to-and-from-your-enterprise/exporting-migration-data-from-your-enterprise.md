---
title: Экспорт данных миграции из предприятия
intro: 'Чтобы изменить платформы или перейти с пробного экземпляра на рабочий экземпляр, можно экспортировать данные миграции из экземпляра {% data variables.product.prodname_ghe_server %} путем подготовки экземпляра, блокировки репозиториев и создания архива миграции.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export from your enterprise
ms.openlocfilehash: 0e72232137588cd9da36e55245fa341d0603ca0b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094292'
---
## Подготовка исходного экземпляра {% data variables.product.prodname_ghe_server %}

1. Убедитесь, что вы являетесь администратором сайта в источнике {% data variables.product.prodname_ghe_server %}. Лучший способ сделать это — обеспечить возможность доступа по [SSH к экземпляру](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} в исходном экземпляре {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Экспорт исходных репозиториев {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Чтобы подготовить репозиторий для экспорта, используйте команду `ghe-migrator add` с URL-адресом репозитория:
    * Если вы блокируете репозиторий, добавьте команду с помощью `--lock`. Если вы выполняете пробный запуск, `--lock` не требуется.
      ```shell
      $ ghe-migrator add https://HOSTNAME/USERNAME/REPO-NAME --lock
      ```
    * Вы можете исключить вложения файлов, добавив `--exclude_attachments` в команду. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Чтобы подготовить сразу несколько репозиториев для экспорта, создайте текстовый файл со списком всех URL-адресов репозиториев в отдельной строке и выполните команду `ghe-migrator add` с использованием флага `-i` и путем к текстовому файлу.
      ```shell
      $ ghe-migrator add -i PATH/TO/YOUR/REPOSITORY_URL.txt
      ```

3. При появлении запроса введите имя пользователя {% data variables.product.prodname_ghe_server %}:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. При появлении запроса на {% данных variables.product.pat_generic %}введите маркер доступа, созданный в разделе "[Подготовка исходного экземпляра {% данных variables.product.prodname_ghe_server %}](#preparing-the-github-enterprise-server-source-instance)":
  ```shell
  Enter {% data variables.product.pat_generic %}:  **************
  ```
5. По завершении выполнения `ghe-migrator add` на печать будет выведен уникальный GUID миграции, созданный для идентификации этой операции экспорта, а также список ресурсов, добавленных в операцию экспорта. Вы будете использовать GUID миграции, созданный в последующих шагах `ghe-migrator add` и `ghe-migrator export`, чтобы сообщить `ghe-migrator` о необходимости продолжить работу с той же операции экспорта.
  ```shell
  > 101 models added to export
  > Migration GUID: EXAMPLE-MIGRATION-GUID
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  Каждый раз при добавлении нового репозитория с существующим GUID миграции существующая операция экспорта обновляется. При повторном запуске `ghe-migrator add` без GUID миграции запускается новая операция экспорта и создается новый GUID миграции. **Не используйте GUID миграции, созданный во время экспорта при подготовке миграции к импорту**.

3. Если вы заблокировали исходный репозиторий, можно использовать команду `ghe-migrator target_url`, чтобы задать настраиваемое сообщение о блокировке на странице репозитория, которая содержит ссылку на новое расположение репозитория. Передайте URL-адрес исходного репозитория, URL-адрес целевого репозитория и GUID миграции из шага 5.

  ```shell
  $ ghe-migrator target_url https://HOSTNAME/USERNAME/REPO-NAME https://TARGET-HOSTNAME/TARGET-USER-NAME/TARGET-REPO-NAME -g MIGRATION-GUID
  ```

6. Чтобы добавить дополнительные репозитории в ту же операцию экспорта, используйте команду `ghe-migrator add` с флагом `-g`. Вы передадите новый URL-адрес репозитория и GUID миграции из шага 5.
  ```shell
  $ ghe-migrator add https://HOSTNAME/USERNAME/OTHER-REPO-NAME -g MIGRATION-GUID --lock
  ```
7. Завершив добавление репозиториев, создайте архив миграции с использованием команды `ghe-migrator export` с флагом `-g` и GUID миграции на шаге 5:
    ```shell
    $ ghe-migrator export -g MIGRATION-GUID
    > Archive saved to: /data/github/current/tmp/MIGRATION-GUID.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Закройте подключение к {% данных variables.location.product_location %}:
  ```shell
  $ exit
  > logout
  > Connection to HOSTNAME closed.
  ```
9. Скопируйте архив миграции на компьютер с помощью команды [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp). При присвоении имени файлу архива будет использоваться GUID миграции:
  ```shell
  $ scp -P 122 admin@HOSTNAME:/data/github/current/tmp/MIGRATION-GUID.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
