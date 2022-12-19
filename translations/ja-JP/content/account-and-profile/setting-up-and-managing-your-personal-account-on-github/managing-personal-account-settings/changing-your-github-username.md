---
title: GitHub ユーザ名の変更
intro: 'インスタンスに組み込みの認証が使用されている場合は、{% endif %}{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} でアカウントのユーザー名を変更できます。'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
ms.openlocfilehash: 28f4d0ea1a16fed0e44f34312abfd507e2f991b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165263'
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**注**: {% data variables.product.prodname_emu_enterprise %} のメンバーは、ユーザー名を変更できません。 Enterprise の IdP 管理者は、{% data variables.product.product_name %} のユーザー名を制御します。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。

{% elsif ghes %}

**注**: LDAP 資格情報またはシングル サインオン (SSO) を使用して {% data variables.product.product_location %} にサインインする場合は、ローカル管理者のみがユーザー名を変更できます。 {% data variables.product.product_name %} の認証方法の詳細については、「[{% data variables.product.product_location %} でユーザーを認証する](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)」を参照してください。

{% endif %}

{% endnote %}

{% endif %}

## ユーザ名の変更について

ユーザー名は、現在使用されていない別のユーザー名に変更できます。{% ifversion fpt or ghec %}変更したいユーザー名が使用できない場合は、他の名前または一意のバリエーションを検討してください。 数字、ハイフン、別のつづりなどを使えば、同様のユーザ名が見つかるかもしれません。

ユーザー名の商標を保持している場合は、[商標ポリシー](/free-pro-team@latest/github/site-policy/github-trademark-policy)のページで商標の苦情を申し立てる方法の詳細を確認できます。 

名前の商標を保持していない場合は、別のユーザー名を選択するか、現在のユーザー名を保持することができます。 {% data variables.contact.github_support %} では、利用できないユーザ名をリリースできません。 詳細については、「[ユーザー名を変更する](#changing-your-username)」を参照してください。{% endif %}

ユーザ名を変更すると、変更前のユーザ名は誰でも取得できるようになります。 古いユーザ名の下にあるリポジトリへの参照のほとんどが、自動で新しいユーザ名に変わります。 ただし、プロフィールへのリンクによっては、自動的にリダイレクトされません。

{% data variables.product.product_name %} は、次のリダイレクトを設定できません:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) 古いユーザー名を使用する
- 古いユーザー名を含む [gists](/articles/creating-gists) へのリンク

{% ifversion fpt or ghec %} 

{% data variables.product.prodname_emu_enterprise %} のメンバーである場合、ユーザー名を変更することはできません。 {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## リポジトリ参照

ユーザ名を変更した後、{% data variables.product.product_name %} は自動的にあなたのリポジトリへの参照をリダイレクトします。
- 既存のリポジトリへの Web リンクは引き続き機能します。 変更を加えてから完了するまでに数分かかることがあります。
- ローカルリポジトリのクローンから古いリモートトラッキング URL へのコマンドラインプッシュは引き続き機能します。

古いユーザ名の新しい所有者が、あなたのリポジトリと同じ名前のリポジトリを作成すると、リダイレクトエントリが上書きされ、リダイレクトは機能しなくなります。 こうしたことが起こることを防ぐため、ユーザ名を変更したら、既存のすべてのリモートリポジトリ URL を更新することをお勧めします。 詳細については、「[リモート リポジトリを管理する](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

## 前のプロフィールページにリンクする

ユーザー名を変更すると、前のプロファイル ページへのリンク (例: `https://{% data variables.command_line.backticks %}/previoususername`) で 404 エラーが返されます。 {% data variables.product.product_location %} のご自分のアカウントへのすべてのリンクを、他の場所から更新することをお勧めします{% ifversion fpt or ghec %} (例: LinkedIn や Twitter のプロフィールなど){% endif %}。

## Git コミット

{% ifversion fpt or ghec %}{% data variables.product.product_name %}-が提供する、`noreply` メールアドレスに関連付けられた Git コミットは、新しいユーザー名に関連付けられず、あなたのコントリビューション グラフには表示されません。{% endif %} あなたの Git コミットが、{% ifversion fpt or ghec %}ID ベースの {% data variables.product.product_name %} から提供された `noreply` メールアドレスを含む{% endif %} [GitHub アカウントに追加した](/articles/adding-an-email-address-to-your-github-account)別のメールアドレスに関連付けられている場合、ユーザー名を変更した後も、それらは引き続きあなたに帰属し、あなたのコントリビューション グラフに表示されます。 メール アドレスの設定の詳細については、「[コミッ トメール アドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。

## ユーザ名を変更する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. [ユーザー名の変更] セクションで、 **[ユーザー名の変更]** をクリックします。
   ![[ユーザー名の変更] ボタン](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. ユーザ名を変更することに関する警告を読みます。 ユーザー名を変更する場合は、 **[I understand, let's change my username]** をクリックします。
   ![[ユーザー名の変更の警告] ボタン](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 新しいユーザ名を入力します。
   ![新しいユーザー名のフィールド](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 選択したユーザー名が利用できる場合、 **[ユーザー名を変更する]** をクリックします。 選択したユーザ名が利用できない場合、別のユーザ名を入力するか、提案されたユーザ名を利用できます。
   ![[ユーザー名の変更の警告] ボタン](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## 参考資料

- [コミットが間違ったユーザーにリンクされているのはなぜですか?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_dotcom %} ユーザー名ポリシー](/free-pro-team@latest/github/site-policy/github-username-policy) {% endif %}
