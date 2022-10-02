---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113742"
---
### リポジトリに基づく検索

`repo` 修飾子は、アクションを特定のリポジトリに限定するときに使ってください。 たとえば次のような点です。

  * `repo:my-org/our-repo` は、`my-org` 組織内の `our-repo` リポジトリで発生したすべてのイベントを検索します。
  * `repo:my-org/our-repo repo:my-org/another-repo` は、`my-org`組織内の `our-repo` および `another-repo` リポジトリで発生したすべてのイベントを検索します。
  * `-repo:my-org/not-this-repo` は、`my-org` 組織内の `not-this-repo` リポジトリで発生したすべてのイベントを除外します。

`repo` 修飾子内にアカウント名を含める必要があります。`repo:our-repo` を検索するだけでは機能しません。
