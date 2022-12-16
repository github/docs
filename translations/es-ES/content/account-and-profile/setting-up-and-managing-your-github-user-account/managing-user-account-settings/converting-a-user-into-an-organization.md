---
title: Convertir un usuario en una organización
redirect_from:
- /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
- /articles/explaining-the-account-transformation-warning
- /articles/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: User into an organization
ms.openlocfilehash: 0c167e3e389230e6ac2dccb9f1f2f3dc67791bd0
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145069958"
---
{% warning %}

**Advertencia**: Antes de convertir un usuario en una organización, tenga en cuenta estos puntos:

 - **Ya no** podrás iniciar sesión en la cuenta personal convertida.
 - **Ya no** podrás crear o modificar gists que pertenecen a la cuenta personal convertida.
 - Una organización **no** se puede volver a convertir en un usuario.
 - Las claves SSH, los tokens de OAuth, los perfiles de trabajo, las reacciones y la información asociada con el usuario, **no** se transferirán a la organización. Esto solo es cierto para la cuenta personal que se está convirtiendo, no para ninguno de los colaboradores de la cuenta personal.
 - Todas las confirmaciones realizadas con la cuenta personal convertida **ya no estarán vinculadas** a esa cuenta. Las propias confirmaciones **permanecerán** intactas.
 - Todas las bifurcaciones de un repositorio privado que se hagan con la cuenta personal convertida se borrarán.

{% endwarning %}

## <a name="keep-your-personal-account-and-create-a-new-organization-manually"></a>Conservar la cuenta personal y crear una nueva organización manualmente

Si quieres que la organización tenga el mismo nombre que estás usando actualmente para tu cuenta personal, o si quieres que la información de tu cuenta personal permanezca intacta, debes crear una organización nueva y transferirle tus repositorios, en lugar de convertir tu cuenta personal en una organización.

1. A fin de conservar el nombre actual de tu cuenta personal para uso personal, [cambia el nombre de tu cuenta personal](/articles/changing-your-github-username) por uno nuevo que te guste.
2. [Crea una organización](/articles/creating-a-new-organization-from-scratch) con el nombre original de tu cuenta personal.
3. [Transfiera los repositorios](/articles/transferring-a-repository) a la nueva cuenta de la organización.

## <a name="convert-your-personal-account-into-an-organization-automatically"></a>Convertir tu cuenta personal en una organización automáticamente

También puedes convertir tu cuenta personal directamente en una organización. Convertir tu cuenta:
 - Preserva los repositorios ya que no tienen la necesidad de ser transferidos a otra cuenta manualmente
 - Invita automáticamente a los colaboradores a equipos con permisos equivalentes a los que tenían antes {% ifversion fpt or ghec %}. Para las cuentas personales de {% data variables.product.prodname_pro %}, realiza la transición de la facturación a la [versión de pago {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) de forma automática, sin necesidad de volver a introducir la información de pago, ajustar el ciclo de facturación o duplicar el pago en ningún momento{% endif %}

1. Crea una nueva cuenta personal, que usarás para iniciar sesión en GitHub y acceder a la organización y a tus repositorios después de la conversión.
2.  [Abandona las organizaciones](/articles/removing-yourself-from-an-organization) a las que se haya unido la cuenta personal que vas a convertir.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. En "Transform account", haga clic en **Turn <username> into an organization**.
    ![Botón para convertir la organización](/assets/images/help/settings/convert-to-organization.png)
6. En el cuadro de diálogo Account Transformation Warning (Advertencia de transformación de la cuenta), revisa y confirma la confirmación. Ten en cuenta que la información en este cuadro es la misma que la advertencia en la parte superior de este artículo.
    ![Advertencia de conversión](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. En la página "Transform your user into an organization" (Transformar tu usuario en una organización), debajo de "Choose an organization owner" (Elegir un propietario de la organización), elige la cuenta personal secundaria que creaste en la sección anterior u otro usuario en quien confías para administrar la organización.
    ![Página Add organization owner](/assets/images/help/organizations/organization-add-owner.png)
8. Escoge la nueva suscripción de la organización y escribe tu información de facturación si se te solicita.
9. Haga clic en **Create organization**.
10. Inicia sesión en la nueva cuenta personal que has creado en el paso uno y, después, usa el conmutador de contexto para acceder a tu nueva organización.

{% tip %}

**Sugerencia**: al convertir una cuenta personal en una organización, los colaboradores de repositorios pertenecientes a la cuenta se agregarán a la nueva organización como *colaboradores externos*. Después, si quiere puede invitar a los *colaboradores externos* a que se conviertan en miembros de la organización nueva. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## <a name="further-reading"></a>Información adicional
- "[Configuración de equipos](/articles/setting-up-teams)" {% ifversion fpt or ghec %}- "[Invitación a los usuarios a unirse a la organización](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acceso a una organización](/articles/accessing-an-organization)"
