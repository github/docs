---
title: CodeQL を実行するための推奨ハードウェア リソース
shortTitle: Hardware resources for CodeQL
intro: 'コードベースのサイズに基づいて、セルフホステッド マシンで {% data variables.product.prodname_codeql %} 分析を実行するための推奨仕様 (RAM、CPU コア、ディスク)。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117717'
---
{% data variables.product.prodname_actions %} または外部 CI システムで {% data variables.product.prodname_codeql %} を設定できます。 {% data variables.product.prodname_codeql %} は {% data variables.product.prodname_actions %} の {% data variables.product.prodname_dotcom %} ホスト ランナーと完全に互換性があります。

外部 CI システムを使用している場合、またはプライベート リポジトリの {% data variables.product.prodname_actions %} でセルフホスト ランナーを使用している場合は、独自のハードウェアを構成する必要があります。 {% data variables.product.prodname_codeql %} を実行するための最適なハードウェア構成は、コードベースのサイズと複雑さ、使用されているプログラミング言語とビルド システム、および CI ワークフローの設定によって異なる場合があります。

次の表は、コードベースのサイズに基づいて {% data variables.product.prodname_codeql %} 分析を実行するための推奨されるハードウェア仕様を示しています。 ハードウェアまたは仮想マシンの選択を決定するための始点としてこれらを使用します。 リソースが多いマシンでは、分析パフォーマンスが向上する可能性がありますが、保守コストも高くなる可能性があります。

| コードベース のサイズ | RAM | CPU |
|--------|--------|--------|
| 小 (<100 K のコード行) | 8 GB 以上 | 2 コア |
| 中間 (100 K から 1 M のコード行) | 16 GB 以上 | 4 または 8 コア |
| 大 (>1 M のコード行) | 64 GB 以上 | 8 コア |

すべてのコードベース サイズでは、ディスク領域が 14 GB 以上の SSD を使用することをお勧めします。 コードをチェックアウトしてビルドするのに十分なディスク領域と、{% data variables.product.prodname_codeql %} によって生成されるデータ用の追加の領域が必要です。
