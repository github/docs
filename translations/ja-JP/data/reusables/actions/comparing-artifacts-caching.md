---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145117029"
---
## 成果物の比較と依存関係のキャッシング

成果物とキャッシングは、{% data variables.product.prodname_dotcom %}にファイルを保存できるようにするので似ていますが、それぞれの機能のユースケースは異なっており、入れ替えて使うことはできません。

- パッケージ管理システムからのビルドの依存関係など、ジョブまたはワークフローの実行の間で頻繁に変更されないファイルを再利用する場合は、キャッシュを使用します。
- ビルドされたバイナリやビルド ログなど、ワークフローの実行が終了した後に表示するためにジョブによって生成されたファイルを保存する場合は、成果物を使用します。 
