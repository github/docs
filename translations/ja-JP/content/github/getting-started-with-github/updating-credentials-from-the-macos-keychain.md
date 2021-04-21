---
title: Updating credentials from the macOS Keychain
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% if currentVersion != "github-ae@latest" %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### キーチェーンアクセスを介して認証情報を更新する

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. キーチェーン Access で、**{% data variables.command_line.backticks %}** を探してください。
3. `{% data variables.command_line.backticks %}` の「internet password」エントリを見つけてください。
4. 適宜、エントリを編集または削除します。

### コマンドラインで認証情報を削除する

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

成功した場合、何もプリントアウトされません。 To test that it works, try and clone a private repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

### 参考リンク

- "[Git で {% data variables.product.prodname_dotcom %} 認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
