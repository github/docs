---
title: Eliminación de una cuenta de organización
intro: 'Cuando eliminas una organización, se eliminan también todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas del proyecto y de la organización. {% ifversion fpt or ghec %}Tu facturación terminará y, después de 90 días, el nombre de la organización estará disponible para que una cuenta de organización o de usuario nueva lo utilice.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: e923dcf7fb9135243c5bfe0e68a310719e87ef2e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109745'
---
{% ifversion fpt or ghec %} {% tip %}

**Sugerencia**: Si quiere cancelar la suscripción de pago, puede [cambiar a una versión anterior la organización a {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) en lugar de eliminar la organización y su contenido.

{% endtip %}

{% endif %}

## 1. Copia de seguridad del contenido de la organización

{% ifversion not ghes %} Después de eliminar una organización, {% data variables.product.company_short %} **no puede restablecer el contenido**. Por lo tanto, antes{% else %}Anes{% endif %} de que borres tu organización, asegúrate de que tienes una copia de todos los repositorios, wikis, propuestas y tableros de proyecto de la cuenta.

{% ifversion ghes %} {% note %}

**Nota:** Si es necesario, un administrador de sitio de {% data variables.product.product_location %} podría restablecer parcialmente una organización eliminada. Para más información, vea "[Restauración de una organización eliminada](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)".

{% endnote %} {% endif %}

## 2. Eliminación de la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Junto a la parte inferior de la página de configuración de la organización, haga clic en **Eliminar esta organización**.
   ![Botón Eliminar esta organización](/assets/images/help/settings/settings-organization-delete.png)
