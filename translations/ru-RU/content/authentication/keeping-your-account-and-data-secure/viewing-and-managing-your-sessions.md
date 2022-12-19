---
title: Просмотр сеансов и управление ими
intro: Вы можете просматривать и отзывать активные сеансы в параметрах.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165588'
---
Вы можете просмотреть список устройств, которые вошли в вашу учетную запись, и отменить все сеансы, которые вы не распознаете.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. В разделе "Веб-сеансы" отображаются активные веб-сеансы.
   
   ![Снимок экрана: список активных сеансов](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} В разделе "{% data variables.product.prodname_mobile %} сеансов" можно просмотреть список устройств, которые вошли в вашу учетную запись с помощью приложения {% data variables.product.prodname_mobile %}.

   ![Снимок экрана: список активных сеансов](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Чтобы просмотреть сведения о веб-сеансе, нажмите кнопку **Дополнительные сведения**.
   
   ![Снимок экрана: страница "Сеансы" с кнопкой для открытия сведений о сеансе](/assets/images/help/settings/saml-expand-session-details.png)

1. Чтобы отозвать веб-сеанс, нажмите кнопку **Отозвать сеанс**.
    
    ![Снимок экрана: страница сведений о сеансах с кнопкой для отмены сеанса](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. При необходимости, чтобы отозвать сеанс {% data variables.product.prodname_mobile %}, вернитесь на страницу Обзор сеансов и нажмите кнопку **Отозвать** рядом с устройством, которое требуется отозвать. 

    {% note %}

    **Примечание:** При отзыве мобильного сеанса вы выходите из приложения {% data variables.product.prodname_mobile %} на этом устройстве и удаляете его как параметр второго фактора. 

    {% endnote %}

    ![Снимок экрана: страница "Сеансы" с кнопкой отмены мобильного сеанса](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

