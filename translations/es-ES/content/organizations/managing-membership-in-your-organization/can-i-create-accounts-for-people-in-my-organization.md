---
title: ¿Puedo crear cuentas para personas en mi organización?
intro: 'Si bien puedes agregar usuarios a una organización que has creado, no puedes crear cuentas personales en nombre de otra persona.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109826'
---
## Acerca de las cuentas personales

Dado que accedes a una organización al iniciar sesión en una cuenta personal, cada uno de los miembros de tu equipo necesita su cuenta personal propia. Después de que tengas nombres de usuario para cada una de las personas que quieras agregar a tu organización, podrás agregarlos a los equipos.

{% ifversion fpt or ghec %} {% ifversion fpt %}Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden{% else %}Puedes{% endif %} utilizar el inicio de sesión único de SAML para administrar de manera centralizada el acceso que tienen las cuentas personales a los recursos de la organización mediante un proveedor de identidades (IdP). Para más información, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

También puedes considerar los {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Agregar usuarios a tu organización

1. Proporciona instrucciones a cada usuario para [crear una cuenta personal](/articles/signing-up-for-a-new-github-account).
2. Preguntar el nombre de usuario a cada persona a la que deseas dar membresía a la organización.
3. [Invite a las nuevas cuentas personales para unirse](/articles/inviting-users-to-join-your-organization) a la organización. Use [roles de organización](/articles/permission-levels-for-an-organization) y [permisos de repositorio](/articles/repository-permission-levels-for-an-organization) para limitar el acceso de cada cuenta.
