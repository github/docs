---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116977"
---
1. Configure un perfil de publicación de Azure y cree un secreto `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Genera tus credenciales de despliegue de Azure utilizando un perfil de publicación. Para más información, vea "[Generación de credenciales de implementación](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" en la documentación de Azure.

   En el repositorio de {% data variables.product.prodname_dotcom %}, cree un secreto denominado `AZURE_WEBAPP_PUBLISH_PROFILE` que incluya el contenido del perfil de publicación. Para más información sobre la creación de secretos, vea "[Secretos cifrados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
