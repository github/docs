---
title: Обработка новых покупок и бесплатных пробных версий
intro: 'Когда клиент приобретает платный план, бесплатную пробную версию или бесплатную версию приложения {% data variables.product.prodname_marketplace %}, вы получите веб-перехватчик [`marketplace_purchase` события](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) с действием `purchased`, которое запускает поток приобретения.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089626'
---
{% warning %}

Если вы предлагаете {% data variables.product.prodname_github_app %} в {% data variables.product.prodname_marketplace %}, приложение должно идентифицировать пользователей в соответствии с процессом авторизации OAuth. Для поддержки этого процесса настраивать отдельное {% data variables.product.prodname_oauth_app %} не нужно. Дополнительные сведения см. в разделе [Определение и авторизация пользователей для {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

{% endwarning %}

## Шаг 1. Начальная покупка и событие веб-перехватчика

Прежде чем приобретать ваше приложение {% data variables.product.prodname_marketplace %}, клиент выбирает [план профиля](/marketplace/selling-your-app/github-marketplace-pricing-plans/). Он также выбирает, должно ли приложение приобретаться из личной учетной записи или учетной записи организации.

Чтобы завершить покупку, клиент нажимает кнопку **Оформить заказ и начать установку**.

Затем {% data variables.product.product_name %} отправляет в ваше приложение веб-перехватчик [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) с действием `purchased`.

Чтобы определить, какой план приобрел клиент и когда начинается выставление счетов, в том числе его следующий период, прочитайте объекты `effective_date` и `marketplace_purchase` из веб-перехватчика `marketplace_purchase`.

Если предлагается бесплатная пробная версия приложения, прочитайте атрибут `marketplace_purchase[on_free_trial]` веб-перехватчика. Если значение равно `true`, приложение должно отслеживать дату начала (`effective_date`) и окончания (`free_trial_ends_on`) бесплатного пробного периода. Используйте дату `free_trial_ends_on` для отображения количества дней до конца бесплатного пробного периода в пользовательском интерфейсе приложения. Это можно делать в баннере или в [пользовательском интерфейсе выставления счетов](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Сведения об обработке досрочной отмены бесплатного пробного периода см. в разделе [Обработка отмены плана](/developers/github-marketplace/handling-plan-cancellations). Чтобы узнать, как перейти на платный план по завершении бесплатного пробного периода, см. раздел [Обработка изменений плана](/developers/github-marketplace/handling-plan-changes).

Пример полезных данных `marketplace_purchase` см. в разделе [{% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

## Шаг 2. Установка

Если у вас {% data variables.product.prodname_github_app %}, при его приобретении {% data variables.product.product_name %} предлагает клиенту выбрать репозитории, к которым приложение будет иметь доступ. Затем {% data variables.product.product_name %} устанавливает приложение в выбранной клиентом учетной записи и предоставляет доступ к выбранным репозиториям.

На этом этапе, если в параметрах {% data variables.product.prodname_github_app %} указан **URL-адрес настройки**, {% data variables.product.product_name %} перенаправит клиента на него. Если URL-адрес настройки не указан, вы не сможете обрабатывать покупки {% data variables.product.prodname_github_app %}.

{% note %}

**Примечание**. **URL-адрес настройки** описывается как необязательный в параметрах {% data variables.product.prodname_github_app %}, но это обязательное поле, если вы хотите предлагать приложение в {% data variables.product.prodname_marketplace %}.

{% endnote %}

Если у вас {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} не устанавливает его нигде. Вместо этого {% data variables.product.product_name %} перенаправляет клиента на **URL-адрес установки**, указанный в [профиле в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Когда клиент приобретает {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} перенаправляет его на выбранный вами URL-адрес (настройки или установки), в который выбранный клиентом ценовой план включен в качестве параметра запроса: `marketplace_listing_plan_id`.

## Шаг 3. Авторизация

Когда клиент приобретает ваше приложение, необходимо провести клиента через процесс авторизации OAuth.

* Если у вас {% data variables.product.prodname_github_app %}, начните процесс авторизации сразу после того, как {% data variables.product.product_name %} перенаправит клиента на **URL-адрес настройки**. Выполните инструкции из раздела [Определение и авторизация пользователей для {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

* Если у вас {% data variables.product.prodname_oauth_app %}, начните процесс авторизации сразу после того, как {% data variables.product.product_name %} перенаправит клиента на **URL-адрес установки**. Выполните инструкции из раздела [Авторизация {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/).

Для любого типа приложения первым шагом является перенаправление клиента на страницу [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize).

После того как клиент завершит авторизацию, приложение получит маркер доступа OAuth для него. Он потребуется для выполнения следующего шага.

{% note %}

**Примечание**. При авторизации клиента в бесплатной пробной версии предоставьте ему тот же уровень доступа, который был бы у него в платном плане.  Вы переведете его на платный план после окончания пробного периода.

{% endnote %}

## Шаг 4. Подготовка учетных записей клиентов

Для каждой новой покупки в приложении должна подготавливаться учетная запись клиента. Используя маркер доступа, полученный для клиента на шаге 3 [Авторизация](#step-3-authorization), вызовите конечную точку [получения списка подписок для пользователя, прошедшего проверку подлинности](/rest/reference/apps#list-subscriptions-for-the-authenticated-user). Ответ будет содержать сведения об учетной записи (`account`) клиента и о том, использует ли он бесплатную пробную версию (`on_free_trial`). Используйте эти сведения для завершения настройки и подготовки.

{% data reusables.marketplace.marketplace-double-purchases %}

Если покупка предназначена для организации и оплачивается по модели "на пользователя", вы можете предложить клиенту выбрать сотрудников организации, у которых будет доступ к приобретенному приложению.

Вы можете настроить способ получения сотрудниками организации доступа к приложению. Вот несколько рекомендаций:

**Фиксированные расценки**. Если покупка совершается для организации с использованием фиксированных расценок, ваше приложение может [получить список всех сотрудников организации](/rest/reference/orgs#list-organization-members) через API и предложить администратору организации выбрать тех из них, для кого будут оплачиваться учетные записи на стороне интегратора.

**Расценки за единицу**. Один из способов подготовки рабочих мест с оплатой за единицу — разрешить пользователям занимать рабочие места при входе в приложение. Когда клиент достигнет максимального числа рабочих мест, ваше приложение может предупредить его о необходимости повысить уровень через {% data variables.product.prodname_marketplace %}.
