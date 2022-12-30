---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091234"
---
{% data variables.product.prodname_GH_advanced_security %}の各ライセンスは、それらの機能を使用できるアカウントもしくはシートの最大数を指定します。 少なくとも1つのリポジトリでこの機能が有効化されているそれぞれのアクティブなコミッターは、1つのシートを使用します。 コミットの 1 つが過去 90 日以内にリポジトリにプッシュされた場合、そのコミットの作成日に関係なく、コミッターはアクティブと見なされます。

{% note %}

**注:** アクティブなコミッターは、コミット作成者情報と、コードが {% data variables.product.product_name %} にプッシュされた時のタイムスタンプの両方を使用して計算されます。

- ユーザーがコードを {% data variables.product.prodname_dotcom %} にプッシュすると、そのプッシュでコードを作成したすべてのユーザーは、そのコードが {% data variables.product.prodname_dotcom %} にとって新しくない場合でも、{% data variables.product.prodname_GH_advanced_security %} シートにカウントされます。

- ユーザーは常に、最近のベースからブランチを作成するか、プッシュする前にそれらをリベースする必要があります。 これにより、過去 90 日間コミットしていないユーザーが {% data variables.product.prodname_GH_advanced_security %} シートを占めることがないようにします。

{% endnote %}

