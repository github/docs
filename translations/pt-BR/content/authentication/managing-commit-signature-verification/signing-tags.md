---
title: Signing tags
intro: You can sign tags locally using GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or S/MIME.
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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
2. Verify your signed tag by running `git tag -v [tag-name]`.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Further reading

- "[Viewing your repository's tags](/articles/viewing-your-repositorys-tags)"
- "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
- "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
- "[Signing commits](/articles/signing-commits)"
