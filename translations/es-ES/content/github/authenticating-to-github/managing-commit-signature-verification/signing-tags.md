---
title: Firmar etiquetas
intro: Puedes firmar las etiquetas localmente utilizando GPG o S/MIME.
redirect_from:
  - /articles/signing-tags-using-gpg/
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Para firmar una etiqueta, agrega `-s` a tu comando `git tag`.
  ```shell
  $ git tag -s <em>mytag</em>
  # Creates a signed tag
  ```
2. Verifica tu etiqueta firmada al ejecutar `git tag -v [tag-name]`.
  ```shell
  $ git tag -v <em>mytag</em>
  # Verifies the signed tag
  ```

### Leer más

- [Ver las etiquetas de tu repositorio](/articles/viewing-your-repositorys-tags)"
- "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Agregar una nueva llave GPG a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Informar a Git sobre tu llave de firma](/articles/telling-git-about-your-signing-key)"
- "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Firmar confirmaciones](/articles/signing-commits)"
