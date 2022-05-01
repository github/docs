---
title: Agregar una llave GPG nueva a tu cuenta de GitHub
intro: 'Para configurar tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. para que utilice tu llave GPG nueva (o existente), también necesitarás la llave a tu cuenta.'
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
shortTitle: Agrega una llave GPG
---

Antes de agregar una llave GPG nueva a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}., debes tener:
- [Comprobado tus llaves GPG existentes](/articles/checking-for-existing-gpg-keys)
- [Generado y copiado una nueva llave GPG](/articles/generating-a-new-gpg-key)

You can add multiple public keys to your GitHub account. Commits signed by any of the corresponding private keys will show as verified. If you remove a public key, any commits signed by the corresponding private key will no longer show as verified.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Al verificar una firma, extraemos la firma e intentamos analizar sus id de llave. Complementamos los id de llave con las llaves cargadas a {% data variables.product.product_name %}. Hasta que cargues tu llave de GPG a {% data variables.product.product_name %}, no podemos verificar tus firmas.

## Agregar una llave GPG

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Haz clic en **New GPG key** (Nueva llave GPG). ![Botón de llave GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. En el campo "Clave", pega la llave GPG que copiaste cuando [generó tu llave GPG](/articles/generating-a-new-gpg-key). ![Campo de llave](/assets/images/help/settings/gpg-key-paste.png)
5. Haz clic en **Add GPG key** (Agregar llave GPG). ![Botón Add key (Agregar llave)](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar la acción, escribe tu contraseña de {% data variables.product.product_name %}.

## Leer más

* "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
* "[Informar a Git sobre tu llave de firma](/articles/telling-git-about-your-signing-key)"
* "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firmar confirmaciones y etiquetas mediante llaves GPG](/articles/signing-commits-and-tags-using-gpg)"
