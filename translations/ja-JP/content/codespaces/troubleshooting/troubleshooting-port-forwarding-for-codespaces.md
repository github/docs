---
title: Codespaces のポート フォワーディングのトラブルシューティング
intro: ポートの転送に関する一般的な問題のトラブルシューティング手順。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090376"
---
Codespace 内で実行されているアプリケーションによってポートがコンソールに出力されると、{% data variables.product.prodname_codespaces %} によってローカルホスト URL パターンが検出され、ポートが自動的に転送されます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

ポートが自動的に転送されない場合は、手動で転送できます。 詳細については、「[ポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)」を参照してください。

ポート フォワーディングが設定されている場合は、次を確認してください。

- 通知トーストを使用するか、ターミナルの URL をクリックして、転送されたポートを開きます。 ブラウザー経由で codespace に接続している場合、ローカル マシンに「`localhost:8000`」 (例) と入力しても、動作しません。
- アプリケーションが codespace 内から引き続き実行されていることを確認してください。 一定期間にわたって非アクティブになった後で codespace が停止した場合は、codespace が再起動したら、必ずアプリケーションを再起動する必要があります。

通常は、転送されたポートをパブリックに、またはリポジトリを所有する組織内でアクセスできるようにします。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。 パブリックと組織のオプションのいずれか、または両方での可視性を実現できない場合、これは、組織レベルのポリシーが構成されていることを示しています。 詳細については、「[転送されたポートの可視性の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)」を参照してください。
