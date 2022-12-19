---
title: Настройка резервных копий на устройстве
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'В рамках плана аварийного восстановления можно защитить рабочие данные на {% данных variables.location.product_location %}, настроив автоматические резервные копии.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: f9b8f97f6a322884f52df7787f13a0c4ac0d6e53
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094332'
---
## Сведения о {% data variables.product.prodname_enterprise_backup_utilities %}

{% данных variables.product.prodname_enterprise_backup_utilities %} — это система резервного копирования, устанавливаемая на отдельном узле, которая создает моментальные снимки резервных копий {% данных variables.location.product_location %} через регулярные интервалы через безопасное сетевое подключение SSH. Моментальный снимок можно использовать для восстановления существующего экземпляра {% data variables.product.prodname_ghe_server %} до предыдущего состояния с узла резервного копирования.

Передаваться по сети и занимать дополнительное физическое пространство на диске будут только данные, добавленные с момента последнего моментального снимка. Чтобы свести к минимуму влияние на производительность, резервное копирование выполняется в режиме онлайн с минимальным приоритетом ЦП и ввода-вывода. Для выполнения резервного копирования не нужно планировать период обслуживания.

{% data variables.product.prodname_enterprise_backup_utilities %} имеют основные номера выпусков и версий, которые соответствуют выпускам с новыми функциями для {% data variables.product.product_name %}. Мы поддерживаем четыре последние версии обоих продуктов. Дополнительные сведения см. в разделе [Выпуски {% data variables.product.product_name %}](/admin/all-releases).

Подробнее о возможностях, требованиях и расширенном использовании см. в [файле сведений проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils#readme) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

## Предварительные требования

Чтобы использовать {% данных variables.product.prodname_enterprise_backup_utilities %}, необходимо иметь систему узла Linux или Unix, отделяемую от {% данных variables.location.product_location %}.

Вы также можете интегрировать {% data variables.product.prodname_enterprise_backup_utilities %} в существующую среду для долгосрочного постоянного хранения критически важных данных.

Рекомендуется, чтобы узел резервной копии и {% данных variables.location.product_location %} были географически удалены друг от друга. Это гарантирует, что резервные копии будут доступны для восстановления в случае крупной аварии или сбоя сети на первичном сайте.

Требования к физическому хранилищу зависят от использования диска репозитория Git и ожидаемых шаблонов роста.

| Оборудование | Рекомендация |
| -------- | --------- |
| **Число виртуальных ЦП**  | 2 |
| **Память** | 2 ГБ |
| **Память** | В пять раз больше выделенного хранилище основного экземпляра |

В зависимости от шаблона использования может потребоваться больше ресурсов, таких как активность пользователей и выбранные интеграции.

Дополнительные сведения см. в [Требованиях проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils/blob/master/docs/requirements.md) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

## Установка {% data variables.product.prodname_enterprise_backup_utilities %}

Чтобы установить {% data variables.product.prodname_enterprise_backup_utilities %} на узле резервного копирования, рекомендуем клонировать Git-репозиторий проекта. Этот подход позволит получать новые выпуски напрямую через Git, а существующий файл конфигурации резервного копирования `backup.config` будет сохранен при установке новой версии.

Если же хост-компьютер не имеет доступа к Интернету, {% data variables.product.prodname_enterprise_backup_utilities %} можно скачивать в виде сжатого архива для каждого выпуска, чтобы затем извлечь и установить его содержимое. Дополнительные сведения см. в разделе [Начало работы](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

Моментальные снимки резервных копий записываются на диск по пути, заданному в переменной каталога данных `GHE_DATA_DIR` в файле `backup.config`. Снимки должны храниться в файловой системе, поддерживающей символьные ссылки и жесткие связи.

{% note %}

**Примечание.** Рекомендуем убедиться, что ваши моментальные снимки не хранятся в подпапке каталога, где установлены {% data variables.product.prodname_enterprise_backup_utilities %}, иначе возможна непреднамеренная перезапись каталога данных, когда {% data variables.product.prodname_enterprise_backup_utilities %} обновляют версию.

{% endnote %}

1. Чтобы клонировать [репозиторий проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils/) в локальный каталог на узле резервного копирования, выполните следующую команду.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. Чтобы перейти в локальный каталог репозитория, выполните следующую команду.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Чтобы скопировать включенный файл `backup.config-example` в `backup.config`, выполните следующую команду.

   ```shell
   cp backup.config-example backup.config
   ```
1. Для изменения конфигурации отредактируйте файл `backup.config` в текстовом редакторе.
   1. Задайте значение `GHE_HOSTNAME` для имени узла или IP-адреса основного экземпляра {% data variables.product.prodname_ghe_server %}.

     {% note %}

     **Примечание:** Если {% данных variables.location.product_location %} развертывается как кластер или в конфигурации высокой доступности с помощью подсистемы балансировки нагрузки, `GHE_HOSTNAME` это может быть имя узла подсистемы балансировки нагрузки, если он разрешает доступ по протоколу SSH (через порт 122) к {% данных variables.location.product_location %}.

     Чтобы обеспечить немедленную доступность восстановленного устройства, создавайте резервные копии, предназначенные для основного экземпляра, даже в конфигурации георепликации.

     {% endnote %}
   1. Задайте для расположения файловой системы, в котором вы хотите хранить моментальные снимки резервных копий, значение `GHE_DATA_DIR`. Рекомендуется выбрать расположение в той же файловой системе, что и у узла резервного копирования, но не там, где вы клонировали Git-репозиторий на шаге 1.
1. Чтобы предоставить узлу резервного копирования доступ к экземпляру, откройте страницу параметров основного экземпляра `http(s)://HOSTNAME/setup/settings` и добавьте ключ SSH узла в список авторизованных ключей SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh).
1. На узле резервного копирования проверьте подключение по протоколу `ghe-host-check` SSH с помощью команды {% данных variables.location.product_location %}.

  ```shell
  ./bin/ghe-host-check
  ```         
1. Чтобы создать начальную полную резервную копию, выполните следующую команду.

  ```shell
  ./bin/ghe-backup
  ```

Подробнее о расширенном использовании см. в [файле сведений проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils#readme) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

## {% data variables.product.prodname_enterprise_backup_utilities %}: обновление

Когда {% data variables.product.prodname_enterprise_backup_utilities %}, обновляются, необходимо выбрать выпуск, совместимый с текущей версией {% data variables.product.product_name %}. Установка {% данных variables.product.prodname_enterprise_backup_utilities %} должна быть по крайней мере той же версией, что и {% данных variables.location.product_location %}, и не может быть более двух версий. Дополнительные сведения см. в [Требованиях к версии {% data variables.product.prodname_ghe_server %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".
{% data variables.product.prodname_enterprise_backup_utilities %} можно обновить в репозитории Git, получив последние изменения.

Если же вы не используете для своей установки Git-репозиторий, вы можете извлечь на ее место новый архив либо изменить свой подход и начать использовать Git.

### Проверка типа установки

{% data variables.product.prodname_enterprise_backup_utilities %} могут быть установлены разными способами. Вы можете проверить свой метод установки и определить оптимальный способ обновления.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Чтобы проверить, существует ли действительный рабочий каталог в Git-репозитории, выполните следующую команду.

   ```
   git rev-parse --is-inside-work-tree
   ```

   Если выводится значение `true`, то {% data variables.product.prodname_enterprise_backup_utilities %} были установлены путем клонирования Git-репозитория проекта. Если выводится значение `fatal: not a git repository (or any of the parent directories)`, то {% data variables.product.prodname_enterprise_backup_utilities %}, скорее всего, были установлены путем извлечения сжатого файла архива.
Если установка находится в репозитории Git, вы можете установить последнюю версию с помощью Git. Если установка выполнялась из сжатого архивного файла, вы можете скачать и извлечь последнюю версию либо переустановить {% data variables.product.prodname_enterprise_backup_utilities %} с помощью Git для упрощения будущих обновлений.

- [Обновление установки в репозитории Git](#upgrading-an-installation-in-a-git-repository)
- [Использование Git для обновлений вместо сжатых архивов](#using-git-instead-of-compressed-archives-for-upgrades)

### Обновление установки в репозитории Git

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **Примечание.** Рекомендуется скопировать существующий файл `backup.config` во временное расположение, например `$HOME/backup.config`, прежде чем обновлять {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Скачайте последние обновления проекта, выполнив команду `git fetch`.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### Использование Git для обновлений вместо сжатых архивов

Если узел резервного копирования подключен к Интернету и ранее вы использовали сжатый архив (`.tar.gz`), чтобы установить или обновить {% data variables.product.prodname_enterprise_backup_utilities %}, рекомендуется вместо него использовать для установки репозиторий Git. Обновление с помощью Git выполняется проще и сохраняет текущую конфигурацию резервного копирования.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. {% data variables.product.prodname_enterprise_backup_utilities %} имеют существующую конфигурацию, для создания резервной копии которой скопируйте текущий файл `backup.config` в безопасное расположение, например в домашний каталог.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. Перейдите в локальный каталог на узле резервного копирования, где требуется установить {% data variables.product.prodname_enterprise_backup_utilities %} в виде Git-репозитория.
1. Чтобы клонировать [репозиторий проекта](https://github.com/github/backup-utils/) в каталог на узле резервного копирования, выполните следующую команду.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. Чтобы перейти в клонированный репозиторий, выполните следующую команду.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Чтобы восстановить конфигурацию резервного копирования из более ранней версии, скопируйте существующий файл конфигурации в локальный каталог репозитория. Замените путь в команде на расположение файла, сохраненного в шаге 2.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **Примечание.** Вы можете выбрать, куда восстановить файл конфигурации резервного копирования после клонирования. Дополнительные сведения о возможном расположении файлов конфигурации см. в разделе [Начало работы](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) в документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

  {% endnote %}

1. Чтобы проверить правильность путей к каталогам или скриптам в файле конфигурации резервного копирования, просмотрите файл в текстовом редакторе.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. Удалите старый каталог служебных программ резервного копирования GitHub Enterprise Server из шага 1 (где находилась установка из сжатого архива).

## Планирование резервного копирования

Вы можете запланировать регулярное резервное копирование на узле резервного копирования с помощью команды `cron(8)` или аналогичной службы планирования команд. Настроенная частота резервного копирования будет определять целевую точку восстановления (RPO) для наихудшего случая в вашем плане восстановления. Например, если вы запланировали выполнение резервного копирования каждый день в полночь, то в случае аварии можете потерять до 24 часов данных. Рекомендуется начать с почасового расписания резервного копирования, что в худшем случае обеспечивает потерю не более одного часа данных при уничтожении данных первичного сайта.

Если попытки резервного копирования перекрываются, команда `ghe-backup` прерывается с сообщением об ошибке, указывающим на существование одновременного резервного копирования. В этом случае рекомендуется уменьшить частоту запланированных резервных копирований. Дополнительные сведения см. в разделе "Планирование резервных копий" в [файле сведений проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils#scheduling-backups) из документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".

## Восстановление резервной копии.

В случае длительного сбоя или катастрофического события на первичном сайте можно восстановить {% данных variables.location.product_location %} путем подготовки другого устройства {% данных variables.product.prodname_enterprise %} и выполнения восстановления с узла резервной копии. Перед восстановлением устройства необходимо добавить ключ SSH узла резервного копирования в целевое устройство {% data variables.product.prodname_enterprise %} в качестве авторизованного ключа SSH.

{% note %}

**Примечание:** При восстановлении резервных копий до {% данных variables.location.product_location %}применяются те же правила поддержки версий. Вы можете восстановить данные не более чем из двух выпусков с новыми функциями.

Например, при использовании резервной копии из {% data variables.product.product_name %} 3.0.x вы можете восстановить резервную копию в экземпляр {% data variables.product.product_name %} 3.2.x. Восстановить данные из резервной копии {% data variables.product.product_name %} 2.22.x в экземпляр с версией 3.2.x будет невозможно, так как потребовалось бы три перехода между версиями (от 2.22 до 3.0, 3.1 и 3.2). Необходимо было бы сначала выполнить восстановление в экземпляр с версией 3.1.x, а затем обновление до версии 3.2.x.

{% endnote %}

Чтобы восстановить {% данных variables.location.product_location %} из последнего успешного моментального снимка, используйте `ghe-restore` команду.

{% note %}

**Примечание.** Перед восстановлением из резервной копии убедитесь в следующем:
- На основном экземпляре включен режим обслуживания и завершены все активные процессы. Дополнительные сведения см. в разделе [Включение режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/).
- На всех репликах в конфигурациях с высоким уровнем доступности остановлена репликация. Подробнее см. команду `ghe-repl-stop` в разделе [Сведения о конфигурации с высоким уровнем доступности](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop).
- Если {% данных variables.location.product_location %} включен {% данных variables.product.prodname_actions %}, необходимо сначала настроить внешний поставщик хранилища {% данных variables.product.prodname_actions %} на устройстве замены. Дополнительные сведения см. в разделе [Резервное копирование и восстановление {% data variables.product.prodname_ghe_server %} с помощью включенных {% data variables.product.prodname_actions %}](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).

{% endnote %}

При выполнении команды `ghe-restore` должны отобразиться примерно такие выходные данные:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} Чтобы проверить восстановление, настройте список исключений IP-адресов, разрешив доступ к указанному списку IP-адресов. Дополнительные сведения см. в разделе [Проверка изменений в режиме обслуживания с использованием списка исключений IP-адресов](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
{% endif %}

{% note %}

**Примечание**. 

- Параметры сети исключаются из моментального снимка резервного копирования. Вы должны вручную настроить сеть на целевом устройстве {% data variables.product.prodname_ghe_server %} в соответствии с требованиями для вашей среды.

- При восстановлении на новые диски в существующем или пустом экземпляре {% данных variables.product.prodname_ghe_server %} могут присутствовать устаревшие идентификаторы UUID, что приведет к тому, что репликация Git и (или) Alambic сообщает об истечении синхронизации. Устаревшие идентификаторы входа сервера могут быть результатом прекращения работы узла в конфигурации высокой доступности, которые по-прежнему присутствуют в базе данных приложения, но не в восстановленной конфигурации репликации. Чтобы устранить проблему, устаревшие идентификаторы UUID могут быть удалены с помощью `ghe-repl-teardown` после завершения восстановления и до начала репликации. В этом сценарии обратитесь к {% данных variables.contact.contact_ent_support %}, чтобы получить дополнительную помощь.

{% endnote %}

С командой `ghe-restore` можно использовать следующие дополнительные параметры.
- Флаг `-c` перезаписывает параметры, сертификаты и данные лицензии на целевом узле, даже если он уже настроен. Не указывайте этот флаг, если вы настраиваете промежуточный экземпляр в целях тестирования и хотите сохранить существующую конфигурацию на целевом объекте. Дополнительные сведения см. в разделе "Использование команд резервного копирования и восстановления" в [файле сведений проекта "{% data variables.product.prodname_enterprise_backup_utilities %}"](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) из документации проекта "{% data variables.product.prodname_enterprise_backup_utilities %}".
- Флаг `-s` позволяет выбрать другой моментальный снимок резервной копии.
