---
title: Firmar confirmaciones
intro: Puedes firmar las confirmaciones localmente utilizando GPG o S/MIME.
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Tips:**

Para configurar tu cliente Git para firmar confirmaciones por defecto de un repositorio local, en versiones Git 2.0.0 y superiores, ejecuta `git config commit.gpgsign true`. Para firmar todas las confirmaciones por defecto en cualquier repositorio local en tu computadora, ejecuta `git config --global commit.gpgsign true`.

Para almacenar tus contraseña de llave GPG para no tener que ingresarla cada vez que firmas una confirmación, recomendamos utilizando las siguientes herramientas:
  - Para los usuarios de Mac, la [GPG Suite](https://gpgtools.org/) te permite almacenar tu contraseña de llave GPG en la keychain de Mac OS.
  - Para los usuarios de Windows, [Gpg4win](https://www.gpg4win.org/) se integra con otras herramientas de Windows.

También puedes configurar de forma manual [gpg-agent](http://linux.die.net/man/1/gpg-agent) para guardar tu contraseña de llave GPG, pero esta no se integra con la keychain de Mac OS como ssh-agent y requiere mayor configuración.

{% endtip %}

Si tienes múltiples llaves o estás intentando firmar confirmaciones o etiquetas con una llave que no coincide con tu identidad de persona que confirma el cambio, deberías [informarle a Git acerca de tu llave de firma](/articles/telling-git-about-your-signing-key).

1. Cuando confirmas los cambios en tu rama local, agrega la marca -S al comando de confirmación de Git:
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Creates a signed commit
  ```
2. Si estás utilizando GPG, después de crear tu confirmación, proporciona la contraseña que configuraste cuando [generaste tu llave GPG](/articles/generating-a-new-gpg-key).
3. Cuando terminaste de crear confirmaciones de forma local, súbelas a tu repositorio remoto en {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. Activado
{% data variables.product.product_name %}, navega a tu solicitud de cambios.
{% data reusables.repositories.review-pr-commits %}
5. Para ver información más detallada acerca de la firma verificada, haz clic en Verified (Verificada). ![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### Leer más

* "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
* "[Agregar una nueva llave GPG a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Informar a Git sobre tu llave de firma](/articles/telling-git-about-your-signing-key)"
* "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Firmar etiquetas](/articles/signing-tags)"
