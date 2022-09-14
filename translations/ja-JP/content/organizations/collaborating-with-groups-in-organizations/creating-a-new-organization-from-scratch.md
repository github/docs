---
title: 新しい Organization をゼロから作成
intro: Organization を作成して、リポジトリへの細かなアクセス許可を適用します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Create new organization
ms.openlocfilehash: d9443aa84964fcc1202fee41d95800cf8e9ccd4c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878790'
---
ゼロから作成されたばかりの新しい Organization には、何のリポジトリも関連付けられていません。 Organization にリポジトリを追加する方法については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」と「[リポジトリの転送](/articles/transferring-a-repository)」を参照してください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. プロンプトに従って Organization を作成します。 {% ifversion fpt or ghec %}チームで利用できるプランについて詳しくは、「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」を参照してください。{% endif %}

## 参考資料

{% ifversion fpt or ghec %}
- 「[課金メールの設定](/articles/setting-your-billing-email)」{% endif %}
- "[Organization について](/articles/about-organizations)"
