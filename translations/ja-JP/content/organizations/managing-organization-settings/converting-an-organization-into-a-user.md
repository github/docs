---
title: Organization をユーザに変換する
intro: Organization を個人アカウントに変換することはできませんが、新しい個人アカウントを作成して、そこへ Organization のリポジトリを移譲することは可能です。
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
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149802'
---
{% ifversion fpt or ghec %}

{% note %}

**注**: アカウントが削除されると、削除時点のユーザー名は 90 日間再利用できなくなります。 Organizationのユーザ名をすぐに再利用するには、Organizatonを削除する前にそのユーザ名を変更しなければなりません。

 {% endnote %}

1. GitHub で新しいアカウントに[サインアップ](/articles/signing-up-for-a-new-github-account)します。
2. [ユーザーのロールを所有者に変更します](/articles/changing-a-person-s-role-to-owner)。
3. 新しい個人アカウントに {% data variables.product.signin_link %} します。
4. 新しい個人アカウントに[各 Organization リポジトリを転送](/articles/how-to-transfer-a-repository)します。
5. [Organization の名前を変更](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username)して、現在のユーザー名を使用できるようにします。
6. [ユーザーの名前を Organization の名前に変更](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username)します。
7. [Organization を削除します](/organizations/managing-organization-settings/deleting-an-organization-account)。


{% else %}

1. 新しい GitHub Enterprise 個人アカウントにサインアップします。
2. [ユーザーのロールを所有者に変更します](/articles/changing-a-person-s-role-to-owner)。
3. 新しい個人アカウントに {% data variables.product.signin_link %} します。
4. 新しい個人アカウントに[各 Organization リポジトリを転送](/articles/how-to-transfer-a-repository)します。
5. [Organization を削除します](/articles/deleting-an-organization-account)。
6. [ユーザーの名前を Organization の名前に変更](/articles/changing-your-github-username)します。

{% endif %}
