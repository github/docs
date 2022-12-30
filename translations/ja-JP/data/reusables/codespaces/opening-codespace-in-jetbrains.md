---
ms.openlocfilehash: 52206649d45bd9d76bcc593adeffa47318a70880
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160169"
---
JetBrains Gateway を既定のエディターとして設定している場合、{% data variables.product.prodname_dotcom_the_website %} から codespace を開くと、Gateway が自動的に起動します。 

JetBrains Gateway が既定のエディターではない場合でも、[github.com/codespaces](https://github.com/codespaces) にある [あなたの Codespaces] ページに移動し、開く codespace の右側にある省略記号 (...) をクリックすることによって、JetBrains で codespace を開くことができます。 詳しくは、「[既存の codespace を開く](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui)」をご覧ください。

または、JetBrains Gateway を開き、次の手順で説明するように、既存の codespace を選ぶこともできます。

1. JetBrains Gateway アプリケーションを開きます。
1. **[{% data variables.product.prodname_codespaces %} に接続する]** をクリックします。

   ![JetBrains Gateway の初期ビューのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. [あなたの Codespaces] リストで、作業する codespace をクリックします。

   ![JetBrains Gateway の codespace リストのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. "使用可能な IDE" リストで、使用する JetBrains IDE をクリックします。 Gateway は、次回 codespace に接続するときのために、選んだ項目を記憶します。

   ![JetBrains Gateway の codespace リストのスクリーンショット](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. **[Connect]** をクリックします。

   {% note %}

   **注**: "ファイアウォールを実行している場合": リモート リソースに初めて接続するときに、JetBrains Gateway がお使いのネットワーク経由で通信することを許可するように求められる場合があります。

   {% endnote %}
