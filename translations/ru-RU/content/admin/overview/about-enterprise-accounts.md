---
title: Сведения об учетных записях предприятия
intro: 'С помощью {% data variables.product.product_name %} можно использовать корпоративную учетную запись для {% ifversion ghec %}обеспечения совместной работы между организациями, предоставляя{% elsif ghes or ghae %}предоставив{% endif %} администраторам возможность централизованного отслеживания и управления.'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127630'
---
## Сведения об учетных записях предприятия в {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Ваша корпоративная учетная запись в {% data variables.product.prodname_dotcom_the_website %} позволяет управлять несколькими организациями. Корпоративная учетная запись должна иметь дескриптор, как любая учетная запись организации или пользователя в {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

Корпоративная учетная запись в {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} позволяет управлять организациями{% ifversion ghes %} на{% elsif ghae %}, принадлежащей {% endif %} вашему экземпляру {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% elsif ghae %}enterprise{% endif %}.

{% endif %}

Организации — это общие учетные записи, в которых члены корпорации могут совместно работать над несколькими проектами одновременно. Владельцы организации могут управлять доступом к данным и проектам организации с применением сложных функций безопасности и администрирования. Дополнительные сведения см. в статье "[Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

{% ifversion ghec %} В параметрах предприятия владельцы предприятия могут приглашать существующие организации присоединиться к вашей корпоративной учетной записи, передавать организации между корпоративными учетными записями или создавать новые организации. Дополнительные сведения см. в разделе [Добавление организаций на предприятии](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).
{% endif %}

Ваша корпоративная учетная запись позволяет управлять политиками для всех организаций, принадлежащих предприятию, и принудительно применять их. {% data reusables.enterprise.about-policies %} Дополнительные сведения см. в разделе [Сведения о корпоративных политиках](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies).

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} Дополнительные сведения см. в статье "[Создание корпоративной учетной записи](/admin/overview/creating-an-enterprise-account)".

{% endif %}

## Сведения об администрировании корпоративной учетной записи

{% ifversion ghes or ghae %}

Корпоративная учетная запись в {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}экземпляре {% data variables.product.prodname_ghe_server %} {% endif %}, позволяет администраторам просматривать членство в корпорации {% ifversion remove-enterprise-members %} и управлять им{% endif %}{% ifversion enterprise-owner-join-org %}, управлять собственным членством в организациях, принадлежащих корпорации{% endif %} и управлять следующими параметрами для {% ifversion ghes %}экземпляра {% data variables.product.prodname_ghe_server %} {% elsif ghae %}корпорацией в {% data variables.product.prodname_ghe_managed %}{% endif %}:

{% ifversion ghes %}
- потребление лицензий;{% endif %}
- средства обеспечения безопасности ({% ifversion ghae %}единый вход, списки разрешенных IP-адресов, {% endif %}центры сертификации SSH, двухфакторная проверка подлинности);
- корпоративные политики для организаций, принадлежащих корпоративной учетной записи.

{% endif %}

{% ifversion ghes %}

### Сведения об администрировании корпоративной учетной записи в {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %} При пробной эксплуатации или после покупки {% data variables.product.prodname_enterprise %}вы можете{% ifversion ghes %}вы должны{% endif %} создать корпоративную учетную запись для {% data variables.product.prodname_ghe_cloud %} на сайте {% data variables.product.prodname_dotcom_the_website %}. На сайте {% data variables.product.prodname_dotcom_the_website %} администраторы корпоративной учетной записи могут просматривать членство в организации {% ifversion remove-enterprise-members %} и управлять{% endif %} им{% ifversion enterprise-owner-join-org %}, управлять собственным членством в организациях, принадлежащих корпорации{% endif %} и управлять следующими элементами для корпоративной учетной записи{% ifversion ghes %} на сайте {% data variables.product.prodname_dotcom_the_website %}{% endif %}:

- выставление счетов и использование (службы на сайте {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, пользовательские лицензии);
- средствами обеспечения безопасности (единый вход, списки разрешенных IP-адресов, центры сертификации SSH, двухфакторная проверка подлинности);
- корпоративные политики для организаций, принадлежащих корпоративной учетной записи.

Если вы используете одновременно {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_ghe_server %}, вы также можете управлять следующими данными для {% data variables.product.prodname_ghe_server %} из корпоративной учетной записи на сайте {% data variables.product.prodname_dotcom_the_website %}:

- выставление счетов и использование для экземпляров {% data variables.product.prodname_ghe_server %};
- запросы и поддержка совместного использования пакетов через {% data variables.contact.enterprise_support %}.

Вы также можете подключить корпоративную учетную запись в {% data variables.location.product_location_enterprise %} к корпоративной учетной записи на {% data variables.product.prodname_dotcom_the_website %}, чтобы просмотреть сведения об использовании лицензий для подписки {% data variables.product.prodname_enterprise %} из {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье {% ifversion ghec %}[Синхронизация потребления лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) в документации по {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}[Синхронизация потребления лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).{% endif %}

Дополнительные сведения о различиях между {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_ghe_server %} см. в статье [Продукты {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products). {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## Сведения о выставлении счетов для корпоративной учетной записи

В счет за корпоративную учетную запись включаются ежемесячные затраты для каждого участника корпорации. Этот счет включает {% ifversion ghec %}любые платные лицензии в организациях за пределами вашей корпоративной учетной записи, подписки на приложения в {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}дополнительные платные службы для вашего предприятия{% ifversion ghec %}, например пакеты данных для {% data variables.large_files.product_name_long %}, {% endif %} и {% endif %} сведения о потреблении для {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Дополнительные сведения о выставлении счетов за подписку {% data variables.product.prodname_ghe_cloud %} см. в статьях [Просмотр подписки и потребления для корпоративной учетной записи](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) и [Сведения о выставлении счетов для корпорации](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Дополнительные сведения о выставлении счетов за {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, см. в статье [Сведения о выставлении счетов для корпорации](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} предоставляет два варианта развертывания. Помимо {% data variables.product.prodname_ghe_cloud %}, вы можете использовать {% data variables.product.prodname_ghe_server %} для размещения работ по разработке для вашей корпорации в центре обработки данных или в любом поддерживаемом поставщике облачных служб. {% endif %} владельцы корпорации на сайте {% data variables.product.prodname_dotcom_the_website %} могут использовать корпоративную учетную запись для управления оплатой и лицензированием для экземпляров {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в статьях [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise) и [Управление лицензиями для сайта {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise).

{% endif %}

## Дополнительные материалы

- Раздел [Корпоративные учетные записи](/graphql/guides/managing-enterprise-accounts) в документации API GraphQL
