---
title: Понижение уровня подписки GitHub
intro: 'Вы можете в любое время понизить уровень подписки для учетной записи любого типа на {% data variables.location.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: e302fb715fc2937c7ed056b813b073a66a7cc1fa
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163787'
---
## Понижение уровня подписки {% data variables.product.product_name %}

При понижении уровня личной учетной записи или подписки организации изменения в ценах и функциях учетной записи вступают в силу в следующую дату выставления счетов. Изменения в платной личной учетной записи или подписке организации не влияют на подписки или платежи за другие платные функции {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Как обновление или понижение уровня влияет на процесс выставления счетов?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process).

## Понижение уровня подписки личной учетной записи

При понижении уровня личной учетной записи с {% data variables.product.prodname_pro %} на {% data variables.product.prodname_free_user %} учетная запись потеряет доступ к расширенным средствам проверки кода в частных репозиториях. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. В разделе "Текущий план" откройте раскрывающийся список **Изменить** и выберите **Понизить уровень до бесплатного**.
  ![Кнопка "Понизить уровень до бесплатного"](/assets/images/help/billing/downgrade-to-free.png)
5. Ознакомьтесь со сведениями о функциях, к которым ваша личная учетная запись потеряет доступ в дату следующего выставления счета, а затем нажмите кнопку **Понятно. Продолжить понижение уровня**.
  ![Кнопка "Продолжить понижение уровня"](/assets/images/help/billing/continue-with-downgrade.png)

Если вы опубликовали сайт {% data variables.product.prodname_pages %} в частном репозитории и добавили личный домен, удалите или обновите записи DNS перед понижением уровня с {% data variables.product.prodname_pro %} на {% data variables.product.prodname_free_user %}, чтобы избежать риска перехвата домена. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).

## Понижение уровня подписки организации

{% data reusables.dotcom_billing.org-billing-perms %}

При понижении уровня организации с {% data variables.product.prodname_team %} на {% data variables.product.prodname_free_team %} учетная запись потеряет доступ к расширенным средствам совместной работы и управления для команд.

При понижении уровня организации с {% data variables.product.prodname_ghe_cloud %} на {% data variables.product.prodname_team %} или {% data variables.product.prodname_free_team %} учетная запись потеряет доступ к расширенным элементам управления безопасностью, соответствием и развертыванием. {% data reusables.gated-features.more-info %}



{% note %}

**Примечания.** 
  - Если ваша организация принадлежит корпоративной учетной записи, управление выставлением счетов на уровне организации невозможно. Чтобы перейти на более раннюю версию, сначала необходимо удалить организацию из корпоративной учетной записи. Дополнительные сведения см. в разделе [Удаление организаций из предприятия](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise).
  - Если вы сейчас пробно используете {% data variables.product.prodname_ghe_cloud %} и не приобрели {% data variables.product.prodname_enterprise %} до окончания пробной версии, ваша организация будет автоматически понижена до {% data variables.product.prodname_free_team %} или {% data variables.product.prodname_team %}. Дополнительные сведения см. в разделе [Настройка пробной версии {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial).

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. В разделе "Текущий план" откройте раскрывающийся список **Изменить** и выберите желаемый вариант понижения версии.
  ![Кнопка "Понизить уровень"](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Понижение уровня подписки организации с устаревшими ценами на репозитории

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Дополнительные сведения см. в разделе [Переход с расценок за репозитории на расценки за пользователей для организации](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing).

{% data reusables.organizations.billing-settings %}
5. В разделе "Подписки" откройте раскрывающийся список "Изменить" и выберите **Изменить план**.
    ![Раскрывающийся список "Изменить план"](/assets/images/help/billing/edit-plan-dropdown.png)
1. В разделе "Выставление счетов/планы" нажмите кнопку **Понизить уровень** рядом с планом, который вы хотите изменить.
    ![Кнопка «Понизить уровень»](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Введите причину понижения уровня учетной записи и нажмите кнопку **Понизить уровень плана**.
    ![Текстовое поле для описания причины понижения уровня и кнопка "Понизить уровень"](/assets/images/help/billing/downgrade-plan-button.png)

## Удаление платных рабочих мест из организации

Чтобы уменьшить количество платных рабочих мест, которые использует организация, можно удалить участников из организации или преобразовать участников во внешних участников совместной работы и предоставить им доступ только к общедоступным репозиториям. Дополнительные сведения см. в разделе:
- [Удаление участника из организации](/articles/removing-a-member-from-your-organization)
- [Преобразование участника организации во внешнего участника совместной работы](/articles/converting-an-organization-member-to-an-outside-collaborator)
- [Управление доступом пользователя к репозиторию организации](/articles/managing-an-individual-s-access-to-an-organization-repository)

{% data reusables.organizations.billing-settings %}
1. В разделе "Текущий план" откройте раскрывающийся список **Изменить** и выберите **Удалить рабочие места**.
  ![Раскрывающийся список "Удалить рабочие места"](/assets/images/help/billing/remove-seats-dropdown.png)
1. В разделе "Удалить рабочие места" выберите количество мест, на которое вы хотите перейти.
  ![Пункт "Удалить рабочие места"](/assets/images/help/billing/remove-seats-amount.png)
1. Просмотрите сведения о новом платеже в следующую дату выставления счетов, а затем нажмите кнопку **Удалить рабочие места**.
  ![Кнопка "Удалить рабочие места"](/assets/images/help/billing/remove-seats-button.png)

## Дополнительные материалы

- [Продукты {% data variables.product.prodname_dotcom %}](/articles/github-s-products)
- [Как обновление или понижение уровня влияет на процесс выставления счетов?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- [Сведения о выставлении счетов в {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github).
- [Сведения о расценках за пользователей](/articles/about-per-user-pricing)
