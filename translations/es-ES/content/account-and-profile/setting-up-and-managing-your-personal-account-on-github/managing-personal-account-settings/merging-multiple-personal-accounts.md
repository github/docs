---
title: Combinación de varias cuentas personales
intro: Si tienes cuentas separadas para uso laboral y personal, puedes fusionar las cuentas.
redirect_from:
- /articles/can-i-merge-two-accounts
- /articles/keeping-work-and-personal-repositories-separate
- /articles/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 71e2b280fad682f3ee8e9ac85141aedc3bde3d06
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145165397"
---
{% tip %}

{% ifversion ghec %}

**Sugerencia:** {% data variables.product.prodname_emus %} permiten que una empresa aprovisione cuentas personales únicas para sus miembros mediante un proveedor de identidades (IdP). Para más información, vea "[Acerca de los usuarios administrados empresariales](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)". Para otros casos de uso, te recomendamos utilizar solo una cuenta personal para administrar tanto los repositorios profesionales como los personales.

{% else %}

**Sugerencia:** se recomienda usar solo una cuenta personal para administrar tanto los repositorios personales como los profesionales. 

{% endif %}

{% endtip %}

{% warning %}

**Advertencia**: 
- Los permisos de acceso de organización y repositorio no se pueden transferir entre cuentas. Si la cuenta que quieres borrar tiene un permiso de acceso existente, un propietario de organización o administrador de repositorio necesitará invitar a la cuenta que quieras mantener.
- Las confirmaciones creadas con una dirección de correo electrónico `noreply` proporcionada por GitHub no se pueden transferir de una cuenta a otra. Si en la cuenta que quiere eliminar se usado la opción **Mantener mi dirección de correo electrónico privada**, no será posible transferir a la cuenta que quiere conservar las confirmaciones creadas por la cuenta que se va a eliminar.

{% endwarning %}

1. [Transfiera los repositorios](/articles/how-to-transfer-a-repository) de la cuenta que quiere eliminar a la que quiere conservar. También se transfieren propuestas, solicitudes de extracción y wikis. Verifica que los repositorios existan en la cuenta que deseas mantener.
2. [Actualice las direcciones URL remotas](/github/getting-started-with-github/managing-remote-repositories) en los clones locales de los repositorios que se han movido.
3. [Elimine la cuenta](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account) que ya no quiera usar.
4. Para atribuir las confirmaciones pasadas a la cuenta nueva, agrega la dirección de correo electrónico que utilizaste para crear dichas confirmaciones a la cuenta que vas a conservar. Para más información, vea "¿[Por qué mis contribuciones no aparecen en mi perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)".

## <a name="further-reading"></a>Información adicional

- "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
