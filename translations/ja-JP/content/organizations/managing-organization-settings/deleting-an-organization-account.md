---
title: 組織アカウントを削除する
intro: 'Organization を削除すると、リポジトリ、プライベートリポジトリのフォーク、ウィキ、Issue、Pull Request、プロジェクトページや Organization ページもすべて削除されます。 {% ifversion fpt or ghec %}支払いは終了し、90日後にOrganizationの名前は新しいユーザもしくはOrganizationアカウントで利用できるようになります。{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: e923dcf7fb9135243c5bfe0e68a310719e87ef2e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109742'
---
{% ifversion fpt or ghec %} {% tip %}

**ヒント**: 有料サブスクリプションをキャンセルする場合は、Organization とそのコンテンツを削除する代わりに、[Organization を {% data variables.product.prodname_free_team %} にダウングレード](/articles/downgrading-your-github-subscription)できます。

{% endtip %}

{% endif %}

## 1. Organization コンテンツをバックアップする

{% ifversion not ghes %} Organization を削除すると、{% data variables.product.company_short %} は **コンテンツを復元できません**。 したがって、{% else %}{% endif %}Organization を削除する前に、アカウントからすべてのリポジトリ、ウィキ、Issue、プロジェクトボードのコピーがあることを確認してください。

{% ifversion ghes %} {% note %}

**注:** 必要に応じて、{% data variables.product.product_location %} のサイト管理者は削除された Organization を部分的に復元できる場合があります。 詳細については、「[削除された Organization の復元](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)」を参照してください。

{% endnote %} {% endif %}

## 2. Organization を削除する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Organization の設定ページの下の方にある **[この Organization を削除する]** をクリックします。
   ![[この Organization を削除する] ボタン](/assets/images/help/settings/settings-organization-delete.png)
