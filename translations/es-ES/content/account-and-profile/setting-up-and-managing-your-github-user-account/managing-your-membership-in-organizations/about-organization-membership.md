---
title: Acerca de la membresía de una organización
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091917"
---
Un propietario de la organización puede invitarte a unirte a su organización como miembro, gerente de facturación o propietario. Un miembro o propietario de la organización con privilegios de administrador para un repositorio puede invitarte a colaborar en uno o más repositorios como un colaborador externo. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Puedes acceder a las organizaciones de las que eres miembro en tu página de perfil. Para más información, vea "[Acceso a una organización](/articles/accessing-an-organization)".

Cuando aceptas una invitación para unirte a una organización, el propietario de la organización puede ver lo siguiente:

- La información de tu perfil público.
- La dirección de correo electrónico propia
- Si tienes la autorización de dos factores activada.
- Los repositorios a los que tienes acceso dentro de la organización y tu nivel de acceso.
- Ciertas actividades dentro de la organización.
- País del origen de la solicitud.
- Tu dirección IP.

Para más información, vea la <a href="/articles/github-privacy-statement/" class="dotcom-only">Declaración de privacidad de {% data variables.product.prodname_dotcom %}</a>.

  {% note %}

  **Nota:** Los propietarios no pueden ver las direcciones IP de los miembros en el registro de auditoría de la organización. En el caso de un incidente de seguridad, como una cuenta comprometida o la divulgación involuntaria de datos confidenciales, los propietarios de la organización pueden solicitar los detalles de acceso a los repositorios privados. La información que devolvemos puede incluir tu dirección IP.

  {% endnote %}

Por defecto, la visibilidad de los miembros de tu organización se establece como privada. Puede elegir publicar miembros individuales de la organización en tu perfil. Para más información, vea "[Divulgación u ocultación de los miembros de la organización](/articles/publicizing-or-hiding-organization-membership)".

{% ifversion fpt or ghec %}

Si tu organización pertenece a una cuenta de empresa, automáticamente eres un miembro de la cuenta de empresa y visible para los propietarios de la cuenta de empresa. Para más información, vea "[Acerca de las cuentas empresariales](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% endif %}

Puedes dejar una organización en cualquier momento. Para más información, vea "[Eliminación de una organización](/articles/removing-yourself-from-an-organization)".

## <a name="further-reading"></a>Información adicional

- "[Acerca de las organizaciones](/articles/about-organizations)"
- "[Administración de la pertenencia a organizaciones](/articles/managing-your-membership-in-organizations)"
