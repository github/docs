---
title: Acerca de la verificación de firma de confirmación
intro: 'Usar GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} o S/MIME{% endif %}, puedes firmar etiquetas y confirmaciones de cambios localmente. Estas etiquetas o confirmaciones se marcan como verificadas en {% data variables.product.product_name %}, para que otras personas puedan confiar en que los cambios vienen de una fuente confiable.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de la verificación de firma de confirmación

Puedes firmar confirmaciones y etiquetas localmente, para que otras personas puedan verificar que tu trabajo viene de una fuente confiable. Si una confirmación o etiqueta tienen una firma GPG o S/MINE que es criptográficamente comprobable, {% data variables.product.product_name %} marca la confirmación o etiqueta como verificada.

![Confirmación verificada](/assets/images/help/commits/verified-commit.png)

Si una confirmación o etiqueta tiene una firma que no puede ser comprobada, {% data variables.product.product_name %} marca la confirmación o la etiqueta como no verificada.

Los administradores de repositorios pueden implementar la firma de confirmación requerida en una rama para bloquear todas las confirmaciones que no estén firmadas y verificadas. Para obtener más información, consulta "[Acerca de la firma de confirmación requerida](/articles/about-required-commit-signing)".

Puedes comprobar el estado de verificación de tus confirmaciones o etiquetas firmadas en {% data variables.product.product_name %} y ver por qué las firmas de tu confirmación podrían no ser verificadas. Para obtener más información, consulta "[Comprobar la confirmación y el estado de verificación de firma de la etiqueta](/articles/checking-your-commit-and-tag-signature-verification-status)".

{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.product_name %} utilizará GPG automáticamente para firmar las confirmaciones que hagas utilizando la interface web de {% data variables.product.product_name %} con excepción de cuando combinas y fusionas una solicitud de extracción de la cual no seas autor. Las confirmaciones que firme {% data variables.product.product_name %} tendrán un estado verificado en {% data variables.product.product_name %}. Puedes verificar la firma localmente usando la clave pública disponible en https://github.com/web-flow.gpg.{% endif %}

### Verificación de firma de confirmación GPG

Puedes usar GPG para firmar confirmaciones con una clave GPG que generas tu mismo.

{% data variables.product.product_name %} usa las bibliotecas OpenPGP para confirmar que tus confirmaciones y etiquetas firmadas localmente son criptográficamente comprobables con una clave pública que has agregado a tu cuenta de {% data variables.product.product_name %}.

Para firmar confirmaciones usando GPG y que esas confirmaciones sean verificadas en {% data variables.product.product_name %}, sigue estos pasos:

1. [Comprobar las claves GPG existentes](/articles/checking-for-existing-gpg-keys)
2. [Generar una clave GPG nueva](/articles/generating-a-new-gpg-key)
3. [Agregar una clave GPG nueva a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Informarle a Git acerca de tu clave de firma](/articles/telling-git-about-your-signing-key)
5. [Firmar confirmaciones](/articles/signing-commits)
6. [Firmar etiquetas](/articles/signing-tags)

### Verificación de firma de confirmación S/MIME

Puedes usar S/MIME para firmar confirmaciones con una clave X.509 emitida por tu organización.

{% data variables.product.product_name %} usa [el paquete de certificados CA Debian](https://packages.debian.org/hu/jessie/ca-certificates), el mismo almacenamiento de confianza usado por los navegadores Mozilla, para confirmar que tus confirmaciones y etiquetas firmadas localmente son criptográficamente comprobables con una clave pública en un certificado raíz de confianza.

{% data reusables.gpg.smime-git-version %}

Para firmar confirmaciones usando S/MIME y que esas confirmaciones sean verificadas en {% data variables.product.product_name %}, sigue estos pasos:

1. [Informarle a Git acerca de tu clave de firma](/articles/telling-git-about-your-signing-key)
2. [Firmar confirmaciones](/articles/signing-commits)
3. [Firmar etiquetas](/articles/signing-tags)

No es necesario cargar tu clave pública a {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Verificación de firma para bots

Las organizaciones y {% data variables.product.prodname_github_app %}s que requieren de la firma de confirmación pueden usar bots para firmar las confirmaciones. Si una confirmación o etiqueta tienen una firma de bot que es criptográficamente comprobable, {% data variables.product.product_name %} marca la confirmación o etiqueta como verificada.

La verificación de firma para bots solo funcionará si la solicitud se verifica y se autentica como la {% data variables.product.prodname_github_app %} o el bot y no contiene información de autor personalizada, información de persona que confirma el cambio personalizada ni información de firma personalizada, como API de confirmaciones.
{% endif %}

### Leer más

- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
- "[Solucionar problemas de la verificación de firma de confirmación](/articles/troubleshooting-commit-signature-verification)"
