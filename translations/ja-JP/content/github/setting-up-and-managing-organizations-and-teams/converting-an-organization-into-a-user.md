---
title: Organization をユーザに変換する
intro: 'Organization は個人ユーザアカウントに変換できませんが、新しいユーザアカウントを作成して、そこへ Organization のリポジトリを移譲することは可能です。'
redirect_from:
  - /articles/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

{% if currentVersion == "free-pro-team@latest" %}

1. 新しい GitHub ユーザアカウントに[サインアップ](/articles/signing-up-for-a-new-github-account)します。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しいユーザアカウントに{% data variables.product.signin_link %}します。
4. 新しいユーザアカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Organization を削除](/articles/deleting-an-organization-account)します。
6. Organization の名前に[ユーザ名を変更](/articles/changing-your-github-username)します。

{% else %}

1. 新しい GitHub Enterprise ユーザアカウントにサインアップします。
2. [ユーザのロールをオーナーに変更](/articles/changing-a-person-s-role-to-owner)します。
3. 新しいユーザアカウントに{% data variables.product.signin_link %}します。
4. 新しいユーザアカウントに[各 Organization リポジトリを移譲](/articles/how-to-transfer-a-repository)します。
5. [Organization を削除](/articles/deleting-an-organization-account)します。
6. Organization の名前に[ユーザ名を変更](/articles/changing-your-github-username)します。

{% endif %}
