---
title: Updating credentials from the macOS Keychain
intro: '{% data variables.product.product_name %} でユーザ名、パスワード、たまは個人アクセストークンを変更した場合は、保存されている認証情報を `git-credential-osxkeychain` ヘルパーで更新する必要があります。'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### キーチェーンアクセスを介して認証情報を更新する

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. キーチェーン Access で、**{% data variables.command_line.backticks %}** を探してください。
3. `{% data variables.command_line.backticks %}` の「internet password」エントリを見つけてください。 ![キーチェーンの GitHub パスワード入力内容](/assets/images/help/setup/keychain-entry.png)
4. 適宜、エントリを編集または削除します。

### コマンドラインで認証情報を削除する

コマンドラインを通じて、認証情報ヘルパーを使ってキーチェーン エントリを直接、削除できます。

これを行うために、次のコマンドを入力してください:

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

成功した場合、何もプリントアウトされません。 動作をテストするには、{% data variables.product.product_location %} からリポジトリをクローンしてみます。 パスワードを尋ねられた場合、キーチェーンは削除されています。

### 参考リンク

- "[Git で {% data variables.product.prodname_dotcom %} 認証情報をキャッシュ](/github/using-git/caching-your-github-credentials-in-git/)"
