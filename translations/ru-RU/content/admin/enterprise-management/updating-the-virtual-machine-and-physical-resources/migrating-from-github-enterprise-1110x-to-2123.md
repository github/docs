---
title: "Переход с GitHub Enterprise\_11.10.x на версию\_2.1.23"
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: "Чтобы перейти с {% data variables.product.prodname_enterprise %}\_11.10.x на 2.1.23, необходимо настроить новый экземпляр устройства и перенести данные из предыдущего экземпляра."
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332603'
---
Поддерживается переход из {% data variables.product.prodname_enterprise %} версии 11.10.348 и более поздних версий. Переход из {% data variables.product.prodname_enterprise %} версии 11.10.348 и более ранних версий не поддерживается. Сначала необходимо выполнить обновление до версии 11.10.348 в нескольких обновлениях. Дополнительные сведения см. в разделе статьи о процедуре обновления до версии 11.10.348 [Обновление до последнего выпуска](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/).

Чтобы выполнить обновление до последней версии {% data variables.product.prodname_enterprise %}, необходимо сначала перейти на {% data variables.product.prodname_ghe_server %} версии 2.1, а затем выполнить обычное обновление. Дополнительные сведения см. в статье [Обновление {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).

## Подготовка к миграции

1. Еще раз изучите руководство по подготовке и установке и убедитесь, что выполнены все условия для подготовки и настройки {% data variables.product.prodname_enterprise %} версии 2.1.23 в вашей среде. Дополнительные сведения см. в разделе [Подготовка и установка](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/).
2. Убедитесь, что текущий экземпляр выполняет поддерживаемую версию обновления.
3. Настройте последнюю версию {% data variables.product.prodname_enterprise_backup_utilities %}. Дополнительные сведения см. в [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Если вы уже настроили запланированные резервные копии с помощью {% data variables.product.prodname_enterprise_backup_utilities %}, убедитесь, что выполнено обновление до последней версии.
    - Если сейчас вы не выполняете запланированные резервные копии, настройте {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Создайте моментальный снимок полной резервной копии текущего экземпляра с помощью команды `ghe-backup`. Если вы уже настроили запланированные резервные копии для текущего экземпляра, моментальный снимок экземпляра создавать не нужно.

   {% tip %}

   **Совет.** Экземпляр можно оставить в сети и активно использовать во время создания моментального снимка. Во время обслуживания миграции вы создадите еще один моментальный снимок. Так как резервные копии являются добавочными, этот исходный моментальный снимок уменьшает объем данных, передаваемых в окончательном моментальном снимке, что может сократить период обслуживания.

   {% endtip %}

5. Определите метод переключения трафика пользователя на новый экземпляр. После миграции весь трафик HTTP и Git направляется в новый экземпляр.
    - **DNS**. Мы рекомендуем этот метод для всех сред, так как он прост в использовании и хорошо работает даже при миграции из одного центра обработки данных в другой. Перед началом миграции сократите срок жизни существующей записи DNS до пяти минут или меньше и разрешите распространение изменений. После завершения миграции обновите записи DNS, чтобы указать IP-адрес нового экземпляра.
    - **Назначение IP-адресов**. Этот метод доступен только при миграции VMware в VMware и не рекомендуется к использованию, если метод DNS недоступен. Перед началом миграции необходимо завершить работу старого экземпляра и назначить его IP-адрес новому экземпляру.
6. Запланируйте период обслуживания. Период обслуживания должен включать достаточно времени для передачи данных из узла резервной копии в новый экземпляр и будет зависеть от размера моментального снимка резервной копии и доступной пропускной способности сети. В течение этого времени текущий экземпляр будет недоступен, а во время миграции на новый экземпляр будет находиться в режиме обслуживания.

## Выполнение миграции

1. Подготовьте новый экземпляр {% data variables.product.prodname_enterprise %} версии 2.1. Дополнительные сведения см. в руководстве [Подготовка и установка](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/) для целевой платформы.
2. В браузере перейдите к IP-адресу нового устройства реплики и отправьте лицензию {% data variables.product.prodname_enterprise %}.
3. Установите пароль администратора.
5. Нажмите **Мигрировать**.
![Выбор типа установки](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Вставьте ключ SSH для доступа к узлу резервной копии в раздел "Добавить новый ключ SSH".
![Авторизация резервного копирования](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Нажмите **Добавить ключ**, а затем — **Продолжить**.
8. Скопируйте команду `ghe-restore`, которую вы будете выполнять на узле резервной копии, чтобы перенести данные в новый экземпляр.
![Запуск миграции](/assets/images/enterprise/migration/migration-restore-start.png)
9. Включите режим обслуживания на старом экземпляре и дождитесь завершения всех активных процессов. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

  {% note %}

  **Примечание.** С этого момента экземпляр будет недоступен для обычного использования.

  {% endnote %}

10. На узле резервной копии выполните команду `ghe-backup`, чтобы создать окончательный моментальный снимок резервной копии. Это гарантирует, что все данные из старого экземпляра будут записаны.
11. На узле резервной копии выполните команду `ghe-restore`, скопированную на экране состояния восстановления нового экземпляра, чтобы восстановить последний моментальный снимок.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Вернитесь на экран состояния восстановления нового экземпляра, чтобы проверить, завершено ли восстановление.
![Экран завершения восстановления](/assets/images/enterprise/migration/migration-status-complete.png)
13. Щелкните **Перейти к параметрам**, чтобы проверить и настроить сведения о конфигурации и параметры, импортированные из предыдущего экземпляра.
![Проверка импортированных параметров](/assets/images/enterprise/migration/migration-status-complete.png)
14. Нажмите кнопку **Сохранить параметры**.

  {% note %}

  **Примечание.** Новый экземпляр можно использовать после применения параметров конфигурации и перезапуска сервера.

  {% endnote %}

15. Переключите трафик пользователя из старого экземпляра на новый с помощью назначения DNS или IP-адреса.
16. Выполните обновление до последнего выпуска исправлений {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Обновление {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).
