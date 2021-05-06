---
title: Asociar un correo electrónico con tu llave GPG
intro: 'Tu llave GPG debe estar asociada con un correo electrónico verificado de {% data variables.product.product_name %} que coincida con tu identidad de persona que confirma el cambio.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% note %}

Si estás usando una llave GPG que coincide con la identidad de la persona que confirma el cambio y con tu dirección de correo electrónico verificada asociada a tu {% data variables.product.product_name %} cuenta, puedes comenzar a firmar confirmaciones y firmar etiquetas.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. Escribe `gpg --edit-key GPG key ID`, sustituyendo la ID de la llave GPG que te gustaría usar. En el siguiente ejemplo, el ID de llave GPG es `3AA5C34371567BD2`:
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. Escribe `gpg> adduid` para agregar los detalles de ID de usuario.
  ```shell
  $ gpg> adduid
  ```
6. Sigue las indicaciones para suminsitrar tu nombre real, dirección de correo electrónica o cualquier comentario. Puedes modificar tus entradas al elegir `N`, `C` o `E`. {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta "[Configurar la confirmación de tu dirección de correo electrónico](/articles/setting-your-commit-email-address)."{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Escribe `O` para guardar tus selecciones.
8. Escribe la contraseña de tu llave.
9. Escribe `gpg --armor --export GPG key ID`, sustituyendo la ID de la llave GPG que te gustaría usar. En el siguiente ejemplo, el ID de llave GPG es `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
10. Carga la llave GPG al [agregarla a tu cuenta GitHub](/articles/adding-a-new-gpg-key-to-your-github-account).

### Leer más

- "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Utilizar una dirección de correo electrónico verificada en tu llave GPG](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Agregar una llave GPG nueva a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
