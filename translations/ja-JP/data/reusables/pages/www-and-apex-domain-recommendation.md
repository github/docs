---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145121461"
---
カスタム ドメインとして Apex ドメインを使用している場合は、`www` サブドメインも設定することをお勧めします。 DNSプロバイダを通じて各ドメインの種類のための正しいレコードを設定しているなら、{% data variables.product.prodname_pages %}は自動的にドメイン間のリダイレクトを生成します。 たとえば、`www.example.com` をご自分のサイトのカスタム ドメインとして構成し、{% data variables.product.prodname_pages %} DNS レコードを Apex と `www` のドメインに設定している場合、`example.com` は `www.example.com` にリダイレクトされます。 自動リダイレクトは `www` サブドメインにのみ適用されることに注意してください。 自動リダイレクトは、`blog` などのその他のサブドメインには適用されません。
