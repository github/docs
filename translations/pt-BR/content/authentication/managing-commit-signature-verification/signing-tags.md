---
title: Assinar tags
intro: 'Você pode assinar as tags localmente usando GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} ou S/MIME.'
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

1. Para assinar uma tag, adicione `-s` ao comando `git tag`.
  ```shell
  $ git tag -s <em>mytag</em>
  # Creates a signed tag
  ```
2. Verifique a tag assinada executando `git tag -v [tag-name]`.
  ```shell
  $ git tag -v <em>mytag</em>
  # Verifies the signed tag
  ```

## Leia mais

- "[Exibir tags do seu repositório](/articles/viewing-your-repositorys-tags)"
- "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
- "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Assinar commits](/articles/signing-commits)"
