---
title: Acerca de la verificación de firma de confirmación
intro: 'Puedes firmar etiquetas y confirmaciones localmente utilizando GPG o S/MIME. Estas etiquetas o confirmaciones se marcan como verificadas en {% data variables.product.product_name %} para que otras personas tengan la confianza de que los cambios vienen de una fuente confiable.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 73f4c4ea28db9c0e9f012a2a9e9aa061d655e093
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/26/2022
ms.locfileid: '147409559'
---
## <a name="about-commit-signature-verification"></a>Acerca de la verificación de firma de confirmación

Puedes firmar confirmaciones y etiquetas localmente para darles a otras personas la confianza necesaria sobre el origen de un cambio que hayas realizado. Si una confirmación o etiqueta tiene una firma GPG o S/MIME que se pueda verificar criptográficamente, GitHub la marcará como {% ifversion fpt or ghec %}"Verificada" o "Parcialmente verificada".{% else %}"Verificada".{% endif %}

![Confirmación verificada](/assets/images/help/commits/verified-commit.png)

{% ifversion fpt or ghec %} Las confirmaciones y etiquetas tienen los siguientes estados de comprobación, en función de si ha habilitado el modo de vigilancia. Predeterminadamente, el modo vigilante no está habilitado. Para obtener información sobre cómo habilitar el modo de vigilancia, vea "[Representación de los estados de comprobación para todas las confirmaciones](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

La firma de confirmaciones difiere de la aprobación de confirmaciones. Para obtener más información sobre la aprobación de confirmaciones, consulta "[Administración de la directiva de aprobación de confirmaciones para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)".

### <a name="default-statuses"></a>Estados predeterminados

| Estado         | Descripción |
| -------------- | ----------- |
| **Verified**   | La confirmación se firmó y la firma se verificó con éxito.
| **Sin verificar** | La confirmación se firmó pero la firma no pudo verificarse.
| Sin estado de verificación | La confirmación no se firmó.

### <a name="signature-verification-for-rebase-and-merge"></a>Comprobación de firma para fusión mediante cambio de base y combinación
{% data reusables.pull_requests.rebase_and_merge_verification %}

Para más información, consulta "[Fusión mediante cambio de base y combinación de las confirmaciones](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)".

### <a name="statuses-with-vigilant-mode-enabled"></a>Estados con modo vigilante habilitado

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %} Si una confirmación o etiqueta tiene una firma que no se puede verificar, {% data variables.product.product_name %} la marcará como "No verificada".
{% endif %}

Los administradores de repositorios pueden implementar la firma de confirmación requerida en una rama para bloquear todas las confirmaciones que no estén firmadas y verificadas. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-signed-commits)".

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}Si un administrador de sitio ha habilitado la firma de confirmación web, {% data variables.product.product_name %} usará GPG automáticamente para firmar confirmaciones que realices con la interfaz web. Las confirmaciones firmadas por {% data variables.product.product_name %} tendrán un estado comprobado. Puede comprobar la firma localmente mediante la clave pública disponible en `https://HOSTNAME/web-flow.gpg`. Para obtener más información, consulta «[Configuración de la firma de confirmación web](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)».
{% else %}{% data variables.product.prodname_dotcom %} usará GPG automáticamente para firmar confirmaciones que realices con la interfaz web. Las confirmaciones firmadas por {% data variables.product.prodname_dotcom %} tendrán un estado comprobado. Puede comprobar la firma localmente mediante la clave pública disponible en https://github.com/web-flow.gpg. La huella digital completa de la clave es `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

Opcionalmente, puedes elegir que {% data variables.product.prodname_dotcom %} firme las confirmaciones que realices en {% data variables.product.prodname_github_codespaces %}. Para más información sobre cómo habilitar la comprobación de GPG para los codespaces, consulta "[Administración de la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".{% endif %} {% endif %}

## <a name="gpg-commit-signature-verification"></a>Verificación de firma de confirmación GPG

Puedes usar GPG para firmar confirmaciones con una clave GPG que generas tu mismo.

{% data variables.product.product_name %} utiliza librerías de OpenPGP para confirmar que tus confirmaciones y etiquetas firmadas localmente pueden verificarse con criptografía contra una llave pública que hayas agregado a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para firmar confirmaciones usando GPG y que esas confirmaciones sean verificadas en {% data variables.product.product_name %}, sigue estos pasos:

1. [Comprobación de las claves de GPG existentes](/articles/checking-for-existing-gpg-keys)
2. [Generación de una nueva clave SSH](/articles/generating-a-new-gpg-key)
3. [Incorporación de una clave de GPG a la cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account)
4. [Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)
5. [Firma de confirmaciones](/articles/signing-commits)
6. [Firma de etiquetas](/articles/signing-tags)

## <a name="smime-commit-signature-verification"></a>Verificación de firma de confirmación S/MIME

Puedes usar S/MIME para firmar confirmaciones con una clave X.509 emitida por tu organización.

En {% data variables.product.product_name %} se usa [el paquete ca-certificates de Debian](https://packages.debian.org/bullseye/ca-certificates), el mismo almacén de confianza que usan los exploradores Mozilla, para confirmar que las confirmaciones y etiquetas firmadas localmente se pueden verificar criptográficamente con una clave pública en un certificado raíz de confianza.

{% data reusables.gpg.smime-git-version %}

Para firmar confirmaciones usando S/MIME y que esas confirmaciones sean verificadas en {% data variables.product.product_name %}, sigue estos pasos:

1. [Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)
2. [Firma de confirmaciones](/articles/signing-commits)
3. [Firma de etiquetas](/articles/signing-tags)

No es necesario cargar tu clave pública a {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}
## <a name="signature-verification-for-bots"></a>Verificación de firma para bots

Las organizaciones y {% data variables.product.prodname_github_apps %} que requieren de la firma de confirmación pueden usar bots para firmar las confirmaciones. Si una confirmación o etiqueta tienen una firma de bot que es criptográficamente comprobable, {% data variables.product.product_name %} marca la confirmación o etiqueta como verificada.

La verificación de firma para bots solo funcionará si la solicitud se verifica y se autentica como la {% data variables.product.prodname_github_app %} o el bot y no contiene información de autor personalizada, información de persona que confirma el cambio personalizada ni información de firma personalizada, como API de confirmaciones.
{% endif %}

## <a name="further-reading"></a>Información adicional

- "[Firma de confirmaciones](/articles/signing-commits)"
- "[Firma de etiquetas](/articles/signing-tags)"
- "[Solución de problemas de comprobación de firma de confirmación](/articles/troubleshooting-commit-signature-verification)"
