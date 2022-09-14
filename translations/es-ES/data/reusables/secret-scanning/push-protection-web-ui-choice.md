---
ms.openlocfilehash: 7ebce174e896689b1976b9d43f1f0884ce065229
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147683803"
---
Cuando se usa la interfaz de usuario web para intentar confirmar un secreto admitido en un repositorio u organización con el examen de secretos como protección de inserción habilitada, {% data variables.product.prodname_dotcom %} bloqueará la confirmación. 

Verás un banner en la parte superior de la página con información sobre la ubicación del secreto, y el secreto también estará subrayado en el archivo para que puedas encontrarlo fácilmente.

{% ifversion push-protection-custom-link-orgs %}

  ![Captura de pantalla que muestra la confirmación en la interfaz de usuario web bloqueada debido a la protección de inserción de análisis de secretos](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Captura de pantalla que muestra la confirmación en la interfaz de usuario web bloqueada debido a la protección de inserción de análisis de secretos](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}