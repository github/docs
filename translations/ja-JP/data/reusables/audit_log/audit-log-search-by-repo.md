---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113742"
---
### リポジトリに基づく検索

`repo` 修飾子は、アクションを特定のリポジトリに限定するときに使ってください。 たとえば次のような点です。

  * `repo:my-org/our-repo` は、`my-org` 組織内の `our-repo` リポジトリで発生したすべてのイベントを検索します。
  * `repo:my-org/our-repo repo:my-org/another-repo` は、`my-org`組織内の `our-repo` および `another-repo` リポジトリで発生したすべてのイベントを検索します。
  * `-repo:my-org/not-this-repo` は、`my-org` 組織内の `not-this-repo` リポジトリで発生したすべてのイベントを除外します。

`repo` 修飾子内にアカウント名を含める必要があります。`repo:our-repo` を検索するだけでは機能しません。
