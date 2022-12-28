---
title: Обзор системы
intro: 'Подробные сведения о внутреннем устройстве, функциях и безопасности системы {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
ms.openlocfilehash: 138a54bcdf23dc540ef8dc753da1252d647496a3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098284'
---
## Сведения о {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server).

## Архитектура хранилища

Для {% data variables.product.product_name %} требуется два тома хранилища: один должен быть подключен к пути *корневой файловой системы* (`/`), а другой — к пути *пользовательской файловой системы* (`/data/user`). Эта архитектура упрощает процедуры обновления, отката и восстановления, отделяя выполняемую программную среду от сохраняемых данных приложения.

Корневая файловая система включена в распределенный образ компьютера. Она содержит базовую операционную систему и среду приложений {% data variables.product.product_name %}. Корневая файловая система должна рассматриваться как временная. Все данные в корневой файловой системе будут заменены при обновлении до будущих выпусков {% data variables.product.product_name %}.

Корневой том хранилища разбивается на два раздела одинакового размера. Один из разделов будет подключен в качестве корневой файловой системы (`/`). Другой раздел подключается в качестве `/mnt/upgrade` только во время обновлений и откатов обновлений для упрощения таких откатов, если это необходимо. Например, если выделен корневой том объемом 200 ГБ, для корневой файловой системы будет выделено 100 ГБ, а для обновлений и откатов будет зарезервировано 100 ГБ.

Корневая файловая система содержит файлы, которые хранят указанные ниже сведения. Этот список не является исчерпывающим.

- Пользовательские сертификаты центра сертификации (ЦС) (в `/usr/local/share/ca-certificates*`)
- Пользовательские конфигурации сети
- Пользовательские конфигурации брандмауэра
- Состояние репликации

Файловая система пользователя содержит файлы, которые хранят указанные ниже конфигурации и данные. Этот список не является исчерпывающим.

- Репозитории Git
- Базы данных
- Индексы поиска
- Содержимое, опубликованное на сайтах {% data variables.product.prodname_pages %}
- Крупные файлы из {% data variables.large_files.product_name_long %}
- Среда перехватчиков предварительного получения

## Технологии развертывания

Вы можете развернуть {% data variables.product.product_name %} в различных топологиях, таких как пара высокой доступности. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies).

## Хранение данных и избыточность центров обработки данных

{% warning %}

**Внимание!** Прежде чем использовать {% data variables.product.product_name %} в рабочей среде, настоятельно рекомендуем настроить резервные копии и план аварийного восстановления.

{% endwarning %}

{% data variables.product.product_name %} включает в себя поддержку оперативного и добавочного резервного копирования за счет {% data variables.product.prodname_enterprise_backup_utilities %}. Вы можете создавать добавочные моментальные снимки через безопасный сетевой канал (административный порт SSH) на больших расстояниях для получения автономного или географически распределенного хранилища. Моментальные снимки можно по сети восстановить на новом подготовленном экземпляре во время процедуры восстановления в случае аварии в основном центре обработки данных.

Кроме сетевого резервного копирования, поддерживаются моментальные снимки дисков VMware и AWS (EBS) для пользовательских томов хранилища, когда экземпляр находится в автономном режиме или в режиме обслуживания. Обычные моментальные снимки томов можно использовать в качестве недорогой и несложной альтернативы для сетевых резервных копий с помощью {% data variables.product.prodname_enterprise_backup_utilities %}, если требования к уровню обслуживания допускают регулярное автономное обслуживание.

Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

## Безопасность

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} также включает в себя дополнительные функции безопасности.

- [Операционная система, программное обеспечение и исправления](#operating-system-software-and-patches)
- [Безопасность сети](#network-security)
- [Безопасность приложения](#application-security)
- [Доступ к внешним службам и услугам поддержки](#external-services-and-support-access)
- [Зашифрованное взаимодействие](#encrypted-communication)
- [Пользователи и разрешения на доступ](#users-and-access-permissions)
- [Аутентификация](#authentication)
- [Ведение журналов аудита и доступа](#audit-and-access-logging)

### Операционная система, программное обеспечение и исправления

{% data variables.product.product_name %} запускает настроенную операционную систему Linux, содержащую только необходимые приложения и службы. {% data variables.product.company_short %} распределяет исправления для основной операционной системы экземпляра в рамках стандартного цикла выпуска продукта. Исправления устраняют проблемы с функциональными возможностями, стабильностью и некритичные проблемы с безопасностью для приложений {% data variables.product.product_name %}. При необходимости {% data variables.product.company_short %} также предоставляет критические исправления для системы безопасности за пределами обычного цикла выпуска.

{% data variables.product.product_name %} предоставляется в виде устройства, и многие пакеты операционной системы изменяются по сравнению с обычным дистрибутивом Debian. По этой причине мы не поддерживаем изменение базовой операционной системы (включая обновления операционной системы), что соответствует [соглашению о лицензиях и поддержке {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license) (раздел 11.3 "Исключения").

В настоящее время основой устройства {% data variables.product.product_name %} является Debian 9 (Stretch), а поддержка предоставляется в рамках программы долгосрочной поддержки Debian Long Term Support (LTS).  До окончания периода Debian LTS для Stretch планируется перейти на новую базовую операционную систему.

Регулярные обновления исправлений публикуются на странице [выпусков](https://enterprise.github.com/releases) {% data variables.product.product_name %}, а на странице [заметок о выпуске](/admin/release-notes) доступны дополнительные сведения. Эти исправления обычно содержат восходящие исправления безопасности для поставщиков и проектов, прошедшие тестирование и контроль качества в нашей команде инженеров. Может возникнуть небольшая задержка с момента выпуска восходящего обновления до момента его тестирования и упаковки в восходящий выпуск исправления {% data variables.product.product_name %}.

### Безопасность сети

Внутренний брандмауэр {% data variables.product.product_name %} ограничивает сетевой доступ к службам экземпляра. По сети доступны только службы, необходимые для работы устройства. Дополнительную информацию см. в разделе [Сетевые порты](/admin/configuration/configuring-network-settings/network-ports).

### Защита приложений

Команда специалистов по безопасности приложений {% data variables.product.company_short %} посвящает все свое время оценке уязвимостей, тестам на проникновение и проверке кода для продуктов {% data variables.product.company_short %}, включая {% data variables.product.product_name %}. {% data variables.product.company_short %} также заключает контракты с внешними фирмами, занимающимися вопросами безопасности, для проведения оценки безопасности на определенный момент времени для продуктов {% data variables.product.company_short %}.

### Доступ к внешним службам и услугам поддержки

{% data variables.product.product_name %} может работать без исходящего доступа из вашей сети к внешним службам. При необходимости можно включить интеграцию с внешними службами для доставки электронной почты, внешнего мониторинга и пересылки журналов. Дополнительные сведения см. в разделах [Настройка электронной почты для получения уведомлений](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications), [Настройка внешнего мониторинга](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring) и [Пересылка журналов](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).

Вы можете вручную собирать данные об устранении неполадок и отправлять их в {% data variables.contact.github_support %}. Дополнительные сведения см. в разделе [Предоставление данных для {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support).

### Зашифрованное взаимодействие

{% data variables.product.company_short %} включает в {% data variables.product.product_name %} возможность работы за корпоративным брандмауэром. Чтобы защитить обмен данными по проводной сети, рекомендуется включить протокол TLS. {% data variables.product.product_name %} поддерживает для трафика HTTPS коммерческие сертификаты TLS разрядностью 2048 бит и выше. Дополнительные сведения см. в разделе [Настройка TLS](/admin/configuration/configuring-network-settings/configuring-tls).

По умолчанию экземпляр также предоставляет доступ по протоколу Secure Shell (SSH) как для обращения к репозиторию с помощью Git, так и для административных целей. Дополнительные сведения см. в разделах [Сведения о протоколе SSH](/authentication/connecting-to-github-with-ssh/about-ssh) и [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% ifversion ghes > 3.3 %}

Если настроить проверку подлинности SAML для {% данных variables.location.product_location %}, можно включить зашифрованные утверждения между экземпляром и поставщиком удостоверений SAML. Дополнительные сведения см. в разделе [Использование SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions).

{% endif %}

### Пользователи и разрешения на доступ

Существует три типа учетных записей {% data variables.product.product_name %}.

- Учетная запись пользователя `admin` в Linux контролирует доступ к базовой операционной системе, включая прямой доступ к файловой системе и базе данных. Небольшая группа доверенных администраторов должна иметь доступ к этой учетной записи, к которой они могут обратиться по протоколу SSH. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
- Учетные записи пользователей в веб-приложении экземпляра имеют полный доступ к собственным данным и любым данным, явно предоставленным другими пользователями или организациями.
- Администраторы сайта в веб-приложении экземпляра — это учетные записи пользователей, которые могут управлять высокоуровневыми параметрами веб-приложения и экземпляра, параметрами учетной записи пользователя и организации и данными репозитория.

Дополнительные сведения о разрешениях пользователя {% data variables.product.product_name %} см. в статье [Разрешения на доступ в {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github).

### Аутентификация

{% data variables.product.product_name %} предоставляет четыре метода проверки подлинности.

- Проверка подлинности на основе открытого ключа SSH обеспечивает как доступ к репозиторию с использованием Git, так и доступ к административной оболочке. Дополнительные сведения см. в разделах [Сведения о протоколе SSH](/authentication/connecting-to-github-with-ssh/about-ssh) и [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
- Проверка подлинности на основе имени пользователя и пароля с использованием файлов cookie HTTP обеспечивает доступ к веб-приложениям и управление сеансами с использованием необязательной двухфакторной проверки подлинности (2FA). Дополнительные сведения см. в статье [Использование встроенной проверки подлинности](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication).
- Внешняя проверка подлинности LDAP, SAML или CAS с использованием службы LDAP, поставщика удостоверений (IdP) SAML или другой совместимой службы обеспечивает доступ к веб-приложению. Дополнительные сведения см. в разделе [Управление IAM для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise).
- OAuth и {% данных variables.product.pat_generic %}s предоставляют доступ к данным репозитория Git и API для внешних клиентов и служб. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

### Ведение журналов аудита и доступа

{% data variables.product.product_name %} хранит традиционные журналы операционной системы и приложений. Приложение также записывает подробные журналы аудита и безопасности, которые {% data variables.product.product_name %}хранит на постоянной основе. Вы можете в режиме реального времени пересылать оба типа журналов в несколько назначений через протокол `syslog-ng`. Дополнительные сведения см. в статье [Сведения о журнале аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) и [Пересылка журналов](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).

Журналы доступа и аудита содержат указанные ниже сведения.

#### Журналы доступа

- Полные журналы веб-сервера для доступа с помощью браузера и API
- Полные журналы для доступа к данным репозитория по протоколам Git, HTTPS и SSH
- Журналы административного доступа по протоколам HTTPS и SSH

#### Журналы аудита

- Имена входа пользователей, сброс паролей, запросы двухфакторной проверки подлинности, изменения параметров электронной почты, а также изменения авторизованных приложений и API
- Действия администратора сайта, такие как разблокировка учетных записей пользователя и репозиториев
- События отправки репозитория, предоставление доступа, передача и переименование
- Изменение членства в организации, включая создание и уничтожение команд

## Зависимости с открытым кодом для {% data variables.product.product_name %}

Полный список зависимостей приведен в описании версии экземпляра {% data variables.product.product_name %}, а также в лицензии каждого проекта по адресу `http(s)://HOSTNAME/site/credits`.

Архивы TAR с полным списком зависимостей и связанных метаданных доступны в экземпляре.

- Для зависимостей, общих для всех платформ, — по адресу `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Для зависимостей, относящихся к конкретной платформе, — по адресу `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Кроме того, архивы TAR с полным списком зависимостей и метаданных доступны по адресу `https://enterprise.github.com/releases/<version>/download.html`.

## Дополнительные материалы

- [Настройка пробной версии {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)
- [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)
