---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878681"
---
ロードバランサの設計では、ネットワークデバイスを使ってGit及びHTTPのトラフィックを個々の{% data variables.product.prodname_ghe_server %}アプライアンスに向かわせます。 ロードバランサを使って、セキュリティのためにアプライアンスへの直接のトラフィックを制限したり、必要に応じてDNSのレコードを変更することなくトラフィックをリダイレクトしたりできます。 PROXYプロトコルをサポートするTCPベースのロードバランサを使うことを強くおすすめします。
