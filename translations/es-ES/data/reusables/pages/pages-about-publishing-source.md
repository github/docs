---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109933"
---
{% ifversion pages-custom-workflow %}

Puedes publicar el sitio cuando se inserten cambios en una rama específica o puedes escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para publicar el sitio. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

Si no necesitas ningún control sobre el proceso de creación del sitio, se recomienda publicar el sitio cuando se inserten cambios en una rama específica. {% data reusables.pages.pages-about-branch-source %}

Si quieres usar un proceso de compilación distinto de Jekyll o no quieres que una rama dedicada contenga los archivos estáticos compilados, se recomienda escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para publicar el sitio. {% data variables.product.product_name %} proporciona flujos de trabajo de inicio para escenarios comunes de publicación para ayudarte a escribir el flujo de trabajo.

{% else %}

Tu sitio de {% data variables.product.prodname_pages %} se publicará cuando se inserten cambios en una rama específica. {% data reusables.pages.pages-about-branch-source %}

{% endif %}