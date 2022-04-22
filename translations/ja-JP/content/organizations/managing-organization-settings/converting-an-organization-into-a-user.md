---
title: Organization をユーザに変換する
intro: Organizationを個人アカウントに変換することはできませんが、新しい個人アカウントを作成し、Organizationのリポジトリをそちらに移譲することはできます。
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

**ノート**: アカウントが削除されると、削除時点のユーザ名は90日間再利用できなくなります。 Organizationのユーザ名をすぐに再利用するには、Organizatonを削除する前にそのユーザ名を変更しなければなりません。

 {% endnote %}

1. GitHub上で新しいアカウントに[サインアップ](/articles/signing-up-for-a-new-github-account)します。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しい個人アカウントに{% data variables.product.signin_link %}します。
4. 新しい個人アカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Organizationの名前を変更](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username)して、現在のユーザ名を利用可能にしてください。
6. Organization の名前に[ユーザ名を変更](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username)します。
7. [Organization を削除](/organizations/managing-organization-settings/deleting-an-organization-account)します。


{% else %}

1. 新しいGitHub Enterprise個人アカウントにサインアップします。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しい個人アカウントに{% data variables.product.signin_link %}します。
4. 新しい個人アカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Organization を削除](/articles/deleting-an-organization-account)します。
6. Organization の名前に[ユーザ名を変更](/articles/changing-your-github-username)します。

{% endif %}
