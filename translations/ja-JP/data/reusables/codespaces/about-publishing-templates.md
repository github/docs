---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160195"
---
テンプレートから作成された codespace で作業する場合、作業はクラウド内の仮想マシンに保存されますが、{% data variables.product.prodname_dotcom %} のリポジトリには保存されません。

ファイルを保存し、codespace を閉じて停止し、後で作業に戻ることができます。 通常、Git はプレインストールされ、{% data variables.product.company_short %} の空のテンプレートから開始しない限り、作業ディレクトリは Git リポジトリとして自動的に初期化されます。 つまり、ファイルの追加やコミットなど、ローカル ソース管理に Git をすぐに使用できます。

しかし、発行されていない codespace を削除した場合、または保持期間の間に未使用のままで自動的に削除された場合は、作業も削除されます。 作業を永続化し、他のユーザーがあなたのプロジェクトで作業できるようにするには、ご自分の codespace を {% data variables.product.prodname_dotcom %} のリポジトリに発行する必要があります。