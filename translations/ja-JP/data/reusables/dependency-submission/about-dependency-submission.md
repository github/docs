---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080005"
---
Dependency Submission API を使うと、プロジェクトの依存関係を送信できます。 これにより、ソフトウェアのコンパイル時やビルド時に解決されるものなどの依存関係を {% data variables.product.prodname_dotcom %} の依存関係グラフ機能に追加し、プロジェクトのすべての依存関係をより完全に把握できます。

依存関係グラフには、リポジトリ内のマニフェストまたはロック ファイル (JavaScript プロジェクトの `package-lock.json` ファイルなど) から識別された依存関係に加えて、この API を使って送信したすべての依存関係が表示されます。 依存関係グラフの表示について詳しくは、「[リポジトリの依存関係を調べる](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)」をご覧ください。 

送信された依存関係は、既知の脆弱性に対する {% data variables.product.prodname_dependabot_alerts %} と {% data variables.product.prodname_dependabot_security_updates %} を受け取ります。 {% data variables.product.prodname_advisory_database %} の[サポートされているエコシステム](https://github.com/github/advisory-database#supported-ecosystems)のいずれかからの依存関係に対する {% data variables.product.prodname_dependabot_alerts %} のみを受け取ります。 送信された依存関係は、依存関係のレビューや Organization の依存関係の分析情報には表示されません。
