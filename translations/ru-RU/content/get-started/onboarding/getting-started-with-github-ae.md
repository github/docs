---
title: Начало работы с GitHub AE
intro: 'Начало работы с настройкой {% data variables.product.product_name %} для {% data variables.location.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180064'
---
В этом руководстве описана настройка, настройка параметров {% data variables.location.product_location %} в {% data variables.product.product_name %} в качестве владельца предприятия. Дополнительные сведения о {% data variables.product.product_name %} см. в разделе "[Сведения о {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

## Часть 1. Настройка {% data variables.product.product_name %}
Чтобы приступить к работе с {% data variables.product.product_name %}, можно создать корпоративную учетную запись, инициализировать {% data variables.product.product_name %}, настроить список разрешенных IP-адресов, настроить проверку подлинности и подготовку пользователей, а также управлять выставлением счетов за {% data variables.location.product_location %}.

### 1. Создание учетной записи предприятия {% data variables.product.product_name %}
Сначала необходимо приобрести {% data variables.product.product_name %}. Для получения дополнительных сведений обратитесь к [команде по продажам {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Инициализация {% data variables.product.product_name %}
После того как {% data variables.product.company_short %} создаст учетную запись владельца для {% data variables.location.product_location %} в {% data variables.product.product_name %}, вы получите сообщение электронной почты для входа и завершения инициализации. Во время инициализации вы как владелец предприятия назовете {% data variables.location.product_location %}, настроите единый вход SAML, создадите политики для всех организаций в {% data variables.location.product_location %} и настроите контактную службу поддержки для участников предприятия. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae).

### 3. Ограничение сетевого трафика
Вы можете настроить список разрешений для определенных IP-адресов, чтобы ограничить доступ к ресурсам, принадлежащим организациям в вашей учетной записи предприятия. Дополнительные сведения см. в разделе [Ограничение сетевого трафика для предприятия с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

### 4. Управление удостоверениями и доступом для {% data variables.location.product_location %}
Вы можете централизованно управлять доступом к {% data variables.location.product_location %} в {% data variables.product.product_name %} из поставщика удостоверений (IdP) с помощью единого входа SAML для проверки подлинности пользователей и System for Cross-domain Identity Management (SCIM) для подготовки пользователей. Настроив подготовку, вы сможете назначать или отменять назначение пользователей для приложения из поставщика удостоверений, создавая или отключая учетные записи пользователей в организации. Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise).

### 5. Управление выставлением счетов для {% data variables.location.product_location %}
Владельцы подписки на {% data variables.location.product_location %} на {% data variables.product.product_name %} могут просматривать сведения о выставлении счетов за {% data variables.product.product_name %} в портал Azure. Дополнительные сведения см. в разделе [Управление выставлением счетов для вашего предприятия](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).

## Часть 2. Организация участников предприятия и управление ими
Как владелец предприятия для {% data variables.product.product_name %}, вы можете управлять параметрами на уровне пользователя, репозитория, команды и организации. Вы можете управлять участниками {% data variables.location.product_location %}, создавать организации и управлять ими, устанавливать политики для управления репозиториями, а также создавать команды и управлять ими.

### 1. Управление членами {% data variables.location.product_location %}
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
Чтобы повысить безопасность {% data variables.location.product_location %}, можно отслеживать {% data variables.location.product_location %} и настраивать функции безопасности и анализа для своих организаций.

### 1. Мониторинг {% data variables.location.product_location %}
Вы можете отслеживать {% data variables.location.product_location %} с помощью панели мониторинга действий и ведения журнала аудита. Дополнительные сведения см. в разделе [Мониторинг действий в организации](/admin/monitoring-activity-in-your-enterprise).

### 2. Настройка функций безопасности для организаций
{% data reusables.getting-started.configuring-security-features %}

## Часть 4. Настройка и автоматизация работы с {% data variables.location.product_location %}
Вы можете настроить и автоматизировать работу в организациях в {% data variables.location.product_location %} с помощью API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} и {% data variables.product.prodname_pages %}.

### 1. Использование API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 2. Создание действий {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Дополнительные сведения о включении и настройке {% data variables.product.prodname_actions %} для {% data variables.product.product_name %} см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).

### 3. Использование {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Часть 5. Использование ресурсов для обучения и поддержки {% data variables.product.prodname_dotcom %}
Участники предприятия смогут узнать больше о Git и {% data variables.product.prodname_dotcom %} с помощью наших ресурсов для обучения, а вы можете получить необходимую поддержку с помощью {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Знакомство с информацией о {% data variables.product.product_name %} в {% data variables.product.prodname_docs %}
Вы можете прочитать документацию, в которой описаны доступные функции {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

### 2. Обучение с {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Работа с {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
