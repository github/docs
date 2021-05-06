---
title: 退職のためのベストプラクティス
intro: 転職は人生の現実です。 GitHub のアカウントを個人と仕事の*両方で*使っているなら、会社や組織を辞める際に念頭に置いておくべきことがあります。
redirect_from:
  - /articles/best-practices-for-leaving-your-company
versions:
  free-pro-team: '*'
topics:
  - Accounts
---

会社を辞める前に、ユーザアカウントの以下の情報を必ず更新しておきましょう:

- [メール設定から会社のメールアドレスを削除](/articles/changing-your-primary-email-address)して、会社のメールアドレスを検証済みではなくしてください。 その後、検証なしにアドレスを追加しなおして、関連するコミットをアカウントに関連付けされたままに保っておくことができます。
- 会社のメールから個人のメールへ、[プライマリメールアドレスを変更](/articles/changing-your-primary-email-address)してください。
{% if currentVersion == "free-pro-team@latest" %}
- [新しいプライマリメールアドレスを検証](/articles/verifying-your-email-address)してください。
{% endif %}
- 必要に応じて [GitHub のユーザ名を変更](/articles/changing-your-github-username)して、会社への言及があれば削除してください。

## Organization を離れる

これまで Organization に属するリポジトリで作業をしてきた場合は、[Organization のメンバーから自分を削除](/articles/removing-yourself-from-an-organization)する必要があるでしょう。 あなたが Organization のオーナーである場合、まず他の人に [Organization の所有権を移譲](/articles/transferring-organization-ownership)する必要があります。

## 個人リポジトリから職業上の関連を取り除く

他の人の個人ユーザアカウントに属するリポジトリに職業として協力してきた場合は、それらのリポジトリから[自分をコラボレータから削除](/articles/removing-yourself-from-a-collaborator-s-repository)する必要があるでしょう。

- 仕事に関連する[リポジトリの Watch の停止](https://github.com/watching)。 それらの通知も、もう受ける必要はありません。
- 自分の退職後に他者が作業を続ける必要があるかもしれない[自分が所有するリポジトリを移譲](/articles/how-to-transfer-a-repository)してください。
- あなたが行っていた作業に関連する、[あなたに属するフォークの削除](/articles/deleting-a-repository)。 フォークを削除しても上流のリポジトリは削除されないので心配はいりません。
- 自分のコンピュータ上に残っているかもしれないフォークのローカルコピーの削除。

```shell
$ rm -rf <em>work_directory</em>
```
