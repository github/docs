---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068213"
---
`permissions` を使用して `GITHUB_TOKEN` に付与された既定のアクセス許可を変更し、必要に応じてアクセスを追加または削除することで、必要最小限のアクセスのみを許可することができます。 詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

`permissions` は、最上位のキーとして、ワークフロー内のすべてのジョブに適用するか、または特定のジョブ内で使用できます。 特定のジョブ内に `permissions` キーを追加すると、`GITHUB_TOKEN` を使用するそのジョブ内のすべてのアクションと実行コマンドが、指定したアクセス権を取得します。  詳細については、「[`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions)」を参照してください。

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### 例: GITHUB_TOKEN にアクセス許可を割り当てる

この例では、ワークフロー内のすべてのジョブに適用される `GITHUB_TOKEN` に設定されているアクセス許可を示しています。 すべての権限に読み取りアクセスが付与されます。

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
