---
title: Включение Dependabot для предприятия
intro: 'Вы можете разрешить пользователям {% data variables.location.product_location %} находить и устранять уязвимости в зависимостях кода, включив {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} и {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 009b6199e0212c531caaf48b220342853d656248
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135674'
---
## Сведения о {% data variables.product.prodname_dependabot %} для {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} помогает пользователям {% data variables.location.product_location %} находить и устранять уязвимости в зависимостях. {% ifversion ghes %} Вы можете включить {% data variables.product.prodname_dependabot_alerts %} для уведомления пользователей об уязвимых зависимостях и {% data variables.product.prodname_dependabot_updates %} для устранения уязвимостей и обновления зависимостей до последней версии.

{% data variables.product.prodname_dependabot %} — это лишь одна из многих функций, доступных для усиления безопасности цепочки поставок для {% data variables.location.product_location %}. Дополнительные сведения о других функциях см. в разделе [Сведения о безопасности цепочки поставок для вашего предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise).

### Сведения о {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

С помощью {% data variables.product.prodname_dependabot_alerts %} {% data variables.product.prodname_dotcom %} определяет небезопасные зависимости в репозиториях и создает оповещения для {% data variables.location.product_location %}, используя данные из {% data variables.product.prodname_advisory_database %} и службы графа зависимостей.

{% data reusables.repositories.tracks-vulnerabilities %}

После включения {% data variables.product.prodname_dependabot_alerts %} для вашего предприятия данные об уязвимостях синхронизируются из {% data variables.product.prodname_advisory_database %} с вашим экземпляром один раз в час. Синхронизируются только советы, проверенные {% data variables.product.company_short %}. {% data reusables.security-advisory.link-browsing-advisory-db %} 

Вы также можете в любое время синхронизировать данные уязвимостей вручную. Дополнительные сведения см. в разделе [Просмотр данных об уязвимостях для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise).

{% note %}

**Примечание:** При включении {% data variables.product.prodname_dependabot_alerts %} код или сведения о коде из {% data variables.location.product_location %} не передаются в {% data variables.product.prodname_dotcom_the_website %}. 

{% endnote %}

Когда {% data variables.location.product_location %} получает сведения об уязвимости, он определяет репозитории в {% data variables.location.product_location %}, использующие затронутую версию зависимости, и создает {% data variables.product.prodname_dependabot_alerts %}. Вы можете выбрать, следует ли автоматически уведомлять пользователей о новых {% data variables.product.prodname_dependabot_alerts %}. 

Для репозиториев с включенными {% data variables.product.prodname_dependabot_alerts %} сканирование активируется при любой отправке в ветвь по умолчанию, которая содержит файл манифеста или файл блокировки. Кроме того, при добавлении новой записи уязвимости в {% data variables.location.product_location %} {% data variables.product.product_name %} сканирует все существующие репозитории в {% data variables.location.product_location %} и создает оповещения для всех уязвимых репозиториев. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes %}
### Сведения о {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

После включения {% data variables.product.prodname_dependabot_alerts %} можно включить {% data variables.product.prodname_dependabot_updates %}. Если {% data variables.product.prodname_dependabot_updates %} включены для {% data variables.location.product_location %}, пользователи могут настроить репозитории таким образом, чтобы их зависимости обновлялись и сохранялись в безопасности автоматически. 

{% note %} 

**Примечание.** Для {% data variables.product.prodname_dependabot_updates %} в {% data variables.product.product_name %} требуется {% data variables.product.prodname_actions %} с локальными средствами выполнения тестов.

{% endnote %}

По умолчанию средствам выполнения тестов {% data variables.product.prodname_actions %}, используемым {% data variables.product.prodname_dependabot %}, требуется доступ к Интернету, чтобы скачивать обновленные пакеты из вышестоящих диспетчеров пакетов. Для {% data variables.product.prodname_dependabot_updates %} на платформе {% data variables.product.prodname_github_connect %} доступ к Интернету предоставляет средствам выполнения тестов маркер, который позволяет получить доступ к зависимостям и рекомендациям, размещенным на {% data variables.product.prodname_dotcom_the_website %}.

При использовании {% data variables.product.prodname_dependabot_updates %} {% data variables.product.company_short %} автоматически создает запросы на вытягивание для обновления зависимостей двумя способами.

- **{% data variables.product.prodname_dependabot_version_updates %}** : пользователи добавляют в репозиторий файл конфигурации {% data variables.product.prodname_dependabot %}, чтобы разрешить {% data variables.product.prodname_dependabot %} создавать запросы на вытягивание при выпуске новой версии отслеживаемой зависимости. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates).
- **{% data variables.product.prodname_dependabot_security_updates %}** : пользователи переключают параметр репозитория, чтобы разрешить {% data variables.product.prodname_dependabot %} создавать запросы на вытягивание, когда {% data variables.product.prodname_dotcom %} обнаруживает уязвимость в одной из зависимостей графа зависимостей для репозитория. Дополнительные сведения см. в разделах [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) и [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).
{% endif %}

## Включение {% data variables.product.prodname_dependabot_alerts %}

Перед включением {% data variables.product.prodname_dependabot_alerts %}:
- Необходимо включить {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в разделе [Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).{% ifversion ghes %}
- Необходимо включить схему зависимостей. Дополнительные сведения см. в разделе [Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. В разделе "{% data variables.product.prodname_dependabot %}" справа от пункта "Пользователи могут получать оповещения об уязвимостях для зависимостей кода открытым кодом" нажмите раскрывающееся меню и выберите **Включено без уведомлений**. При необходимости, чтобы включить оповещения с уведомлениями, нажмите **Включено с уведомлениями**.

   ![Снимок экрана: раскрывающееся меню для включения сканирования репозиториев на наличие уязвимостей](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. В разделе "Репозитории можно сканировать наличие уязвимостей" нажмите раскрывающееся меню и выберите **Включено без уведомлений**. При необходимости, чтобы включить оповещения с уведомлениями, нажмите **Включено с уведомлениями**.
   ![Раскрывающееся меню для включения сканирования репозиториев на наличие уязвимостей](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **Совет.** В течение первых нескольких дней рекомендуется настроить {% data variables.product.prodname_dependabot_alerts %} без уведомлений, чтобы избежать перегрузки сообщений электронной почты. Через несколько дней можно включить уведомления для получения {% data variables.product.prodname_dependabot_alerts %} в обычном режиме.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Включение {% data variables.product.prodname_dependabot_updates %}

После включения {% data variables.product.prodname_dependabot_alerts %} для предприятия можно включить {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

{% data variables.product.prodname_dependabot_updates %} не поддерживаются в {% data variables.product.product_name %}, если ваше предприятие использует кластеризацию.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. В разделе "Безопасность" выберите **{% data variables.product.prodname_dependabot_security_updates %}** .

   ![Снимок экрана: флажок для включения или отключения {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Нажмите **Перейти к экземпляру**.
1. Настройте выделенные локальные средства выполнения тестов для создания запросов на вытягивание, которые будут обновлять зависимости. Это необходимо, так как рабочие процессы используют определенную метку средства выполнения. Дополнительные сведения см. в разделе [Управление локальными средствами выполнения тестов для {% data variables.product.prodname_dependabot_updates %} на предприятии](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. В разделе "{% data variables.product.prodname_dependabot %}" справа от параметра "Пользователи могут выполнять обновление до неуязвимых зависимостей открытого кода" нажмите **Включить**.

   ![Снимок экрана: раскрывающееся меню для включения обновления уязвимых зависимостей](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

При включении {% data variables.product.prodname_dependabot_alerts %} следует также учитывать настройку {% data variables.product.prodname_actions %} для {% data variables.product.prodname_dependabot_security_updates %}. Эта функция позволяет разработчикам устранять уязвимости в своих зависимостях. Дополнительные сведения см. в разделе [Управление локальными средствами выполнения тестов для {% data variables.product.prodname_dependabot_updates %} на предприятии](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).

Если требуется повышенная безопасность, рекомендуется настроить {% data variables.product.prodname_dependabot %} так, чтобы использовать частные реестры. Дополнительные сведения см. в статье [Управление зашифрованными секретами для {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot).

{% endif %}
