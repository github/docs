---
title: Cambiar permisos de acceso para wikis
intro: 'Solo los colaboradores del repositorio pueden editar el wiki de un repositorio {% ifversion fpt or ghec or ghes %}público{% endif %}, pero puedes permitir que cualquiera que tenga una cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} edite dicho wiki.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: 51a9ec690f0bdad1be302592091565b65e5f9b9b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092440'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En Características, anule la selección de **Restringir las modificaciones solo a los colaboradores**.
   ![Edición de restricción de la wiki](/assets/images/help/wiki/wiki_restrict_editing.png)

## Información adicional

- "[Deshabilitación de wikis](/communities/documenting-your-project-with-wikis/disabling-wikis)"
