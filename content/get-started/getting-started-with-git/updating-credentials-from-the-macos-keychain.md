---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% ifversion not ghae %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
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
shortTitle: macOS Keychain credentials
---
{% tip %}

**Note:** Updating credentials from the macOS Keychain only applies to users who manually configured a PAT using the  `osxkeychain` helper that is built-in to macOS. 

We recommend you either [configure SSH](/articles/generating-an-ssh-key) or upgrade to the [Git Credential Manager Core](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM Core) instead. GCM Core can manage authentication on your behalf (no more manual PATs) including 2FA (two-factor auth).

{% endtip %}

{% data reusables.user_settings.password-authentication-deprecation %}

## Updating your credentials via Keychain Access

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app.
   ![Spotlight Search bar](/assets/images/help/setup/keychain-access.png)
2. In Keychain Access, search for **{% data variables.command_line.backticks %}**.
3. Find the "internet password" entry for `{% data variables.command_line.backticks %}`.
4. Edit or delete the entry accordingly.

## Deleting your credentials via the command line

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

If it's successful, nothing will print out. To test that it works, try and clone a private repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

## Further reading

- "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
