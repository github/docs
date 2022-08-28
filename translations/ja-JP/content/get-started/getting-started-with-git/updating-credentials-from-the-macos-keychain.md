---
title: macOS キーチェーンからの認証情報を更新する
intro: '{% data variables.product.product_name %} で{% ifversion not ghae %}ユーザ名、パスワード、{% endif %}または個人アクセストークンを変更する場合は、 `git-credential-osxkeychain` ヘルパーに保存されている認証情報を更新する必要があります。'
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

## キーチェーンアクセスを介して認証情報を更新する

1. メニューバーの右側にある Spotlight アイコン (虫眼鏡) をクリックします。 `Keychain access` と入力し、Enter キーを押してアプリを起動します。 ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. キーチェーン Access で、**{% data variables.command_line.backticks %}** を探してください。
3. `{% data variables.command_line.backticks %}` の「internet password」エントリを見つけてください。
4. 適宜、エントリを編集または削除します。

## コマンドラインで認証情報を削除する

コマンドラインから、認証情報ヘルパーを直接使用して、キーチェーンエントリを消去できます。

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

成功した場合、何もプリントアウトされません。 それが機能するかどうかをテストするには、{% data variables.product.product_location %} からプライベートリポジトリのクローンを作成します。 パスワードの入力を求められた場合は、キーチェーンエントリが削除されています。

## 参考リンク

- "[Git で {% data variables.product.prodname_dotcom %} 認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
