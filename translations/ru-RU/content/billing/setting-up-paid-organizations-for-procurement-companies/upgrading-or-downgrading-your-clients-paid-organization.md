---
title: Повышение или понижение уровня платной организации клиента
intro: Менеджеры по выставлению счетов могут в любое время повысить или понизить уровень платной организации клиента.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087752'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Совет**.
- Перед повышением уровня организации клиента можно [просмотреть или обновить метод оплаты в файле для организации](/articles/adding-or-editing-a-payment-method).
- Эти инструкции предназначены для повышения и понижения уровня организаций в *подписке с оплатой по количеству мест*. Если клиент платит за {% data variables.product.product_name %} по *устаревшему плану с оплатой за каждый репозиторий*, можно повысить или [понизить](/articles/downgrading-your-github-subscription) уровень устаревшего плана либо [перевести организацию на оплату по количеству мест](/articles/upgrading-your-github-subscription).

{% endtip %}

## Обновление количества платных мест в организации

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

После добавления мест с вас будет списана сумма, пропорциональная количеству добавляемых мест и времени, оставшемуся в цикле выставления счетов, с использованием метода оплаты, указанного в файле организации.

## Перевод организации с оплаты по количеству мест на бесплатный уровень

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
