---
title: Organization をユーザに変換する
intro: Organization は個人ユーザアカウントに変換できませんが、新しいユーザアカウントを作成して、そこへ Organization のリポジトリを移譲することは可能です。
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organizationのユーザへの変換
---

{% ifversion fpt or ghec %}

{% note %}

**Note**: After an account is deleted, the username at the time of deletion becomes unavailable for reuse for 90 days. To reuse an organization's username immediately, you must change the username before you delete the organization.

 {% endnote %}

1. 新しい GitHub ユーザアカウントに[サインアップ](/articles/signing-up-for-a-new-github-account)します。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しいユーザアカウントに{% data variables.product.signin_link %}します。
4. 新しいユーザアカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Rename the organization](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username) to make the current username available.
6. Organization の名前に[ユーザ名を変更](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username)します。
7. [Organization を削除](/organizations/managing-organization-settings/deleting-an-organization-account)します。


{% else %}

1. 新しい GitHub Enterprise ユーザアカウントにサインアップします。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しいユーザアカウントに{% data variables.product.signin_link %}します。
4. 新しいユーザアカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Organization を削除](/articles/deleting-an-organization-account)します。
6. Organization の名前に[ユーザ名を変更](/articles/changing-your-github-username)します。

{% endif %}
