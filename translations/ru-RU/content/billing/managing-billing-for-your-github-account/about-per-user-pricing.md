---
title: Сведения об оплате за отдельных пользователей
intro: '{% ifversion fpt or ghec %}Для организаций{% ifversion ghec %} и предприятий{% endif %} ваш {% else %}ваш {% endif %}счет начинается с количества выбранных вами лицензированных рабочих мест.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106672'
---
## Сведения об оплате за отдельных пользователей

{% ifversion fpt %}

Новые организации в {% data variables.product.prodname_dotcom_the_website %} могут создавать общедоступные проекты с открытым кодом с помощью {% data variables.product.prodname_free_team %} или переходить на платный продукт с оплатой за отдельных пользователей. Дополнительные сведения см. в статьях [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) и [Обновление подписки {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription).

Организации, использующие платную подписку до 11 мая 2016 г., могут применять существующий план для каждого репозитория или перейти на оплату за отдельных пользователей. {% data variables.product.company_short %} отправит вам уведомление за двенадцать месяцев до внесения обязательных изменений в подписку. Дополнительные сведения о переключении подписки см. в статье [Обновление подписки {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription).

{% else %}

Основой вашего счета является количество стандартных лицензированных рабочих мест, которые вы выбираете для своей{% ifversion ghec %} организации или{% endif %} предприятия.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Чтобы один и тот же пользователь не использовал несколько лицензии для нескольких корпоративных развертываний, можно синхронизировать использование лицензий между средами {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе [Сведения о лицензиях для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise).

В дополнение к лицензированным рабочим местам ваш счет может включать другие расходы, такие как {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в разделе [О выставлении счетов для вашего предприятия](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
{% endif %}

## Пользователи, использующие лицензию

{% ifversion fpt %}

Счета за {% data variables.product.company_short %} для следующих пользователей:

- Члены организации, включая владельцев
- Внешние участники совместной работы в частных репозиториях, принадлежащих вашей организации, за исключением вилок
- Любой пользователь с ожидающим приглашением стать внешним сотрудником совместной работы в частных или внутренних репозиториях, принадлежащих вашей организации, за исключением вилок
- Неактивные пользователи

{% note %}

**Примечания.** 
- {% data variables.product.company_short %} подсчитывает каждого стороннего участника совместной работы один раз для выставления счетов, даже если учетная запись пользователя имеет доступ к нескольким репозиториям, принадлежащим вашей организации.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} не выставляет счета для следующих пользователей:

- Менеджеры по выставлению счетов
- Любой пользователь с ожидающей отправкой приглашения стать менеджером по выставлению счетов
- Любой пользователь, которому отправлено приглашение стать внешним участником совместной работы в общедоступном репозитории, принадлежащем вашей организации

{% else %}

Счета за {% data variables.product.company_short %} для следующих учетных записей за каждое развертывание {% data variables.product.prodname_enterprise %}.

### Учетные записи, использующие лицензию на {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.company_short %} счета за каждую из следующих учетных записей в {% data variables.product.prodname_ghe_cloud %}:

- Владельцы предприятия, которые являются членом или владельцем по крайней мере одной организации на предприятии
- Члены организации, включая владельцев
- Внешние участники совместной работы в частных или внутренних репозиториях, принадлежащих вашей организации, за исключением вилок
- Неактивные пользователи

Если ваше предприятие не использует {% data variables.product.prodname_emus %}, вам также будет выставлен счет за каждую из следующих учетных записей:

- Любой пользователь, которому отправлено приглашение стать владельцем или участником организации
- Любой пользователь с ожидающим приглашением стать внешним сотрудником совместной работы в частных или внутренних репозиториях, принадлежащих вашей организации, за исключением вилок

{% note %}

**Примечания.** 
  - {% data variables.product.company_short %} подсчитывает каждого участника или стороннего участника совместной работы один раз для выставления счетов, даже если учетная запись пользователя имеет членство в нескольких организациях на предприятии или доступ к нескольким репозиториям, принадлежащим вашей организации.
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} не выставляет счет ни за одну из следующих учетных записей:

- Приостановленные {% data variables.enterprise.prodname_managed_users_caps %}
- Владельцы предприятия, которые являются членом или владельцем хотя бы одной организации в предприятии
- Корпоративные менеджеры по выставлению счетов
- Менеджеры по выставлению счетов для отдельных организаций
- Любой пользователь с ожидающей отправкой приглашения стать менеджером по выставлению счетов
- Любой пользователь, которому отправлено приглашение стать внешним участником совместной работы в общедоступном репозитории, принадлежащем вашей организации

### Учетные записи, использующие лицензию на {% data variables.product.prodname_ghe_server %}

Каждая учетная запись пользователя в {% data variables.product.prodname_ghe_server %} занимает определенное место.

Приостановленные пользователи не учитываются при расчете количества лицензированных пользователей, потребляющих рабочие места. Дополнительные сведения см. в разделе [Приостановка и отмена добавления пользователей]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}в документации по {% data variables.product.prodname_ghe_server %}. {% else %}". {% endif %}

Неактивные пользователи занимают лицензию на рабочее место. Таким образом, вы можете приостановить работу неактивных пользователей, чтобы освободить пользовательские лицензии. Дополнительные сведения см. в разделе [Управление неактивными пользователями]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}в документации по {% data variables.product.prodname_ghe_server %}. {% else %}". {% endif %}

{% endif %}

## Сведения об изменениях в подписке

{% ifversion fpt %}

Вы можете в любое время изменить свою подписку {% data variables.product.prodname_dotcom %}.

### Сведения об изменениях для организаций в планах с оплатой за отдельных пользователей

{% endif %}

Вы можете добавить дополнительные лицензионные рабочие места в свою {% ifversion fpt or ghec %} организацию{% endif %}{% ifversion ghec %} или {% endif %}{% ifversion ghec or ghes %} предприятие{% endif %} в любое время. Если вы платите за большее количество рабочих мест, чем используется, вы также можете уменьшить количество рабочих мест.{% ifversion fpt %} Дополнительные сведения см. в разделе [Обновление подписки на {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) и [Переход на использование более ранней версии подписки {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription).

Если у вас есть вопросы о подписке, обратитесь к {% data variables.contact.contact_support %}.

Для дальнейшей поддержки возможностей совместной работы команды можно выполнить обновление до {% data variables.product.prodname_ghe_cloud %}, куда включены такие возможности, как единый вход SAML и расширенный аудит. {% data reusables.enterprise.link-to-ghec-trial %}

Дополнительные сведения об оплате за отдельных пользователей для {% data variables.product.prodname_ghe_cloud %} см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Если вы используете корпоративную учетную запись в {% data variables.product.prodname_dotcom_the_website %} и у вас есть вопросы об изменениях в подписке, обратитесь к {% data variables.contact.contact_enterprise_sales %}.

{% endif %} {% ifversion ghec %}

Если вы используете отдельную организацию в {% data variables.product.prodname_ghe_cloud %}, можно обновить версию или перейти на использование более ранней версии подписки. Дополнительные сведения см. в статьях [Обновление подписки {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) и [Переход на использование более ранней версии подписки {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription). Если у вас есть вопросы о подписке, обратитесь к {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Сведения об изменениях для организаций в планах с оплатой за отдельные репозитории

Вы можете обновить устаревшие платные планы или перейти на использование более ранних их версий в параметрах выставления счетов вашей организации. При обновлении до плана с большим количеством частных репозиториев {% data variables.product.company_short %} немедленно перемещает вашу учетную запись в новый план и выставляет счет за разницу в цене, пропорциональную количеству дней, оставшихся в периоде выставления счетов.

При переходе на использование устаревшего платного плана с меньшим количеством частных репозиториев новый план вступит в силу на следующую дату выставления счетов. Если у вас больше частных репозиториев, чем в новом плане, ваши частные репозитории будут заблокированы после того, как новый план вступит в силу. Чтобы уменьшить количество частных репозиториев, можно сделать некоторые из них общедоступными или локально клонировать частные репозитории и удалить копии в {% data variables.product.prodname_dotcom %}.

{% endif %}

## Дополнительные материалы

{%- ifversion not fpt %}
- [О корпоративных учетных записях](/admin/overview/about-enterprise-accounts)
- "[Роли в предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" {%- endif %}
- [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [Добавление внешних участников совместной работы в репозитории в вашей организации](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization).
