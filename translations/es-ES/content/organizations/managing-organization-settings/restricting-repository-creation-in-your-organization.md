---
title: Restringir la creación de repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para crear repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069642'
---
Puedes elegir si los miembros pueden crear repositorios en tu organización o no. {% ifversion ghec or ghes or ghae %}Si permites que los miembros creen repositorios, puedes elegir qué tipos de estos pueden crear.{% elsif fpt %}Si permites que los miembros creen repositorios, puedes elegir si ellos pueden crear tanto repositorios públicos como privados o solo públicos.{% endif %} Los propietarios de las organizaciones siempre pueden crear cualquier tipo de repositorio.

{% ifversion fpt %} Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden restringir a los miembros para que solo creen repositorios privados. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %} Los propietarios de empresa pueden restringir las opciones disponibles para la directiva de creación de repositorios de la organización. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
{% endif %}

{% warning %}

**Advertencia**: Este valor solo restringe las opciones de visibilidad disponibles al crear repositorios, no la capacidad de cambiar la visibilidad del repositorio posteriormente. Para más información sobre cómo restringir los cambios a las visibilidades de los repositorios existentes, vea "[Restricción de los cambios de visibilidad del repositorio en la organización](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Debajo de "Creación de repositorios", selecciona una o más opciones.

   {%- ifversion ghes or ghec or ghae %} ![Opciones de creación de repositorios](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![Repository creation options](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **Nota:** Para restringir a los miembros a que solo creen repositorios privados, la organización debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. Haga clic en **Save**(Guardar).
