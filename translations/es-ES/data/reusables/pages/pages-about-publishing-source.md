---
ms.openlocfilehash: f77827f645123477cf9ddc2f845c7da3a4929a72
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147871941"
---
{% ifversion pages-custom-workflow %}

Puedes publicar el sitio cuando se inserten cambios en una rama específica o puedes escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para publicar el sitio.

Si no necesitas ningún control sobre el proceso de creación del sitio, se recomienda publicar el sitio cuando se inserten cambios en una rama específica. {% data reusables.pages.pages-about-branch-source %}

Si quieres usar un proceso de compilación distinto de Jekyll o no quieres que una rama dedicada contenga los archivos estáticos compilados, se recomienda escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para publicar el sitio. {% data variables.product.product_name %} proporciona flujos de trabajo de inicio para escenarios comunes de publicación para ayudarte a escribir el flujo de trabajo.

{% else %}

Tu sitio de {% data variables.product.prodname_pages %} se publicará cuando se inserten cambios en una rama específica. {% data reusables.pages.pages-about-branch-source %}

{% endif %}
