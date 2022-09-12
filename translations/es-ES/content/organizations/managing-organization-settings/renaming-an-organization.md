---
title: Renombrar una organización
intro: 'Si tu proyecto o empresa cambió de nombre, puedes actualizar el nombre de tu organización para que coincida.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119250'
---
{% tip %}

**Sugerencia:** Solo los propietarios de la organización pueden cambiar el nombre de una organización. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## ¿Qué sucede cuando cambio el nombre de mi organización?

Después de cambiar el nombre de tu organización, el nombre antiguo de tu organización se pone a disposición para quien lo quiera utilizar. Cuando cambias el nombre de tu organización, la mayoría de las referencias a los repositorios bajo el nombre antiguo de tu organización se cambiarán automáticamente al nombre nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

### Cambios que ocurren automáticamente

- {% data variables.product.prodname_dotcom %} redirige automáticamente las referencias a tus repositorios.  Los enlaces web a los **repositorios** existentes de la organización seguirán funcionando. Puede tomar algunos minutos para que se complete luego de que inicies el cambio.
- Puedes continuar subiendo tus repositorios locales a la URL de seguimiento del remoto antiguo sin actualizarla. Sin embargo, recomendamos que actualices todas las URL de repositorios remotos existentes después de cambiar el nombre de tu organización. Como el nombre antiguo de tu organización queda disponible para que lo utilice cualquier otra persona después de que lo cambies, el propietario de la organización nuevo puede crear repositorios que remplacen las entradas redirigidas a tu repositorio. Para más información, vea "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".
- Las confirmaciones de Git anteriores también se atribuirán según corresponda a los usuarios de tu organización.

### Cambios que no son automáticos

Después de cambiar el nombre de tu organización:
- Los vínculos a la página de perfil de la organización anterior, como `https://{% data variables.command_line.backticks %}/previousorgname`, devolverán un error 404. Le recomendamos que actualice los vínculos a la organización desde otros sitios{% ifversion fpt or ghec %}, por ejemplo los perfiles de LinkedIn o Twitter{% endif %}.
- Las solicitudes API que utilizan el nombre de la organización antiguo generarán un error 404. Recomendamos que actualices el nombre de la organización antiguo en tus solicitudes API.
- No hay redireccionamientos automáticos de [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) para los equipos que usan el nombre de la organización anterior.{% ifversion ghec %}
- Si se habilita el inicio de sesión único (SSO) para la organización, debes actualizar el nombre de la misma en la aplicación para {% data variables.product.prodname_ghe_cloud %} en tu proveedor de identidad (IdP). Si no actualizas el nombre de organización en tu IdP, los miembros de esta ya no podrán autenticarse con tu IdP para acceder a los recursos de la organización. Para más información, vea "[Conexión del proveedor de identidades a la organización](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)".{% endif %}

## Cambiar el nombre de tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Junto a la parte de abajo de la página de configuración, en "Cambiar el nombre de la organización", haga clic en **Cambiar el nombre de la organización**.
  ![Botón Cambiar el nombre de la organización](/assets/images/help/settings/settings-rename-organization.png)

## Información adicional

* "[¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"
