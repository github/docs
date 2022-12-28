---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180179"
---
Si estás utilizando una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que hayas instalado en tu empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para más información sobre cómo crear una lista de permitidos para una {% data variables.product.prodname_github_app %} que ha creado, vea "[Administración de direcciones IP permitidas para una aplicación de GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar la adición automática de direcciones IP para las {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Selecciona **Habilitar la configuración de lista de direcciones IP permitidas para las aplicaciones de GitHub instaladas**. Si usa {% data variables.product.prodname_emus %} con OIDC, seleccione primero **GitHub** como configuración de la lista de direcciones IP permitidas y, a continuación, seleccione **Habilitar la configuración de lista de direcciones IP permitidas para las aplicaciones de GitHub instaladas**.
  ![Casilla para permitir las direcciones IP de la aplicación de GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haga clic en **Save**(Guardar).
