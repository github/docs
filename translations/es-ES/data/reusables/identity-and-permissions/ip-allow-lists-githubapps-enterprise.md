---
ms.openlocfilehash: 130c705dad9367dbecb144ac281e8e58fa6d6cb7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880376"
---
Si estás utilizando una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que hayas instalado en tu empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para más información sobre cómo crear una lista de permitidos para una {% data variables.product.prodname_github_app %} que ha creado, vea "[Administración de direcciones IP permitidas para una aplicación de GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar la adición automática de direcciones IP para las {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "Lista de direcciones IP permitidas", seleccione **Habilitar la configuración de lista de direcciones IP permitidas para las aplicaciones de GitHub instaladas**.
  ![Casilla para permitir las direcciones IP de la aplicación de GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haga clic en **Save**(Guardar).
