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
shortTitle: Llaves GPG existentes
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Nota:** GPG no viene instalado predeterminadamente en macOS ni Windows. Para instalar las herramientas de la línea de comando, consulta [Página de descarga de GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. Comprueba el resultado de los comandos para ver si tienes un par de llaves GPG.
    * Si no hay pares de llaves GPG o no quieres usar algunas de las que están disponibles para las confirmaciones y las etiquetas firmadas, [genera una nueva llave GPG](/articles/generating-a-new-gpg-key).
    * Si ya existe un par de llaves GPG y quieres utilizarlo para firmar confirmaciones y etiquetas, puedes mostrar la llave pública utilizando el siguiente comando, sustituyendo la ID de la llave GPG que te gustaría usar. En este ejemplo, el ID de la llave GPG es `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Entonces podrás [Agregar tu llave GPG a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account).

## Leer más

* "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
* "[Agregar una nueva llave GPG a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Informar a Git sobre tu llave de firma](/articles/telling-git-about-your-signing-key)"
* "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firmar confirmaciones](/articles/signing-commits)"
* "[Firmar etiquetas](/articles/signing-tags)"
