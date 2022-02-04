---
title: GitHub ユーザ名の変更
intro: 'You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
---

{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Note**: Members of an {% data variables.product.prodname_emu_enterprise %} cannot change usernames. Your enterprise's IdP administrator controls your username for {% data variables.product.product_name %}. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% elsif ghes %}

**Note**: If you sign into {% data variables.product.product_location %} with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for {% data variables.product.product_name %}, see "[Authenticating users for {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)."

{% endif %}

{% endnote %}

{% endif %}

## ユーザ名の変更について

You can change your username to another username that is not currently in use.{% ifversion fpt or ghec %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/free-pro-team@latest/github/site-policy/github-trademark-policy) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. {% data variables.contact.github_support %} では、利用できないユーザ名をリリースできません。 詳細は「[ユーザ名を変更する](#changing-your-username)」を参照してください。{% endif %}

ユーザ名を変更すると、変更前のユーザ名は誰でも取得できるようになります。 古いユーザ名の下にあるリポジトリへの参照のほとんどが、自動で新しいユーザ名に変わります。 ただし、プロフィールへのリンクによっては、自動的にリダイレクトされません。

{% data variables.product.product_name %} は、次のリダイレクトを設定できません:
- 古いユーザ名を使用する [@メンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 古いユーザ名を含む [Gist](/articles/creating-gists) にリンクする

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot make changes to your username. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## リポジトリ参照

ユーザ名を変更した後、{% data variables.product.product_name %} は自動的にあなたのリポジトリへの参照をリダイレクトします。
- 既存のリポジトリへの Web リンクは引き続き機能します。 変更を加えてから完了するまでに数分かかることがあります。
- ローカルリポジトリのクローンから古いリモートトラッキング URL へのコマンドラインプッシュは引き続き機能します。

古いユーザ名の新しい所有者が、あなたのリポジトリと同じ名前のリポジトリを作成すると、リダイレクトエントリが上書きされ、リダイレクトは機能しなくなります。 こうしたことが起こることを防ぐため、ユーザ名を変更したら、既存のすべてのリモートリポジトリ URL を更新することをお勧めします。 詳しい情報については「[リモートリポジトリの管理](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

## 前のプロフィールページにリンクする

ユーザ名を変更した後、`https://{% data variables.command_line.backticks %}/previoususername` のように前のプロフィールページにリンクすると 404 エラーが返されます。 We recommend updating any links to your account on {% data variables.product.product_location %} from elsewhere{% ifversion fpt or ghec %}, such as your LinkedIn or Twitter profile{% endif %}.

## Git コミット

{% ifversion fpt or ghec %}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. メールアドレスの設定に関する詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。

## ユーザ名を変更する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. [Change username] セクションで [**Change username**] をクリックします。 ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. ユーザ名を変更することに関する警告を読みます。 ユーザ名を変更したい場合は、[**I understand, let's change my username**] をクリックします。 ![[Change Username] 警告ボタン](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 新しいユーザ名を入力します。 ![新しいユーザ名のフィールド](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 選択したユーザ名が利用できる場合、[**Change my username**] をクリックします。 選択したユーザ名が利用できない場合、別のユーザ名を入力するか、提案されたユーザ名を利用できます。 ![[Change Username] 警告ボタン](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## 参考リンク

- "[Why are my commits linked to the wrong user?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
