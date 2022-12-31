---
title: Обновление GitHub Enterprise Server
intro: 'Обновите {% data variables.product.prodname_ghe_server %}, чтобы получить последние возможности и обновления системы безопасности.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186430'
---
## Подготовка к обновлению

1. Определите стратегию обновления и выберите целевую версию для обновления. Дополнительные сведения см. в разделе [Требования для обновления](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/). Чтобы определить путь обновления с текущей версии, используйте [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade).
1. Создайте актуальную резервную копию основного экземпляра с помощью {% data variables.product.prodname_enterprise_backup_utilities %}. Дополнительные сведения см. в [файле README.md](https://github.com/github/backup-utils#readme) в документации проекта {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% note %}

  **Примечание:** Версия {% data variables.product.prodname_enterprise_backup_utilities %} должна быть той же версии, что и {% data variables.location.product_location %}, или иметь не более двух версий. Дополнительные сведения: [Обновление служебных программ резервного копирования GitHub Enterprise Server](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities).

  {% endnote %}

1. Если {% data variables.location.product_location %} использует временные локальные средства выполнения для {% data variables.product.prodname_actions %} и вы отключили автоматические обновления, обновите средства выполнения до версии приложения средства выполнения, которое будет запускать обновленный экземпляр.
1. При обновлении с помощью пакета обновления запланируйте период обслуживания для пользователей {% data variables.product.prodname_ghe_server %}. Если вы используете горячее исправление, режим обслуживания не требуется.

  {% note %}

  **Примечание**. Период обслуживания зависит от типа выполняемого обновления. Обновления с помощью горячего исправления обычно не требуют периода обслуживания. Иногда требуется перезагрузка, которую можно выполнить позже. Согласно схеме версий ОСНОВНАЯ.ФУНКЦИИ.ИСПРАВЛЕНИЕ выпуски исправлений, использующие пакет обновления, обычно требуют менее пяти минут простоя. Выпуски с новыми функциями, включающие перенос данных, занимают больше времени в зависимости от производительности хранилища и объема переносимых данных. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

  {% endnote %}

## Создание моментального снимка

Моментальный снимок — это контрольная точка существования виртуальной машины на определенный момент времени. Мы настоятельно рекомендуем создать моментальный снимок перед обновлением виртуальной машины, чтобы в случае сбоя обновления можно было вернуть виртуальную машину в состояние на момент создания моментального снимка. Создавать моментальный снимок виртуальной машины рекомендуется, только когда устройство выключено или находится в режиме обслуживания и все фоновые задания завершены.

При обновлении до нового выпуска с новыми функциями необходимо создать моментальный снимок виртуальной машины. При обновлении до выпуска исправления можно подключить существующий диск данных. 

Существует два типа моментальных снимков.

- В **моментальных снимках виртуальных машин** хранится все состояние виртуальной машины, включая данные пользователя и конфигурации. Этот метод требует большого объема дискового пространства и занимает много времени.
- В **моментальных снимках дисков данных** хранятся только пользовательские данные.

  {% note %}

  **Примечания.**
  - Некоторые платформы не позволяют сделать моментальный снимок только диска данных. На таких платформах необходимо создать моментальный снимок всей виртуальной машины.
  - Если гипервизор не поддерживает полные моментальные снимки виртуальных машин, следует быстро создать моментальный снимок корневого диска и диска данных.

  {% endnote %}

| Платформа | Snapshot - метод | URL-адрес документации по моментальным снимкам |
|---|---|---|
| Amazon AWS | Диск | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | ВМ | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | ВМ | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Диск | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | ВМ | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Обновление с помощью горячего исправления

{% data reusables.enterprise_installation.hotpatching-explanation %} 

С помощью {% data variables.enterprise.management_console %} можно установить горячее исправление немедленно или запланировать его установку в будущем. С помощью административной оболочки можно установить горячее исправление с использованием служебной программы `ghe-upgrade`. Дополнительные сведения см. в разделе [Требования для обновления](/enterprise/admin/guides/installation/upgrade-requirements/).

{% note %}

**{% ifversion ghes %}Примечания{% else %}Примечание{% endif %}** .

{% ifversion ghes %}
- Если {% data variables.location.product_location %} выполняет сборку-кандидат, обновление с помощью горячего исправления невозможно.

- {% endif %}Установка горячего исправления с помощью {% data variables.enterprise.management_console %} недоступна в кластерных средах. Инструкции по установке горячего исправления в кластерной среде см. в разделе [Обновление кластера](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch).

{% endnote %}

### Обновление одного устройства с помощью горячего исправления

#### Установка горячего исправления с помощью {% data variables.enterprise.management_console %}

Вы можете использовать {% data variables.enterprise.management_console %} для обновления с помощью горячего исправления, включив автоматические обновления. После этого вам будет предложена последняя доступная версия {% data variables.product.prodname_ghe_server %}, до которой можно выполнить обновление.

Если для обновления вам предлагается выпуск с новыми функциями, а не выпуск исправления, установить горячее исправление с помощью {% data variables.enterprise.management_console %} невозможно. Вместо этого необходимо установить горячее исправление с помощью административной оболочки. Дополнительные сведения см. в разделе [Установка горячего исправления с помощью административной оболочки](#installing-a-hotpatch-using-the-administrative-shell).

1. Включить автоматические обновления. Дополнительные сведения см. в разделе [Включение автоматических обновлений](/enterprise/admin/guides/installation/enabling-automatic-update-checks/).
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. После скачивания нового горячего исправления используйте раскрывающееся меню "Установить пакет".
    - Чтобы выполнить установку немедленно, выберите пункт **Сейчас**.
    - Чтобы выполнить установку позже, выберите более позднюю дату.
  ![Раскрывающийся список для выбора даты установки горячего исправления](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Нажмите кнопку **Установить**.
  ![Кнопка установки горячего исправления](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Установка горячего исправления с помощью административной оболочки

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Скопируйте URL-адрес файла пакета горячего обновления (файл *HPKG*).
{% data reusables.enterprise_installation.download-package %}
4. Выполните команду `ghe-upgrade`, используя имя файла пакета:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. Если для обновления ядра, MySQL, Elasticsearch или других программ требуется перезагрузка, скрипт обновления с помощью горячего исправления уведомит вас об этом.

### Обновление устройства с экземплярами реплик с помощью горячего исправления

{% note %}

**Примечание**. Если вы устанавливаете горячее исправление, вам не нужно переходить в режим обслуживания или останавливать репликацию.

{% endnote %}

Устройства, для которых настроен высокий уровень доступности и георепликации, используют экземпляры реплик в дополнение к основным экземплярам. Чтобы обновить такие устройства, необходимо обновить как основной экземпляр, так и все экземпляры реплик по одному.

#### Обновление основного экземпляра

1. Обновите основной экземпляр, следуя инструкциям в разделе [Установка горячего исправления с помощью административной оболочки](#installing-a-hotpatch-using-the-administrative-shell).

#### Обновление экземпляра реплики

{% note %}

**Примечание**. Если для обеспечения георепликации вы используете несколько экземпляров реплик, повторите эту процедуру для каждого экземпляра по одному.

{% endnote %}

1. Обновите экземпляр реплики, следуя инструкциям в разделе [Установка горячего исправления с помощью административной оболочки](#installing-a-hotpatch-using-the-administrative-shell). При использовании нескольких реплик для георепликации необходимо повторить эту процедуру, чтобы обновить каждую реплику по одной.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## Обновление с помощью пакета обновления

В то время как для обновления до последнего выпуска исправления в рамках выпуска с новыми функциями можно использовать горячее исправление, для обновления до более нового выпуска с новыми функциями необходимо использовать пакет обновления. Например, для обновления с `2.11.10` до `2.12.4` нужно использовать пакет обновления, так как это разные выпуски с новыми функциями. Дополнительные сведения см. в разделе [Требования для обновления](/enterprise/admin/guides/installation/upgrade-requirements/).

### Обновление одного устройства с помощью пакета обновления

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Выберите соответствующую платформу и скопируйте URL-адрес пакета обновления (файл *PKG*).
{% data reusables.enterprise_installation.download-package %}
4. Включите режим обслуживания и дождитесь завершения всех активных процессов в экземпляре {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

  {% note %}

  **Примечание**. При обновлении основного устройства в конфигурации с высоким уровнем доступности устройство уже должно находиться в режиме обслуживания, если вы выполняете инструкции из раздела [Обновление основного экземпляра](#upgrading-the-primary-instance).

  {% endnote %}

5. Выполните команду `ghe-upgrade`, используя имя файла пакета:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Подтвердите, что вы хотите продолжить обновление, и выполните перезапуск после проверки подписи пакета. Новая корневая файловая система запишется в дополнительную секцию, и экземпляр автоматически перезапустится в режиме обслуживания:
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. При необходимости для того, чтобы проверить обновление, настройте список исключений IP-адресов, разрешив доступ к указанному списку IP-адресов. Дополнительные сведения см. в разделе [Проверка изменений в режиме обслуживания с использованием списка исключений IP-адресов](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
{% endif %}
7. При обновлении одного устройства отключите режим обслуживания, чтобы пользователи могли использовать {% data variables.location.product_location %}.

  {% note %}

  **Примечание**. При обновлении устройств в конфигурации с высоким уровнем доступности следует оставаться в режиме обслуживания, пока не будут обновлены все реплики и не будет завершена репликация. Дополнительные сведения см. в разделе [Обновление экземпляра реплики](#upgrading-a-replica-instance).

  {% endnote %}

### Обновление устройства с экземплярами реплик с помощью пакета обновления

Устройства, для которых настроен высокий уровень доступности и георепликации, используют экземпляры реплик в дополнение к основным экземплярам. Чтобы обновить такие устройства, необходимо обновить как основной экземпляр, так и все экземпляры реплик по одному.

#### Обновление основного экземпляра

{% warning %}

**Предупреждение**. Если репликация остановлена, при сбое основного экземпляра все результаты работы, выполненной до обновления реплики и перезапуска репликации, будут утеряны.

{% endwarning %}

1. В основном экземпляре включите режим обслуживания и дождитесь завершения всех активных процессов. Дополнительные сведения см. в разделе [Включение режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/).
{% data reusables.enterprise_installation.replica-ssh %}
3. В экземпляре реплики или во всех экземплярах реплик, если в рамках георепликации используется несколько экземпляров реплик, выполните команду `ghe-repl-stop`, чтобы остановить репликацию.
4. Обновите основной экземпляр, следуя инструкциям в разделе [Обновление одного устройства с помощью пакета обновления](#upgrading-a-single-appliance-with-an-upgrade-package).

#### Обновление экземпляра реплики

{% note %}

**Примечание**. Если для обеспечения георепликации вы используете несколько экземпляров реплик, повторите эту процедуру для каждого экземпляра по одному.

{% endnote %}

1. Обновите экземпляр реплики, следуя инструкциям в разделе [Обновление одного устройства с помощью пакета обновления](#upgrading-a-single-appliance-with-an-upgrade-package). При использовании нескольких реплик для георепликации необходимо повторить эту процедуру, чтобы обновить каждую реплику по одной.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Если команда возвращает сообщение `Replication is not running`, репликацию по-прежнему можно запустить. Подождите примерно одну минуту, прежде чем снова выполнять команду `ghe-repl-status`.

   {% note %}

   **Примечание:** Пока выполняется `ghe-repl-status` повторная синхронизация, может указывать на то, что репликация позади. Например, может отображаться следующее сообщение.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3,4 or ghes = 3,5 or ghes = 3,6 %}

   - Если вы обновили каждый узел до {% data variables.product.product_name %} 3.6.0 или более поздней версии и запустили репликацию, но `git replication is behind the primary` по-прежнему отображается через 45 минут, обратитесь к {% data variables.contact.enterprise_support %}. Дополнительные сведения см. в разделе [Получение помощи от {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
   {%- endif %}

   - {% ifversion ghes = 3,4 or ghes = 3,5 or ghes = 3,6 %} В противном случае, если{% else %}Если{% endif %} `ghe-repl-status` не вернул `OK`, обратитесь к {% data variables.contact.enterprise_support %}. Дополнительные сведения см. в разделе [Получение помощи от {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
6. После завершения обновления последней реплики и завершения повторной синхронизации отключите режим обслуживания, чтобы пользователи могли использовать {% data variables.location.product_location %}.

## Восстановление после неудачного обновления

Если обновление завершилось сбоем или было прервано, необходимо вернуть экземпляр в предыдущее состояние. Процесс завершения зависит от типа обновления.

### Откат выпуска исправления

Чтобы откатить выпуск исправления, используйте команду `ghe-upgrade` с параметром `--allow-patch-rollback`. Перед откатом репликация должна быть временно остановлена путем выполнения команды `ghe-repl-stop` во всех экземплярах реплик. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

После завершения отката перезапустите репликацию, выполнив команду `ghe-repl-start` во всех репликах. 

Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)".

### Откат выпуска с новыми функциями

Чтобы выполнить откат выпуска с новыми функциями, восстановите данные из моментального снимка виртуальной машины для обеспечения согласованного состояния корневой секции и секций данных. Дополнительные сведения см. в разделе [Создание моментального снимка](#taking-a-snapshot).

{% ifversion ghes %}
## Дополнительные материалы

- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases) {% endif %}
