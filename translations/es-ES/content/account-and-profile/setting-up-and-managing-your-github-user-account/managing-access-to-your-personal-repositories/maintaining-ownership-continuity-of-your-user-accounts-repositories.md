---
title: Mantener la continuidad de la propiedad para los repositorios de tu cuenta de usuario
intro: You can invite someone to manage your user owned repositories if you are not able to.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092280"
---
## <a name="about-successors"></a>Acerca de los sucesores

Te recomendamos invitar a otro usuario de {% data variables.product.company_short %} para que sea tu sucesor y que así administre los repositorios que te pertenezcan si tú no puedes hacerlo. Como sucesores, tendrán permisos para:

- Archivar tus repositorios públicos.
- Transferir tus repositorios públicos a su propia cuenta de usuario.
- Transferir tus repositorios públicos a una organización donde puedan crear repositorios.

Los sucesores no pueden iniciar sesión en tu cuenta.

Un sucesor designado puede administrar tus repositorios públicos después de presentar un certificado de defunción y esperar por 7 días o presentar un obituario y esperar por 21 días. Para más información, vea "[Política de Usuario Finado {% data variables.product.company_short %}](/free-pro-team@latest/github/site-policy/github-deceased-user-policy)".

Para solicitar acceso para administrar repositorios como sucesor, póngase en contacto con [Soporte técnico de GitHub](https://support.github.com/contact?tags=docs-accounts).

## <a name="inviting-a-successor"></a>Invitar un sucesor
La persona que invites para ser tu sucesor deberá tener una cuenta de {% data variables.product.company_short %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Debajo de "Ajustes de sucesor", para invitar a un sucesor, comienza a escribir el nombre de usuario, nombre completo, o dirección de correo electrónico. Posteriormente, da clic en su nombre cuando éste aparezca.
   ![Campo de búsqueda para invitación de sucesor](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. Haga clic en **Agregar sucesor**.
{% data reusables.user-settings.sudo-mode-popup %}
5. El usuario que has invitado se listará como "Pendiente" hasta que acepte convertirse en tu sucesor.
   ![Invitación de sucesor pendiente](/assets/images/help/settings/settings-pending-successor.png)
