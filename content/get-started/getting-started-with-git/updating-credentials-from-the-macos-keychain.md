---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% ifversion not ghae %} username, password, or{% endif %} {% data variables.product.pat_generic %} on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
---
{% note %}

**Note:** Updating credentials from the macOS Keychain only applies to users who manually configured a {% data variables.product.pat_generic %} using the `osxkeychain` helper that is built-in to macOS.

We recommend you either [configure SSH](/authentication/connecting-to-github-with-ssh) or upgrade to the [Git Credential Manager](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM) instead. GCM can manage authentication on your behalf (no more manual {% data variables.product.pat_generic %}s) including 2FA (two-factor auth).

{% endnote %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Updating your credentials via Keychain Access

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar.
1. Type `Keychain Access`, then press the Enter key to launch the app.
1. In Keychain Access, search for `{% data variables.command_line.backticks %}`.
1. Find the "Internet password" entry for `{% data variables.command_line.backticks %}`.
1. Edit or delete the entry accordingly.

## Deleting your credentials via the command line

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> [Press Return]
```

If it's successful, nothing will print out. To test that it works, try and clone a private repository from {% data variables.location.product_location %}. If you are prompted for a password, the keychain entry was deleted.

## Further reading

- "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)"
