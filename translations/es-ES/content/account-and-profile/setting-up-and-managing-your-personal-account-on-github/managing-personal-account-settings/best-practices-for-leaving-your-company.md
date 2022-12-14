---
title: Mejores prácticas para abandonar la empresa
intro: Si usas tu cuenta en {% data variables.product.product_name %} para fines personales y laborales, hay algunas cosas que debes tener en cuenta al dejar la empresa u organización.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: e7de0fa01082731ae54e988ed49310b5ce6afbea
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/02/2022
ms.locfileid: "147444649"
---
Antes de abandonar tu empresa, asegúrate de actualizar la siguiente información en tu cuenta personal:

- Para anular la verificación de la dirección de correo electrónico de la empresa, debe [eliminarla en la configuración de correo electrónico](/articles/changing-your-primary-email-address). Puedes volver a agregarla sin verificar para conservar todas las confirmaciones asociadas vinculadas con tu cuenta.
- [Cambie la dirección de correo electrónico principal](/articles/changing-your-primary-email-address) del correo electrónico de la empresa al personal.
- [Compruebe la nueva dirección principal de correo electrónico](/articles/verifying-your-email-address).
- [Cambie el nombre de usuario de GitHub](/articles/changing-your-github-username) para quitar las referencias a la empresa u organización, si es necesario.
- Si has habilitado la autenticación en dos fases (2FA) para tu cuenta personal, asegúrate de que tú (no la empresa) controles el método de autenticación 2FA que has configurado. Para obtener más información, vea "[Configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

## <a name="leaving-organizations"></a>Abandonar las organizaciones

Si ha trabajado con repositorios que pertenecen a una organización, querrá [quitarse como miembro de la organización](/articles/removing-yourself-from-an-organization). Tenga en cuenta que si es el propietario de la organización, primero debe [transferir la propiedad de la organización](/articles/transferring-organization-ownership) a otra persona.

A menos que uses un {% data variables.product.prodname_managed_user %}, podrás acceder a tu cuenta personal, incluso después de salir de la organización. Para obtener más información sobre {% data variables.product.prodname_emus %}, consulta "[Acerca de {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## <a name="removing-professional-associations-with-personal-repositories"></a>Eliminar asociaciones profesionales con repositorios personales.

Si has colaborado profesionalmente con otra persona en repositorios que pertenecen a su cuenta personal, querrás [quitarte como colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) de esos repositorios.

- [Deje de ver los repositorios](https://github.com/watching) relacionados con el trabajo. No desearás volver a ver esas notificaciones.
- [Transfiera los repositorios de su propiedad](/articles/how-to-transfer-a-repository) en los que otros usuarios tengan que seguir trabajando después de irse.
- [Elimine las bifurcaciones que le pertenecen](/articles/deleting-a-repository) y que estén relacionadas con el trabajo que realizaba. No te preocupes, si eliminas una bifurcación no eliminarás el repositorio ascendente.
- Elimina copias locales de las bifurcaciones que pueden existir en tu computadora.

```shell
$ rm -rf <em>work_directory</em>
```
