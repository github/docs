---
title: Установка приложения в организации
intro: 'Вы можете установить приложения из {% data variables.product.prodname_marketplace %} для использования в пределах организации.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app organization
ms.openlocfilehash: bf64ee38839197262852d07c024c72a0742d0e6e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119483'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

Если вы выберете платный план, вы будете платить за подписку на приложение в текущую дату выставления счетов в вашей организации с использованием существующего метода оплаты организации.

{% data reusables.marketplace.free-trials %}

## Установка {% data variables.product.prodname_github_app %} в вашей организации

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Если приложению требуется доступ к репозиториям, определите, следует ли предоставить приложению доступ ко всем репозиториям или к определенным репозиториям, а затем выберите **Все репозитории** или **Только выбранные репозитории**.
  ![Переключатели с вариантами установки приложения во всех репозиториях или в определенных репозиториях](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## Установка {% data variables.product.prodname_oauth_app %} в организации

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Просмотрите сведения о доступе приложения к вашей личной учетной записи, организациям и данным, а затем щелкните **Авторизовать приложение**.

## Дополнительные материалы

- [Обновление метода оплаты организации](/articles/updating-your-organization-s-payment-method)
- [Установка приложения в личной учетной записи](/articles/installing-an-app-in-your-personal-account)
