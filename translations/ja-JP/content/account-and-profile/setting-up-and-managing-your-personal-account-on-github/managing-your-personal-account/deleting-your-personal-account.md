---
title: Deleting your personal account
intro: 'You can delete your personal account on {% data variables.product.product_location %} at any time.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
---

## About deletion of your personal account

Deleting your personal account removes all repositories, forks of private repositories, wikis, issues, pull requests, and pages owned by your account. {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion ghec %}

{% note %}

**Note**: If your enterprise manages your account and you sign into {% data variables.product.product_location %} through your company's identity provider (IdP), you cannot delete your account. 詳しい情報については「[{% data variables.product.prodname_emus %}について](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)」を参照してください。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. The email address associated with the account becomes available for use with a different account on {% data variables.product.product_location %}. After 90 days, the account name also becomes available to anyone else to use on a new account. {% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. If there are other owners in the organization, you must remove yourself from the organization before you can delete your personal account.

詳しい情報については、次の記事を参照してください。

- "[Organization の所有権の移譲](/articles/transferring-organization-ownership)"
- "[Organization アカウントの削除](/articles/deleting-an-organization-account)"
- "[Organization から自分を削除する](/articles/removing-yourself-from-an-organization/)"

## アカウントデータのバックアップ

Before you delete your personal account, make a copy of all repositories, private forks, wikis, issues, and pull requests owned by your account. For more information, see "[Backing up a repository](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% warning %}

**Warning:** Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}an enterprise owner{% endif %} cannot restore your content.

{% endwarning %}

## Delete your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. アカウント設定ページの下部にある [Delete account] の下で [**Delete your account**] をクリックします。 Before you can delete your personal account:
    - 自分が Organization で唯一のオーナーの場合、Organization を削除する前に所有権を別の人に移譲する必要があります。
    - Organization に別のオーナーがいる場合は、自分自身を Organization から削除する必要があります。 ![アカウント削除ボタン](/assets/images/help/settings/settings-account-delete.png)
4. [Make sure you want to do this] ダイアログボックスで、アカウントを削除すると何が起こるか理解したことを確認する手順を完了させます: ![アカウント削除の確認ダイアログ](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% ifversion fpt or ghec %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and {% data variables.product.prodname_pages %} sites owned by your account will be deleted and your billing will end immediately, and your username will be available to anyone for use on {% data variables.product.product_name %} after 90 days.
  {% else %}- リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、そして自分のアカウントが所有しているページが、すべて削除されること、ユーザ名が {% data variables.product.product_name %} 上で誰でも使用できるようになることを再確認します。
  {% endif %}- 最初のフィールドに、自分の {% data variables.product.product_name %}ユーザ名またはメールアドレスを入力してください。
    - 2 番目のフィールドに、指示されたとおりのフレーズを入力してください。
