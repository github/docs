---
ms.openlocfilehash: ab6a2179820f4517ec815e953fa1194be97f5a31
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180824"
---
{% data variables.product.prodname_actions %} を有効にすると、ワークフローは、リポジトリ内および他の{% ifversion fpt %}パブリック{% elsif ghec or ghes %}パブリックまたは内部{% elsif ghae %}内部{% endif %}リポジトリに配置されているアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を実行できます。
