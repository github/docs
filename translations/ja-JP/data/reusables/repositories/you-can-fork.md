---
ms.openlocfilehash: 7ab0c705855f1bd271c17eacc9a2533184d1b5f1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117806"
---
{% ifversion ghae %} 企業のポリシーでプライベートおよび内部リポジトリのフォークが許可されているなら、ご自分の個人アカウントや、リポジトリの作成権限を持っている組織にリポジトリをフォークできます。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% elsif ghes or ghec %} リポジトリの設定と組織のポリシーでフォークが許可されている場合は、プライベートまたは内部リポジトリを、ご自分の個人アカウントや、リポジトリの作成権限を持っている {% data variables.product.product_location %} 上の組織にフォークできます。

{% elsif fpt %} プライベート リポジトリにアクセスでき、その所有者がフォークを許可している場合は、そのリポジトリを自分の個人アカウントか、リポジトリの作成権限を持っている {% data variables.product.prodname_team %} 上の組織にフォークできます。 プライベート リポジトリは、{% data variables.product.prodname_free_team %} を使っている組織にはフォークできません。 詳細については、「[GitHub の製品](/articles/githubs-products)」を参照してください。
{% endif %}
