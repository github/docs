---
title: Отмена приложения GitHub Marketplace
intro: 'Вы можете в любое время отменить и удалить приложение {% data variables.product.prodname_marketplace %} из учетной записи.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/canceling-a-github-marketplace-app
  - /articles/canceling-an-app-for-your-personal-account
  - /articles/canceling-an-app-for-your-organization
  - /articles/canceling-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/canceling-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Cancellation
  - Marketplace
  - Organizations
  - Trials
  - User account
shortTitle: Cancel a Marketplace app
ms.openlocfilehash: 9295f8ab1c5d9f4f3bef027dd6def79fcaa51df4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088040'
---
При отмене приложения подписка остается активной до конца текущего периода выставления счетов. Отмена вступает в силу в следующую дату выставления счета. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_marketplace %}](/articles/about-billing-for-github-marketplace).

Если вы отмените бесплатную пробную версию приложения с платным планом, действие подписки завершится немедленно и вы потеряете доступ к приложению. Если вы не отмените бесплатную пробную версию в течение пробного периода, в конце него с вас будет списана сумма за выбранный план с использованием способа оплаты, заданного для вашей учетной записи. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_marketplace %}](/articles/about-billing-for-github-marketplace).

{% data reusables.marketplace.downgrade-marketplace-only %}

## Отмена приложения в личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## Отмена бесплатной пробной версии приложения в личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}

## Отмена приложения в организации

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## Отмена бесплатной пробной версии приложения в организации

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}
