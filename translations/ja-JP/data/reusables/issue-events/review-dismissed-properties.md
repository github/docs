---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "145123502"
---
`dismissed_review` | `object` | 却下されたレビューの情報。
`dismissed_review[state]` | `string` | pull request が無視されたときの状態。 `commented`、`approved`、または `changes_requested` のいずれかにすることができます。
`dismissed_review[review_id]` | `string` | pull request のレビューの一意の識別子。
`dismissed_review[dismissal_message]` | `string` | レビューを閉じるときにユーザーが含めるメッセージ。
`dismissed_review[dismissal_commit_id]` | `string` | レビューが存在する場合にそれが無視されたコミットの一意識別子。
