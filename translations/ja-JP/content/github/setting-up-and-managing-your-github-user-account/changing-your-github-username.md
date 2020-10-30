---
title: GitHub ユーザ名の変更
intro: '{% data variables.product.product_name %}ユーザ名はいつでも変更できます。'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### ユーザ名の変更について

ユーザ名は、現在使われていない別のユーザ名に変更できます。{% if currentVersion == "free-pro-team@latest" %}希望するユーザ名が使えない場合、そのユーザ名を入力したときに、ユーザ名のリリースをリクエストできるかについての情報が表示されます。

ユーザ名がリリースできず、かつそのユーザ名の商標を持っていない場合、別のユーザ名を選択するか、現在のユーザ名をそのまま使うことができます。 {% data variables.contact.github_support %} では、利用できないユーザ名をリリースできません。 詳細は「[ユーザ名を変更する](#changing-your-username)」を参照してください。{% endif %}

ユーザ名を変更すると、変更前のユーザ名は誰でも取得できるようになります。 古いユーザ名の下にあるリポジトリへの参照のほとんどが、自動で新しいユーザ名に変わります。 ただし、プロフィールへのリンクによっては、自動的にリダイレクトされません。

{% data variables.product.product_name %} は、次のリダイレクトを設定できません:
- 古いユーザ名を使用する [@メンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 古いユーザ名を含む [Gist](/articles/creating-gists) にリンクする

### リポジトリ参照

ユーザ名を変更した後、{% data variables.product.product_name %} は自動的にあなたのリポジトリへの参照をリダイレクトします。
- 既存のリポジトリへの Web リンクは引き続き機能します。 変更を加えてから完了するまでに数分かかることがあります。
- ローカルリポジトリのクローンから古いリモートトラッキング URL へのコマンドラインプッシュは引き続き機能します。

古いユーザ名の新しい所有者が、あなたのリポジトリと同じ名前のリポジトリを作成すると、リダイレクトエントリが上書きされ、リダイレクトは機能しなくなります。 こうしたことが起こることを防ぐため、ユーザ名を変更したら、既存のすべてのリモートリポジトリ URL を更新することをお勧めします。 詳しい情報については、「[リモートの URL を変更する](/articles/changing-a-remote-s-url)」を参照してください。

### 前のプロフィールページにリンクする

ユーザ名を変更した後、`https://{% data variables.command_line.backticks %}/previoususername` のように前のプロフィールページにリンクすると 404 エラーが返されます。 {% data variables.product.product_name %} アカウントへのリンクを別の場所{% if currentVersion == "free-pro-team@latest" %} (LinkedIn や Twitter のプロフィールなど) {% endif %}から更新することをお勧めします。

### Git コミット

{% if currentVersion == "free-pro-team@latest"%}`noreply` メールアドレスが提供され、あなたの {% data variables.product.product_name %} に関連付けられた Git コミットは、あなたの新しいユーザ名に起因するものではなく、あなたのコントリビューショングラフには表示されません 。{% endif %}Git コミットが、{% if currentVersion == "free-pro-team@latest"%}ID ベースの {% data variables.product.product_name %} の提供された `noreply` メールアドレスを含む{% endif %} [GitHub アカウントに追加された](/articles/adding-an-email-address-to-your-github-account)別のメールアドレスに関連付けられている場合、ユーザ名を変更した後も、それらは引き続きあなたに帰属し、あなたのコントリビューショングラフに表示されます。 メールアドレスの設定に関する詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。

### ユーザ名を変更する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. [Change username] セクションで [**Change username**] をクリックします。 ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. ユーザ名を変更することに関する警告を読みます。 ユーザ名を変更したい場合は、[**I understand, let's change my username**] をクリックします。 ![[Change Username] 警告ボタン](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 新しいユーザ名を入力します。 ![新しいユーザ名のフィールド](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 選択したユーザ名が利用できる場合、[**Change my username**] をクリックします。 選択したユーザ名が利用できない場合、別のユーザ名を入力するか、提案されたユーザ名を利用できます。 ![[Change Username] 警告ボタン](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### 参考リンク

- 「[リモートの URL を変更する](/articles/changing-a-remote-s-url)」
- 「[コミットが間違ったユーザにリンクされているのはなぜですか？](/articles/why-are-my-commits-linked-to-the-wrong-user)」{% if currentVersion == "free-pro-team@latest" %}
- 「[{% data variables.product.prodname_dotcom %} ユーザ名に関するポリシー](/articles/github-username-policy)"{% endif %}
