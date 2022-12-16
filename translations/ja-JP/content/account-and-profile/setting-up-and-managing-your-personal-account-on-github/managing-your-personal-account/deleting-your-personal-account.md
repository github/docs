---
title: 個人アカウントを削除する
intro: 'いつでも {% data variables.product.product_location %} で自分の個人アカウントを削除できます。'
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
ms.openlocfilehash: c26ae9af0266defeaa7d0e15afc22b2edee2b7d2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687269'
---
## 個人アカウントの削除について

自分の個人用アカウントを削除すると、リポジトリ、プライベート リポジトリのフォーク、Wiki、Issue、pull request、自分のアカウントが所有しているページがすべて削除されます。 {% ifversion fpt or ghec %}ご自身が作成した Issue や pull request や、ご自身が他のユーザーが所有するリポジトリに対して行ったコメントは削除されません。 リソースとコメントは、[ゴースト ユーザー](https://github.com/ghost)に関連付けられます。{% else %}作成した Issue と pull request、および他のユーザーが所有するリポジトリで行ったコメントは削除されません。{% endif %}

{% ifversion ghec %}

{% note %}

**注**: エンタープライズがアカウントを管理していて、会社の ID プロバイダー (IdP) を介して {% data variables.product.product_location %} にサインインしている場合、アカウントを削除することはできません。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)」を参照してください。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}アカウントを削除すると、課金は停止します。 そのアカウントに関連付けられていたメール アドレスは、{% data variables.product.product_location %} の別のアカウントで使用できるようになります。 90 日後、アカウント名も他のユーザーが新しいアカウントで使用できるようになります。 {% endif %}

Organization の唯一の所有者である場合は、所有権を他の人に移譲するか、Organization を削除してから、自分の個人アカウントを削除する必要があります。 Organization に別の所有者がいる場合は、その Organization から自分を削除してから、自分の個人用アカウントを削除する必要があります。

詳細については、次の記事を参照してください。

- "[Organization の所有権を移譲する](/articles/transferring-organization-ownership)"
- "[Organization アカウントを削除する](/articles/deleting-an-organization-account)"
- "[Organization から自身を削除する](/articles/removing-yourself-from-an-organization/)"

## アカウントデータのバックアップ

自分の個人用アカウントを削除する前に、リポジトリ、プライベート フォーク、Wiki、Issue、自分のアカウントが所有している pull request のすべてのコピーを作成します。 詳しくは、「[リポジトリのバックアップ](/repositories/archiving-a-github-repository/backing-up-a-repository)」をご覧ください。

{% warning %}

**警告:** 個人アカウントが削除されると、{% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}Enterprise 所有者{% endif %}はコンテンツを復元できません。

{% endwarning %}

## 個人用アカウントを削除する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. [アカウント設定] ページの下部にある [アカウントの削除] の下で **[アカウントを削除する]** をクリックします。 個人用アカウントを削除する前に:
    - 自分が Organization で唯一のオーナーの場合、Organization を削除する前に所有権を別の人に移譲する必要があります。
    - Organization に別のオーナーがいる場合は、自分自身を Organization から削除する必要があります。
   ![[アカウントの削除] ボタン](/assets/images/help/settings/settings-account-delete.png)
4. [この操作を実行する] ダイアログ ボックスで、アカウントの削除後に起こることの確認の手順を完了します。![アカウントの削除の確認ダイアログ](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}- ご自身のアカウントで所有しているリポジトリ、プライベート リポジトリのフォーク、Wiki、Issue、pull request、および {% data variables.product.prodname_pages %} サイトはすべて削除され、課金は直ちに停止され、あなたのユーザー名は、90 日後に {% data variables.product.product_name %} で任意のユーザーが使用できるようになります。
  {% else %}- リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、プルリクエスト、そして自分のアカウントが所有しているページが、すべて削除されること、ユーザ名が {% data variables.product.product_name %} 上で誰でも使用できるようになることを再確認します。
  {% endif %}- 最初のフィールドに、自分の {% data variables.product.product_name %}ユーザ名またはメールアドレスを入力してください。
    - 2 番目のフィールドに、指示されたとおりのフレーズを入力してください。
