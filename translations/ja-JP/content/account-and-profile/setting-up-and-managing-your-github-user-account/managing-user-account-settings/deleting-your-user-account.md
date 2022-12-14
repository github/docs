---
title: 自分のユーザアカウントの削除
intro: You can delete your personal account on {% data variables.product.product_name %} at any time.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: fe18309f93bdb4124fa5a58d22ab7a93b451e6e1
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088912"
---
自分の個人用アカウントを削除すると、リポジトリ、プライベート リポジトリのフォーク、Wiki、Issue、pull request、自分のアカウントが所有しているページがすべて削除されます。 {% ifversion fpt or ghec %} ご自身が作成した Issue や pull request や、ご自身が他のユーザーが所有するリポジトリに対して行ったコメントは削除されません。代わりに、それらは[ゴースト ユーザー](https://github.com/ghost)に関連付けられます。{% else %}ご自身が作成した Issue や pull request や、ご自身が他のユーザーが所有するリポジトリに対して行ったコメントは削除されません。{% endif %}

{% ifversion fpt or ghec %} アカウントを削除すると、課金は停止します。 そのアカウントに関連付けられていたメール アドレスは、{% data variables.product.product_location %} の別のアカウントで使用できるようになります。 90 日後、アカウント名も他のユーザーが新しいアカウントで使用できるようになります。 {% endif %}

Organization の唯一の所有者である場合は、所有権を他の人に移譲するか、Organization を削除してから、自分の個人用アカウントを削除する必要があります。 Organization に別の所有者がいる場合は、その Organization から自分を削除してから、自分の個人用アカウントを削除する必要があります。

詳細については、次を参照してください。
- "[Organization の所有権を移譲する](/articles/transferring-organization-ownership)"
- "[Organization アカウントを削除する](/articles/deleting-an-organization-account)"
- "[Organization から自身を削除する](/articles/removing-yourself-from-an-organization/)"

## <a name="back-up-your-account-data"></a>アカウントデータのバックアップ

自分の個人用アカウントを削除する前に、リポジトリ、プライベート フォーク、Wiki、Issue、自分のアカウントが所有している pull request のすべてのコピーを作成します。

{% warning %}

**警告:** 一度個人用アカウントを削除すると、GitHub でそのコンテンツを復元することはできません。

{% endwarning %}

## <a name="delete-your-personal-account"></a>個人用アカウントを削除する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. [アカウント設定] ページの下部にある [アカウントの削除] の下で **[アカウントを削除する]** をクリックします。 個人用アカウントを削除する前に:
    - 自分が Organization で唯一のオーナーの場合、Organization を削除する前に所有権を別の人に移譲する必要があります。
    - Organization に別のオーナーがいる場合は、自分自身を Organization から削除する必要があります。
   ![[アカウントの削除] ボタン](/assets/images/help/settings/settings-account-delete.png)
4. [この操作を実行する] ダイアログ ボックスで、アカウントの削除後に起こることの確認の手順を完了します。![アカウントの削除の確認ダイアログ](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}- ご自身のアカウントで所有しているリポジトリ、プライベート リポジトリのフォーク、Wiki、Issue、pull request、および {% data variables.product.prodname_pages %} サイトはすべて削除され、課金は直ちに停止され、あなたのユーザー名は、90 日後に {% data variables.product.product_name %} で任意のユーザーが使用できるようになります。
  {% else %}- リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、そして自分のアカウントが所有しているページが、すべて削除されること、ユーザ名が {% data variables.product.product_name %} 上で誰でも使用できるようになることを再確認します。
  {% endif %}- 最初のフィールドに、自分の {% data variables.product.product_name %}ユーザ名またはメールアドレスを入力してください。
    - 2 番目のフィールドに、指示されたとおりのフレーズを入力してください。
