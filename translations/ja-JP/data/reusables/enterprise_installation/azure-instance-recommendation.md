---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123726"
---
{% data variables.product.prodname_ghe_server %} アプライアンスは、プレミアムストレージのデータディスクを必要としており、プレミアムストレージをサポートするあらゆる Azure VM でサポートされます。 `s` サフィックスが付いた Azure VM の種類では、Premium Storage がサポートされます。 詳細については、「[Azure で利用できるディスクの種類](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)」 および Azure ドキュメントの「[Azure Premium Storage: 高パフォーマンス用に設計する](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)」を参照してください。

{% data variables.product.company_short %} は、{% data variables.product.prodname_ghe_server %} にメモリ最適化された VM を推奨しています。 詳細については、Azure ドキュメントの「[メモリ最適化済み仮想マシンのサイズ](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)」を参照してください。

{% data variables.product.prodname_ghe_server %} は、VM タイプをサポートするあらゆる地域をサポートします。 各 VM でサポートされているリージョンの詳細については、Azure の「[リージョン別の利用可能な製品](https://azure.microsoft.com/regions/services/)」を参照してください。
