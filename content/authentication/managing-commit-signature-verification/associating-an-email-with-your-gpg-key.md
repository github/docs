---
title: Associating an email with your GPG key
intro: 'Your GPG key must be associated with a {% data variables.product.product_name %} verified email that matches your committer identity.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
---
{% note %}

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. Enter `gpg --edit-key GPG key ID`, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is `3AA5C34371567BD2`:
  ```shell
  $ gpg --edit-key 3AA5C34371567BD2
  ```
5. Enter `gpg> adduid` to add the user ID details.
  ```shell
  $ gpg> adduid
  ```
6. Follow the prompts to supply your real name, email address, and any comments. You can modify your entries by choosing `N`, `C`, or `E`. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."{% endif %}
  ```shell
  Real Name: OCTOCAT
  Email address: "octocat@github.com"
  Comment: GITHUB-KEY
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Enter `O` to confirm your selections.
8. Enter your key's passphrase.
9. Enter `gpg> save` to save the changes
  ```shell
  $ gpg> save
  ```
10. Enter `gpg --armor --export GPG key ID`, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export 3AA5C34371567BD2
  # Prints the GPG key, in ASCII armor format
  ```
11. Upload the GPG key by [adding it to your GitHub account](/articles/adding-a-gpg-key-to-your-github-account).

## Further reading

- "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
- "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
- "[Using a verified email address in your GPG key](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Adding a GPG key to your GitHub account](/articles/adding-a-gpg-key-to-your-github-account)"
- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
