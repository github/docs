---
title: 互換性に影響する変更
shortTitle: Breaking changes
intro: 各 REST API バージョンで導入された破壊的変更について説明します。
versions:
  feature: api-date-versioning
ms.openlocfilehash: 674345b82c5da9b0804fe4a0f62450ff4fbbc3e9
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184406'
---
## REST API の破壊的変更について

{% data reusables.rest-api.about-api-versions %}

API バージョンの詳細については、「[API のバージョン](/rest/overview/api-versions)」を参照してください。

## 新しい API バージョンへのアップグレード

新しい REST API バージョンにアップグレードする前に、新しい API バージョンに対応するこのページのセクションを読んで、どのような破壊的変更が含まれているかを理解し、その API バージョンにアップグレードする方法の詳細を確認する必要があります。

`X-GitHub-Api-Version` ヘッダーで新しい API バージョンを指定するように統合を更新する場合は、統合が新しい API バージョンで動作するために必要な変更を加える必要もあります。

統合が更新されたら、統合をテストして、新しい API バージョンで動作することを確認します。

## {{ initialRestVersioningReleaseDate }} の破壊的変更

バージョン `{{ initialRestVersioningReleaseDate }}` は、日付ベースのバージョン管理が導入されてから最初の {% data variables.product.product_name %} REST API のバージョンです。 このバージョンには、破壊的変更は含まれていません。
