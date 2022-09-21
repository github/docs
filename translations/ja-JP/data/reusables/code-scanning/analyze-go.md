---
ms.openlocfilehash: e9f2162fa5c65d4a59b2bd350aea2b131205f9a6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113374"
---
{% data variables.product.prodname_codeql %}は、プロジェクトをセットアップするためにGoのプロジェクトのビルドも実行します。 ただし、他のコンパイル済み言語と対照的に、ビルドされたものだけでなく、リポジトリ内のすべての Go ファイルが抽出されます。 カスタム ビルド コマンドを使用すると、ビルドによって使用されない Go ファイルの抽出をスキップできます。
