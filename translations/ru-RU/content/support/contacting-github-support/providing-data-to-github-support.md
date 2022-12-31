---
title: Предоставление данных для службы поддержки GitHub
intro: 'Поскольку у {% data variables.contact.github_support %} нет доступа к вашей среде, иногда нам требуются дополнительные сведения.'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: bc941b09d6d38f0cad45fcb1ab5977002a3618d8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093964'
---
## Сведения о файлах диагностики и пакетах поддержки

{% data variables.contact.github_support %} может попросить вас предоставить дополнительные данные в виде очищенных файлов журналов. Вас могу попросить предоставить три типа файлов журналов.

Диагностические файлы содержат сведения о параметрах и среде экземпляра {% data variables.product.prodname_ghe_server %}, пакеты поддержки содержат данные диагностики и журналы за последние два дня, а расширенные пакеты поддержки также содержат данные диагностики и журналы, но за последние семь дней.

## Сведения об очистке файлов журнала

Маркеры проверки подлинности, ключи и секреты удаляются из файлов журналов в следующих каталогах журналов, содержащихся в пакете поддержки или файле диагностики:

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Создание и отправка диагностических файлов

Диагностические файлы представляют собой общие сведения о параметрах и среде экземпляра {% data variables.product.prodname_ghe_server %}, которые включают:

- сведения о клиентской лицензии, включая название компании, дату окончания срока действия и количество пользовательских лицензий;
- номера версий и хэши SHA;
- архитектура виртуальной машины;
- имя узла, частный режим, параметры SSL;
- списки загрузки и процессов;
- Параметры сети
- метод проверки подлинности и подробности;
- количество репозиториев, пользователей и другие данные установки.

Можно скачать диагностику для своего экземпляра из {% data variables.enterprise.management_console %} или с помощью программы командной строки `ghe-diagnostics`.

### Создание диагностического файла в {% data variables.enterprise.management_console %}

Этот метод можно использовать, если у вас нет ключа SSH.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Нажмите кнопку **Скачать диагностические сведения**.

### Создание диагностического файла с помощью SSH

Этот метод можно использовать без входа в {% data variables.enterprise.management_console %}.

Используйте служебную программу командной строки [ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) для получения диагностических сведений для вашего экземпляра.

```shell
$ ssh -p122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt
```

## Создание и отправка пакетов поддержки

После отправки запроса на поддержку мы можем попросить вас предоставить нашей команде пакет поддержки. Пакет поддержки — это архив tar со сжатием gzip, который включает диагностические данные и важные журналы из вашего экземпляра, такие как:

- журналы, связанные с проверкой подлинности, которые могут быть полезны при устранении ошибок проверки подлинности или настройке LDAP, CAS или SAML;
- журнал {% data variables.enterprise.management_console %};
- `github-logs/exceptions.log`: сведения об ошибках с кодом 500, возникших на сайте;
- `github-logs/audit.log`: журналы аудита {% data variables.product.prodname_ghe_server %};
- `babeld-logs/babeld.log`: журналы прокси Git;
- `system-logs/haproxy.log`: журналы HAProxy;
- `elasticsearch-logs/github-enterprise.log`: журналы Elasticsearch;
- `configuration-logs/ghe-config.log`: журналы конфигурации {% data variables.product.prodname_ghe_server %};
- `collectd/logs/collectd.log`: журналы Collectd;
- `mail-logs/mail.log`: журналы доставки электронной почты SMTP.

Дополнительные сведения см. в разделе [Сведения о журнале аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).

Пакеты поддержки включают журналы за последние два дня. Чтобы получить журналы за последние семь дней, можно скачать расширенный пакет поддержки. Дополнительные сведения см. в разделе [Создание и отправка расширенных пакетов поддержки](#creating-and-sharing-extended-support-bundles).

{% tip %}

**Совет.** При обращении в {% data variables.contact.github_support %} вам будет отправлено сообщение с подтверждением, которое будет содержать ссылку на ваше обращение. Если {% data variables.contact.github_support %} запрашивает у вас пакет поддержки, можно использовать ссылку на обращение для отправки пакета поддержки.

{% endtip %}

### Создание пакета поддержки в {% data variables.enterprise.management_console %}

Эти действия можно использовать для создания и отправки пакета поддержки, если вы можете получить доступ к веб-версии {% data variables.enterprise.management_console %} и имеете исходящий доступ к Интернету.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Щелкните **Скачать пакет поддержки**.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Создание пакета поддержки с помощью SSH

Эти действия можно использовать для создания и совместного использования пакета поддержки, если у вас есть доступ по протоколу SSH к {% данных variables.location.product_location %} и есть исходящий доступ к Интернету.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Скачайте пакет поддержки через SSH:
  ```shell
  $ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Дополнительные сведения о команде `ghe-support-bundle` см. в разделе [Служебные программы командной строки](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle).
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Отправка пакета поддержки с использованием учетной записи предприятия

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. На боковой панели слева щелкните **Корпоративное лицензирование**.
  ![Снимок экрана: ссылка "Корпоративное лицензирование" на боковой панели параметров корпоративной учетной записи](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. В разделе "Справка по {% data variables.product.prodname_enterprise %}" нажмите **Отправить пакет поддержки**.
  ![Снимок экрана: пункт "Отправить ссылку на пакет поддержки".](/assets/images/enterprise/support/upload-support-bundle.png)
5. В раскрывающемся меню "Выберите корпоративную учетную запись" выберите учетную запись, связанную с пакетом поддержки.
  ![Снимок экрана: раскрывающееся меню для выбора корпоративной учетной записи для пакета поддержки.](/assets/images/enterprise/support/support-bundle-account.png)
6. В разделе "Отправить пакет поддержки для {% data variables.contact.enterprise_support %}" нажмите кнопку **Выбрать файл** или перетащите файл пакета поддержки в поле **Выбрать файл**, чтобы выбрать пакет поддержки.
  ![Снимок экрана: кнопка "Выбрать файл" для отправки файла пакета поддержки.](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Щелкните **Отправить**.

### Отправка пакета поддержки напрямую по SSH

Можно отправить пакет поддержки напрямую на наш сервер, если:
- У вас есть доступ по протоколу SSH к {% данных variables.location.product_location %}.
- Исходящие подключения HTTPS через TCP-порт 443 разрешены из {% данных variables.location.product_location %} в _enterprise-bundles.github.com_ и _esbtoolsproduction.blob.core.windows.net_.

1. Отправьте пакет на наш сервер пакетов поддержки:
  ```shell
  $ ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u'
  ```

## Создание и отправка расширенных пакетов поддержки

Пакеты поддержки включают журналы за последние два дня, а _расширенные_ пакеты поддержки включают журналы за последние семь дней. Если события, которые изучает {% data variables.contact.github_support %} произошли более двух дней назад, мы можем попросить вас предоставить расширенный пакет поддержки. Вам потребуется доступ по протоколу SSH для скачивания расширенного пакета. Нельзя скачать расширенный пакет с помощью {% data variables.enterprise.management_console %}.

Чтобы избежать создания слишком больших пакетов, пакеты содержат только журналы, которые не были ротированы и сжаты. Ротация журналов в {% data variables.product.prodname_ghe_server %} выполняется с различной периодичностью (ежедневно или еженедельно) для разных файлов журналов в зависимости от того, насколько большим ожидается их размер.

### Создание пакета расширенной поддержки с помощью SSH

Эти действия можно использовать для создания и совместного использования расширенного пакета поддержки, если у вас есть доступ по протоколу SSH к {% данных variables.location.product_location %} и у вас есть исходящий доступ к Интернету.

1. Скачайте пакет расширенной поддержки через SSH, добавив флаг `-x` в команду `ghe-support-bundle`:
  ```shell
  $ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Отправка пакета расширенной поддержки напрямую с помощью SSH

Можно отправить пакет поддержки напрямую на наш сервер, если:
- У вас есть доступ по протоколу SSH к {% данных variables.location.product_location %}.
- Исходящие подключения HTTPS через TCP-порт 443 разрешены из {% данных variables.location.product_location %} в _enterprise-bundles.github.com_ и _esbtoolsproduction.blob.core.windows.net_.

1. Отправьте пакет на наш сервер пакетов поддержки:
  ```shell
  $ ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u -x'
  ```

## Дополнительные материалы

- [Сведения о поддержке GitHub](/support/learning-about-github-support/about-github-support)
- [Создание проверки работоспособности для предприятия](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)
