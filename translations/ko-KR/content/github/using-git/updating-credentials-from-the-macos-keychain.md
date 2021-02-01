---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% if currentVersion != "github-ae@latest" %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Updating your credentials via Keychain Access

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![Spotlight Search bar](/assets/images/help/setup/keychain-access.png)
2. In Keychain Access, search for **{% data variables.command_line.backticks %}**.
3. Find the "internet password" entry for `{% data variables.command_line.backticks %}`.
4. Edit or delete the entry accordingly.

### Deleting your credentials via the command line

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

If it's successful, nothing will print out. To test that it works, try and clone a repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

### 더 읽을거리

- "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/using-git/caching-your-github-credentials-in-git/)"
