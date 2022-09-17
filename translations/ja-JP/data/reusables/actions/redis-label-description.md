---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068128"
---
ワークフローは、`redis` ラベルを使用してサービス コンテナーを構成します。 すべてのサービスはコンテナー内で実行しなければならないので、各サービスについてコンテナー `image` を指定する必要があります。 この例は `redis` コンテナー イメージを使用しており、サービスが動作していることを確認するためのヘルス チェック オプションが含まれます。 詳細については、Docker Hub の [redis イメージ](https://hub.docker.com/_/redis)を参照してください。
