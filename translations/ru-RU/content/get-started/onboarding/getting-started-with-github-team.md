---
title: Начало работы с GitHub Team
intro: 'С помощью {% data variables.product.prodname_team %} группы людей могут совместно работать одновременно в нескольких проектах в учетной записи организации.'
versions:
  fpt: '*'
ms.openlocfilehash: b3a99092f3b701b2763dbefacd5f60867fa18690
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099159'
---
В этом руководстве описаны процессы настройки учетной записи {% data variables.product.prodname_team %} и управления ей в качестве владельца организации.

## Часть 1. Настройка учетной записи для {% данных variables.location.product_location %}
При начале работы с {% data variables.product.prodname_team %} прежде всего необходимо создать личную учетную запись или войти в существующую в {% data variables.product.prodname_dotcom %}, создать организацию и настроить выставление счетов.

### 1. Сведения об организациях
Организации являются общими учетными записями, в которых компании и проекты с открытым кодом могут совместно работать одновременно над несколькими проектами. Владельцы и администраторы могут управлять доступом участников к данным и проектам организации с помощью сложных функций безопасности и администрирования. Дополнительные сведения о функциях организаций см. в разделе [Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations).

### 2. Создание организации и регистрация для {% data variables.product.prodname_team %}
Перед созданием организации необходимо создать личную учетную запись или войти в существующую учетную запись на {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Регистрация для новой учетной записи {% data variables.product.prodname_dotcom %}](/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

После настройки личной учетной записи можно создать организацию и выбрать план. В этот момент можно выбрать подписку {% data variables.product.prodname_team %} для вашей организации. Дополнительные сведения см. в статье "[Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

### 3. Управление выставлением счетов для организации
Вам необходимо отдельно управлять параметрами выставления счетов, способами оплаты и платными функциями и продуктами для каждой личной учетной записи и организации. Вы можете переключаться между параметрами для разных учетных записей с помощью переключателя контекста в разделе параметров. Дополнительные сведения см. в разделе [Переключение между параметрами для различных учетных записей](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts).

На странице параметров выставления счетов вашей организации можно управлять такими параметрами, как способ оплаты, цикл выставления счетов и электронная почта для выставления счетов. На этой странице также можно просматривать информацию о подписке, даты выставления счетов и журнал платежей. Вы также можете просматривать и обновлять параметры хранилища и число минут GitHub Actions. Дополнительные сведения об управлении параметрами выставления счетов см. в разделе [Управление параметрами выставления счетов в {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings).

Доступ или изменение параметров выставления счетов для вашей организации может быть предоставлен только членам организации с ролью *владельца* или *менеджера выставления счетов*. Менеджер выставления счетов — это лицо, которое управляет параметрами выставления счетов для вашей организации и не использует платную лицензию в подписке вашей организации. Дополнительные сведения о добавлении менеджера выставления счетов в организацию см. в разделе [Добавление менеджера выставления счетов в организацию](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).


## Часть 2. Добавление участников и настройка команд
После создания организации можно пригласить участников и задать разрешения и роли. Также можно создавать различные уровни команд и задавать настраиваемые уровни разрешений для репозиториев, досок проектов и приложений вашей организации.

### 1. Управление участниками организации
{% data reusables.getting-started.managing-org-members %}

### 2. Разрешения и роли организации
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Сведения о командах и создание команд
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Управление параметрами команды
{% data reusables.getting-started.managing-team-settings %}

### 5. Предоставление пользователям и командам доступа к репозиториям, доскам проектов и приложениям
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Часть 3. Управление безопасностью для организации
Вы можете помочь повысить уровень безопасности организации, сделав двухфакторную проверку подлинности рекомендуемой или обязательной для участников организации, настроив функции безопасности и просмотрев журналы аудита и интеграции вашей организации.

### 1. Обязательная двухфакторная проверка подлинности
{% data reusables.getting-started.requiring-2fa %}

### 2. Настройка функций безопасности для организации
{% data reusables.getting-started.configuring-security-features %}

### 3. Просмотр журнала аудита и интеграций организации
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Часть 4. Настройка политик уровня организации
### 1. Управление политиками организации
{% data reusables.getting-started.managing-org-policies %}
### 2. Управление изменениями репозитория
{% data reusables.getting-started.managing-repo-changes %}
### 3. Использование файлов работоспособности сообщества и средств модерации на уровне организации
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Часть 5. Настройка и автоматизация работы с {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Использование {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Использование API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 3. Создание действий {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. Публикация пакетов и управление ими в {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Часть 6. Участие в сообществе {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.participating-in-community %}
### 1. Участие в проектах с открытым кодом
{% data reusables.getting-started.open-source-projects %}

### 2. Взаимодействие с {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Ознакомление со сведениями о {% data variables.product.prodname_team %} в {% data variables.product.prodname_docs %}
Вы можете прочитать документацию, в которой описаны доступные функции {% data variables.product.prodname_team %}. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

### 4. Обучение с {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Поддержка сообщества разработчиков решений с открытым кодом
{% data reusables.getting-started.sponsors %}

### 6. Обращение в {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Дополнительные материалы

- [Начало работы с учетной записью GitHub](/get-started/onboarding/getting-started-with-your-github-account)
