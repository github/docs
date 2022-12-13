---
title: 退職のためのベストプラクティス
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
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
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091401"
---
会社を辞める前に、個人アカウントの以下の情報を必ず更新しておきましょう:

- [メール設定で削除して](/articles/changing-your-primary-email-address)、会社のメール アドレスを検証解除します。 その後、検証なしにアドレスを追加しなおして、関連するコミットをアカウントに関連付けされたままに保っておくことができます。
- [プライマリ メール アドレス](/articles/changing-your-primary-email-address)を会社のメールから個人用メールに変更します。
{% ifversion fpt or ghec %}
- [新しいプライマリ メール アドレスを検証します](/articles/verifying-your-email-address)。
{% endif %}
- 必要に応じて、[GitHub のユーザー名を変更](/articles/changing-your-github-username)して、会社または組織が参照されないようにします。

## <a name="leaving-organizations"></a>Organization を離れる

Organization に属するリポジトリを使用していた場合は、自分を [Organization のメンバーから削除](/articles/removing-yourself-from-an-organization)する必要があります。 Organization の所有者である場合は、まず別のユーザーに [Organization の所有権を移譲](/articles/transferring-organization-ownership)する必要があることに注意してください。

## <a name="removing-professional-associations-with-personal-repositories"></a>個人リポジトリから職業上の関連を取り除く

別のユーザーの個人アカウントのリポジトリで仕事を共同作業していた場合、それらのリポジトリから[自分自身をコラボレーターとして削除](/articles/removing-yourself-from-a-collaborator-s-repository)する必要があります。

- 仕事に関連する[リポジトリの監視を停止](https://github.com/watching)します。 それらの通知も、もう受ける必要はありません。
- 退社後、他のユーザーが作業を続ける可能性がある[ご自身が所有しているリポジトリを移譲](/articles/how-to-transfer-a-repository)します。
- 自分が行っていた作業に関連する[自分に属するフォークを削除](/articles/deleting-a-repository)します。 フォークを削除しても上流のリポジトリは削除されないので心配はいりません。
- 自分のコンピュータ上に残っているかもしれないフォークのローカルコピーの削除。

```shell
$ rm -rf <em>work_directory</em>
```
