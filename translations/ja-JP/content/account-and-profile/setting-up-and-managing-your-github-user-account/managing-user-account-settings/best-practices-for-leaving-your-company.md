---
title: 退職のためのベストプラクティス
intro: 'If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
---

Before you leave your company, make sure you update the following information in your personal account:

- [メール設定から会社のメールアドレスを削除](/articles/changing-your-primary-email-address)して、会社のメールアドレスを検証済みではなくしてください。 その後、検証なしにアドレスを追加しなおして、関連するコミットをアカウントに関連付けされたままに保っておくことができます。
- 会社のメールから個人のメールへ、[プライマリメールアドレスを変更](/articles/changing-your-primary-email-address)してください。
{% ifversion fpt or ghec %}
- [新しいプライマリメールアドレスを検証](/articles/verifying-your-email-address)してください。
{% endif %}
- 必要に応じて [GitHub のユーザ名を変更](/articles/changing-your-github-username)して、会社への言及があれば削除してください。

## Organization を離れる

これまで Organization に属するリポジトリで作業をしてきた場合は、[Organization のメンバーから自分を削除](/articles/removing-yourself-from-an-organization)する必要があるでしょう。 あなたが Organization のオーナーである場合、まず他の人に [Organization の所有権を移譲](/articles/transferring-organization-ownership)する必要があります。

## 個人リポジトリから職業上の関連を取り除く

If you've been collaborating professionally with another person on repositories that belong to their personal account, you'll want to [remove yourself as a collaborator](/articles/removing-yourself-from-a-collaborator-s-repository) from those repositories.

- 仕事に関連する[リポジトリの Watch の停止](https://github.com/watching)。 それらの通知も、もう受ける必要はありません。
- 自分の退職後に他者が作業を続ける必要があるかもしれない[自分が所有するリポジトリを移譲](/articles/how-to-transfer-a-repository)してください。
- あなたが行っていた作業に関連する、[あなたに属するフォークの削除](/articles/deleting-a-repository)。 フォークを削除しても上流のリポジトリは削除されないので心配はいりません。
- 自分のコンピュータ上に残っているかもしれないフォークのローカルコピーの削除。

```shell
$ rm -rf <em>work_directory</em>
```
