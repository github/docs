---
title: Vista y gestión de tus sesiones
intro: Puedes ver y revocar tus sesiones activas en configuración.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165589'
---
Puedes ver una lista de los dispositivos que han iniciado sesión en tu cuenta y revocar las sesiones que no reconozcas.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. En "Sesiones web", puedes ver las sesiones web activas.
   
   ![Captura de pantalla de la lista de sesiones activas](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} En "sesiones de {% data variables.product.prodname_mobile %}", puedes ver una lista de dispositivos que han iniciado sesión en tu cuenta mediante la aplicación {% data variables.product.prodname_mobile %}.

   ![Captura de pantalla de la lista de sesiones activas](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Para ver los detalles de la sesión web, haz clic en **Ver más**.
   
   ![Captura de pantalla de la página Sesiones con el botón para abrir los detalles de la sesión resaltado](/assets/images/help/settings/saml-expand-session-details.png)

1. Para revocar una sesión web, haz clic en **Revocar sesión**.
    
    ![Captura de pantalla de la página de detalles de Sesiones con el botón para revocar una sesión resaltado](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. Opcionalmente, para revocar una sesión de {% data variables.product.prodname_mobile %}, vuelve a la página información general de Sesiones y haz clic en **Revocar** junto al dispositivo que quieres revocar. 

    {% note %}

    **Nota:** Al revocar una sesión móvil, se cierra la sesión de la aplicación {% data variables.product.prodname_mobile %} en ese dispositivo y se quita como opción de segundo factor. 

    {% endnote %}

    ![Captura de pantalla de la página Sesiones con el botón para revocar una sesión móvil resaltado](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

