---
title: Utilizar una dirección de correo electrónico verificada en tu llave GPG
intro: 'Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la dirección de correo electrónico de la persona que confirma el cambio o del etiquetador coincida con una dirección de correo electrónico de las identidades de llave GPG y que sea una dirección de correo electrónico verificada en la cuenta del usuario. Esto garantiza que la clave te pertenece y que tú creaste la confirmación o etiqueta.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
Si debes verificar tu dirección de correo electrónico de GitHub, consulta "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address/)".
{% endif %}Si debes actualizar o agregar una dirección de correo electrónico para tu llave GPG, consulta "[Asociar un correo electrónico a tu llave GPG](/articles/associating-an-email-with-your-gpg-key)".

Las confirmaciones y etiquetas pueden contener varias direcciones de correo electrónico. Para las confirmaciones, está el autor —la persona que escribió el código— y la persona que confirma el cambio —la persona que agregó la confirmación al árbol—. Cuando se firma una confirmación con Git, sea durante una fusión, cherry-picking o `confirmación git` normal, la dirección de correo electrónico de la persona que confirma el cambio debe ser la tuya, incluso si la dirección de correo electrónico del autor no lo es. Con las etiquetas es más simple: la dirección de correo electrónico del etiquetador es siempre la del usuario que creó la etiqueta.

Si debes cambiar la dirección de correo electrónico de la persona que confirma el cambio o del etiquetador, consulta "[Establecer tu dirección de correo electrónico de confirmaciones](/articles/setting-your-commit-email-address/)".

### Leer más

- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
