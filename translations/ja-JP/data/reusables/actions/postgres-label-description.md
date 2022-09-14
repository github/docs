---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068147"
---
ワークフローは、`postgres` ラベルを使用してサービス コンテナーを構成します。 すべてのサービスはコンテナー内で実行しなければならないので、各サービスについてコンテナー `image` を指定する必要があります。 この例では `postgres` コンテナ イメージを使っており、デフォルトの PostgreSQL のパスワードが提供され、サービスが動作していることを確認するための正常性チェック オプションが含まれます。 詳しくは、Docker Hub の [postgres イメージ](https://hub.docker.com/_/postgres)をご覧ください。
