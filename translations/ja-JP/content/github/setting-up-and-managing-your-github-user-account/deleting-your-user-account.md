---
title: 自分のユーザアカウントの削除
intro: 'いつでも自分の {% data variables.product.product_name %}ユーザアカウントを削除できます。'
redirect_from:
  - /articles/deleting-a-user-account/
  - /articles/deleting-your-user-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

自分のユーザアカウントを削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、また自分のアカウントが所有しているページもすべて削除されます。 {% if currentVersion == "free-pro-team@latest" %} Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted - instead, they'll be associated with our [Ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% if currentVersion == "free-pro-team@latest" %} The account name also becomes available to anyone else to use on a new account, and we stop billing you. アカウントに関連付けられていたメールアドレスは別の {% data variables.product.product_name %} アカウントで使用できるようになります。 {% endif %}

あなたが Organization のただ一人のオーナーの場合は、ユーザアカウントを削除する前に、所有権を他の人に移譲するか、Organization を削除する必要があります。 Organization に別のオーナーがいる場合は、自分のユーザアカウントを削除する前に、Organization から自分を削除する必要があります。

詳しい情報については、以下を参照してください。
- "[Organization の所有権の移譲](/articles/transferring-organization-ownership)"
- "[Organization アカウントの削除](/articles/deleting-an-organization-account)"
- "[Organization から自分を削除する](/articles/removing-yourself-from-an-organization/)"

### アカウントデータのバックアップ

自分のユーザアカウントを削除する前に、リポジトリ、プライベートフォーク、ウィキ、Issue、また自分のアカウントが所有しているプルリクエストすべてのコピーを作成します。

{% warning %}

**警告:** 一度ユーザアカウントを削除すると、GitHub はそのコンテンツを復元できません。

{% endwarning %}

### ユーザアカウントを削除

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. アカウント設定ページの下部にある [Delete account] の下で [**Delete your account**] をクリックします。 自分のユーザアカウントを削除する前にすべきことは次のとおりです:
    - 自分が Organization で唯一のオーナーの場合、Organization を削除する前に所有権を別の人に移譲する必要があります。
    - Organization に別のオーナーがいる場合は、自分自身を Organization から削除する必要があります。 ![アカウント削除ボタン](/assets/images/help/settings/settings-account-delete.png)
4. [Make sure you want to do this] ダイアログボックスで、アカウントを削除すると何が起こるか理解したことを確認する手順を完了させます: ![アカウント削除の確認ダイアログ](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% if currentVersion == "free-pro-team@latest" %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, your billing will end, and your username will be available to anyone for use on {% data variables.product.product_name %}.
  {% else %}- リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、そして自分のアカウントが所有しているページが、すべて削除されること、ユーザ名が {% data variables.product.product_name %} 上で誰でも使用できるようになることを再確認します。
  {% endif %}- 最初のフィールドに、自分の {% data variables.product.product_name %}ユーザ名またはメールアドレスを入力してください。
    - 2 番目のフィールドに、指示されたとおりのフレーズを入力してください。
