---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882788"
---
- [最小要件](#minimum-requirements)
- [Storage](#storage)
- [CPU とメモリ](#cpu-and-memory)

### 最小要件

{% data variables.product.product_location %}のユーザライセンス数に応じた様々なハードウェア構成をおすすめします。 最小要件以上のリソースを提供すれば、インスタンスのパフォーマンスとスケーラビリティは向上します。

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### ストレージ

{% data variables.product.prodname_ghe_server %}には、高い秒あたりの入出力操作（IOPS）と低いレイテンシを持つ高性能なSSDをおすすめします。 ワークロードはI/O集中的です。 ベアメタルのハイパーバイザを使用するなら、直接アタッチされたディスクか、ストレージエリアネットワーク（SAN）からのディスクを利用することをおすすめします。

インスタンスには、ルートディスクとは別の永続化用のデータディスクが必要です。 詳細については、「[システムの概要](/enterprise/admin/guides/installation/system-overview)」をご覧ください。

{% ifversion ghes %}

{% data variables.product.prodname_actions %} を構成するには、外部 BLOB ストレージを指定する必要があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)」を参照してください。

{% endif %}

ルート ファイルシステム上の使用可能な領域は、ディスクの合計サイズの 50% です。 新しいインスタンスを構築するか、既存のインスタンスを利用して、インスタンスのルートディスクのサイズを変更できます。 詳細については、「[システムの概要](/enterprise/admin/guides/installation/system-overview#storage-architecture)」および「[ストレージ容量の増加](/enterprise/admin/guides/installation/increasing-storage-capacity)」を参照してください。

### CPU とメモリ

{% data variables.product.prodname_ghe_server %}が必要とするCPU及びメモリリソースは、ユーザ、自動化、インテグレーションのアクティビティのレベルによります。

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスのユーザーに対して {% data variables.product.prodname_actions %} を有効にする予定の場合は、インスタンスに追加の CPU とメモリ リソースをプロビジョニングする必要がある場合があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**警告:** {% data variables.product.prodname_ghe_server %} 上のアクティビティを外部システムに通知する Webhook イベントを構成することをおすすめします。 変更の自動チェックまたは _ポーリング_ は、インスタンスのパフォーマンスとスケーラビリティに悪影響を与えます。 詳細については、「[Webhook について](/github/extending-github/about-webhooks)」を参照してください。

{% endwarning %}

{% data variables.product.prodname_ghe_server %} の容量とパフォーマンスの監視の詳細については、「[アプライアンスを監視する](/admin/enterprise-management/monitoring-your-appliance)」を参照してください。

インスタンスのCPUあるいはメモリリソースは増やすことができます。 詳細については、「[CPU またはメモリ リソースの増加](/enterprise/admin/installation/increasing-cpu-or-memory-resources)」を参照してください。
