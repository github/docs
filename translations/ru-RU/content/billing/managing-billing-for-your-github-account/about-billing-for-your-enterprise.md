---
title: Сведения о выставлении счетов для предприятия
intro: 'Вы можете просмотреть сведения о выставлении счетов для учетной записи {% ifversion ghec or ghes %} своего предприятия в {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: d6485ba4fe23d84088428e31773e546912c75f68
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098272'
---
## Сведения о выставлении счетов для предприятия

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Один раз в день {% data variables.product.prodname_dotcom %} подсчитает количество пользователей с лицензией для вашего предприятия. {% data variables.product.company_short %} выставляет счета за каждого лицензированного пользователя независимо от того, вошел ли он в {% data variables.product.prodname_ghe_managed %} в тот день.

Для коммерческих регионов цена для пользователя в день составляет 1,2580645161 долл. США. За месяц (31 день) стоимость для каждого пользователя составляет 39 долл. США. Для месяцев с меньшим количеством дней стоимость ниже. Каждый месяц выставления счетов начинается в определенное время в первый день календарного месяца.

При добавлении лицензированного пользователя в середине месяца этот пользователь будет включен только в те дни, на которые у него есть лицензия. При удалении лицензированного пользователя он остается до конца этого месяца. Поэтому при добавлении пользователя в середине месяца и последующем его удалении в том же месяце этот пользователь будет включен со дня добавления пользователя до конца месяца. За повторное добавление пользователя в течение того же месяца, когда он был удален, не снимается дополнительная плата.

Например, ниже приведена стоимость для пользователей с лицензиями на разные даты.

Пользователь | Даты лицензии | Количество дней | Стоимость
---- | ------------ | ------- | -----
@octocat | 1–31 января | 31 | 39 долл. США
@robocat | 1–28 февраля | 28 | 35,23 долл. США
@devtocat  | 15–31 января | 17 | 21,39 долл. США
@doctocat | 1–15 января | 31 | 39 долл. США
@prodocat | 7–15 января | 25 | 31,45 долл. США
@monalisa | 1–7 января,<br>15–31 января | 31 | 39 долл. США

{% data variables.product.prodname_ghe_managed %} имеет не менее 500 пользователей на экземпляр. {% data variables.product.company_short %} выставляет счета за не менее чем 500 пользователей на экземпляр, даже если в этот день имеется менее 500 пользователей с лицензией.

Текущие сведения о потреблении можно просмотреть на [портале учетной записи Azure](https://portal.azure.com).

{% elsif ghec or ghes %}

{% ifversion ghec %}

При использовании корпоративной учетной записи для {% данных variables.location.product_location %}учетная запись предприятия является центральной точкой для всех выставления счетов в организации, включая организации, принадлежащие вашей организации.

Если вы используете {% data variables.product.product_name %} с отдельной организацией и у вас еще нет корпоративной учетной записи, создайте корпоративную учетную запись и добавьте свою организацию. Дополнительные сведения см. в статье [Создание учетной записи разработчика](/admin/overview/creating-an-enterprise-account).

{% data variables.product.company_short %} ежемесячно выставляет счета за общее количество лицензированных рабочих мест для вашей корпоративной учетной записи, а также за любые дополнительные службы, используемые с {% data variables.product.prodname_ghe_cloud %}, например, за минуты использования {% data variables.product.prodname_actions %}. Если вы используете отдельную организацию в {% data variables.product.product_name %}, счета будут выставляться за потребление всех ресурсов на уровне организации. Дополнительные сведения о счетах за лицензии см. в разделе [Сведения о ценах на пользователя](/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% elsif ghes %}

Каждый пользователь на {% данных variables.location.product_location %} использует место в вашей лицензии. {% data variables.product.company_short %} ежемесячно выставляет счета за общее количество рабочих мест, используемых в вашей лицензии.

{% endif %}

{% ifversion ghec %}Для клиентов {% data variables.product.prodname_ghe_cloud %} с корпоративными учетными записями счета {% data variables.product.company_short %} выставляются через корпоративную учетную запись на сайте {% data variables.product.prodname_dotcom_the_website %}. Для платных клиентов, каждый{% elsif ghes %}Для платных клиентов {% data variables.product.prodname_enterprise %} счета {% data variables.product.company_short %} выставляются через корпоративную учетную запись на сайте {% data variables.product.prodname_dotcom_the_website %}. Каждый{% endif %} счет включает единый счет за все платные услуги {% data variables.product.prodname_dotcom_the_website %} и все существующие экземпляры {% data variables.product.prodname_ghe_server %}. Дополнительные сведения о лицензировании{% ifversion ghes %}, потреблении, потреблении счетов{% elsif ghec %} и о счетах {% endif %} см. следующие{% ifversion ghes %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{%- ifversion ghes %}
- [Сведения о расценках за пользователей](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing) {%- endif %}
- [Просмотр подписки и сведений о потреблении для учетной записи предприятия]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)
- [Управление счетами для предприятия]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)

Администраторы корпоративной учетной записи в {% data variables.product.prodname_dotcom_the_website %} имеют доступ к выставлению счетов предприятия и могут управлять ими. Дополнительные сведения см. в статье [Роли предприятия]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}.{% elsif ghes %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Дополнительные сведения см. в разделе [Подключение подписки Azure к предприятию](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## Дополнительные материалы

- [О корпоративных учетных записях](/admin/overview/about-enterprise-accounts)
