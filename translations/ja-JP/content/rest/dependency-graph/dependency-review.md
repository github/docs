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
ms.openlocfilehash: 9988c87ed4b0dcbe9c8a0694ebe0ca43d5bc336e
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164231'
---
## 依存関係の確認 API について

依存関係レビュー API を使用すると、依存関係の変更やこの変更がセキュリティに及ぼす影響を把握したうえで、この変更を環境に追加することができます。 既知の脆弱性を含むすべてのバージョン アップデートの脆弱性データを含め、リポジトリの 2 つのコミット間の依存関係の差分を確認することができます。 依存関係レビューの詳細については、「[依存関係のレビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。
