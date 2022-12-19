---
title: Como exibir e gerenciar sessões
intro: É possível exibir e revogar as sessões ativas nas configurações.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165573'
---
Você pode exibir uma lista de dispositivos que efetuaram logon na sua conta e revogar todas as sessões que não reconhecer.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Nas "Sessões da Web", você pode ver suas sessões da Web ativas.
   
   ![Captura de tela da lista de sessões ativas](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} nas Sessões "{% data variables.product.prodname_mobile %}", você pode ver uma lista de dispositivos que efetuaram logon na sua conta por meio do aplicativo {% data variables.product.prodname_mobile %}.

   ![Captura de tela da lista de sessões ativas](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Para ver os detalhes da sessão da Web, clique em **Ver mais**.
   
   ![Captura de tela da página Sessões com o botão para abrir os detalhes da sessão enfatizado](/assets/images/help/settings/saml-expand-session-details.png)

1. Para revogar uma sessão da Web, clique em **Revogar sessão**.
    
    ![Captura de tela da página Detalhes da sessão com o botão para revogar a sessão enfatizado](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. Opcionalmente, para revogar uma sessão do {% data variables.product.prodname_mobile %}, volte para a página de visão geral das Sessões e clique em **Revogar** ao lado do dispositivo que deseja revogar. 

    {% note %}

    **Nota:** revogar uma sessão móvel desconecta você do aplicativo {% data variables.product.prodname_mobile %} nesse dispositivo e o remove como opção de segundo fator. 

    {% endnote %}

    ![Captura de tela da página Sessões com o botão para revogar uma sessão móvel enfatizado](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

