---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160219"
---
接続する codespace では、SSH サーバーを実行している必要があります。 既定のコンテナー イメージには、自動的に開始される SSH サーバーが含まれています。 codespaces が既定のイメージから作成されていない場合は、`devcontainer.json` ファイル内の `features` オブジェクトに次を追加することで、SSH サーバーをインストールして起動できます。

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```