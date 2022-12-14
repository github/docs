---
title: Настройка спонсоров GitHub для вашей учетной записи пользователя
intro: You can become a sponsored developer by joining {% data variables.product.prodname_sponsors %}, completing your sponsored developer profile, creating sponsorship tiers, submitting your bank and tax information, and enabling two-factor authentication for your account on {% data variables.product.product_location %}.
redirect_from:
- /articles/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- User account
- Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: ec5b04d98410b94d5f5f12f55989b6165e5e3b20
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145140209"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>Присоединение к {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

О том, как присоединиться к {% data variables.product.prodname_sponsors %} в роли организации, см. в разделе [Настройка {% data variables.product.prodname_sponsors %} для организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Если вы являетесь владельцем организации, у вас есть несколько соответствующих учетных записей. Щелкните **Просмотреть соответствующие учетные записи**, а затем в списке учетных записей найдите свою личную учетную запись.
3. Щелкните **Присоединиться к списку ожидания**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

Если у вас есть банковский счет в поддерживаемом регионе, {% data variables.product.prodname_dotcom %} выполнит проверку приложения в течение двух недель.

## <a name="completing-your-sponsored-developer-profile"></a>Завершение спонсируемого профиля разработчика

После того как {% data variables.product.prodname_dotcom %} выполнит проверку приложения, вы можете настроить спонсируемый профиль разработчика, чтобы пользователи могли начать оказывать вам спонсорскую поддержку.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>Создание уровней спонсорства

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>Отправка банковских сведений

Если вы проживаете в поддерживаемом регионе, следуйте этим инструкциям, чтобы отправить банковские сведения путем создания учетной записи Stripe Connect. Ваш регион проживания и регион вашего банковского счета должны совпадать. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>Отправка налоговых сведений

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>Включение двухфакторной проверки подлинности в учетной записи {% data variables.product.prodname_dotcom %}

Чтобы вы могли стать спонсируемым разработчиком, необходимо включить двухфакторную проверку подлинности для вашей учетной записи в {% data variables.product.product_location %}. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication).

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>Отправка приложения в {% data variables.product.prodname_dotcom %} для утверждения

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Щелкните **Утверждение запроса**.
  ![Кнопка "Запросить утверждение"](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
