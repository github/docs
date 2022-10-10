---
ms.openlocfilehash: ce7aa40d4312947c099afb8c1a8b88bacd021847
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110061"
---
許可リストの設定で **[Enable IP allow list configuration for installed GitHub Apps]** \(インストールされた GitHub Apps の IP 許可リストの設定を有効化する\) を選択した場合、インストールされた {% data variables.product.prodname_github_apps %} からの IP アドレスが許可リストに追加されます。 これは、許可リストがその時点で有効化されているかどうかに関係なく行われます。 {% data variables.product.prodname_github_app %}をインストールして、その後にそのアプリケーションの作者が許可リスト中のアドレスを変更した場合、あなたの許可リストにはそれらの変更が自動的に反映されます。

{% data variables.product.prodname_github_apps %}から自動的に追加されたIPアドレスは、descriptionフィールドを見れば判別できます。 それらのIPアドレスの説明は"Managed by the NAME GitHub App"となっています。 手動で追加されたアドレスとは異なり、{% data variables.product.prodname_github_apps %}から自動で追加されたIPアドレスは編集、削除、無効化できません。
