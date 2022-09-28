---
ms.openlocfilehash: bd2ea7e2ff0c8e9f60c3d011ee30573e3702cbed
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878832"
---
{% ifversion ghae %} セルフホスト ランナーを {% data variables.product.prodname_dotcom %} と通信できるようにするためには、セルフホスト ランナーの IP アドレスもしくは IP アドレスの範囲を IP 許可リストに追加してください。 詳細については、「[許可 IP アドレスの追加する](#adding-an-allowed-ip-address)」を参照してください。
{% else %} {% warning %}

**警告**: IP 許可リストを使い、{% data variables.product.prodname_actions %} も使いたい場合には、セルフホスト ランナーを使わなければなりません。 詳細については、「[自分のランナーをホストする](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。

{% endwarning %}

セルフホストランナーが{% data variables.product.prodname_dotcom %}と通信できるようにするためには、セルフホストランナーのIPアドレスもしくはIPアドレスの範囲をIP許可リストに追加してください。 詳細については、「[許可 IP アドレスの追加する](#adding-an-allowed-ip-address)」を参照してください。
{% endif %}
