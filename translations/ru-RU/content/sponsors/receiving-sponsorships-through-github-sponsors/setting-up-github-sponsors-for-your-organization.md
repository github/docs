---
title: Настройка GitHub Sponsors для вашей организации
intro: 'Ваша организация может присоединиться к {% data variables.product.prodname_sponsors %}, чтобы получать оплату за вашу работу.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
shortTitle: Set up for organization
ms.openlocfilehash: 96f452628732eae2f208e03fb09c0401e02b16ec
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098098'
---
## Вступление в {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Когда ваша организация получит приглашение вступить в {% data variables.product.prodname_sponsors %}, выполните следующие инструкции, чтобы стать спонсируемой организацией.

Чтобы вступить в {% data variables.product.prodname_sponsors %} как индивидуальный участник, не в рамках организации, см. [Настройка {% data variables.product.prodname_sponsors %} для личной учетной записи](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account).

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. Справа от организации нажмите кнопку **Присоединиться к списку ожидания**.
{% данных reusables.sponsors.contact-info %} {% данных reusables.sponsors.payout-choice %} ![ Снимок экрана: выбор между банковским счетом и финансовым узлом](/assets/images/help/sponsors/org-waitlist-payout-options.png)

{% данных reusables.sponsors.accept-legal-terms %}

## Заполнение профиля спонсируемой организации

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Создание уровней спонсорства

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Отправка банковских сведений

В качестве спонсируемой организации вы получите выплаты на банковский счет в поддерживаемом регионе или через финансовый узел.

{% данных reusables.sponsors.bank-info-fiscal-host-reminder %} Дополнительные сведения о настройке и использовании финансовых узлов см. в статье "[Использование финансового узла для получения выплат спонсоров GitHub](/sponsors/receiving-sponsorships-through-github-sponsors/using-a-fiscal-host-to-receive-github-sponsors-payouts)".

Если вы решили получать выплаты на банковский счет, ваш банковский счет может быть выделенным банковским счетом для вашей организации или личным банковским счетом. Вы можете получить бизнес-банковский счет через такие услуги, как [Stripe Atlas](https://stripe.com/atlas). Пользователь, который настраивает {% data variables.product.prodname_sponsors %} для организации, должен находиться в том же поддерживаемом регионе. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## Отправка налоговых сведений

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Включение двухфакторной проверки подлинности в учетной записи {% data variables.product.prodname_dotcom %}

Прежде чем ваша организация станет спонсируемой организацией, необходимо включить 2FA для вашей учетной записи на {% данных variables.location.product_location %}. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication).

## Отправка приложения на {% data variables.product.prodname_dotcom %} для утверждения

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## Дополнительные материалы

- "[Сведения о {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)"
- [Получение спонсорской поддержки посредством {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors)
