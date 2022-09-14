---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061299"
---
1. [ランナー] のリストでランナーを見つけます。 ランナーがグループ内にあるなら、{% octicon "chevron-down" aria-label="The downwards chevron" %}をクリックしてリストを展開してください。
1. 削除したいランナーの隣の {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、 **[削除]** をクリックしてください。

    ![セルフホストランナーの設定の削除](/assets/images/help/settings/actions-runner-remove.png)
1. セルフホストランナーの削除手順が表示されます。 ランナーがアクセスできる状態にあるかによって、ランナーを削除するための以下のステップのいずれかを実行してください。

    * **ランナー マシンにアクセスできる場合:** マシンのオペレーティング システムの画面上の指示に従い、削除コマンドを実行してください。 この指示には、必須のURLと自動的に生成された期間限定のトークンが含まれます。

        この削除コマンドは、以下のタスクを実行します。

        * {% data variables.product.product_name %}からのランナーの削除。
        * マシン上のセルフホストランナーアプリケーションの設定ファイルの削除。
        * インタラクティブモードで動作していないのであれば設定されているサービスの削除。

    * **マシンにアクセスできない場合:** **[はい、このランナーを強制的に削除する]** をクリックして、{% data variables.product.product_name %} がこのランナーを強制的に削除するようにします。
