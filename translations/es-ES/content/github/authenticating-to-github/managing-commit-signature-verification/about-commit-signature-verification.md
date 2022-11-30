---
title: Acerca de la verificación de firma de confirmación
intro: 'Puedes firmar etiquetas y confirmaciones localmente utilizando GPG o S/MIME. Estas etiquetas o confirmaciones se marcan como verificadas en {% data variables.product.product_name %} para que otras personas tengan la confianza de que los cambios vienen de una fuente confiable.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### Acerca de la verificación de firma de confirmación

Puedes firmar confirmaciones y etiquetas localmente para darles a otras personas la confianza necesaria sobre el origen de un cambio que hayas realizado. Si una confirmación o etiqueta tiene una firma GPG o S/MIME que se pueda verificar criptográficamente, GitHub la marcará como {% if currentVersion == "free-pro-team@latest" %}"Verificada" o "Verificada parcialmente".{% else %}"Verificada".{% endif %}

![Confirmación verificada](/assets/images/help/commits/verified-commit.png)

{% if currentVersion == "free-pro-team@latest" %}
Las confirmaciones y etiquetas tienen los siguientes estados de verificación dependiendo de si las habilitaste en modo vigilante. Predeterminadamente, el modo vigilante no está habilitado. Para obtener más información sobre cómo habilitar el modo vigilante, consulta la sección "[Mostrar los estados de verificación para todas tus confirmaciones](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

#### Estados predeterminados

| Estado                     | Descripción                                                 |
| -------------------------- | ----------------------------------------------------------- |
| **Verificado**             | La confirmación se firmó y la firma se verificó con éxito.  |
| **Sin verificar**          | La confirmación se firmó pero la firma no pudo verificarse. |
| Sin estado de verificación | La confirmación no se firmó.                                |

#### Estados con modo vigilante habilitado

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %}
Si una confirmaciòn o etiqueta tiene una firma que no puede verificarse, {% data variables.product.product_name %} marcarà la confirmaciòn o etiqueta como "No verificada".
{% endif %}

Los administradores de repositorios pueden implementar la firma de confirmación requerida en una rama para bloquear todas las confirmaciones que no estén firmadas y verificadas. Para obtener más información, consulta la sección "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-signed-commits)".

{% data reusables.identity-and-permissions.verification-status-check %}

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} utilizará GPG automáticamente para firmar las confirmaciones que hagas utilizando la interface web de {% data variables.product.product_name %}, con excepción de cuando combinas y fusionas una solicitud de cambios de la cual no seas autor. Las confirmaciones que firme {% data variables.product.product_name %} tendrán un estado verificado en {% data variables.product.product_name %}. Puedes verificar la firma localmente usando la clave pública disponible en https://github.com/web-flow.gpg. La huella dactilar completa de la llave es `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`. Opcionalmente, puedes elegir que {% data variables.product.product_name %} firme las confirmaciones que hagas en {% data variables.product.prodname_codespaces %}. Para obtener más información sobre cómo habilitar la verificación de GPG para tus codespaces, consulta la sección "[Administrar la verificación de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".
{% endif %}

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
