---
ms.openlocfilehash: 224ce401421d3af0e9afa5976695c95ed219a7b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109176"
---
## Настройка параметров {% data variables.product.prodname_copilot %} на {% data variables.product.prodname_dotcom_the_website %}

После получения активной пробной версии или подписки {% data variables.product.prodname_copilot %} можно настроить параметры {% data variables.product.prodname_copilot %} для личной учетной записи на {% data variables.product.prodname_dotcom %} в [параметрах {% data variables.product.prodname_copilot %}](https://github.com/settings/copilot). Параметры применяются везде, где вы используете {% data variables.product.prodname_copilot %}. Вы можете настроить предложения от {% data variables.product.prodname_copilot %} и то, как {% data variables.product.company_short %} использует ваши данные телеметрии.

## Включение или отключение обнаружения дублирования

В {% data variables.product.prodname_copilot %} содержится фильтр, который обнаруживает предложения кода, совпадающие с общедоступным кодом в {% data variables.product.prodname_dotcom %}. Этот фильтр можно включить или отключить. Если фильтр включен, {% data variables.product.prodname_copilot %} сверяет предложения кода и около 150 символов кода до и после искомого фрагмента с общедоступным кодом в {% data variables.product.prodname_dotcom %}. Если обнаруживается полное или частичное совпадение, предложение не будет отображаться.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. В разделе **Предложения, соответствующие открытому коду** откройте раскрывающееся меню, а затем нажмите кнопку **Разрешить** или **Блокировать**, чтобы разрешить или блокировать предложения, соответствующие открытому коду.
  ![Снимок экрана: параметр обнаружения дублирования](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

## Включение или отключение телеметрии

В параметрах пользователя можно указать, будут ли фрагменты кода собираться и храниться в GitHub, а затем обрабатываться и использоваться Майкрософт и OpenAI. Дополнительные сведения о данных, которые может собирать {% data variables.product.prodname_copilot %} в зависимости от ваших параметров телеметрии, см. в статье "[Условия {% data variables.product.company_short %} для дополнительных продуктов и компонентов](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" и в разделе [часто задаваемых вопросов о конфиденциальности {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq-privacy).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Чтобы разрешить или запретить {% data variables.product.prodname_dotcom %} использовать ваши данные телеметрии, поставьте или снимите флажок **Разрешить {% data variables.product.prodname_dotcom %} использовать мои фрагменты кода для улучшения продукта**.
  ![Снимок экрана: параметр телеметрии](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## Дополнительные материалы

- [Часто задаваемые вопросы по {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq)
