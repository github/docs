---
title: Descargar los códigos de recuperación de inicio de sesión único SAML de tu organización
intro: 'Los administradores de la organización deben descargar los códigos de recuperación de inicio de sesión único SAML de la organización para asegurarse de poder acceder a {% data variables.product.product_name %} aun cuando el proveedor de identidad no se encuentre disponible para la organización.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126207'
---
Los códigos de recuperación no se deben compartir ni distribuir. Se recomienda guardarlos con un administrador de contraseñas, como [LastPass](https://lastpass.com/) o [1Password](https://1password.com/).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. En "SAML single sign-on" (Inicio de sesión único SAML), en la nota acerca de los códigos de recuperación, haga clic en **Save your recovery codes** (Guardar los códigos de recuperación).
![Enlace para ver y guardar los códigos de recuperación](/assets/images/help/saml/saml_recovery_codes.png)
6. Haga clic en **Download** (Descargar), **Print** (Imprimir) o **Copy** (Copiar) para guardar los códigos de recuperación.
![Botones para descargar, imprimir o copiar los códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Nota**: Los códigos de recuperación le ayudarán a volver a {% data variables.product.product_name %} si su IdP no está disponible. Si generas nuevos códigos de recuperación, los códigos de recuperación que se muestran en la página "Códigos de recuperación de inicio de sesión único" se actualizarán automáticamente.

  {% endnote %}

7. Una vez que usas un código de recuperación para obtener acceso nuevamente a {% data variables.product.product_name %}, no puedes volver a usarlo. El acceso a {% data variables.product.product_name %} solo estará disponible durante 24 horas antes de que se te solicite que inicies sesión usando inicio de sesión único.

## Información adicional

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Acceso a la organización en caso de que el proveedor de identidades no esté disponible](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)"
