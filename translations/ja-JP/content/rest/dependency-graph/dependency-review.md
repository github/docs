---
title: 依存関係の確認
intro: 依存関係の確認 API を使用すると、依存関係の変更やこの変更がセキュリティに及ぼす影響を把握したうえで、この変更を環境に追加することができます。
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: '>= 3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 64cb77b737927e8d44315fd40b51f68c77c50c54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064875'
---
## 依存関係の確認 API について

{% data reusables.dependency-review.dependency-review-api-beta-note %}

依存関係レビュー API を使用すると、依存関係の変更やこの変更がセキュリティに及ぼす影響を把握したうえで、この変更を環境に追加することができます。 既知の脆弱性を含むすべてのバージョン アップデートの脆弱性データを含め、リポジトリの 2 つのコミット間の依存関係の差分を確認することができます。 依存関係レビューの詳細については、「[依存関係のレビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。
