---
title: Mejores prácticas para abandonar la empresa
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093151"
---
Antes de abandonar tu empresa, asegúrate de actualizar la siguiente información en tu cuenta personal:

- Para anular la verificación de la dirección de correo electrónico de la empresa, debe [eliminarla en la configuración de correo electrónico](/articles/changing-your-primary-email-address). Puedes volver a agregarla sin verificar para conservar todas las confirmaciones asociadas vinculadas con tu cuenta.
- [Cambie la dirección de correo electrónico principal](/articles/changing-your-primary-email-address) del correo electrónico de la empresa al personal.
{% ifversion fpt or ghec %}
- [Compruebe la nueva dirección principal de correo electrónico](/articles/verifying-your-email-address).
{% endif %}
- [Cambie el nombre de usuario de GitHub](/articles/changing-your-github-username) para quitar las referencias a la empresa u organización, si es necesario.

## <a name="leaving-organizations"></a>Abandonar las organizaciones

Si ha trabajado con repositorios que pertenecen a una organización, querrá [quitarse como miembro de la organización](/articles/removing-yourself-from-an-organization). Tenga en cuenta que si es el propietario de la organización, primero debe [transferir la propiedad de la organización](/articles/transferring-organization-ownership) a otra persona.

## <a name="removing-professional-associations-with-personal-repositories"></a>Eliminar asociaciones profesionales con repositorios personales.

Si has colaborado profesionalmente con otra persona en repositorios que pertenecen a su cuenta personal, querrás [quitarte como colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) de esos repositorios.

- [Deje de ver los repositorios](https://github.com/watching) relacionados con el trabajo. No desearás volver a ver esas notificaciones.
- [Transfiera los repositorios de su propiedad](/articles/how-to-transfer-a-repository) en los que otros usuarios tengan que seguir trabajando después de irse.
- [Elimine las bifurcaciones que le pertenecen](/articles/deleting-a-repository) y que estén relacionadas con el trabajo que realizaba. No te preocupes, si eliminas una bifurcación no eliminarás el repositorio ascendente.
- Elimina copias locales de las bifurcaciones que pueden existir en tu computadora.

```shell
$ rm -rf <em>work_directory</em>
```
