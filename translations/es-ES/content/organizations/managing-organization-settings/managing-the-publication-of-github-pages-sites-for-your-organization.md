---
title: Administrar la publicación de sitios de GitHub Pages de tu organización
intro: 'Puedes controlar si los miembros de la organización pueden publicar sitios de {% data variables.product.prodname_pages %} desde repositorios de esta{% ifversion ghec %} y restringir las visibilidades que estos eligen para dichos sitios{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878532'
---
{% ifversion fpt %} Puedes optar por permitir o impedir que los miembros de la organización publiquen sitios de {% data variables.product.prodname_pages %}. Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} también pueden optar por permitir sitios que se publican de forma pública, de forma privada, ambas opciones o ninguna. Para obtener más información, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %} Puedes optar por permitir que los miembros de la organización creen sitios que se publican de forma pública, de forma privada, ambas opciones o ninguna. Para obtener más información sobre el control de acceso de los sitios de {% data variables.product.prodname_pages %}, consulta "[Cambio de la visibilidad del sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Si dejas de permitir la publicación de sitios de {% data variables.product.prodname_pages %}, cualquier sitio que ya se haya publicado permanecerá así. Puedes anular la publicación del sitio manualmente. Para obtener más información, consulta "[Anulación de la publicación de un sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. En ""Pages creation" (Creación de páginas), selecciona o anula la selección de **Public** (Público).

   ![Casillas para permitir o no permitir la creación de sitios de {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Debajo de "Creación de páginas", selecciona las visibilidades que quieras permitir y deselecciona aquellas que quieres dejar de permitir.

   ![Casillas para permitir o no permitir la creación de sitios de {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. En "Creación de páginas", selecciona o anula la selección de **Permitir que los miembros publiquen sitios**.

   ![Casilla no seleccionada para la opción "Allow members to publish sites" (Permitir que los miembros publiquen sitios)](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Haga clic en **Save**(Guardar).

## Información adicional

- "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
