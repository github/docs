---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107574"
---
{% note %}

**注**: 現在、一部の機能は{% data variables.product.pat_v1_plural %} でのみ機能します。

- 自分、または自分がメンバーではない組織によって所有されていないパブリック リポジトリに対する書き込みアクセス権を持つのは、{% data variables.product.pat_v1_plural %} のみです。{% ifversion ghec or ghes or ghae %}
- エンタープライズが所有する内部リポジトリに対する書き込みアクセス権を自動的に持つのは、{% data variables.product.pat_v1_plural %} のみです。 {% data variables.product.pat_v2_caps %}には、内部リポジトリへのアクセス権を付与する必要があります。{% endif %}
- 外部コラボレーターは、{% data variables.product.pat_v1_plural %} のみを使用して、コラボレーターである組織リポジトリにアクセスできます。{% ifversion ghec or ghes or ghae %}
- {% data variables.product.pat_v1_plural %} のみがエンタープライズにアクセスできます。 ({% data variables.product.pat_v2_caps %} は、エンタープライズが所有する組織にアクセスできます。){% endif %}
- 次の API では、{% data variables.product.pat_v1_plural %} のみがサポートされています。 {% data variables.product.pat_v2 %} でサポートされている REST API 操作の一覧については、「[{% data variables.product.pat_v2 %}で使用可能なエンドポイント](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)」を参照してください。
  - GraphQL API{% ifversion ghec or ghes or ghae %}
  - エンタープライズ管理者向けの REST API{% endif %}{% ifversion ghec or fpt %}
  - ソース インポートを管理するための REST API{% endif %}
  - {% data variables.product.prodname_projects_v1_caps %}を管理するための REST API
  - {% data variables.product.prodname_registry %} を管理するための REST API
  - 通知を管理するための REST API
  - リポジトリを転送するための REST API
  - テンプレートからリポジトリを作成するための REST API
  - 認証されたユーザーのリポジトリを作成するための REST API

{% endnote %}
