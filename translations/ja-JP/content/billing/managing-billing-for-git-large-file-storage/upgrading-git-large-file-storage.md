---
title: Git Large File Storage をアップグレードする
intro: '追加のデータパックを購入すると、{% data variables.large_files.product_name_short %} の毎月の帯域幅容量と総ストレージ容量を増やすことができます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-git-large-file-storage
  - /articles/purchasing-additional-storage-and-bandwidth-for-a-personal-account
  - /articles/purchasing-additional-storage-and-bandwidth-for-an-organization
  - /articles/upgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - LFS
  - Organizations
  - Upgrades
  - User account
shortTitle: Upgrade Git LFS storage
ms.openlocfilehash: 261ef75ee139cf8c1bcec01c09d95444d64ecc89
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088133'
---
## 個人アカウント用に追加のストレージと帯域幅を購入する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.lfs-add-data %} {% data reusables.large_files.pack_selection %} {% data reusables.large_files.pack_confirm %}

## Organization 用に追加のストレージと帯域幅を購入する

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.lfs-add-data %} {% data reusables.large_files.pack_selection %} {% data reusables.large_files.pack_confirm %}

## 参考資料

- 「[{% data variables.large_files.product_name_long %}の支払いについて](/articles/about-billing-for-git-large-file-storage)」
- 「[ストレージと帯域の利用について](/articles/about-storage-and-bandwidth-usage)」
- 「[{% data variables.large_files.product_name_long %} の使用状況を表示する](/articles/viewing-your-git-large-file-storage-usage)」
- 「[大きなファイルのバージョン管理](/articles/versioning-large-files)」
