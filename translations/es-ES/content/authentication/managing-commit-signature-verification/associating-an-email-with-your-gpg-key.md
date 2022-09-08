---
title: Asociar un correo electrónico con tu llave GPG
intro: 'Tu llave GPG debe estar asociada con un correo electrónico verificado de {% data variables.product.product_name %} que coincida con tu identidad de persona que confirma el cambio.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: d36c053e1df0c329fb8d4607b1338c49414e76de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369285'
---
{% note %}

Si estás utilizando una llave GPG que empata con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada con tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. Escriba `gpg --edit-key GPG key ID` y sustituya el id. de la clave de GPG que quiera usar. En el ejemplo siguiente, el identificador de clave de GPG es `3AA5C34371567BD2`:
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. Escriba `gpg> adduid` para agregar los detalles del identificador de usuario.
  ```shell
  $ gpg> adduid
  ```
6. Sigue las indicaciones para suminsitrar tu nombre real, dirección de correo electrónica o cualquier comentario. Puede modificar las entradas si elige `N`, `C`o `E`. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Para más información, vea "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Escriba `O` para confirmar las selecciones.
8. Escribe la contraseña de tu llave.
9. Escriba `gpg> save` para guardar los cambios.
  ```shell
  $ gpg> save
  ```
10. Escriba `gpg --armor --export GPG key ID` y sustituya el id. de la clave de GPG que quiera usar. En el ejemplo siguiente, el identificador de clave de GPG es `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
11. Para cargar la clave de GPG, [agréguela a la cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Información adicional

- "[Comprobación de claves de GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generación de una clave de GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Uso de una dirección de correo electrónico verificada en la clave de GPG](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Adición de una clave de GPG a una cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
- "[Firma de confirmaciones](/articles/signing-commits)"
- "[Firma de etiquetas](/articles/signing-tags)"
