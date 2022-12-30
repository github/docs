---
title: Anzeigen und Verwalten deiner Sitzungen
intro: Du kannst deine aktiven Sitzungen in deinen Einstellungen anzeigen und widerrufen.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165580'
---
Du kannst eine Liste der Geräte anzeigen, die sich bei deinem Konto angemeldet haben, und alle Sitzungen widerrufen, die du nicht erkennst.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Unter „Websitzungen“ werden deine aktiven Websitzungen angezeigt.
   
   ![Screenshot der Liste der aktiven Sitzungen](/assets/images/help/settings/saml-active-sessions.png) {% ifversion fpt or ghec %} Unter „{% data variables.product.prodname_mobile %}-Sitzungen“ wird eine Liste der Geräte angezeigt, die sich über die {% data variables.product.prodname_mobile %}-App bei deinem Konto angemeldet haben.

   ![Screenshot der Liste der aktiven Sitzungen](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. Klicke auf **Weitere Informationen**, um die Websitzungsdetails anzuzeigen.
   
   ![Screenshot der Seite „Sitzungen“ mit hervorgehobener Schaltfläche zum Öffnen von Sitzungsdetails](/assets/images/help/settings/saml-expand-session-details.png)

1. Um eine Sitzung zu widerrufen, klicke auf **Sitzung widerrufen**.
    
    ![Screenshot der Seite „Sitzungsdetails“ mit hervorgehobener Schaltfläche zum Widerrufen einer Sitzung](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. Um eine {% data variables.product.prodname_mobile %}-Sitzung zu widerrufen, wechsle optional zurück zur Seite „Sitzungsübersicht“, und klicke neben dem Gerät, das du widerrufen möchtest, auf **Widerrufen**. 

    {% note %}

    **Hinweis:** Wenn du eine mobile Sitzung widerrufst, wirst du von der {% data variables.product.prodname_mobile %}-Anwendung auf diesem Gerät abgemeldet, und sie wird als zweite Option entfernt. 

    {% endnote %}

    ![Screenshot der Seite „Sitzungen“ mit hervorgehobener Schaltfläche zum Widerrufen einer mobilen Sitzung](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

