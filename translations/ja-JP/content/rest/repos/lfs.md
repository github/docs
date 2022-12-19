---
title: Git LFS
intro: 'リポジトリの {% data variables.large_files.product_name_long %} (LFS) を有効または無効にすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109769'
---
## {% data variables.large_files.product_name_short %} API について

{% data variables.large_files.product_name_short %} を使って、Git リポジトリに大きなファイルを格納することができます。 {% data variables.large_files.product_name_short %} API を使用すると、個々のリポジトリの機能を有効または無効にすることができます。 {% data variables.large_files.product_name_short %} について詳しくは、「[{% data variables.large_files.product_name_short %} について](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)」を参照してください。

リポジトリへの管理者アクセス権を持つユーザーは、{% data variables.large_files.product_name_short %} API を使うことができます。

{% ifversion fpt or ghec %}

{% data variables.large_files.product_name_short %} の使用は課金対象です。 詳細については、「[ {% data variables.large_files.product_name_long %} の課金について](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)」を参照してください。

Organization に属するリポジトリに {% data variables.large_files.product_name_short %} API を使用する場合は、Organization の {% ifversion ghec %} または Enterprise の {% endif %} 課金へのアクセス権がご自分のロールで提供されている必要があります。{% ifversion fpt %}詳しくは、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)」を参照してください。{% endif %}

{% ifversion ghec %}

| リポジトリの所有権 | 必要なリポジトリ アクセス | 必要なロール | 詳細情報 |
| :- | :- | :- | :- |
| 個人用アカウント | [Admin] | 該当なし | 該当なし |
| <ul><li>{% data variables.product.prodname_team %} の Organization</li><li>{% data variables.product.product_name %} の Organization ですが、Enterprise 内には含まれない</li></ul> | 管理者。Organization の所有者である場合に継承される | Organization の所有者または支払いマネージャー | 「[組織のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)」 |
| Enterprise 内の Organization | 管理者。Organization の所有者である場合に継承できる | Enterprise の所有者または支払いマネージャー | "[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)" |

{% endif %}

{% endif %}
