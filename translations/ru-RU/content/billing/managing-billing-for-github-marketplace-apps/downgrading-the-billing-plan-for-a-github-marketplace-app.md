---
title: Понижение уровня плана выставления счетов для приложения GitHub Marketplace
intro: 'Если вы хотите использовать другой план выставления счетов, вы можете в любое время перейти на более раннюю версию приложения {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/downgrading-an-app-for-your-personal-account
  - /articles/downgrading-an-app-for-your-organization
  - /articles/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/downgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Downgrades
  - Marketplace
  - Organizations
  - User account
shortTitle: Downgrade billing plan
ms.openlocfilehash: c50995729c266cbfdac13b81da4f0ffaa0b4ff85
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088034'
---
При понижении уровня приложения подписка остается активной до конца текущего периода выставления счетов. Понижения уровня вступает в силу в следующую дату выставления счетов. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_marketplace %}](/articles/about-billing-for-github-marketplace).

{% data reusables.marketplace.downgrade-marketplace-only %}

## Понижение уровня приложения в личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## Понижение уровня приложения в организации

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## Дополнительные материалы

- [Отмена приложения {% data variables.product.prodname_marketplace %}](/articles/canceling-a-github-marketplace-app/)
