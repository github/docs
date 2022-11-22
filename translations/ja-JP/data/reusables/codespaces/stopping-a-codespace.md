---
ms.openlocfilehash: 4bdcc6ff93e7671d4dc368fc44784c963f549aae
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159046"
---
codespace はいつでも停止できます。 codespace を停止すると、実行中のすべてのプロセスが停止され、ターミナルの履歴が消去されます。 次に codespace を起動するときに、codespace に保存した変更は引き続き使用できます。 codespace を明示的に停止しない場合、非アクティブからタイムアウトするまで実行され続けます。 詳しくは、「[codespace のライフサイクル](/codespaces/developing-in-codespaces/the-codespace-lifecycle#timeouts-for-github-codespaces)」を参照してください。

CPU 料金は、実行中の codespace に対してのみ発生します。 停止した codespace には、ストレージ コストのみが発生します。

codespace を停止し、再起動したときに、変更を適用したいと思うかもしれません。 たとえば、codespace に使用するマシンの種類を変更した場合、変更を有効にするには、その codespace を停止して再起動する必要があります。 また、エラーや予期しない問題が発生した場合に、codespace を停止し、再起動または削除することもできます。
