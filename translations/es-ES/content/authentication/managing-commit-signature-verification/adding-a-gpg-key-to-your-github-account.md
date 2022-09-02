---
title: Adding a GPG key to your GitHub account
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
---

## About addition of GPG keys to your account

To sign commits associated with your account on {% data variables.product.product_name %}, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)" and "[Generating a new GPG key](/articles/generating-a-new-gpg-key)."

You can add multiple public keys to your account on {% data variables.product.product_name %}. Las confirmaciones que haya firmado cualquiera de las llaves privadas correspondientes se mostrarán como verificadas. Si eliminas una llave pública, cualquier confirmación que firme la llave privada correspondiente ya no se mostrará como verificada.

{% ifversion upload-expired-or-revoked-gpg-key %}
To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.

![A verified commit whose key expired](/assets/images/help/settings/gpg-verified-with-expired-key.png)
{% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, {% data variables.product.product_name %} extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to {% data variables.product.product_name %}. Until a matching GPG key is added to {% data variables.product.product_name %}, it cannot verify your signatures.

## Agregar una llave GPG

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Haz clic en **New GPG key** (Nueva llave GPG). ![Botón de llave GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. En el campo "Clave", pega la llave GPG que copiaste cuando [generó tu llave GPG](/articles/generating-a-new-gpg-key). ![Campo de llave](/assets/images/help/settings/gpg-key-paste.png)
5. Haz clic en **Add GPG key** (Agregar llave GPG). ![Botón Add key (Agregar llave)](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar la acción, escribe tu contraseña de {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %}
{% else %}
## Actualizar una llave GPG vencida

Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la clave no esté revocada o vencida. Si tu clave de firma está revocada o vencida, {% data variables.product.product_name %} no puede verificar tus firmas.

If your key is expired, you must [update its expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), export the new key, delete the expired key in your account on {% data variables.product.product_name %}, and add the new key to your account as described above. Tus confirmaciones y etiquetas previas se mostrarán como verificadas, siempre que la clave reúna todos los demás requisitos de verificación.

Si tu clave está revocada, utiliza la clave principal u otra clave que no esté revocada para firmar tus confirmaciones.

Si tu clave es inválida y no utilizas otra clave válida de tu conjunto de claves, pero en su lugar generas una llave GPG nueva con un conjunto nuevo de credenciales, tus confirmaciones hechas con la clave revocada o vencida se seguirán mostrando como no verificadas. Also, your new credentials will not be able to re-sign or verify your old commits and tags.
{% endif %}

## Leer más

- "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Informar a Git sobre tu llave de firma](/articles/telling-git-about-your-signing-key)"
- "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Firmar confirmaciones y etiquetas mediante llaves GPG](/articles/signing-commits-and-tags-using-gpg)"
- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
