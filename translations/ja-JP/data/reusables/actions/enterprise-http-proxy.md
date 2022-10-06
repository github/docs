---
ms.openlocfilehash: c61e071aa06bda0d31a1c4578dfe78addb55867e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147167380"
---
{% data variables.product.product_location %} に **HTTP プロキシ サーバー** が構成されている場合:
  - `localhost` と `127.0.0.1` を **HTTP プロキシ除外** リストに追加する必要があります。
  - BYOS バケットがルーティングできない場合は、バケットの URL も除外リストに追加する必要があります。

  プロキシ設定の変更の詳細については、「[アウトバウンドの Web プロキシ サーバーの構成](/admin/configuration/configuring-an-outbound-web-proxy-server)」を参照してください。