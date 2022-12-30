---
title: Adición de una clave de GPG a una cuenta de GitHub
intro: 'Para configurar tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. para que utilice tu llave GPG nueva (o existente), también necesitarás la llave a tu cuenta.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369348'
---
## Acerca de la adición de claves de GPG a una cuenta

Para firmar confirmaciones asociadas a tu cuenta en {% data variables.product.product_name %}, puedes agregar una clave de GPG pública a tu cuenta personal. Antes de agregar una clave, conviene comprobar si hay claves existentes. Si no encuentras ninguna clave existente, puedes generar y copiar una nueva. Para obtener más información, consulta [Comprobación de claves de GPG existentes](/articles/checking-for-existing-gpg-keys) y [Generación de una nueva clave de GPG](/articles/generating-a-new-gpg-key).

Puedes agregar varias claves públicas a tu cuenta en {% data variables.product.product_name %}. Las confirmaciones firmadas por cualquiera de las claves privadas correspondientes se mostrarán como comprobadas. Si quitas una clave pública, las confirmaciones firmadas por la clave privada correspondiente ya no se mostrarán como comprobadas.

{% ifversion upload-expired-or-revoked-gpg-key %} Para comprobar tantas confirmaciones como sea posible, puedes agregar claves expiradas y revocadas. Si la clave cumple todos los demás requisitos de comprobación, las confirmaciones firmadas previamente por cualquiera de las claves privadas correspondientes se mostrarán como comprobadas, e indicarán que su clave de firma ha expirado o revocado.

![Una confirmación comprobada cuya clave ha expirado](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Al comprobar una firma, {% data variables.product.product_name %} extrae la firma e intenta analizar su identificador de clave. Luego, el identificador de clave se coteja con las claves agregadas a {% data variables.product.product_name %} para hallar una coincidencia. {% data variables.product.product_name %} no puede verificar firmas mientras no tenga agregada una clave de GPG.

## Agregar una llave GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Haga clic en **Nueva clave de GPG**.
   ![Botón de clave de GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. En el campo "Clave", pegue la clave de GPG que ha copiado al [generar la clave de GPG](/articles/generating-a-new-gpg-key).
   ![El campo de clave](/assets/images/help/settings/gpg-key-paste.png)
5. Haga clic en **Agregar clave de GPG**.
   ![Botón Agregar clave](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar la acción, escribe tu contraseña de {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## Actualizar una llave GPG vencida

Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la clave no esté revocada o vencida. Si tu clave de firma está revocada o vencida, {% data variables.product.product_name %} no puede verificar tus firmas.

Si la clave ha expirado, debes [actualizar su expiración](https://www.gnupg.org/gph/en/manual.html#AEN329), exportar la nueva clave, eliminar la clave expirada de tu cuenta en {% data variables.product.product_name %} y agregar la nueva clave a la cuenta, tal y como se ha descrito anteriormente. Tus confirmaciones y etiquetas previas se mostrarán como verificadas, siempre que la clave reúna todos los demás requisitos de verificación.

Si tu clave está revocada, utiliza la clave principal u otra clave que no esté revocada para firmar tus confirmaciones.

Si tu clave es inválida y no utilizas otra clave válida de tu conjunto de claves, pero en su lugar generas una llave GPG nueva con un conjunto nuevo de credenciales, tus confirmaciones hechas con la clave revocada o vencida se seguirán mostrando como no verificadas. Asimismo, las nuevas credenciales no podrán volver a firmar o verificar las confirmaciones y etiquetas antiguas.
{% endif %}

## Información adicional

- "[Comprobación de claves de GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generación de una clave GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
- "[Asociación de un correo electrónico con la clave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Firma de confirmaciones y etiquetas mediante claves de GPG](/articles/signing-commits-and-tags-using-gpg)"
- "[Acerca de la verificación de firma de confirmación](/articles/about-commit-signature-verification)"
