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
category:
  - Sign your commits
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

> [!TIP]
> To configure your Git client to sign tags by default for a local repository, in Git versions 2.23.0 and above, run `git config tag.gpgsign true`. To sign all tags by default in any local repository on your computer, run `git config --global tag.gpgsign true`.

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

* [AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)
