---
title: Повышение уровня подписки GitHub
intro: 'Подписку можно обновить для любого типа учетной записи на {% данных variables.location.product_location %} в любое время.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your subscription
ms.openlocfilehash: c3f45c6cdf68b970a442bce2ed07f1f882e758d4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097933'
---
## Сведения о повышении уровня подписки

{% data reusables.accounts.accounts-billed-separately %}

При повышении уровня подписки учетной записи платные услуги будут доступны только для нее, но не для других используемых вами учетных записей.

## Повышение уровня подписки личной учетной записи

Можно повысить уровень личной учетной записи с {% data variables.product.prodname_free_user %} до {% data variables.product.prodname_pro %}, чтобы получить расширенные средства для проверки кода в частных репозиториях вашей личной учетной записи. Повышение уровня личной учетной записи не влияет на организации, которыми вы управляете, или репозитории, принадлежащие этим организациям. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Щелкните **Повысить уровень** рядом с пунктом "Текущий тарифный план".
  ![Кнопка "Обновить"](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. На странице "Сравнение тарифных планов" в разделе "Pro" щелкните **Повысить уровень до Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-billing-info %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Управление подпиской вашей организации

Вы можете повысить уровень подписки своей организации на другой продукт, добавить рабочие места в существующем продукте или перейти с платы за репозиторий на плату за пользователя.

### Повышение уровня подписки организации

Можно повысить уровень подписки организации с {% data variables.product.prodname_free_team %} для организаций до {% data variables.product.prodname_team %}, чтобы получить доступ к расширенным инструментам для совместной работы и управления для команд, или перейти на {% data variables.product.prodname_ghe_cloud %} в своей организации, чтобы получить дополнительные средства управления безопасностью, соответствием требованиям и развертыванием. Повышение уровня подписки организации не влияет на вашу личную учетную запись или репозитории вашей личной учетной записи. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

### Дальнейшие действия для организаций, использующих {% data variables.product.prodname_ghe_cloud %}

Если уровень подписки организации повышен до {% data variables.product.prodname_ghe_cloud %}, можно настроить для вашей организации управление удостоверениями и доступом. Дополнительные сведения см. в разделе [Управление единым входом SAML для организации](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %} в документации {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

Если необходимо использовать корпоративную учетную запись с {% data variables.product.prodname_ghe_cloud %}, обратитесь к {% data variables.contact.contact_enterprise_sales %}. Дополнительные сведения см. в разделе [Сведения о корпоративных учетных записях](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

### Добавление рабочих мест для организации

Если необходимо, чтобы дополнительные пользователи имели доступ к частным репозиториям {% data variables.product.prodname_team %} вашей организации, можно приобрести больше рабочих мест.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

### Переход организации с платы за репозиторий на плату за пользователя

{% data reusables.dotcom_billing.switch-legacy-billing %} Дополнительную информацию см. в разделе [Сведения о плате за пользователя](/articles/about-per-user-pricing).

{% data reusables.organizations.billing-settings %}
5. Откройте раскрывающееся меню **Изменить** справа от названия вашего тарифного плана и выберите **Изменить тарифный план**.
  ![Раскрывающееся меню «Редактирование»](/assets/images/help/billing/per-user-upgrade-button.png)
6. Нажмите **Обновить сейчас** справа от "Расширенные средства для команд".
  ![Кнопка "Обновить сейчас"](/assets/images/help/billing/per-user-upgrade-now-button.png) {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

## Устранение ошибки 500 при повышении уровня подписки

{% data reusables.dotcom_billing.500-error %}

## Дополнительные материалы

- [Продукты {% data variables.product.prodname_dotcom %}](/articles/github-s-products)
- [Как обновление или понижение уровня влияет на процесс выставления счетов?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- [Сведения о выставлении счетов в {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github).
