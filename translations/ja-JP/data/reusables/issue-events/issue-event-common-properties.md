---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080977"
---
名前 | 型 | 説明
-----|------|--------------
`id` | `integer` | イベントの一意識別子。
`node_id` | `string` | イベントの[グローバル ノード ID](/graphql/guides/using-global-node-ids)。
`url`| `string` | イベントをフェッチするためのREST API URL。
`actor` | `object`| イベントを生成したユーザ。
`event` | `string` | 発生したイベントの実際の種類を特定します。
`commit_id` | `string` | このIssueを参照するコミットのSHA。
`commit_url` | `string` | このIssueを参照するコミットへのGitHub REST APIリンク。
`created_at` | `string` | イベントが発生した時刻を示すタイムスタンプ。
