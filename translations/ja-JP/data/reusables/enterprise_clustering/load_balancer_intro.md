---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111837"
---
ロードバランサの設計では、ネットワークデバイスを使ってGit及びHTTPのトラフィックを個々の{% data variables.product.prodname_ghe_server %}アプライアンスに向かわせます。 ロードバランサを使って、セキュリティのためにアプライアンスへの直接のトラフィックを制限したり、必要に応じてDNSのレコードを変更することなくトラフィックをリダイレクトしたりできます。 PROXYプロトコルをサポートするTCPベースのロードバランサを使うことを強くおすすめします。
