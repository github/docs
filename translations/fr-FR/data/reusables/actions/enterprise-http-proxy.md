---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107676"
---
Si vous avez un **serveur proxy HTTP** configuré sur {% data variables.location.product_location %} :

  - Vous devez ajouter `localhost` et `127.0.0.1` à la liste **Exclusion du proxy HTTP**.
  - Si votre emplacement de stockage externe n’est pas routable, vous devez également ajouter l’URL de votre stockage externe à la liste d’exclusion.

  Pour plus d’informations sur le changement de vos paramètres de proxy, consultez « [Configuration d’un serveur proxy web de trafic sortant](/admin/configuration/configuring-an-outbound-web-proxy-server) ».
