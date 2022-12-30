---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882871"
---
1. En las bifurcaciones propiedad de los usuarios, si quiere que alguien con acceso de inserción al repositorio ascendente realice cambios en la solicitud de incorporación de cambios, seleccione **Allow edits from maintainers** (Permitir ediciones de los mantenedores).

    {% warning %}

    **Advertencia:** Si la bifurcación contiene flujos de trabajo de {% data variables.product.prodname_actions %}, la opción es **Allow edits and access to secrets by maintainers** (Permitir modificaciones y acceso a secretos por parte de los mantenedores). El permitir las ediciones en la rama de una bifurcación que contiene flujos de trabajo de {% data variables.product.prodname_actions %} también permite que un mantenedor edite los flujos de trabajo del repositorio, lo cual podría revelar los valores de los secretos y otorgar acceso a otras ramas potencialmente.

    {% endwarning %}
