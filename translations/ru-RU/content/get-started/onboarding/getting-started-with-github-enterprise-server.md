---
title: Начало работы с GitHub Enterprise Server
intro: 'Начало работы с настройкой данных {% и управлением ими variables.location.product_location %}.'
versions:
  ghes: '*'
ms.openlocfilehash: 6c38bcd0d2fa6d38d19b11192024754286d95b46
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097813'
---
В этом руководстве описывается настройка, настройка и управление данными {% variables.location.product_location %} в качестве администратора предприятия.

{% data variables.product.company_short %} предоставляет два способа развертывания {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.prodname_ghe_cloud %} размещается в {% data variables.product.company_short %}. Вы можете развернуть и разместить{% data variables.product.prodname_ghe_server %} в собственном центре обработки данных или в поддерживаемом поставщике облачных служб.

Дополнительные сведения о {% data variables.product.product_name %} см. в разделе "[Сведения о {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server).

## Часть 1. Установка {% data variables.product.product_name %}
Чтобы приступить к работе с {% data variables.product.product_name %}, необходимо создать учетную запись предприятия, установить экземпляр и выполнить начальную настройку, а также настроить экземпляр и выставление счетов в консоли управления. 
### 1. Создание учетной записи предприятия
Перед установкой {% data variables.product.product_name %} можно создать учетную запись предприятия на веб-сайте {% data variables.product.prodname_dotcom_the_website %}, обратившись в [отдел продаж {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Учетная запись предприятия на веб-сайте {% data variables.product.prodname_dotcom_the_website %} может использоваться для выставления счетов и для совместного использования функций с {% data variables.product.prodname_dotcom_the_website %} через {% data variables.product.prodname_github_connect %}.  Дополнительные сведения см. в разделе [Сведения об учетных записях предприятия](/admin/overview/about-enterprise-accounts).
### 2. Установка {% data variables.product.product_name %}
Чтобы приступить к работе с {% data variables.product.product_name %}, необходимо установить устройство на выбранной платформе виртуализации. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance).

### 3. Использование консоли управления
Консоль управления используется для пошагового выполнения начального процесса настройки при первом запуске {% данных variables.location.product_location %}. Консоль управления также можно использовать для управления параметрами экземпляров, такими как лицензия, домен, проверка подлинности и TLS. Дополнительные сведения см. в статье "[Доступ к консоли управления](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

### 4. Настройка {% данных variables.location.product_location %}
Помимо консоли управления, вы можете использовать панель мониторинга администрирования сайта и административную оболочку (SSH) для управления {% данных variables.location.product_location %}. Например, можно настроить приложения и ограничения скорости, просмотреть отчеты и использовать служебные программы командной строки. Дополнительные сведения см. в разделе [Настройка предприятия](/admin/configuration/configuring-your-enterprise).

Вы можете использовать параметры сети по умолчанию, используемые {% data variables.product.product_name %} с помощью протокола DHCP или настроить параметры сети с помощью консоли виртуальной машины. Вы также можете настроить прокси-сервер или правила брандмауэра. Дополнительные сведения см. в разделе [Настройка параметров сети](/admin/configuration/configuring-network-settings).

### 5. Настройка высокого уровня доступности
Вы можете настроить {% данных variables.location.product_location %} для обеспечения высокой доступности, чтобы свести к минимуму влияние сбоев оборудования и сбоев сети. Дополнительные сведения см. в разделе [Настройка высокого уровня доступности](/admin/enterprise-management/configuring-high-availability).

### 6. Настройка промежуточного экземпляра
Промежуточный экземпляр можно настроить для тестирования изменений, планирования аварийного восстановления и проверки обновлений перед их применением к {% данных variables.location.product_location %}.  Дополнительные сведения см. в разделе [Настройка промежуточного экземпляра](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

### 7. Назначение резервных копий и аварийного восстановления
Для защиты рабочих данных можно настроить автоматические резервные копии {% данных variables.location.product_location %} с {% данных variables.product.prodname_enterprise_backup_utilities %}. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

### 8. Управление выставлением счетов для предприятия
Счета за все организации и экземпляры {% data variables.product.product_name %}, подключенные к вашей учетной записи предприятия, объединяются в единый счет за все платные службы {% data variables.product.prodname_dotcom %}.com. Владельцы предприятия и менеджеры по выставлению счетов могут получать доступ к параметрам выставления счетов для учетных записей предприятия и управлять ими. Дополнительные сведения см. в разделе [Управление выставлением счетов для вашего предприятия](/admin/overview/managing-billing-for-your-enterprise).

## Часть 2. Организация команды и управление ей
Как владелец предприятия или администратор вы можете управлять параметрами на уровне пользователя, репозитория, команды и организации. Вы можете управлять участниками предприятия, создавать организации и управлять ими, задавать политики для управления репозиториями, а также создавать команды и управлять ими.

### 1. Управление членами {% данных variables.location.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Создание организаций
{% data reusables.getting-started.creating-organizations %}

### 3. Добавление участников в организации
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Создание команд
{% data reusables.getting-started.creating-teams %}

### 5. Настройка уровней разрешений организации и репозитория
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Применение политик управления репозиториями
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Часть 3. Обеспечение безопасности при создании
Чтобы повысить безопасность {% данных variables.location.product_location %}, можно настроить проверку подлинности для участников предприятия, использовать средства и ведение журнала аудита для обеспечения соответствия требованиям, настроить функции безопасности и анализа для ваших организаций и при необходимости включить {% данных variables.product.prodname_GH_advanced_security %}.
### 1. Проверка подлинности участников предприятия
Вы можете использовать встроенный метод проверки подлинности {% данных variables.product.product_name %}или выбрать внешний поставщик проверки подлинности, например CAS, LDAP или SAML, для интеграции существующих учетных записей и централизованного управления доступом пользователей к {% данных variables.location.product_location %}. Дополнительную информацию см. в разделе [Сведения о проверке подлинности для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

Также можно включить обязательную двухфакторную проверку подлинности для каждой из ваших организаций. Дополнительные сведения см. в разделе [Настройка обязательной двухфакторной проверки подлинности для организации](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization).

### 2. Обеспечение соответствия требованиям
Вы можете реализовать необходимые проверки состояния и проверки фиксаций, чтобы обеспечить соблюдение стандартов соответствия вашей организации и автоматизировать рабочие процессы обеспечения соответствия. Вы также можете использовать журнал аудита для вашей организации для проверки действий, выполняемых командой. Дополнительные сведения см. в разделе [Применение политики с помощью перехватчиков предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks) и [Сведения о журнале аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).

{% ifversion ghes %}
### 3. Настройка функций безопасности для организаций
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. Включение функций {% data variables.product.prodname_GH_advanced_security %}
Вы можете обновить лицензию {% data variables.product.product_name %}, чтобы включить {% data variables.product.prodname_GH_advanced_security %}. В результате вы получите дополнительные функции, которые помогают пользователям находить и устранять проблемы безопасности в коде, такие как сканирование кода и секретов. Дополнительные сведения см. в разделе [{% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).
{% endif %}

## Часть 4. Настройка и автоматизация работы предприятия в {% data variables.product.prodname_dotcom %}
Вы можете настроить и автоматизировать работу в организациях на вашем предприятии с помощью {% data variables.product.prodname_dotcom %} и {% data variables.product.prodname_oauth_apps %}, API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} и {% data variables.product.prodname_pages %}.

### 1. Создание приложений {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}
Вы можете создать интеграции с API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, например, {% data variables.product.prodname_github_apps %} или {% data variables.product.prodname_oauth_apps %}, чтобы дополнить и расширить рабочие процессы в организациях на предприятии. Дополнительные сведения см. в разделе [Сведения о приложениях](/developers/apps/getting-started-with-apps/about-apps).
### 2. Использование API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Создание действий {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Дополнительные сведения о включении и настройке {% data variables.product.prodname_actions %} в {% data variables.product.product_name %} см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

### 4. Публикация пакетов и управление ими в {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

Дополнительные сведения о включении и настройке {% данных variables.product.prodname_registry %} для {% данных variables.location.product_location %}см. в разделе "[Начало работы с {% данных variables.product.prodname_registry %} для вашего предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% endif %}

### 5. Использование {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Часть 5. Подключение к другим ресурсам {% data variables.product.prodname_dotcom %}
Вы можете использовать {% data variables.product.prodname_github_connect %} для общего доступа к ресурсам.

Если вы являетесь владельцем экземпляра {% data variables.product.product_name %} и владельцем учетной записи организации или предприятия {% data variables.product.prodname_ghe_cloud %}, то вы можете включить {% data variables.product.prodname_github_connect %}. {% данных variables.product.prodname_github_connect %} позволяет совместно использовать определенные рабочие процессы и функции между {% данных variables.location.product_location %} и {% данных variables.product.prodname_ghe_cloud %}, такими как единый поиск и вклад. Дополнительные сведения см. в разделе [Подключение {% data variables.product.prodname_ghe_server %} к {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud).

## Часть 6. Использование ресурсов для обучения и поддержки {% data variables.product.prodname_dotcom %}
Ваши корпоративные участники могут узнать больше о Git и {% данных variables.product.prodname_dotcom %} с помощью наших учебных ресурсов, и вы можете получить поддержку, необходимую при настройке {% данных variables.location.product_location %} с помощью {% данных variables.product.prodname_dotcom %} корпоративной поддержки.

### 1. Знакомство с информацией о {% data variables.product.product_name %} в {% data variables.product.prodname_docs %}

Вы можете прочитать документацию, в которой описаны доступные функции {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

### 2. Обучение с {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Работа с {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
