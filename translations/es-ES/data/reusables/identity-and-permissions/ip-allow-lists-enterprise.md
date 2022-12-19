---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184096"
---
Cuando habilitas la lista de direcciones permitidas, las direcciones IP que configuraste se agregan inmediatamente a las listas de direcciones permitidas de las organizaciones en tu empresa. Si inhabilitas la lista de direcciones permitidas, las direcciones se eliminan de las listas de direcciones permitidas de la organización. 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Para más información, consulta "[Administración de las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

Puedes elegir agregar automáticamente cualquier dirección IP a tu lista de direcciones permitidas para las {% data variables.product.prodname_github_apps %} que están instaladas en tu empresa. El creador de una {% data variables.product.prodname_github_app %} puede configurar una lista de direcciones permitidas para su aplicación, las cuales especifiquen las direcciones IP en las cuales se ejecuta esta. Al heredar la lista de direcciones permitidas en la tuya, estás evitando las solicitudes de conexión de la aplicación que se está rehusando. Para obtener más información, consulte "[Permitir el acceso mediante GitHub Apps](#allowing-access-by-github-apps)".
