---
title: Visualisation et gestion de vos sessions
intro: Vous pouvez visualiser et révoquer vos sessions actives dans vos paramètres.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165579'
---
Vous pouvez voir la liste des appareils qui se sont connectés à votre compte et révoquer toutes les sessions que vous ne reconnaissez pas.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Sous « Sessions web », vous pouvez voir vos sessions web actives.
   
   ![Capture d’écran de la liste des sessions actives](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} Sous « Sessions {% data variables.product.prodname_mobile %} », vous pouvez voir la liste des appareils qui se sont connectés à votre compte via l’application {% data variables.product.prodname_mobile %}.

   ![Capture d’écran de la liste des sessions actives](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Pour voir les détails d’une session web, cliquez sur **Voir plus**.
   
   ![Capture d’écran de la page Sessions avec le bouton pour ouvrir les détails de la session mis en évidence](/assets/images/help/settings/saml-expand-session-details.png)

1. Pour révoquer une session web, cliquez sur **Révoquer une session**.
    
    ![Capture d’écran de la page Détails de la session avec le bouton pour révoquer une session mis en évidence](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. Si vous le souhaitez, pour révoquer une session {% data variables.product.prodname_mobile %}, revenez à la page Vue d’ensemble des sessions et cliquez sur **Révoquer** à côté de l’appareil que vous voulez révoquer. 

    {% note %}

    **Remarque :** La révocation d’une session mobile vous déconnecte de l’application {% data variables.product.prodname_mobile %} sur cet appareil et la supprime en tant qu’option de second facteur. 

    {% endnote %}

    ![Capture d’écran de la page Sessions avec le bouton pour révoquer une session mobile mis en évidence](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

