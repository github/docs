---
title: Signing tags
intro: You can sign tags locally using GPG or S/MIME.
redirect_from:
  - /articles/signing-tags-using-gpg/
  - /articles/signing-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

1. To sign a tag, add `-s` to your `git tag` command.
  ```shell
  $ git tag -s <em>mytag</em>
  # Creates a signed tag
  ```
2. Verify your signed tag it by running `git tag -v [tag-name]`.
  ```shell
  $ git tag -v <em>mytag</em>
  # Verifies the signed tag
  ```

### Дополнительная литература

- "[Viewing your repository's tags](/articles/viewing-your-repositorys-tags)"
- "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
- "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
- "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
- "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
- "[Signing commits](/articles/signing-commits)"
