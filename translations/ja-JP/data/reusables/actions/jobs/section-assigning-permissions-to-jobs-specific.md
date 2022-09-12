---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089503"
---
特定のジョブについて、`jobs.<job_id>.permissions` を使用して `GITHUB_TOKEN` に付与された既定のアクセス許可を変更し、必要に応じてアクセスを追加または削除することで、必要最小限のアクセスのみを許可することができます。 詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

ジョブ定義内で権限を指定することで、必要に応じて、ジョブごとに `GITHUB_TOKEN` に異なる権限のセットを構成できます。 または、ワークフロー内のすべてのジョブの権限を指定することもできます。 ワークフロー レベルでのアクセス許可の定義については、[`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions) を参照してください。

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### 例: 特定のジョブのアクセス許可の設定

この例は、`stale` という名前のジョブにのみ適用される `GITHUB_TOKEN` に設定されているアクセス許可を示しています。 書き込みアクセス権は、`issues` スコープと `pull-requests` スコープに対して付与されます。 他のすべてのスコープにはアクセスできません。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
