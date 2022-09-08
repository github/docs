---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079963"
---
ワークフローの実行をトリガーしたブランチまたはタグ ref。 `push` によってトリガーされるワークフローの場合、これはプッシュされたブランチまたはタグの参照です。 `pull_request` によってトリガーされるワークフローの場合、これは pull request のマージ ブランチです。 `release` によってトリガーされるワークフローの場合、これは作成されたリリース タグです。 その他のトリガーの場合、これはワークフロー実行をトリガーしたブランチまたはタグの参照です。 これは、イベントの種類に対してブランチまたはタグを使用できる場合にのみ設定されます。 指定する参照は完全な形式です。つまり、ブランチの場合の形式は `refs/heads/<branch_name>`、pull request の場合は `refs/pull/<pr_number>/merge`、タグの場合は `refs/tags/<tag_name>` です。 たとえば、「 `refs/heads/feature-branch-1` 」のように入力します。
