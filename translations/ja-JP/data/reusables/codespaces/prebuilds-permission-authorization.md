---
ms.openlocfilehash: c32a9f6f6a799c3653cb17fe89721090fc01d155
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109195"
---
   リポジトリの開発コンテナー構成で他のリポジトリにアクセスするためのアクセス許可が指定されている場合は、認可ページが表示されます。 `devcontainer.json` ファイルでこれを指定する方法について詳しくは、「[codespace 内の他のリポジトリへのアクセスを管理する](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」を参照してください。   

   {% octicon "chevron-down" aria-label="The expand down icon" %} をクリックして、要求されたアクセス許可の詳細を表示します。

   ![プレビルドの認可ページのスクリーンショット](/assets/images/help/codespaces/prebuild-authorization-page.png)

   **[認可して続行する]** をクリックし、プレビルドを作成するためにこれらのアクセス許可を付与します。 または、 **[認可せずに続行する]** をクリックすることもできますが、その場合は、結果のプレビルドから作られる codespace が正しく機能しない可能性があります。

   {% note %}

   **注**: このプレビルドを使って codespace を作るユーザーも、これらのアクセス許可を付与するように求められます。

   {% endnote %}
