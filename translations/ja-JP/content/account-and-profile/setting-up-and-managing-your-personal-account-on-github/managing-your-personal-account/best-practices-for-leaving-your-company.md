---
title: 退職のためのベストプラクティス
intro: '{% data variables.product.product_name %} のアカウントを個人と仕事の両方で使っているなら、会社や組織を辞めるときに覚えておくべきことがいくつかあります。'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
ms.openlocfilehash: c288584891981eab7ffe4204e2028b0e70cf1d08
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687236'
---
会社を辞める前に、個人アカウントの以下の情報を必ず更新しておきましょう:

- [メール設定で削除して](/articles/changing-your-primary-email-address)、会社のメール アドレスを検証解除します。 その後、検証なしにアドレスを追加しなおして、関連するコミットをアカウントに関連付けされたままに保っておくことができます。
- [プライマリ メール アドレス](/articles/changing-your-primary-email-address)を会社のメールから個人用メールに変更します。
- [新しいプライマリ メール アドレスを検証します](/articles/verifying-your-email-address)。
- 必要に応じて、[GitHub のユーザー名を変更](/articles/changing-your-github-username)して、会社または組織が参照されないようにします。
- 個人アカウントに対して 2 要素 (2FA) 認証を有効にしている場合は、構成した 2FA 認証方法を (会社ではなく) 自分が制御するようにしてください。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)」を参照してください。

## Organization を離れる

Organization に属するリポジトリを使用していた場合は、自分を [Organization のメンバーから削除](/articles/removing-yourself-from-an-organization)する必要があります。 Organization の所有者である場合は、まず別のユーザーに [Organization の所有権を移譲](/articles/transferring-organization-ownership)する必要があることに注意してください。

{% data variables.product.prodname_managed_user %}を使用している場合を除き、Organization を離れた後も、個人アカウントに引き続きアクセスできます。 {% data variables.product.prodname_emus %}について詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[{% data variables.product.prodname_emus %}について]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}」を参照してください。{% else %}{% endif %}

## 個人リポジトリから職業上の関連を取り除く

別のユーザーの個人アカウントのリポジトリで仕事を共同作業していた場合、それらのリポジトリから[自分自身をコラボレーターとして削除](/articles/removing-yourself-from-a-collaborator-s-repository)する必要があります。

- 仕事に関連する[リポジトリの監視を停止](https://github.com/watching)します。 それらの通知も、もう受ける必要はありません。
- 退社後、他のユーザーが作業を続ける可能性がある[ご自身が所有しているリポジトリを移譲](/articles/how-to-transfer-a-repository)します。
- 自分が行っていた作業に関連する[自分に属するフォークを削除](/articles/deleting-a-repository)します。 フォークを削除しても上流のリポジトリは削除されないので心配はいりません。
- 自分のコンピュータ上に残っているかもしれないフォークのローカルコピーの削除。

```shell
$ rm -rf <em>work_directory</em>
```
