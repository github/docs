---
title: Revisar tus llaves de implementación
intro: Debes revisar tus llaves de implementación para garantizar que no haya ninguna llave sin autorización (o posiblemente comprometida). También puedes aprobar llaves de implementación existentes que sean válidas.
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091809'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. En la sección "Security" de la barra lateral, haga clic en **{% octicon "key" aria-label="The key icon" %} Deploy keys**.
{% else %}
3. En la barra lateral izquierda, haga clic en **Deploy keys**.
![Ajuste de claves de implementación](/assets/images/help/settings/settings-sidebar-deploy-keys.png){% endif %}
4. En la página de Llaves de implementación, anota las llaves de implementación asociadas a tu cuenta. Elimine las claves que no reconozca o hayan quedado obsoletas haciendo clic en **Delete**. Si hay claves de implementación válidas que le gustaría conservar, haga clic en **Approve**.
    ![Lista de claves de implementación](/assets/images/help/settings/settings-deploy-key-review.png)

Para obtener más información, consulte "[Administración de claves de implementación](/guides/managing-deploy-keys)".

## Información adicional
- [Configuración de notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
