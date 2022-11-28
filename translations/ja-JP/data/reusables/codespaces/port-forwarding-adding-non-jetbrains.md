---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160151"
---
## codespace 構成へのポートの追加

転送されるポートをリポジトリの {% data variables.product.prodname_github_codespaces %} 構成に追加し、リポジトリから作成されるすべての codespace でポートが自動的に転送されるようにすることができます。 変更を適用するには、構成を更新した後、以前に作成した codespace をリビルドする必要があります。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)に関するページをご覧ください。

`forwardPorts` プロパティを使用して `.devcontainer.json` ファイル内の転送ポートを手動で構成することも、ブラウザーまたは {% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションで開いた codespace の [ポート] パネルを使用することもできます。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. codespace の構成に追加するポートを右クリックして、 **[ラベルを設定して devcontainer.json を更新する]** をクリックします。
  ![右クリック メニューでラベルを設定し devcontainer.json にポートを追加するオプション](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}