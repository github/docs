---
ms.openlocfilehash: 298bcacbb02a443ae929ddcd48d9d9cd4bebd41a
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179649"
---
ワークフローの実行をトリガーしたブランチまたはタグの完全な形式の参照。 `push` によってトリガーされるワークフローの場合、これはプッシュされたブランチまたはタグの参照です。 `pull_request` によってトリガーされるワークフローの場合、これは pull request のマージ ブランチです。 `release` によってトリガーされるワークフローの場合、これは作成されたリリース タグです。 その他のトリガーの場合、これはワークフロー実行をトリガーしたブランチまたはタグの参照です。 これは、イベントの種類に対してブランチまたはタグを使用できる場合にのみ設定されます。 指定する参照は完全な形式です。つまり、ブランチの場合の形式は `refs/heads/<branch_name>`、pull request の場合は `refs/pull/<pr_number>/merge`、タグの場合は `refs/tags/<tag_name>` です。 たとえば、「 `refs/heads/feature-branch-1` 」のように入力します。