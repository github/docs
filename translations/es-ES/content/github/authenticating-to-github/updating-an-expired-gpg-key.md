---
title: Actualizar una llave GPG vencida
intro: 'Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la clave no esté revocada o vencida. Si tu clave de firma está revocada o vencida, {% data variables.product.product_name %} no puede verificar tus firmas. Si tu clave está revocada, utiliza la clave principal u otra clave que no esté revocada para firmar tus confirmaciones.'
redirect_from:
  - /articles/updating-an-expired-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si tu clave está vencida, debes [actualizar el vencimiento](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), exportar la clave nueva, eliminar la clave vencida en tu cuenta de GitHub y [cargar la clave nueva para GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/). Tus confirmaciones y etiquetas previas se mostrarán como verificadas, siempre que la clave reúna todos los demás requisitos de verificación.

Si tu clave es inválida y no utilizas otra clave válida de tu conjunto de claves, pero en su lugar generas una llave GPG nueva con un conjunto nuevo de credenciales, tus confirmaciones hechas con la clave revocada o vencida se seguirán mostrando como no verificadas. Asimismo, tus credenciales nuevas no podrán volver a firmar o verificar tus confirmaciones y etiquetas antiguas.

### Further reading

- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
