---
title: Служебные программы командной строки
intro: '{% data variables.product.prodname_ghe_server %} включает в себя различные служебные программы для решения отдельных проблем или выполнения конкретных задач.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172808'
---
Эти команды можно выполнять из любого места на виртуальной машине, войдя в систему как администратор SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

## Общие сведения

### ghe-announce

Эта служебная программа задает баннер в верхней части каждой страницы {% data variables.product.prodname_enterprise %}. Его можно использовать для трансляции сообщения вашим пользователям.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} Чтобы разрешить каждому пользователю закрывать объявление для себя, используйте флаг `-d`.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} Вы также можете задать баннер оповещений с помощью корпоративных параметров в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Настройка сообщений для пользователей в вашем экземпляре](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner).
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

Эта служебная программа отображает сведения о фоновых заданиях, как активных, так и находящихся в очереди. Она предоставляет те же числовые показатели счетчика заданий, что и панель статистики администратора в верхней части каждой страницы.

Эта служебная программа помогает определить, есть ли проблемы с обработкой фоновых заданий на сервере Aqueduct. Любая из следующих ситуаций может свидетельствовать о проблеме с Aqueduct.

* Количество фоновых заданий увеличивается, а количество активных заданий остается тем же.
* Веб-каналы событий не обновляются.
* Веб-перехватчики не активируются.
* Веб-интерфейс не обновляется после отправки Git.

Если вы подозреваете, что на сервере Aqueduct произошел сбой, обратитесь за помощью к {% data variables.contact.contact_ent_support %}.

С помощью этой команды можно также приостанавливать или возобновлять задания в очереди.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

Эта служебная программа проверяет диск на наличие больших файлов или файлов, которые были удалены, но по-прежнему имеют открытые дескрипторы файлов. Ее следует запускать, когда вы хотите освободить место в корневом разделе.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

Эта служебная программа очищает различные кэши, которые могут занимать много дискового пространства в корневом томе. Если вы обнаруживаете, что использование дискового пространства корневого тома с течением времени значительно растет, рекомендуется запустить эту служебную программу и посмотреть, поможет ли она сократить общее использование.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

Эта служебная программа очищает все существующие параметры {% data variables.enterprise.management_console %}.

{% tip %}

**Совет**. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

С помощью этой служебной программы можно получать и изменять параметры конфигурации {% data variables.location.product_location %}.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
С ее помощью вы можете найти универсальный уникальный идентификатор (UUID) вашего узла в`cluster.conf`.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} Она позволяет также исключить список пользователей из ограничений скорости REST API. Однако к этим пользователям по-прежнему будет применяться строгое ограничение в 120 000 запросов. Дополнительные сведения см. в разделе [Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limiting).

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

Эта служебная программа применяет параметры {% data variables.enterprise.management_console %}, перезагружает системные службы, подготавливает устройство хранения, перезагружает службы приложений и выполняет все ожидающие миграции базы данных. Она эквивалентна нажатию кнопки **Сохранить параметры** в веб-интерфейсе {% data variables.enterprise.management_console %} или отправке запроса POST в [конечную точку `/setup/api/configure`](/enterprise/user/rest/reference/enterprise-admin#management-console).

Скорее всего вам не придется запускать эту служебную программу вручную, но она существует на тот случай, если вы захотите автоматизировать процесс сохранения параметров через SSH.

```shell
ghe-config-apply
```

### ghe-console

Эта служебная программа открывает консоль GitHub Rails на устройстве {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

Эта служебная программа открывает сеанс базы данных MySQL на устройстве {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
Эта служебная программа возвращает сводку индексов Elasticsearch в формате CSV.

Вывод сводки индексов со строкой заголовка в `STDOUT`:
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Вывод сводки индексов и результатов конвейера в `column` для удобства чтения:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

Эта служебная программа перечисляет репозитории на вашем устройстве, использующие службы {% data variables.product.prodname_dotcom %} Services, метод интеграции, поддержка которого будет прекращена 1 октября 2018 г. Пользователи на устройстве могли настроить службы {% data variables.product.prodname_dotcom %} для создания уведомлений, предназначенных для отправки в определенные репозитории. Дополнительные сведения см. в разделе [Объявление о прекращении поддержки служб {% data variables.product.prodname_dotcom %}](https://developer.github.com/changes/2018-04-25-github-services-deprecation/) в {% data variables.product.prodname_blog %} или [Замена служб {% data variables.product.prodname_dotcom %}](/developers/overview/replacing-github-services). Для получения дополнительных сведений об этой команде или дополнительных параметрах используйте флаг `-h`.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

Эта служебная программа позволяет отслеживать и регистрировать все соответствующие файлы журналов из установки. Вы можете передать в нее параметры, чтобы ограничить журналы определенными наборами. Для получения сведений о дополнительных параметрах используйте флаг -h.

```shell
ghe-logs-tail
```

### ghe-maintenance

Эта служебная программа позволяет управлять состоянием режима обслуживания установки. В основном она предназначена для использования {% data variables.enterprise.management_console %} в фоновом режиме, но может использоваться и напрямую. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

```shell
ghe-maintenance -h
```

### ghe-motd

Эта служебная программа повторно отображает сообщение дня (MOTD), которое администраторы видят при доступе к экземпляру через административную оболочку. Выходные данные содержат общие сведения о состоянии экземпляра.

```shell
ghe-motd
```

### ghe-nwo

Эта служебная программа возвращает имя и владельца репозитория на основе идентификатора репозитория.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Используйте эту команду, чтобы предоставить пользователям права владельца организации с правами администратора сайта на устройстве, или предоставить права владельца организации любому отдельному пользователю в одной организации. Необходимо указать пользователя и (или) организацию. Команда `ghe-org-admin-promote` всегда будет запрашивать подтверждение перед выполнением, если вы не используете флаг `-y` для обхода подтверждения.

С этой служебной программой можно использовать следующие параметры.

- Флаг `-u` задает имя пользователя. Используйте этот флаг, чтобы предоставить права владельца организации конкретному пользователю. Пропустите флаг `-u`, чтобы повысить уровень всех администраторов сайта до указанной организации.
- Флаг `-o` задает организацию. Используйте этот флаг, чтобы предоставить права владельца в определенной организации. Пропустите флаг `-o`, чтобы предоставить разрешения владельца во всех организациях указанному администратору сайта.
- Флаг `-a` предоставляет права владельца во всех организациях всем администраторам сайта.
- Флаг `-y` позволяет обойти подтверждение вручную.

Эта служебная программа не может повысить уровень пользователя, не являющегося администратором сайта, до владельца всех организаций. Вы можете повысить уровень обычной учетной записи пользователя до администратора сайта с помощью [ghe-user-promote](#ghe-user-promote).

Предоставление прав владельца организации в определенной организации определенному администратору сайта

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Предоставление прав владельца организации во всех организациях определенному администратору сайта

```shell
ghe-org-admin-promote -u USERNAME
```

Предоставление прав владельца организации в определенной организации всем администраторам сайта

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Предоставление прав владельца организации во всех организациях всем администраторам сайта

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Используйте эту команду, чтобы немедленно разблокировать {% data variables.enterprise.management_console %} после блокировки учетной записи {% ifversion enterprise-authentication-rate-limits %}. Сведения о настройке политик проверки подлинности для {% data variables.location.product_location %} см. в разделе [Настройка ограничений скорости политики проверки подлинности](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits). {% else %}10 неудачных попыток входа в течение 10 минут. {% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

Эта служебная программа помогает сопоставить записи SAML.

Чтобы создать CSV-файл, содержащий все сопоставления SAML для ваших пользователей {% data variables.product.product_name %}:
```shell
$ ghe-saml-mapping-csv -d
```

Чтобы выполнить тестовый запуск обновления сопоставлений SAML с использованием новых значений:
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

Чтобы обновить сопоставления SAML с использованием новых значений:
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

Эта служебная программа выводит список всех служб, которые были запущены или остановлены (выполняются или ожидают) на устройстве.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

С помощью `ghe-set-password` можно задать новый пароль для проверки подлинности в [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

Эта служебная программа позволяет настроить основной сетевой интерфейс.

Чтобы перейти в визуальный режим, который поможет вам настроить параметры сети:

```shell
$ ghe-setup-network -v
```

Для получения сведений о дополнительных параметрах используйте флаг -h.

### ghe-ssh-check-host-keys

Эта служебная программа проверяет существующие ключи узла SSH на соответствие списку известных украденных ключей узла SSH.

```shell
$ ghe-ssh-check-host-keys
```

Если украденный ключ узла обнаружен, служебная программа завершает работу с отображением состояния `1` и следующего сообщения:
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Если украденный ключ узла не обнаружен, служебная программа завершает работу с отображением состояния `0` и следующего сообщения:
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

Эта служебная программа откатывает ключи узла SSH и заменяет их заново созданными ключами.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

Эта служебная программа возвращает отчет о известных ненадежных ключах SSH, хранящихся на устройстве {% data variables.product.prodname_enterprise %}. При необходимости можно отозвать пользовательские ключи с помощью массового действия. Эта служебная программа сообщит о ненадежных системных ключах, которые необходимо отозвать вручную в [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

Эта служебная программа позволяет установить сертификат Let's Encrypt на устройстве {% data variables.product.prodname_enterprise %}. Дополнительные сведения см. в разделе [Настройка TLS](/enterprise/admin/guides/installation/configuring-tls).

Для удаления конфигурации ACME можно использовать флаг `-x`.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

Эта служебная программа позволяет установить настраиваемый корневой сертификат ЦС на устройстве {% data variables.product.prodname_enterprise %}. Сертификат должен быть в формате PEM. Кроме того, если поставщик сертификатов предоставляет несколько сертификатов ЦС в одном файле, их необходимо разделить по отдельным файлам, которые затем передавать в `ghe-ssl-ca-certificate-install` по одному.

Запустите эту служебную программу, чтобы добавить цепочку сертификатов для проверки сигнатуры фиксации S/MIME. Дополнительные сведения см. в разделе [Сведения о проверке сигнатуры фиксации](/enterprise/user/articles/about-commit-signature-verification/).

Запустите эту служебную программу, если {% data variables.location.product_location %} не удается подключиться к другому серверу, так как последний использует самозаверяющий SSL-сертификат или SSL-сертификат, для которого не предоставляется необходимый пакет ЦС. Одним из способов подтверждения этого является запуск `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` из {% data variables.location.product_location %}. Если SSL-сертификат удаленного сервера может быть подтвержден, ваш `SSL-Session` должен иметь код возврата 0, как показано ниже.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Если, с другой стороны, SSL-сертификат удаленного сервера *не* может быть подтвержден, ваш `SSL-Session` должен иметь ненулевой код возврата:

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

С этой служебной программой можно использовать следующие дополнительные параметры.
- Флаг `-r` позволяет удалить сертификат ЦС.
- Флаг `-h` отображает дополнительные сведения об использовании.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

Эта служебная программа позволяет обновить SSL-сертификат для {% data variables.location.product_location %}. 

Для получения дополнительных сведений об этой команде или дополнительных параметрах используйте флаг `-h`.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

Эта служебная программа позволяет создать закрытый ключ и запрос на подпись сертификата (CSR), которые можно предоставить в коммерческий или частный центр сертификации, чтобы получить действительный сертификат для использования с вашим экземпляром. Дополнительные сведения см. в разделе [Настройка TLS](/enterprise/admin/guides/installation/configuring-tls).

Для получения дополнительных сведений об этой команде или дополнительных параметрах используйте флаг `-h`.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Этот скрипт требуется на некоторых платформах для расширения пользовательского тома. Дополнительные сведения см. в разделе [Увеличение емкости хранилища](/enterprise/admin/guides/installation/increasing-storage-capacity/).

```shell
$ ghe-storage-extend
```

### ghe-version

Эта служебная программа выводит версию, платформу и сборку {% data variables.location.product_location %}.

```shell
$ ghe-version
```

### ghe-webhook-logs

Эта служебная программа возвращает журналы доставки веб-перехватчиков для администраторов, чтобы они могли выполнять проверку и выявлять проблемы.

```shell
ghe-webhook-logs
```

Чтобы показать все неудачные доставки веб-перехватчиков за прошлый день: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

Дата должна быть указана в формате `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` или `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

Чтобы отобразить полные полезные данные перехватчика, результат и все исключения для доставки: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Кластеризация

### ghe-cluster-status

Проверка работоспособности узлов и служб в развертывании кластера {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

Эта служебная программа создает тарболл пакета поддержки, содержащий важные журналы из каждого узла в конфигурации георепликации или кластеризации.

По умолчанию команда создает тарболл в разделе */tmp*, но вы также можете настроить `cat` тарболл в `STDOUT` для простой потоковой передачи по протоколу SSH. Это полезно в том случае, если веб-интерфейс не отвечает, или скачивание пакета поддержки из */setup/support* не работает. Эту команду необходимо использовать, если вы хотите создать *расширенный* пакет, содержащий старые журналы. Эту команду можно также использовать для отправки пакета поддержки кластера непосредственно в поддержку {% data variables.product.prodname_enterprise %}.

Чтобы создать стандартный пакет:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Чтобы создать расширенный пакет:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Чтобы отправить пакет в {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

Чтобы отправить пакет в {% data variables.contact.github_support %} и связать пакет с запросом в службу поддержки:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

Выполнение отработки отказа с активных узлов кластера на пассивные узлы кластера. Дополнительные сведения см. в разделе [Инициирование отработки отказа в кластер реплики](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster).

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

Эта служебная программа позволяет управлять распределенным сервером {% data variables.product.prodname_pages %}.

```shell
ghe-dpages
```

Чтобы отобразить сводку по расположению и работоспособности репозитория:
```shell
ghe-dpages status
```

Чтобы эвакуировать службу хранилища {% data variables.product.prodname_pages %} перед эвакуацией узла кластера:
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

Эта служебная программа позволяет управлять тремя копиями каждого репозитория на распределенных серверах Git.

```shell
ghe-spokes
```

Чтобы отобразить сводку по расположению и работоспособности репозитория:

```shell
ghe-spokes status
```

Чтобы отобразить серверы, на которых хранится репозиторий:

```shell
ghe-spokes route
```

Чтобы эвакуировать службы хранилища в узле кластера:

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

Эта служебная программа позволяет эвакуировать все службы хранилища перед эвакуацией узла кластера.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

Интерфейс типа `top` для текущих операций Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

Эта служебная программа помогает анализировать трафик Git. Она запрашивает файлы данных _Governor_, расположенные в разделе `/data/user/gitmon`. {% data variables.product.company_short %} хранит по одному часу данных на файл в течение двух недель. Дополнительные сведения см. в разделе [Анализ трафика Git с помощью Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) в {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

Эта служебная программа позволяет изменить каталог репозитория и открыть интерактивную оболочку от имени пользователя `git`. Вы можете выполнить проверку или обслуживание репозитория вручную с помощью таких команд, как `git-*` или `git-nw-*`.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

Эта служебная программа вручную перепаковывает сеть репозитория для оптимизации хранилища пакетов. Если у вас есть большой репозиторий, выполнение этой команды поможет уменьшить его общий размер. {% data variables.product.prodname_enterprise %} автоматически выполняет эту команду, пока вы взаимодействуете с сетью репозитория.

Вы можете добавить необязательный аргумент `--prune`, чтобы удалить недоступные объекты Git, на которые нет ссылок из ветви, тега или каких-либо других ссылок. Это особенно удобно, когда нужно немедленно удалить [ранее исключенные конфиденциальные сведения](/enterprise/user/articles/remove-sensitive-data/).

{% warning %}

**Предупреждение**. Прежде чем использовать `--prune` аргумент для удаления недостижимых объектов Git, переведите {% data variables.location.product_location %} в режим обслуживания или убедитесь, что все репозитории в одной сети репозитория заблокированы. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

Эта служебная программа проверяет работоспособность всех служб для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделах [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server) и [Устранение неполадок {% data variables.product.prodname_actions %} для вашего предприятия](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise).

```shell
ghe-actions-check
```

### ghe-actions-precheck

Эта служебная программа проверяет конфигурацию хранилища BLOB-объектов для {% data variables.product.prodname_actions %} в {% data variables.location.product_location %}. Вы можете использовать ее для проверки конфигурации хранилища перед включением {% data variables.product.prodname_actions %} для вашего экземпляра.

Дополнительные сведения о конфигурации {% data variables.product.prodname_actions %} см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

Если ваша система хранения настроена правильно, вы получите следующие выходные данные.

```
All Storage tests passed
```

## Импорт и экспорт

### ghe-migrator

`ghe-migrator` — это инструмент высокой точности, помогающий выполнить миграцию с одного экземпляра GitHub на другой. Вы можете консолидировать экземпляры или перемещать организацию, пользователей, команды и репозитории с GitHub.com в {% data variables.product.prodname_enterprise %}.

Дополнительные сведения см. в наших руководствах по [переносу данных в вашу организации и из нее](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

Исходя из указанного URL-адреса определяет, какой тип системы управления версиями находится на другом конце. Во время импорта вручную это, вероятно, уже известно, но это может быть очень полезно в автоматизированных скриптах.
```shell
git-import-detect
```

### git-import-hg-raw

Эта служебная программа импортирует репозиторий Mercurial в этот репозиторий Git. Дополнительные сведения см. в разделе [Импорт данных из сторонних систем управления версиями](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/).
```shell
git-import-hg-raw
```

### git-import-svn-raw

Эта служебная программа импортирует журнал Subversion и данные файлов в ветвь Git. Это прямая копия дерева, игнорирующая любые различия магистралей или ветвей. Дополнительные сведения см. в разделе [Импорт данных из сторонних систем управления версиями](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/).
```shell
git-import-svn-raw
```

### git-import-tfs-raw

Эта служебная программа выполняет импорт из системы управления версиями Team Foundation (TFVC). Дополнительные сведения см. в разделе [Импорт данных из сторонних систем управления версиями](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/).
```shell
git-import-tfs-raw
```

### git-import-rewrite

Эта служебная программа перезаписывает импортированный репозиторий. Это дает вам возможность переименовать авторов. Кроме того, для Subversion и TFVC создаются ветви Git на основе папок. Дополнительные сведения см. в разделе [Импорт данных из сторонних систем управления версиями](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/).
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## Безопасность

### ghe-find-insecure-git-operations

Эта служебная программа выполняет поиск по журналам экземпляра и определяет операции Git по протоколу SSH, которые используют небезопасные алгоритмы или хэш-функции, включая шифры DSA, RSA-SHA-1, HMAC-SHA-1 и CBC. Выходные данные можно использовать для поддержки перехода каждого клиента на более безопасное SSH-подключение. Дополнительные сведения см. в разделе [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}. {% elsif ghes > 3.5 %} и "[Настройка SSH-подключений к экземпляру](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)".{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## Поддержка

### ghe-diagnostics

Эта служебная программа выполняет различные проверки и собирает сведения о вашей установке, которые можно отправить в службу поддержки, чтобы помочь диагностировать имеющиеся у вас проблемы.

В настоящее время выходные данные этой служебной программы аналогичны скачанным диагностическим сведениям в {% data variables.enterprise.management_console %}, но с течением времени могут появиться дополнительные улучшения, недоступные в пользовательском веб-интерфейсе. Дополнительные сведения см. в разделе [Создание и совместное использование файлов диагностики](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files).

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Эта служебная программа создает тарболл пакета поддержки, содержащий важные журналы из вашего экземпляра.

По умолчанию команда создает тарболл в разделе */tmp*, но вы также можете настроить `cat` тарболл в `STDOUT` для простой потоковой передачи по протоколу SSH. Это полезно в том случае, если веб-интерфейс не отвечает, или скачивание пакета поддержки из */setup/support* не работает. Эту команду необходимо использовать, если вы хотите создать *расширенный* пакет, содержащий старые журналы. Эту команду можно также использовать для отправки пакета поддержки непосредственно в поддержку {% data variables.product.prodname_enterprise %}.

Чтобы создать стандартный пакет:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Чтобы создать расширенный пакет:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Чтобы отправить пакет в {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

Чтобы отправить пакет в {% data variables.contact.github_support %} и связать пакет с запросом в службу поддержки:

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

Эта служебная программа отправляет сведения с вашего устройства в поддержку {% data variables.product.prodname_enterprise %}. Вы можете либо указать локальный файл, либо предоставить поток до 100 МБ данных с помощью `STDIN`. Отправленные данные можно при необходимости связать с запросом в службу поддержки.

Чтобы отправить файл в {% data variables.contact.github_support %} и связать пакет с запросом в службу поддержки:
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

Чтобы отправить данные через `STDIN` и связать их с запросом в службу поддержки:
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

В этом примере `ghe-repl-status -vv` отправляет подробные сведения о состоянии с устройства реплики. Следует заменить `ghe-repl-status -vv` конкретными данными, которые вы хотите передать в `STDIN`, и `Verbose Replication Status` кратким описанием данных. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Обновление {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

Эта служебная программа устанавливает или проверяет пакет обновления. Вы также можете использовать ее для отката выпуска исправлений при сбое или прерывании обновления. Дополнительные сведения см. в разделе [Обновление {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).

Чтобы проверить пакет обновления:
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

Чтобы установить пакет обновления:
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

Эта служебная программа управляет запланированной установкой пакетов обновления. Вы можете отображать, создавать новые или удалять запланированные установки. Необходимо создать расписания с помощью выражений cron. Дополнительные сведения см. в [статье Википедии о Cron](https://en.wikipedia.org/wiki/Cron#Overview).

Служебная `ghe-upgrade-scheduler` программа лучше всего подходит для планирования обновлений с горячим исправлением, которые в большинстве случаев не требуют режима обслуживания или перезагрузки. Эта служебная программа не подходит для полных обновлений пакетов, для которых администратору требуется вручную задать режим обслуживания, перезагрузить экземпляр и отменить режим обслуживания. Дополнительные сведения о различных типах обновлений см. в разделе [Обновление {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package).

Чтобы запланировать новую установку для пакета:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

Чтобы отобразить запланированные установки для пакета:
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

Чтобы удалить запланированные установки для пакета:
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

Эта служебная программа проверяет, доступен ли новый выпуск исправлений для {% data variables.product.prodname_enterprise %}. Если доступен, и в вашем экземпляре достаточно места, программа скачает этот пакет. По умолчанию он сохраняется в */var/lib/ghe-updates*. Затем администратор может [выполнить обновление](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Файл, содержащий состояние скачивания, можно найти в разделе */var/lib/ghe-updates/ghe-update-check.status*.

Чтобы проверить наличие последней версии {% data variables.product.prodname_enterprise %}, используйте параметр `-i`.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## Управление пользователями

### ghe-license-usage

Эта служебная программа экспортирует список пользователей установки в формате JSON. Если ваш экземпляр подключен к {% data variables.product.prodname_ghe_cloud %}, то {% data variables.product.prodname_ghe_server %} использует эти сведения для сообщения сведений о лицензировании в {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе [Подключение корпоративной учетной записи к {% data variables.product.prodname_ghe_cloud %} ](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud).

По умолчанию список пользователей в итоговом JSON-файле шифруется. Используйте флаг `-h` для дополнительных параметров.

```shell
ghe-license-usage
```

### ghe-org-membership-update

Эта служебная программа будет применять параметр видимости членства в организации по умолчанию для всех участников в вашем экземпляре. Дополнительные сведения см. в разделе [Настройка видимости членства в организации](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership). Параметры: `public` или `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

Эта служебная программа экспортирует список всех пользователей в установке в формате CSV. Этот CSV-файл включает адрес электронной почты, тип пользователя (например, администратор, пользователь), сколько репозиториев имеется, сколько ключей SSH, членство в скольких организациях, последний зарегистрированный IP-адрес и т. д. Используйте флаг `-h` для дополнительных параметров.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

Эта служебная программа понижает уровень указанного пользователя от администратора до обычного пользователя. Рекомендуется выполнять это действие в пользовательском веб-интерфейсе, а эта служебная программа предоставляется на тот случай, если служебная программа `ghe-user-promote` будет выполнена с ошибкой, и потребуется снова понизить уровень пользователя из интерфейса командной строки.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

Эта служебная программа повышает уровень указанной учетной записи пользователя до администратора сайта.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

Эта служебная программа блокирует указанного пользователя, запрещая ему вход, отправку или извлечение из ваших репозиториев.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

Эта служебная программа разблокирует указанного пользователя, предоставляя ему доступ ко входу, отправке и извлечению из ваших репозиториев.

```shell
ghe-user-unsuspend USERNAME
```
