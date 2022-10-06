---
title: Comprobar las llaves GPG existentes
intro: 'Antes de generar una llave GPG, puedes comprobar si tienes alguna clave GPG existente.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369301'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Nota:** GPG no se instala de forma predeterminada en macOS ni Windows. Para instalar las herramientas de línea de comandos de GPG, consulta la [página de descargas de GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. Comprueba el resultado de los comandos para ver si tienes un par de llaves GPG.
    * Si no hay pares de claves GPG o no quieres usar ninguno que esté disponible para firmar confirmaciones y etiquetas, [genera una nueva clave GPG](/articles/generating-a-new-gpg-key).
    * Si ya existe un par de llaves GPG y quieres utilizarlo para firmar confirmaciones y etiquetas, puedes mostrar la llave pública utilizando el siguiente comando, sustituyendo la ID de la llave GPG que te gustaría usar. En este ejemplo, el id. de clave de GPG es `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Después, puedes [agregar la clave GPG a la cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Información adicional

* "[Generación de una clave GPG nueva](/articles/generating-a-new-gpg-key)"
* "[Adición de una clave de GPG a una cuenta de GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
* "[Asociación de un correo electrónico con la clave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firma de confirmaciones](/articles/signing-commits)"
* "[Firma de etiquetas](/articles/signing-tags)"
