---
title: Generar una llave GPG nueva
intro: 'Si no tienes una llave GPG existentes, puedes generar una nueva llave GPG para usarla para firmar confirmaciones y etiquetas.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710231'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Generar una llave GPG

{% note %}

**Nota:** Antes de generar una nueva clave GPG, asegúrate de haber verificado tu dirección de correo electrónico. Si no has verificado tu dirección de correo electrónico, no podrás firmar confirmaciones ni etiquetas con GPG.{% ifversion fpt or ghec %} Para obtener más información, consulta "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address)". {% endif %}

{% endnote %}

1. Descarga e instala [las herramientas de línea de comandos de GPG](https://www.gnupg.org/download/) para tu sistema operativo. Generalmente recomendamos instalar la versión más reciente para tu sistema operativo.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Genera un par de la llave GPG. Dado que hay varias versiones de GPG, puede que necesites consultar la [_página man_](https://en.wikipedia.org/wiki/Man_page) correspondiente para encontrar el comando de generación de clave adecuado. Tu llave debe utilizar RSA.
    - Si estás usando una versión 2.1.17 o superior, copia el siguiente texto para generar un par de la llave GPG.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - Si no estás en la versión 2.1.17 o una versión posterior, el comando `gpg --full-generate-key` no funciona. Copia el siguiente texto y continúa con el paso 6.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. En el símbolo del sistema, especifica el tipo de clave que quieras o presiona `Enter` para aceptar el valor predeterminado.
5. En el símbolo del sistema, especifica el tamaño de clave que quieras o presiona `Enter` para aceptar el valor predeterminado. La clave debe tener al menos `4096` bits.
6. Ingresa el periodo de validez que deberá tener la llave. Presiona `Enter` para especificar la selección predeterminada, que indica que la clave no expira. A menos que necesites una fecha de expiración, se recomienda aceptar este valor predeterminado.
7. Verifica que tus selecciones sean correctas.
8. Ingresa tu información de ID de usuario.

  {% note %}

  **Nota:** Cuando se te pida que escribas tu dirección de correo electrónico, asegúrate de escribir la dirección de correo electrónico verificada para tu cuenta de Github. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Para obtener más información, consulta "[Verificación de la dirección de correo electrónico](/articles/verifying-your-email-address)" y "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".{% endif %}

  {% endnote %}

9. Escribe una contraseña segura.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. Pega el siguiente texto sustituyendo el ID de la llave GPG que deseas usar. En este ejemplo, el id. de clave de GPG es `3AA5C34371567BD2`:
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. Copia la clave de GPG, que empieza por `-----BEGIN PGP PUBLIC KEY BLOCK-----` y termina con `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Agrega la clave de GPG a la cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Información adicional

* "[Comprobación de claves de GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Adición de una clave de GPG a una cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
* "[Asociación de un correo electrónico con la clave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firma de confirmaciones](/articles/signing-commits)"
* "[Firma de etiquetas](/articles/signing-tags)"
