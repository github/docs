---
ms.openlocfilehash: 22cef14793f2fe8ffa5937d60056f05f1be0265a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159824"
---
## ポートの共有

{% note %}

**注:** Organization が {% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用している場合にのみ、ポートを Organization に対してプライベートにすることができます。

{% endnote %}

転送されるポートを他のユーザーと共有する場合は、ポートを Organization に対してプライベートにするか、ポートをパブリックにすることができます。 ポートを Organization に対してプライベートにすると、そのポートの URL がわかっている組織内のすべてのユーザーが、実行中のアプリケーションを表示できます。 ポートをパブリックにすると、URL とポート番号を知っているすべてのユーザーが、認証を必要とせずに、実行中のアプリケーションを表示できます。

{% note %}

**注:** ポートの可視性オプションの選択は、Organization 用に構成されたポリシーによって制限される場合があります。 詳細については、「[転送されるポートの可視性の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)」を参照してください。

{% endnote %}