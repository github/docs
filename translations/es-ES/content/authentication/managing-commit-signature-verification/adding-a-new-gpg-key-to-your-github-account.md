---
title: Agregar una llave GPG nueva a tu cuenta de GitHub
intro: Para configurar tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. para que utilice tu llave GPG nueva (o existente), también necesitarás la llave a tu cuenta.
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145091797"
---
Antes de agregar una llave GPG nueva a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}., debes tener:
- [Comprobado las claves de GPG existentes](/articles/checking-for-existing-gpg-keys)
- [Generado y copiado una clave de GPG nueva](/articles/generating-a-new-gpg-key)

Puedes agregar varias claves públicas a tu cuenta de GitHub. Las confirmaciones firmadas por cualquiera de las claves privadas correspondientes se mostrarán como comprobadas. Si quitas una clave pública, las confirmaciones firmadas por la clave privada correspondiente ya no se mostrarán como comprobadas.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Al comprobar una firma, la extraemos e intentamos analizar su identificador de clave, que comparamos con las claves cargadas en {% data variables.product.product_name %}. Hasta que cargues tu llave de GPG a {% data variables.product.product_name %}, no podemos verificar tus firmas.

## <a name="adding-a-gpg-key"></a>Agregar una llave GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Haga clic en **Nueva clave de GPG**.
   ![Botón de clave de GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. En el campo "Clave", pegue la clave de GPG que ha copiado al [generar la clave de GPG](/articles/generating-a-new-gpg-key).
   ![El campo de clave](/assets/images/help/settings/gpg-key-paste.png)
5. Haga clic en **Agregar clave de GPG**.
   ![Botón Agregar clave](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar la acción, escribe tu contraseña de {% data variables.product.product_name %}.

## <a name="further-reading"></a>Información adicional

* "[Comprobación de claves de GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Generación de una clave GPG nueva](/articles/generating-a-new-gpg-key)"
* "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
* "[Asociación de un correo electrónico con la clave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firma de confirmaciones y etiquetas mediante claves de GPG](/articles/signing-commits-and-tags-using-gpg)"
