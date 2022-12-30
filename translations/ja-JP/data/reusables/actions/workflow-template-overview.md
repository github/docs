---
ms.openlocfilehash: 51d4b7e23640eafc3bd7830b4ce8f4b6d209f40f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089111"
---
{% data variables.product.prodname_dotcom %} には、独自の継続的インテグレーション ワークフローを作成するためにカスタマイズできる事前構成済みのスターター ワークフローが用意されています。 {% data variables.product.product_name %} はコードを分析し、自分のリポジトリに役立つ可能性のある CI スターターワー クフローを表示します。 たとえばリポジトリにNode.jsのコードが含まれているなら、Node.jsプロジェクトのためのサジェッションが提示されます。 スターター ワークフローは、カスタム ワークフローの構築の出発点として利用することも、そのまま利用することもできます。

スターター ワークフローの完全なリストは、{% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows) リポジトリ{% else %} {% data variables.product.product_location %} の `actions/starter-workflows`{% endif %} で参照できます。
