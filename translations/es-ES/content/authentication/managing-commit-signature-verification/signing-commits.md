---
title: Firmar confirmaciones
intro: 'Puedes firmar confirmaciones localmente mediante GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} o S/MIME.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106753'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Sugerencias:**

Para configurar su cliente Git a fin de firmar confirmaciones de manera predeterminada de un repositorio local, en versiones de Git 2.0.0 y posteriores, ejecute `git config commit.gpgsign true`. Para firmar todas las confirmaciones de manera predeterminada en cualquier repositorio local del equipo, ejecute `git config --global commit.gpgsign true`.

Para almacenar tus contraseña de llave GPG para no tener que ingresarla cada vez que firmas una confirmación, recomendamos utilizando las siguientes herramientas:
  - Para los usuarios de Mac, [GPG Suite](https://gpgtools.org/) permite almacenar su frase de contraseña de clave GPG en la cadena de claves de Mac OS.
  - Para los usuarios de Windows, [Gpg4win](https://www.gpg4win.org/) se integra con otras herramientas de Windows.

También puede configurar de forma manual [gpg-agent](http://linux.die.net/man/1/gpg-agent) para guardar su frase de contraseña de clave GPG, pero esta no se integra con la cadena de claves de Mac OS como ssh-agent y requiere mayor configuración.

{% endtip %}

Si tiene varias claves o está intentando firmar confirmaciones o etiquetas con una clave que no coincide con su identidad de confirmante del cambio, debería [informarle a Git acerca de su clave de firma](/articles/telling-git-about-your-signing-key).

1. Cuando confirmas los cambios en tu rama local, agrega la marca -S al comando de confirmación de Git:
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. Si usa GPG, después de crear la confirmación, proporcione la frase de contraseña que configuró al [generar la clave GPG](/articles/generating-a-new-gpg-key).
3. Cuando terminaste de crear confirmaciones de forma local, súbelas a tu repositorio remoto en {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. En {% data variables.product.product_name %}, desplázate hasta la solicitud de extracción.
{% data reusables.repositories.review-pr-commits %}
5. Para ver información más detallada acerca de la firma verificada, haz clic en Verified (Verificada).
![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## Información adicional

* "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
* "[Firma de etiquetas](/articles/signing-tags)"
