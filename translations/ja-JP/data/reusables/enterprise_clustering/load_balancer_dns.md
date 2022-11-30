---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332321"
---
{% data variables.product.prodname_ghe_server %}のホスト名に対するDNSルックアップは、ロードバランサに解決されなければなりません。 Subdomain Isolationを有効化することをおすすめします。 サブドメイン分離が有効化されている場合、追加のワイルドカード レコード (`*.HOSTNAME`) もロード バランサーに解決されなければなりません。 詳細については、「[サブドメイン分離の有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)」を参照してください。
