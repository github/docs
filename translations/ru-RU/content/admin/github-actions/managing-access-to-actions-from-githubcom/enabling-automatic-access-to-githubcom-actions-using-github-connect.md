---
title: Включение автоматического доступа к действиям GitHub.com с помощью GitHub Connect
intro: 'Чтобы разрешить {% data variables.product.prodname_actions %} в вашем предприятии использовать действия из {% data variables.product.prodname_dotcom_the_website %}, можно подключить корпоративный экземпляр к {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107264'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения об автоматическом доступе к действиям {% data variables.product.prodname_dotcom_the_website %}

По умолчанию рабочие процессы {% data variables.product.prodname_actions %} в {% data variables.product.product_name %} не могут использовать действия непосредственно с сайта {% data variables.product.prodname_dotcom_the_website %} или из [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions). Чтобы сделать все действия с сайта {% data variables.product.prodname_dotcom_the_website %} доступными в вашем экземпляре предприятия, можно использовать {% data variables.product.prodname_github_connect %} для интеграции {% data variables.product.product_name %} с {% data variables.product.prodname_ghe_cloud %}. 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

Или если требуется более строгий контроль над действиями, которые разрешены в организации, можно вручную скачать и синхронизировать действия на экземпляр предприятия с помощью средства `actions-sync`. Дополнительные сведения см. в статье "[Синхронизация действий вручную с сайта {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Сведения о разрешении действий с помощью {% data variables.product.prodname_github_connect %}

{% data reusables.actions.github-connect-resolution %}

Если пользователь уже создал организацию и репозиторий на предприятии, имена которых соответствуют именам организации и репозитория на сайте {% data variables.product.prodname_dotcom_the_website %}, то вместо репозитория на сайте {% data variables.product.prodname_dotcom_the_website %} будет использоваться репозиторий на предприятии. {% ifversion ghae %} Злоумышленник может воспользоваться этим поведением для запуска кода в рамках рабочего процесса. {% else %} Дополнительные сведения см. в разделе "[Автоматическое прекращение использования пространств имен для действий, доступных для {% данных variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".
{% endif %}

## Включение автоматического доступа ко всем действиям {% data variables.product.prodname_dotcom_the_website %}

Прежде чем включить доступ ко всем действиям с сайта {% data variables.product.prodname_dotcom_the_website %} для вашего предприятия, необходимо{% ifversion ghes %}:
- Настройте {% данных variables.location.product_location %} для использования {% данных variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Начало работы с {% data variables.product.prodname_actions %} для GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- включить{% else %}включить{% endif %} {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в статье "[Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. В разделе "Пользователи могут использовать действия с GitHub.com в выполнениях рабочих процессов" в раскрывающемся меню выберите **Включено**.
  ![Раскрывающееся меню для действий с сайта GitHub.com в выполнениях рабочих процессах](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## Автоматическое прекращение использования пространств имен для действий, доступных на сайте {% data variables.product.prodname_dotcom_the_website %}

При включении {% данных variables.product.prodname_github_connect %}пользователи не видят изменений в поведении существующих рабочих процессов, так как {% данных variables.product.prodname_actions %} выполняет поиск {% данных variables.location.product_location %} для каждого действия, прежде чем вернуться к {% данных variables.product.prodname_dotcom_the_website%}. Это гарантирует, что любым пользовательским версиям действий, созданным предприятием, отдается предпочтение относительно их аналогов на сайте {% data variables.product.prodname_dotcom_the_website%}.

Автоматическое прекращение использования пространств имен для действий, доступных на {% данных variables.product.prodname_dotcom_the_website %}, блокирует возможность атаки злоумышленника в середине со стороны злоумышленника с доступом к {% данных variables.location.product_location %}. При первом использовании действия на {% данных variables.product.prodname_dotcom_the_website %} это пространство имен прекращается в {% данных variables.location.product_location %}. Любой пользователь, создающий организацию и хранилище на вашем предприятии, имена которых совпадают с именами организации и хранилища на сайте {% data variables.product.prodname_dotcom_the_website %}, будет заблокирован. Это гарантирует, что при выполнении рабочего процесса всегда выполняется запланированное действие.

После использования действия из {% данных variables.product.prodname_dotcom_the_website %}, если вы хотите создать действие в {% данных variables.location.product_location %} с тем же именем, сначала необходимо сделать пространство имен для этой организации и репозитория доступными.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. В левой боковой панели в разделе **Администратор сайта** щелкните **Выведенные из эксплуатации пространства имен**.
3. Найдите нужное пространство имен в {% данных variables.location.product_location %} и нажмите кнопку **"Отменить повтор".**
   ![Отмена вывода пространства имен из эксплуатации](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Перейдите к соответствующей организации и создайте репозиторий.

   {% tip %}

   **Совет.** При отмене вывода пространства имен из эксплуатации всегда создавайте новый репозиторий с таким же именем как можно быстрее. Если перед созданием локального репозитория рабочий процесс вызывает связанное действие на сайте {% data variables.product.prodname_dotcom_the_website %}, пространство имен будет выведено из эксплуатации снова. Для действий, используемых в рабочих процессах, которые выполняются часто, может оказаться, что поддержка пространства имен прекращена раньше, чем вы смогли бы создать локальное хранилище. В этом случае можно временно отключить соответствующие рабочие процессы, пока не будет создан новый репозиторий.

   {% endtip %}
