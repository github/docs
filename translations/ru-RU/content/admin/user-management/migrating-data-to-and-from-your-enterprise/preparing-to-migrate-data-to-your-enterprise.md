---
title: Подготовка к переносу данных в ваше предприятие
intro: 'После создания архива миграции можно импортировать данные в целевой экземпляр {% data variables.product.prodname_ghe_server %}. Вы сможете просмотреть изменения для потенциальных конфликтов, прежде чем окончательно применить изменения к целевому экземпляру.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 0f46ff54e6563945ab63a1845f2609ee8fb90a0e
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009119'
---
## Подготовка перенесенных данных к импорту в {% data variables.product.prodname_ghe_server %}

1. С помощью команды [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) скопируйте архив миграции, созданный из исходного экземпляра или организации, в целевой объект {% data variables.product.prodname_ghe_server %}:

    ```shell
    $ scp -P 122 PATH-TO-MIGRATION-GUID.tar.gz admin@HOSTNAME:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Используйте команду `ghe-migrator prepare`, чтобы подготовить архив для импорта в целевой экземпляр и создать новый уникальный идентификатор миграции, который будет использоваться в последующих шагах:

    ```shell
    ghe-migrator prepare /home/admin/MIGRATION-GUID.tar.gz
    ```

    * Чтобы начать новую попытку импорта, запустите `ghe-migrator prepare` еще раз и получите новый уникальный идентификатор миграции.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Создание списка конфликтов миграции

1. Используя команду `ghe-migrator conflicts` с уникальным идентификатором миграции, создайте файл *conflicts.csv*:
    ```shell
    $ ghe-migrator conflicts -g MIGRATION-GUID > conflicts.csv
    ```
    - Если не будет обнаружено ни одного конфликта, вы можете безопасно импортировать данные, выполнив действия, описанные в статье [Перенос данных в ваше предприятие](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/).
2. При наличии конфликтов с помощью команды [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) скопируйте *conflicts.csv* на локальный компьютер:
  ```shell
  $ scp -P 122 admin@HOSTNAME:conflicts.csv ~/Desktop
  ```
3. Перейдите к разделу [Устранение конфликтов миграции или настройка пользовательских сопоставлений](#resolving-migration-conflicts-or-setting-up-custom-mappings).

## Просмотр конфликтов миграции

1. Откройте *conflicts.csv* с помощью текстового редактора или [программного обеспечения для работы с электронными таблицами, совместимого с форматом CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support).
2. Руководствуясь приведенными ниже примерами и справочными таблицами, просмотрите файл *conflicts.csv*, чтобы убедиться, что при импорте будут выполнены соответствующие действия.

Файл *conflicts.csv* содержит *карту миграции* конфликтов и рекомендуемые действия. Карта миграции содержит сведения о том, какие данные переносятся из источника и как данные будут применены к целевому объекту.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

Каждая строка в *conflicts.csv* предоставляет следующие сведения:

|    Имя      | Описание   |
|--------------|---------------|
| `model_name` | Тип изменяемых данных. |
| `source_url` | Исходный URL-адрес данных. |
| `target_url` | Ожидаемый целевой URL-адрес данных.  |
| `recommended_action` | Предпочтительное действие, которое выполнит `ghe-migrator` при импорте данных.  |

### Возможные сопоставления для каждого типа записи

Существует несколько различных действий сопоставления, которые `ghe-migrator` может выполнить при передаче данных:

| `action`      | Описание | Применимые модели |
|------------------------|-------------|-------------------|
| `import`      | (по умолчанию) Данные из источника импортируются в целевой объект. | Все типы записей
| `map`         | Данные из источника заменяются существующими данными в целевом объекте. | Пользователи, организации, репозитории
| `rename`      | Данные из источника переименовываются, а затем копируются в целевой объект. | Пользователи, организации, репозитории
| `map_or_rename` | Если целевой объект существует, данные сопоставляются с ним. В противном случае импортированная модель переименовывается. | Пользователи
| `merge`       | Данные из источника совмещаются с существующими данными в целевом объекте. | Teams

**Мы настоятельно рекомендуем просмотреть файл *conflicts.csv* и использовать [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data), чтобы убедиться, что выполняются нужные действия.** Если все в порядке, вы можете приступать к [переносу данных в ваше предприятие](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server).


## Устранение конфликтов миграции или настройка пользовательских сопоставлений

Если вы считаете, что `ghe-migrator` выполнит неправильное изменение, можно внести исправления, изменив данные в *conflicts.csv*. Вы можете внести изменения в любую из строк в *conflicts.csv*.

Например, предположим, что пользователь `octocat` из источника сопоставляется с `octocat` в целевом объекте:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

Вы можете сопоставить пользователя с другим пользователем в целевом объекте. Предположим, вы знаете, что `octocat` на самом деле должен быть `monalisa` в целевом объекте. Вы можете изменить столбец `target_url` в *conflicts.csv*, чтобы он ссылался на `monalisa`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

В качестве другого примера, если вы хотите переименовать репозиторий `octo-org/widgets` в `octo-org/amazing-widgets` в целевом экземпляре, измените `target_url` на `octo-org/amazing-widgets` и `recommend_action` на `rename`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### Добавление пользовательских сопоставлений

Распространенный сценарий во время миграции заключается в том, что у имена перенесенных пользователей в целевом объекте будут отличаться от тех, что назначены им в источнике.

Имея список имен пользователей в источнике и список имен пользователей в целевом объекте, вы можете создать CSV-файл с пользовательскими сопоставлениями, а затем применить его, чтобы имена пользователей и их данные были правильно сопоставлены после миграции.

Вы можете быстро создать CSV-файл пользователей, которые переносятся. Он необходим для применения пользовательских сопоставлений с помощью команды [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data):

```shell
$ ghe-migrator audit -m user -g MIGRATION-GUID > users.csv
```

Теперь вы можете изменить этот CSV-файл и ввести новый URL-адрес для каждого пользователя, которого вы хотите сопоставить или переименовать, а затем обновить четвертый столбец, чтобы выполнить `map` или `rename`.

Например, чтобы переименовать пользователя `octocat` в `monalisa` в целевом объекте `https://example-gh.target` создайте строку со следующим содержимым:

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

Один и тот же процесс можно использовать для создания сопоставлений для каждой записи, поддерживающей пользовательские сопоставления. Дополнительные сведения см. в [таблице возможных сопоставлений записей](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Применение измененных данных миграции

1. После внесения изменений используйте команду [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) для применения измененного файла *conflicts.csv* (или любого другого файла *.csv* сопоставлений в правильном формате) к целевому экземпляру:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@HOSTNAME:/home/admin/
    ```

2. Повторно сопоставите данные миграции с помощью команды `ghe-migrator map`, передав путь к измененным файлу *.csv* и уникальному идентификатору миграции:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g MIGRATION-GUID
    ```

3. Если команда `ghe-migrator map -i conflicts.csv  -g MIGRATION-GUID` сообщит, что конфликты по-прежнему существуют, снова выполните процесс разрешения конфликтов миграции.
