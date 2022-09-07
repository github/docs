---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068128"
---
ワークフローは、`redis` ラベルを使用してサービス コンテナーを構成します。 すべてのサービスはコンテナー内で実行しなければならないので、各サービスについてコンテナー `image` を指定する必要があります。 この例は `redis` コンテナー イメージを使用しており、サービスが動作していることを確認するためのヘルス チェック オプションが含まれます。 詳細については、Docker Hub の [redis イメージ](https://hub.docker.com/_/redis)を参照してください。
