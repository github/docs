---
title: Применение политик для GitHub Copilot на предприятии
intro: 'Вы можете применить политики для {% data variables.product.prodname_copilot_for_business %} в организациях предприятия или разрешить устанавливать политики в каждой организации.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193440'
---
## Сведения о политиках для {% data variables.product.prodname_copilot %} на предприятии

{% data reusables.copilot.about-copilot %}

Вы можете применить политики для {% data variables.product.prodname_copilot_for_business %} в организациях предприятия или разрешить устанавливать политики в каждой организации. 

Если вы настроили подписку для {% data variables.product.prodname_copilot_for_business %}, вы можете предоставить и отозвать доступ к {% data variables.product.prodname_copilot %} для организаций на предприятии. После предоставления организации доступа к {% data variables.product.prodname_copilot %} администраторы этой организации могут предоставить доступ отдельным пользователям и командам. Дополнительные сведения см. в разделе [Настройка параметров {% data variables.product.prodname_copilot %} в организации](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

Счета за подписки на {% data variables.product.prodname_copilot_for_business %} выставляются ежемесячно в зависимости от количества рабочих мест, назначенных пользователям в пределах предприятия{% data variables.product.prodname_copilot %}. Дополнительные сведения см. в разделе [Цены на {% data variables.product.prodname_copilot %} для {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud).

В {% data variables.product.prodname_copilot %} содержится фильтр, который обнаруживает предложения кода, совпадающие с общедоступным кодом в {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_for_business %} позволяет выбрать, следует ли включать или отключать фильтр на уровне предприятия, или разрешать администраторам организации принимать решения на уровне организации. Если фильтр включен, {% data variables.product.prodname_copilot %} сверяет предложения кода и около 150 символов кода до и после искомого фрагмента с общедоступным кодом в {% data variables.product.prodname_dotcom %}. Если есть совпадение или близкое совпадение, предложение не будет отображаться.

## Применение политики для управления использованием {% data variables.product.prodname_copilot_for_business %} на предприятии 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. В разделе "Управление доступом организации к {% data variables.product.prodname_copilot %}" настройте доступ для подписки {% data variables.product.prodname_copilot %}. 
    - Чтобы отключить {% data variables.product.prodname_copilot %} для всех организаций на предприятии, выберите **Отключено**.
    - Чтобы включить {% data variables.product.prodname_copilot %} для всех организаций на предприятии, как текущих, так и будущих, выберите **Разрешить для всех организаций**.
    - Чтобы включить {% data variables.product.prodname_copilot %} для определенных организаций, выберите **Разрешить для определенных организаций**.
    
    ![Снимок экрана: параметры доступа организации {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. Если вы выбрали **Параметр Разрешить для определенных организаций**, выберите организации, для которой вы хотите включить {% data variables.product.prodname_copilot %}. Кроме того, можно выбрать организации, для которой вы хотите отключить доступ к {% data variables.product.prodname_copilot %}.
    - Щелкните **Задать разрешения организации** и выберите **Включить** или **Отключить** , чтобы предоставить или запретить доступ {% data variables.product.prodname_copilot %} для указанных организаций.

    ![Снимок экрана: включенные или отключенные разрешения организации {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. Нажмите кнопку **Сохранить изменения**.
  
   ![Снимок экрана: {% data variables.product.prodname_copilot %} сохранение разрешений организации](/assets/images/help/copilot/save-org-settings-enterprise.png)

## Применение политики для управления использованием предложений {% data variables.product.prodname_copilot %}, соответствующих общедоступному коду на предприятии

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. В разделе "Предложения, соответствующие общедоступному коду", щелкните раскрывающееся меню и выберите политику, которую требуется применить.
    - Чтобы разрешить {% data variables.product.prodname_copilot %} предложения, соответствующие общедоступному коду, выберите **Разрешено**.
    - Чтобы заблокировать предложения {% data variables.product.prodname_copilot %}, соответствующие общедоступному коду, выберите **Заблокировано**.
    - Чтобы разрешить каждой организации устанавливать собственную политику для использования предложений {% data variables.product.prodname_copilot %}, соответствующих общедоступному коду, выберите **Нет политики (пусть каждая организация принимает решение).**
    
    ![Снимок экрана: предложения {% data variables.product.prodname_copilot %}, соответствующие параметрам общедоступного кода](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Дополнительные материалы

- Заявление [о конфиденциальности {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
