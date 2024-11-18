---
title: Signing tags
intro: 'You can sign tags locally using GPG, SSH, or S/MIME.'
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. To sign a tag, add `-s` to your `git tag` command.

   ```shell
   $ git tag -s MYTAG
   # Creates a signed tag
   ```

1. Verify your signed tag by running `git tag -v [tag-name]`.

   ```shell
   $ git tag -v MYTAG
   # Verifies the signed tag
   ```

## Further reading

* "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)"
* "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)"
