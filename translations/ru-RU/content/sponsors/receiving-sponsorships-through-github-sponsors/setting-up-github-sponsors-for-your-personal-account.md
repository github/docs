---
title: Настройка спонсоров GitHub для личной учетной записи
intro: 'Вы можете стать спонсором разработчика, присоединившись к {% данным variables.product.prodname_sponsors %}, завершив профиль спонсорского разработчика, создав уровни спонсорства, отправив банковские и налоговые данные и включив двухфакторную проверку подлинности для вашей учетной записи на {% данных variables.location.product_location %}.'
redirect_from:
  - /articles/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
  - /sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - User account
  - Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: 2c09631a8c023a49e3889497b90fe746f7730454
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098631'
---
## Присоединение к {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

О том, как присоединиться к {% data variables.product.prodname_sponsors %} в роли организации, см. в разделе [Настройка {% data variables.product.prodname_sponsors %} для организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Если вы являетесь владельцем организации, у вас есть несколько соответствующих учетных записей. Нажмите кнопку **"Получить спонсором**", а затем в списке учетных записей найдите личную учетную запись.
  ![Снимок экрана: кнопка "Получить спонсора"](/assets/images/help/sponsors/get-sponsored.png)
3. Щелкните **Присоединиться к списку ожидания**.
{% данных reusables.sponsors.contact-info %} {% данных reusables.sponsors.payout-choice %} ![ Снимок экрана: выбор между банковским счетом и финансовым узлом](/assets/images/help/sponsors/user-waitlist-payout-options.png)

{% данных reusables.sponsors.accept-legal-terms %}

Если у вас есть банковский счет в поддерживаемом регионе, {% data variables.product.prodname_dotcom %} выполнит проверку приложения в течение двух недель.

## Завершение спонсируемого профиля разработчика

После того как {% data variables.product.prodname_dotcom %} выполнит проверку приложения, вы можете настроить спонсируемый профиль разработчика, чтобы пользователи могли начать оказывать вам спонсорскую поддержку.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Создание уровней спонсорства

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Отправка банковских сведений

Как спонсируемый пользователь вы получите выплаты на банковский счет в поддерживаемом регионе или через финансовый узел.

{% данных reusables.sponsors.bank-info-fiscal-host-reminder %} Дополнительные сведения о настройке и использовании финансовых узлов см. в разделе "[Использование финансового узла для получения выплат спонсоров GitHub](/sponsors/receiving-sponsorships-through-github-sponsors/using-a-fiscal-host-to-receive-github-sponsors-payouts)".

Если вы решите получать выплаты на банковский счет, ваш регион проживания и регион вашего банковского счета должны совпадать. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## Отправка налоговых сведений

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Включение двухфакторной проверки подлинности в учетной записи {% data variables.product.prodname_dotcom %}

Прежде чем стать спонсором разработчика, необходимо включить 2FA для вашей учетной записи на {% данных variables.location.product_location %}. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication).

## Отправка приложения в {% data variables.product.prodname_dotcom %} для утверждения

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Щелкните **Утверждение запроса**.
  ![Кнопка "Запросить утверждение"](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
