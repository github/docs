---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109770"
---
{% data variables.product.prodname_actions %}は、ワークフローの成果物とログを保存するのに外部ストレージを使用します。 このデータは、Azure BLOB ストレージ、Amazon S3、{% ifversion actions-ghes-gcp-storage %} Google Cloud Storage、{% endif %}または MinIO などの外部プロバイダーに格納されます。 その結果、{% data variables.product.prodname_ghe_server %} のバップアップと {% data variables.product.prodname_ghe_server %} の高可用性構成は、この外部ストレージに保存されたデータに対する保護を提供せず、そのかわりに Azure{% ifversion actions-ghes-gcp-storage %}、Google Cloud、{% endif %} または AWS といった外部ストレージのプロバイダーが提供するデータ保護およびレプリケーションに依存します。
